"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface NewsletterFormProps {
  variant?: "default" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  source?: string;
  interests?: string[];
}

export function NewsletterForm({
  variant = "default",
  size = "md",
  className = "",
  source = "general",
  interests = ["spiruline", "phycocyanine", "omega-3", "zinzino"],
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Veuillez entrer votre email");
      return;
    }

    if (size === "lg" && !firstName) {
      setStatus("error");
      setMessage("Veuillez entrer votre prénom");
      return;
    }

    setStatus("loading");

    try {
      // Appel à l'API Brevo avec les paramètres personnalisés
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          attributes: {
            SOURCE: source,
            SUBSCRIPTION_DATE: new Date().toISOString(),
            INTERESTS: interests,
          },
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("🎉 Inscription réussie ! Vérifiez votre email.");
        setEmail("");
        setFirstName("");

        // Google Analytics event avec source personnalisée
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "newsletter_signup", {
            event_category: "engagement",
            event_label: source,
            custom_parameter_interests: interests.join(","),
          });
        }

        // Reset status after 5 seconds
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      } else {
        throw new Error(data.message || "Erreur lors de l'inscription");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Une erreur est survenue. Veuillez réessayer.");

      // Reset error after 3 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 3000);
    }
  };

  const inputClasses =
    variant === "dark"
      ? "bg-white/10 border-white/20 text-white placeholder:text-white/60"
      : "bg-white border-gray-300";

  const buttonClasses =
    variant === "dark"
      ? "bg-white text-green-600 hover:bg-white/90"
      : "bg-green-600 hover:bg-green-700 text-white";

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col space-y-2">
          {size === "lg" && (
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Votre prénom"
              className={inputClasses}
              disabled={status === "loading"}
              required
            />
          )}

          <div className="flex space-x-2">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              required
              className={`flex-1 ${inputClasses}`}
              disabled={status === "loading"}
            />
            <Button
              type="submit"
              disabled={
                status === "loading" || !email || (size === "lg" && !firstName)
              }
              className={buttonClasses}
              size={size === "sm" ? "sm" : "default"}
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Mail className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div
            className={`flex items-center space-x-2 text-sm ${
              variant === "dark" ? "text-green-300" : "text-green-600"
            }`}
          >
            <CheckCircle className="h-4 w-4" />
            <span>{message}</span>
          </div>
        )}

        {status === "error" && (
          <div
            className={`flex items-center space-x-2 text-sm ${
              variant === "dark" ? "text-red-300" : "text-red-600"
            }`}
          >
            <AlertCircle className="h-4 w-4" />
            <span>{message}</span>
          </div>
        )}

        {size !== "sm" && (
          <p
            className={`text-xs ${
              variant === "dark" ? "text-white/60" : "text-gray-500"
            }`}
          >
            En vous inscrivant, vous acceptez de recevoir nos emails.
            Désabonnement facile en un clic.
          </p>
        )}
      </form>
    </div>
  );
}
