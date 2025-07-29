import { NextRequest, NextResponse } from "next/server";

// Configuration Brevo
const BREVO_API_KEY = process.env.BREVO_API_KEY;

// Types pour TypeScript
interface SourceConfig {
  lists: (string | undefined)[];
  contentType: string;
  messages: {
    success: string;
    existing: string;
  };
}

interface SourceToListsMap {
  [key: string]: SourceConfig;
}

// Configuration des listes par source (mapping direct)
const SOURCE_TO_LISTS: SourceToListsMap = {
  // LP Spiruline
  "spiruline-reset-section": {
    lists: [
      process.env.BREVO_LIST_ID_NEWSLETTER, // Newsletter principale
      process.env.BREVO_LIST_ID_SPIRULINE || "3", // Liste spiruline
    ],
    contentType: "spiruline",
    messages: {
      success:
        "Inscription réussie ! Le plan spiruline arrive dans votre boîte mail 🌱",
      existing:
        "Vous êtes déjà inscrit ! Le plan spiruline arrive dans votre boîte mail 🌱",
    },
  },

  // LP Phycocyanine
  "phycocyanine-reset-section": {
    lists: [
      process.env.BREVO_LIST_ID_NEWSLETTER, // Newsletter principale
      process.env.BREVO_LIST_ID_PHYCOCYANINE || "10", // Liste phycocyanine
    ],
    contentType: "phycocyanine",
    messages: {
      success:
        "Inscription réussie ! Le secret bleu de l'immunité arrive dans votre boîte mail 🔷",
      existing:
        "Vous êtes déjà inscrit ! Les secrets de la phycocyanine arrivent dans votre boîte mail 🔷",
    },
  },

  // LP Oméga-3
  "omega3-reset-section": {
    lists: [
      process.env.BREVO_LIST_ID_NEWSLETTER, // Newsletter principale
      process.env.BREVO_LIST_ID_OMEGA3 || "7", // Liste omega-3
    ],
    contentType: "omega3",
    messages: {
      success:
        "Inscription réussie ! Votre guide Oméga-3 arrive dans votre boîte mail 🐟",
      existing:
        "Vous êtes déjà inscrit ! Votre guide Oméga-3 arrive dans votre boîte mail 🐟",
    },
  },

  // Autres sources (non-LP)
  "spiruline-peau-newsletter": {
    lists: [
      process.env.BREVO_LIST_ID_NEWSLETTER,
      process.env.BREVO_LIST_ID_SPIRULINE || "3",
    ],
    contentType: "spiruline",
    messages: {
      success:
        "Inscription réussie ! Nos conseils beauté arrivent dans votre boîte mail 🌱",
      existing:
        "Vous êtes déjà inscrit ! Nos conseils beauté arrivent dans votre boîte mail 🌱",
    },
  },

  "omega3-cheveux-newsletter": {
    lists: [
      process.env.BREVO_LIST_ID_NEWSLETTER,
      process.env.BREVO_LIST_ID_OMEGA3 || "7",
    ],
    contentType: "omega3",
    messages: {
      success:
        "Inscription réussie ! Votre guide cheveux arrive dans votre boîte mail 🐟",
      existing:
        "Vous êtes déjà inscrit ! Votre guide cheveux arrive dans votre boîte mail 🐟",
    },
  },

  "omega3-cheveux-final-cta": {
    lists: [
      process.env.BREVO_LIST_ID_NEWSLETTER,
      process.env.BREVO_LIST_ID_OMEGA3 || "7",
    ],
    contentType: "omega3",
    messages: {
      success:
        "Inscription réussie ! Transformez vos cheveux avec nos conseils experts 🐟",
      existing:
        "Vous êtes déjà inscrit ! Nos conseils experts arrivent dans votre boîte mail 🐟",
    },
  },

  // Source par défaut (formulaires génériques, footer, etc.)
  default: {
    lists: [process.env.BREVO_LIST_ID_NEWSLETTER || process.env.BREVO_LIST_ID],
    contentType: "general",
    messages: {
      success: "Inscription réussie ! Vérifiez votre boîte mail 📧",
      existing: "Vous êtes déjà inscrit ! 📧",
    },
  },
};

// Fonction pour récupérer la configuration selon la source
function getConfigForSource(source: string): SourceConfig {
  return SOURCE_TO_LISTS[source] || SOURCE_TO_LISTS["default"];
}

