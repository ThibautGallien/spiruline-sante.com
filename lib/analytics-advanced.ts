// lib/analytics-advanced.ts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Tracking du scroll - Ultra important pour les landing pages
export const trackScrollDepth = () => {
  if (typeof window === "undefined") return;

  let maxScroll = 0;
  const scrollMilestones = [25, 50, 75, 90, 100];
  const trackedMilestones = new Set<number>();

  const trackScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    maxScroll = Math.max(maxScroll, scrollPercent);

    // Track milestones
    scrollMilestones.forEach((milestone) => {
      if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
        trackedMilestones.add(milestone);

        if (window.gtag) {
          window.gtag("event", "scroll_milestone", {
            event_category: "engagement",
            event_label: `${milestone}%`,
            value: milestone,
            page_location: window.location.pathname,
            custom_parameter_page_type: getLandingPageType(),
          });
        }
      }
    });
  };

  // Track on exit
  const trackMaxScrollOnExit = () => {
    if (window.gtag && maxScroll > 0) {
      window.gtag("event", "max_scroll_depth", {
        event_category: "engagement",
        event_label: "exit_scroll",
        value: maxScroll,
        page_location: window.location.pathname,
        custom_parameter_page_type: getLandingPageType(),
      });
    }
  };

  window.addEventListener("scroll", trackScroll, { passive: true });
  window.addEventListener("beforeunload", trackMaxScrollOnExit);

  return () => {
    window.removeEventListener("scroll", trackScroll);
    window.removeEventListener("beforeunload", trackMaxScrollOnExit);
  };
};

// Identifier le type de landing page
export const getLandingPageType = (): string => {
  const path = window.location.pathname;
  if (path.includes("spiruline-reset")) return "spiruline_reset";
  if (path.includes("phycocyanine-reset")) return "phycocyanine_reset";
  if (path.includes("omega3-reset")) return "omega3_reset";
  return "other";
};

// Tracking des interactions landing page
export const trackLandingPageView = (landingType: string) => {
  if (window.gtag) {
    window.gtag("event", "landing_page_view", {
      event_category: "landing_pages",
      event_label: landingType,
      page_location: window.location.href,
    });
  }
};

export const trackNewsletterFormView = (source: string) => {
  if (window.gtag) {
    window.gtag("event", "newsletter_form_view", {
      event_category: "forms",
      event_label: source,
      page_location: window.location.pathname,
    });
  }
};

export const trackNewsletterSignup = (source: string, interests: string[]) => {
  if (window.gtag) {
    window.gtag("event", "newsletter_signup", {
      event_category: "conversions",
      event_label: source,
      value: 1,
      custom_parameter_interests: interests.join(","),
      custom_parameter_landing_type: getLandingPageType(),
    });
  }
};

export const trackButtonClick = (buttonText: string, location: string) => {
  if (window.gtag) {
    window.gtag("event", "button_click", {
      event_category: "engagement",
      event_label: buttonText,
      custom_parameter_location: location,
      custom_parameter_page_type: getLandingPageType(),
    });
  }
};

// Tracking du temps passé sur la page
export const trackTimeOnPage = () => {
  if (typeof window === "undefined") return;

  const startTime = Date.now();
  const timeMilestones = [30, 60, 120, 300]; // 30s, 1min, 2min, 5min
  const trackedTimes = new Set<number>();

  const interval = setInterval(() => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);

    timeMilestones.forEach((milestone) => {
      if (timeSpent >= milestone && !trackedTimes.has(milestone)) {
        trackedTimes.add(milestone);

        if (window.gtag) {
          window.gtag("event", "time_milestone", {
            event_category: "engagement",
            event_label: `${milestone}s`,
            value: milestone,
            custom_parameter_page_type: getLandingPageType(),
          });
        }
      }
    });
  }, 10000); // Check every 10 seconds

  // Cleanup on page unload
  const cleanup = () => {
    clearInterval(interval);
    const finalTime = Math.round((Date.now() - startTime) / 1000);

    if (window.gtag && finalTime > 5) {
      window.gtag("event", "time_on_page", {
        event_category: "engagement",
        event_label: "session_duration",
        value: finalTime,
        custom_parameter_page_type: getLandingPageType(),
      });
    }
  };

  window.addEventListener("beforeunload", cleanup);

  return cleanup;
};

// Tracking des clics externes (Zinzino, Xelliss)
export const trackExternalClick = (url: string, linkText: string) => {
  if (window.gtag) {
    window.gtag("event", "external_link_click", {
      event_category: "outbound",
      event_label: linkText,
      custom_parameter_destination: url,
      custom_parameter_source_page: getLandingPageType(),
    });
  }
};
