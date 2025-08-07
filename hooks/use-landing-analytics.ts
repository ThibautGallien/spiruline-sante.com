// hooks/use-landing-analytics.ts
"use client";

import { useEffect } from "react";
import {
  trackLandingPageView,
  trackScrollDepth,
  trackTimeOnPage,
  getLandingPageType,
} from "@/lib/analytics-advanced";

export function useLandingAnalytics() {
  useEffect(() => {
    // Track page view
    const landingType = getLandingPageType();
    trackLandingPageView(landingType);

    // Start scroll tracking
    const cleanupScroll = trackScrollDepth();

    // Start time tracking
    const cleanupTime = trackTimeOnPage();

    // Cleanup function
    return () => {
      if (cleanupScroll) cleanupScroll();
      if (cleanupTime) cleanupTime();
    };
  }, []);
}

// Hook spécifique pour les formulaires
export function useFormAnalytics(source: string) {
  useEffect(() => {
    // Track form view when component mounts
    import("@/lib/analytics-advanced").then(({ trackNewsletterFormView }) => {
      trackNewsletterFormView(source);
    });
  }, [source]);
}