// Force dynamic pour les routes API
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, attributes } = await request.json();

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Adresse email invalide" },
        { status: 400 }
      );
    }

    // Vérification de la clé API Brevo
    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY manquante");
      return NextResponse.json(
        { success: false, message: "Configuration manquante" },
        { status: 500 }
      );
    }

    // Récupération de la configuration selon la source
    const source = attributes?.SOURCE || "default";
    const config = getConfigForSource(source);

    // Conversion des IDs de liste en nombres (en filtrant les valeurs nulles)
    const listIds = config.lists
      .filter(
        (id: string | undefined): id is string =>
          id != null && !isNaN(parseInt(id))
      )
      .map((id: string) => parseInt(id));

    // Vérification qu'on a au moins une liste valide
    if (listIds.length === 0) {
      console.error("Aucune liste valide trouvée pour la source:", source);
      return NextResponse.json(
        { success: false, message: "Configuration des listes manquante" },
        { status: 500 }
      );
    }

    // Préparation des données pour Brevo
    const contactData = {
      email: email.toLowerCase().trim(),
      attributes: {
        PRENOM: firstName || "",
        SOURCE: source,
        SUBSCRIPTION_DATE:
          attributes?.SUBSCRIPTION_DATE || new Date().toISOString(),
        INTERESTS: attributes?.INTERESTS || [],
        FORM_LOCATION: attributes?.FORM_LOCATION || "unknown",
        OPT_IN: true,
        LANGUAGE: "fr",
        CONTENT_TYPE: config.contentType,
        SIGNUP_METHOD: "landing_page",
        LAST_ACTIVITY: new Date().toISOString(),
      },
      listIds: listIds,
      updateEnabled: true,
      emailBlacklisted: false,
      smsBlacklisted: false,
    };

    console.log("Inscription Brevo:", {
      email,
      source,
      contentType: config.contentType,
      listIds,
    });

    // Appel à l'API Brevo
    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(contactData),
    });

    const brevoData = await brevoResponse.json();

    if (brevoResponse.ok || brevoResponse.status === 204) {
      // Succès - contact créé ou mis à jour
      console.log("Inscription Brevo réussie:", email, "- Listes:", listIds);

      return NextResponse.json({
        success: true,
        message: config.messages.success,
        contact: {
          email,
          firstName: firstName || null,
          subscribed: true,
          contentType: config.contentType,
          listIds,
        },
      });
    } else if (
      brevoResponse.status === 400 &&
      brevoData.code === "duplicate_parameter"
    ) {
      // Contact déjà existant
      console.log("Contact déjà existant:", email);

      return NextResponse.json({
        success: true,
        message: config.messages.existing,
        contact: {
          email,
          firstName: firstName || null,
          subscribed: true,
          contentType: config.contentType,
        },
      });
    } else {
      // Erreur Brevo
      console.error("Erreur Brevo:", {
        status: brevoResponse.status,
        data: brevoData,
      });

      let errorMessage = "Erreur lors de l'inscription. Veuillez réessayer.";

      if (brevoResponse.status === 400) {
        errorMessage = "Données invalides. Vérifiez votre adresse email.";
      } else if (brevoResponse.status === 401) {
        errorMessage = "Erreur de configuration. Contactez le support.";
      } else if (brevoResponse.status >= 500) {
        errorMessage =
          "Service temporairement indisponible. Réessayez dans quelques minutes.";
      }

      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Erreur API newsletter:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Erreur serveur. Veuillez réessayer plus tard.",
      },
      { status: 500 }
    );
  }
}

// Méthode GET pour vérifier le statut de l'API
export async function GET() {
  return NextResponse.json({
    status: "OK",
    service: "Newsletter API Simple",
    brevo_configured: !!BREVO_API_KEY,
    available_sources: Object.keys(SOURCE_TO_LISTS),
    lists_configured: {
      newsletter: !!process.env.BREVO_LIST_ID_NEWSLETTER,
      spiruline: !!process.env.BREVO_LIST_ID_SPIRULINE,
      phycocyanine: !!process.env.BREVO_LIST_ID_PHYCOCYANINE,
      omega3: !!process.env.BREVO_LIST_ID_OMEGA3,
    },
    timestamp: new Date().toISOString(),
  });
}
