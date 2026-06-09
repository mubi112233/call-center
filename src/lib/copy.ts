/**
 * Next-safe copy/translation constants (no react-i18next runtime)
 * Mirrors frontend/src/lib/client-i18n.ts for badge/heading/subheading text.
 * Use URL-based language detection (en/ge) to select strings.
 */

export const copy = {
  en: {
    // ═══════════════════════════════════════════════════════════
    //  HERO SECTION
    // ═══════════════════════════════════════════════════════════
    hero: {
      badge: "Trusted by 200+ Growing Businesses",
      title: "Scale Your Business with Dedicated Virtual Assistants",
      subtitle: "Hire pre-vetted, German-speaking virtual assistants for 80% less than local hires. Scale your team in days, not months.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Book a Call",
      stats: {
        clients: "200+",
        costSaved: "70%",
        rating: "4.9/5",
      },
    },

    // ═══════════════════════════════════════════════════════════
    //  SERVICES SECTION
    // ═══════════════════════════════════════════════════════════
    services: {
      badge: "Services",
      heading: "Our Services",
      subheading: "Comprehensive virtual assistant solutions tailored to your business needs. From administrative tasks to specialized support, we've got you covered.",
    },

    // ═══════════════════════════════════════════════════════════
    //  HOW IT WORKS
    // ═══════════════════════════════════════════════════════════
    howItWorks: {
      badge: "How It Works",
      heading: "Get started in <span class=\"text-gold\">4 simple steps</span>",
      description: "From onboarding to measurable results — our process is designed to be fast, clear, and efficient.",
      steps: {
        step1: {
          step: "Step 1",
          title: "Initial Consultation",
          description: "We discuss your needs and goals to create a customized plan for your virtual assistant."
        },
        step2: {
          step: "Step 2", 
          title: "VA Matching & Onboarding",
          description: "We match you with the perfect virtual assistant and handle all onboarding processes."
        },
        step3: {
          step: "Step 3",
          title: "Integration & Training",
          description: "Your VA integrates with your team and receives specific training on your workflows."
        },
        step4: {
          step: "Step 4",
          title: "Ongoing Support & Growth",
          description: "Continuous quality control and support to ensure optimal performance and scaling."
        }
      }
    },

    // ═══════════════════════════════════════════════════════════
    //  WHY CHOOSE US
    // ═══════════════════════════════════════════════════════════
    whyChooseUs: {
      badge: "Why Choose Us",
      heading: "What makes us <span class=\"text-gold\">different</span>",
      subheading: "German-speaking talent, native quality control, fast onboarding, and a zero‑risk guarantee.",
    },

    // ═══════════════════════════════════════════════════════════
    //  VALUE PROPOSITION
    // ═══════════════════════════════════════════════════════════
    valueProposition: {
      badge: "Our Promise",
      heading: "The <span class=\"text-gold\">Perfect VA Solution</span>",
      subheading: "Experience the difference with our professional virtual assistants who are trained to deliver exceptional results.",
      items: {
        quality: {
          title: "Expertly Vetted Professionals",
          description: "Every virtual assistant is carefully screened and tested to ensure they meet our high standards of excellence.",
        },
        security: {
          title: "Secure & Confidential",
          description: "Your data and business information are protected with enterprise-grade security measures.",
        },
        speed: {
          title: "Lightning Fast Onboarding",
          description: "Get started within 24 hours. Our streamlined process ensures you have the right assistant quickly.",
        },
        support: {
          title: "Dedicated Support",
          description: "Our team is always available to ensure smooth collaboration and address any concerns.",
        },
      },
    },

    // Testimonials
    testimonials: {
      heading: "Trusted by <span class=\"text-gold\">Growing Businesses</span>",
      subheading: "Real results from real companies scaling with DON VA.",
      caseStudy: {
        badge: "Success Story",
        title: "Case Study: <span class=\"text-gold\">70% Cost Reduction</span>",
        description: "See how a mid-sized e-commerce company reduced their operational costs by €42,000 annually while improving service quality.",
        cta: "View Full Case Study",
      },
    },

    // Blog
    blog: {
      badge: "Insights",
      heading: "Latest <span class=\"text-gold\">Insights</span>",
      description: "Practical guides and strategies for scaling with virtual assistants.",
      by: "By",
      readMore: "Read more",
      read: "Read",
    },

    // Case Studies
    caseStudies: {
      badge: "Success Stories",
      heading: "Real <span class=\"text-gold\">Success Stories</span>",
      description: "Proven results from teams scaling with DON VA.",
      labels: {
        saved: "Saved",
        teamSize: "Team Size",
        timeline: "Timeline",
        viewFull: "View Full Case Study",
        viewStudy: "View Study",
      },
    },

    // FAQ
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      description: "Answers to the most common questions about our service, quality control, and security.",
      qualityCardTitle: "Native Quality Control",
      qualityCardText: "Dedicated supervisors review outputs and coach continuously to maintain standards.",
      toolsCardTitle: "Works with Your Tools",
      toolsCardText: "We plug into your existing workflows and platforms without disrupting your operations.",
      stillHaveQuestionsTitle: "Still have questions?",
      stillHaveQuestionsText: "We're here to help you choose the right setup for your needs.",
      contactSupport: "Contact Support",
      viewPricing: "View Pricing",
    },

    // Pricing
    pricing: {
      sectionBadge: "Pricing",
      sectionTitle: "Simple, transparent pricing",
      sectionDescription: "Choose a plan and number of VAs that fits your needs. Scale up or down anytime.",
      vaCountLabel: "How many VAs do you need?",
      vaCountHelper: "Select the number of virtual assistants",
      startingFrom: "Starting from €{price}/mo · ~€{hourly}/hr",
      bulkDiscount: "{percent}% bulk discount applied!",
      bulkSavings: "You save €{amount} total",
      bulkHint: "Add {count} more VA{suffix} to unlock {percent}% bulk discount",
      bannerBadge: "Limited Time",
      bannerTitle: "Book a Free Meeting",
      bannerSubtitle: "Schedule your free consultation and get started today",
      bannerPoints: {
        noCommitment: "No commitment",
        cancelAnytime: "Cancel anytime",
        fullAccess: "Full access"
      },
      plans: {
        starter: {
          name: "Starter",
          hours: "10h / week",
          features: [
            "Dedicated VA",
            "Native Quality Control",
            "24h Replacement Guarantee",
            "Slack/Email Support",
            "14 Days Money-Back Warranty"
          ]
        },
        professional: {
          name: "Professional",
          hours: "20h / week",
          features: [
            "Everything in Starter",
            "No Setup Fee",
            "Priority Support",
            "Bi-weekly Progress Reports",
            "Flexible Hour Rollover"
          ]
        },
        enterprise: {
          name: "Enterprise",
          hours: "40h / week",
          badge: "Best Value",
          features: [
            "Everything in Professional",
            "No Setup Fee",
            "Dedicated Account Manager",
            "Weekly Strategy Calls",
            "Custom Workflow Integration"
          ]
        }
      },
      button: "Get Started",
      perMonth: "/mo",
      hoursUnit: "hours",
      planSetupFee: "+€{fee} setup fee",
      planNoSetupFee: "No setup fee",
      disclaimer: "All prices are per VA. Bulk discounts apply automatically. Setup fees are one-time charges."
    },

    // ═══════════════════════════════════════════════════════════
    //  FINAL CTA
    // ═══════════════════════════════════════════════════════════
    finalCTA: {
      badge: "Ready to Scale?",
      headlineLine1: "Start with",
      headlineLine2: "DON VA Today",
      subheading: "Book a free consultation and see how we can transform your operations in 48 hours.",
      benefits: ["No setup fees", "14-day trial", "Native managers", "24/7 support"],
      primaryCta: "Book Free Meeting",
      secondaryCta: "Chat on WhatsApp",
      trust: {
        consultationTime: "30 min",
        consultationLabel: "Free consultation",
        responseTime: "< 2 hrs",
        responseLabel: "Avg. response time",
        noCommitment: "No commitment",
        noCommitmentLabel: "Cancel anytime",
        footer: "No credit card required. Cancel anytime.",
      },
      stats: {
        activeClients: "200+",
        avgRoi: "3.5x",
        satisfaction: "98%",
        fastStart: "48h",
      },
    },

    // ═══════════════════════════════════════════════════════════
    //  NAVIGATION & UI
    // ═══════════════════════════════════════════════════════════
    nav: {
      services: "Services",
      howItWorks: "How It Works",
      pricing: "Pricing",
      testimonials: "Testimonials",
      faq: "FAQ",
      contact: "Contact",
      getStarted: "Get Started",
    },

    // ═══════════════════════════════════════════════════════════
    //  FOOTER
    // ═══════════════════════════════════════════════════════════
    footer: {
      tagline: "Professional virtual assistant services to help you scale your business efficiently.",
      company: "Company",
      legal: "Legal",
      followUs: "Follow Us",
      allRightsReserved: "All rights reserved.",
    },
  },

  ge: {
    // ═══════════════════════════════════════════════════════════
    //  HERO SECTION
    // ═══════════════════════════════════════════════════════════
    hero: {
      badge: "Von 200+ wachsenden Unternehmen vertraut",
      title: "Skalieren Sie Ihr Unternehmen mit dedizierten virtuellen Assistenten",
      subtitle: "Stellen Sie geprüfte, deutschsprachige virtuelle Assistenten für 80% weniger als lokale Einstellungen ein. Skalieren Sie Ihr Team in Tagen, nicht Monaten.",
      ctaPrimary: "Jetzt starten",
      ctaSecondary: "Termin vereinbaren",
      stats: {
        clients: "200+",
        costSaved: "70%",
        rating: "4.9/5",
      },
    },

    // ═══════════════════════════════════════════════════════════
    //  SERVICES SECTION
    // ═══════════════════════════════════════════════════════════
    services: {
      badge: "Dienstleistungen",
      heading: "Unsere Dienstleistungen",
      subheading: "Umfassende virtuelle Assistenzlösungen, die auf Ihre Geschäftsbedürfnisse zugeschnitten sind. Von administrativen Aufgaben bis hin zu spezialisierten Dienstleistungen.",
    },

    // ═══════════════════════════════════════════════════════════
    //  HOW IT WORKS
    // ═══════════════════════════════════════════════════════════
    howItWorks: {
      badge: "Wie es funktioniert",
      heading: "Starten Sie in <span class=\"text-gold\">4 einfachen Schritten</span>",
      description: "Vom Onboarding bis zu messbaren Ergebnissen – unser Prozess ist schnell, klar und effizient.",
      steps: {
        step1: {
          step: "Schritt 1",
          title: "Erstberatung",
          description: "Wir besprechen Ihre Bedürfnisse und Ziele, um einen maßgeschneiderten Plan für Ihren virtuellen Assistenten zu erstellen."
        },
        step2: {
          step: "Schritt 2",
          title: "VA-Vermittlung & Onboarding",
          description: "Wir vermitteln Ihnen den perfekten virtuellen Assistenten und übernehmen alle Onboarding-Prozesse."
        },
        step3: {
          step: "Schritt 3",
          title: "Integration & Schulung",
          description: "Ihr VA integriert sich in Ihr Team und erhält spezifisches Training für Ihre Workflows."
        },
        step4: {
          step: "Schritt 4",
          title: "Kontinuierliche Unterstützung & Wachstum",
          description: "Durchgehende Qualitätskontrolle und Unterstützung für optimale Leistung und Skalierung."
        }
      }
    },

    // ═══════════════════════════════════════════════════════════
    //  WHY CHOOSE US
    // ═══════════════════════════════════════════════════════════
    whyChooseUs: {
      badge: "Warum wir",
      heading: "Was uns <span class=\"text-gold\">auszeichnet</span>",
      subheading: "Deutschsprachige Talente, native Qualitätskontrolle, schnelles Onboarding und eine Null‑Risiko‑Garantie.",
    },

    // ═══════════════════════════════════════════════════════════
    //  VALUE PROPOSITION
    // ═══════════════════════════════════════════════════════════
    valueProposition: {
      badge: "Unser Versprechen",
      heading: "Die <span class=\"text-gold\">perfekte VA-Lösung</span>",
      subheading: "Erleben Sie den Unterschied mit unseren professionellen virtuellen Assistenten, die darauf trainiert sind, außergewöhnliche Ergebnisse zu liefern.",
      items: {
        quality: {
          title: "Sorgfältig geprüfte Fachkräfte",
          description: "Jeder virtuelle Assistent wird sorgfältig geprüft und getestet, um unsere hohen Qualitätsstandards zu erfüllen.",
        },
        security: {
          title: "Sicher & vertraulich",
          description: "Ihre Daten und Geschäftsinformationen sind durch Sicherheitsmaßnahmen auf Unternehmensebene geschützt.",
        },
        speed: {
          title: "Blitzschnelles Onboarding",
          description: "Starten Sie innerhalb von 24 Stunden. Unser optimierter Prozess stellt sicher, dass Sie schnell den richtigen Assistenten haben.",
        },
        support: {
          title: "Dedizierter Support",
          description: "Unser Team ist immer verfügbar, um eine reibungslose Zusammenarbeit zu gewährleisten und Anliegen zu klären.",
        },
      },
    },

    // Testimonials
    testimonials: {
      heading: "Vertrauen von <span class=\"text-gold\">wachsenden Unternehmen</span>",
      subheading: "Echte Ergebnisse von Unternehmen, die mit DON VA skalieren.",
      caseStudy: {
        badge: "Erfolgsgeschichte",
        title: "Fallstudie: <span class=\"text-gold\">70% Kostensenkung</span>",
        description: "Erfahren Sie, wie ein mittelständisches E-Commerce-Unternehmen seine Betriebskosten um 42.000 € jährlich senkte und gleichzeitig die Servicequalität verbesserte.",
        cta: "Vollständige Fallstudie ansehen",
      },
    },

    // Blog
    blog: {
      badge: "Einblicke",
      heading: "Aktuelle <span class=\"text-gold\">Einblicke</span>",
      description: "Praktische Leitfäden und Strategien zur Skalierung mit virtuellen Assistenten.",
      by: "Von",
      readMore: "Weiterlesen",
      read: "Lesen",
    },

    // Case Studies
    caseStudies: {
      badge: "Erfolgsgeschichten",
      heading: "Echte <span class=\"text-gold\">Erfolgsgeschichten</span>",
      description: "Bewährte Ergebnisse von Teams, die mit DON VA skalieren.",
      labels: {
        saved: "Gespart",
        teamSize: "Teamgröße",
        timeline: "Zeitrahmen",
        viewFull: "Vollständige Fallstudie ansehen",
        viewStudy: "Studie ansehen",
      },
    },

    // FAQ
    faq: {
      badge: "FAQ",
      title: "Häufig gestellte Fragen",
      description: "Antworten auf die häufigsten Fragen zu unserem Service, Qualitätskontrolle und Sicherheit.",
      qualityCardTitle: "Native Qualitätskontrolle",
      qualityCardText: "Dedizierte Supervisoren prüfen Ergebnisse und coachen kontinuierlich, um Standards zu halten.",
      toolsCardTitle: "Funktioniert mit Ihren Tools",
      toolsCardText: "Wir integrieren uns in Ihre bestehenden Workflows und Plattformen ohne Unterbrechung.",
      stillHaveQuestionsTitle: "Noch Fragen?",
      stillHaveQuestionsText: "Wir helfen Ihnen gern, das passende Setup zu wählen.",
      contactSupport: "Support kontaktieren",
      viewPricing: "Preise ansehen",
    },

    // Pricing
    pricing: {
      sectionBadge: "Pricing",
      sectionTitle: "Simple, Transparent Pricing",
      sectionDescription: "Choose the perfect plan for your business. Scale up or down anytime.",
      vaCountLabel: "How many VAs do you need?",
      vaCountHelper: "Select the number of virtual assistants",
      startingFrom: "Starting from €{price}/hour",
      bulkDiscount: "{percent}% discount - {suffix} more!",
      bulkSavings: "Save €{amount} total",
      bulkHint: "Add {count} more {suffix} to get {percent}% discount",
      bannerBadge: "Limited Time",
      bannerTitle: "Book a Meeting",
      bannerSubtitle: "Schedule your free consultation and get started today",
      bannerPoints: {
        noCommitment: "No commitment",
        cancelAnytime: "Cancel anytime", 
        fullAccess: "Full access"
      },
      plans: {
        starter: {
          name: "Starter",
          hours: "10h / week",
          features: [
            "Dedicated VA",
            "Native Quality Control",
            "24h Replacement Guarantee", 
            "Slack/Email Support",
            "14 Days Money-Back Warranty"
          ]
        },
        professional: {
          name: "Professional", 
          hours: "20h / week",
          features: [
            "Everything in Starter",
            "No Setup Fee",
            "Priority Support",
            "Bi-weekly Progress Reports",
            "Flexible Hour Rollover"
          ]
        },
        enterprise: {
          name: "Enterprise",
          hours: "40h / week", 
          badge: "Best Value",
          features: [
            "Everything in Professional",
            "No Setup Fee",
            "Dedicated Account Manager", 
            "Weekly Strategy Calls",
            "Custom Workflow Integration"
          ]
        }
      },
      button: "Get Started",
      perMonth: "/mo",
      hoursUnit: "hours",
      planSetupFee: "+€{fee} setup fee",
      planNoSetupFee: "No setup fee",
      disclaimer: "All prices are per VA. Bulk discounts apply automatically. Setup fees are one-time charges."
    },

    // ═══════════════════════════════════════════════════════════
    //  FINAL CTA
    // ═══════════════════════════════════════════════════════════
    finalCTA: {
      badge: "Bereit zu skalieren?",
      headlineLine1: "Starten Sie noch heute",
      headlineLine2: "mit DON VA",
      subheading: "Buchen Sie eine kostenlose Beratung und erleben Sie, wie wir Ihre Abläufe in 48 Stunden transformieren können.",
      benefits: ["Keine Einrichtungsgebühren", "14-Tage-Test", "Native Manager", "24/7 Support"],
      primaryCta: "Kostenloses Gespräch",
      secondaryCta: "WhatsApp Chat",
      trust: {
        consultationTime: "30 Min",
        consultationLabel: "Kostenlose Beratung",
        responseTime: "< 2 Std",
        responseLabel: "Ø Antwortzeit",
        noCommitment: "Keine Bindung",
        noCommitmentLabel: "Jederzeit kündbar",
        footer: "Keine Kreditkarte erforderlich. Jederzeit kündbar.",
      },
      stats: {
        activeClients: "200+",
        avgRoi: "3,5x",
        satisfaction: "98%",
        fastStart: "48h",
      },
    },

    // ═══════════════════════════════════════════════════════════
    //  NAVIGATION & UI
    // ═══════════════════════════════════════════════════════════
    nav: {
      services: "Dienstleistungen",
      howItWorks: "Wie es funktioniert",
      pricing: "Preise",
      testimonials: "Testimonials",
      faq: "FAQ",
      contact: "Kontakt",
      getStarted: "Jetzt starten",
    },

    // ═══════════════════════════════════════════════════════════
    //  FOOTER
    // ═══════════════════════════════════════════════════════════
    footer: {
      tagline: "Professionelle virtuelle Assistenten-Dienste, die Ihnen helfen, Ihr Unternehmen effizient zu skalieren.",
      company: "Unternehmen",
      legal: "Rechtliches",
      followUs: "Folgen Sie uns",
      allRightsReserved: "Alle Rechte vorbehalten.",
    },
  },
} as const;

/**
 * Helper to get copy for a language (en/ge)
 */
export const getCopy = <K extends keyof typeof copy.en>(lang: string, key: K) => {
  const normalizedLang = lang.toLowerCase().startsWith('ge') || lang.toLowerCase().startsWith('de') ? 'ge' : 'en';
  return copy[normalizedLang as 'en' | 'ge'][key];
};
