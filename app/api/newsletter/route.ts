import { NextRequest, NextResponse } from "next/server";

// Configuration Brevo
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_LIST_ID; // ID de votre liste Brevo

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, attributes } = await request.json();

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Adresse email invalide" },
        { status: 400 }
      );
    }

    // Vérification de la clé API Brevo
    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY manquante");
      return NextResponse.json(
        { message: "Configuration manquante" },
        { status: 500 }
      );
    }

    // Préparation des données pour Brevo
    const contactData = {
      email: email.toLowerCase().trim(),
      attributes: {
        PRENOM: firstName || "",
        SOURCE: attributes?.SOURCE || "spiruline-sante.com",
        SUBSCRIPTION_DATE:
          attributes?.SUBSCRIPTION_DATE || new Date().toISOString(),
        INTERESTS: attributes?.INTERESTS || ["spiruline"],
        OPT_IN: true,
        LANGUAGE: "fr",
      },
      listIds: BREVO_LIST_ID ? [parseInt(BREVO_LIST_ID)] : undefined,
      updateEnabled: true, // Met à jour le contact s'il existe déjà
      emailBlacklisted: false,
      smsBlacklisted: false,
    };

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
      return NextResponse.json({
        success: true,
        message: "Inscription réussie !",
        contact: {
          email,
          firstName: firstName || null,
          subscribed: true,
        },
      });
    } else if (
      brevoResponse.status === 400 &&
      brevoData.code === "duplicate_parameter"
    ) {
      // Contact déjà existant - on considère ça comme un succès
      return NextResponse.json({
        success: true,
        message: "Vous êtes déjà inscrit à notre newsletter !",
        contact: {
          email,
          firstName: firstName || null,
          subscribed: true,
        },
      });
    } else {
      // Erreur Brevo
      console.error("Erreur Brevo:", brevoData);
      return NextResponse.json(
        { message: "Erreur lors de l'inscription. Veuillez réessayer." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Erreur API newsletter:", error);
    return NextResponse.json(
      { message: "Erreur serveur. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}

// Méthode GET pour vérifier le statut de l'API
export async function GET() {
  return NextResponse.json({
    status: "OK",
    service: "Newsletter API",
    brevo_configured: !!BREVO_API_KEY,
    timestamp: new Date().toISOString(),
  });
}
