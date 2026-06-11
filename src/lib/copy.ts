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
      badge: "German-speaking call center support for DACH",
      title: "Scale Your Customer Support with DON-CALL",
      subtitle: "Add trained German-speaking call center agents for inbound and outbound support without building an in-house team.",
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
      subheading: "Inbound support, outbound calling, back-office follow-up, and multilingual customer care tailored to DACH businesses.",
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
          description: "We discuss your call volume, channels, opening hours, and support goals to define the right setup."
        },
        step2: {
          step: "Step 2", 
          title: "Agent Team Setup & Onboarding",
          description: "We assign trained call center agents and prepare scripts, workflows, escalation paths, and reporting."
        },
        step3: {
          step: "Step 3",
          title: "Integration & Training",
          description: "Your agents integrate with your tools and receive specific training on your products, customers, and processes."
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
      heading: "The <span class=\"text-gold\">Call Center Solution</span> for DACH",
      subheading: "Experience reliable customer communication with trained agents, clear supervision, and measurable service quality.",
      items: {
        quality: {
          title: "Expertly Vetted Professionals",
          description: "Every agent is carefully screened and trained to meet our standards for language quality, empathy, and reliability.",
        },
        security: {
          title: "Secure & Confidential",
          description: "Your data and business information are protected with enterprise-grade security measures.",
        },
        speed: {
          title: "Fast Onboarding",
          description: "Start quickly with a clear setup process for scripts, tools, quality checks, and reporting.",
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
      subheading: "Real results from companies improving customer communication with DON-CALL.",
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
      description: "Practical guides and strategies for scaling customer support and call center operations.",
      by: "By",
      readMore: "Read more",
      read: "Read",
    },

    // Case Studies
    caseStudies: {
      badge: "Success Stories",
      heading: "Real <span class=\"text-gold\">Success Stories</span>",
      description: "Proven results from teams scaling customer support with DON-CALL.",
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
      sectionDescription: "Choose a plan and number of agents that fits your support needs. Scale up or down anytime.",
      vaCountLabel: "How many agents do you need?",
      vaCountHelper: "Select the number of call center agents",
      startingFrom: "Starting from €{price}/mo · ~€{hourly}/hr",
      bulkDiscount: "{percent}% bulk discount applied!",
      bulkSavings: "You save €{amount} total",
      bulkHint: "Add {count} more agent{suffix} to unlock {percent}% bulk discount",
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
            "Dedicated call center agent",
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
      disclaimer: "All prices are per agent. Bulk discounts apply automatically. Setup fees are one-time charges."
    },

    // ═══════════════════════════════════════════════════════════
    //  FINAL CTA
    // ═══════════════════════════════════════════════════════════
    finalCTA: {
      badge: "Ready to Scale?",
      headlineLine1: "Start with",
      headlineLine2: "DON-CALL Today",
      subheading: "Book a free consultation and see how we can transform your operations in 48 hours.",
      benefits: ["14-day trial", "Native managers", "24/7 support", "Flexible scaling"],
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
      tagline: "Professional call center services to help you scale customer communication efficiently.",
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
      badge: "Deutschsprachiger Call-Center-Support für DACH",
      title: "Skalieren Sie Ihren Kundenservice mit DON-CALL",
      subtitle: "Erweitern Sie Ihren Inbound- und Outbound-Support mit geschulten deutschsprachigen Call-Center-Agents, ohne ein internes Team aufzubauen.",
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
      subheading: "Inbound-Support, Outbound-Telefonie, Back-Office-Follow-ups und mehrsprachige Kundenbetreuung für DACH-Unternehmen.",
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
          description: "Wir besprechen Anrufvolumen, Kanäle, Servicezeiten und Support-Ziele, um das passende Setup zu definieren."
        },
        step2: {
          step: "Schritt 2",
          title: "Agent-Team & Onboarding",
          description: "Wir stellen geschulte Call-Center-Agents bereit und richten Skripte, Workflows, Eskalationen und Reporting ein."
        },
        step3: {
          step: "Schritt 3",
          title: "Integration & Schulung",
          description: "Ihre Agents arbeiten mit Ihren Tools und erhalten Training zu Produkten, Kunden und Prozessen."
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
      heading: "Die <span class=\"text-gold\">Call-Center-Lösung</span> für DACH",
      subheading: "Sorgen Sie für verlässliche Kundenkommunikation mit geschulten Agents, klarer Supervision und messbarer Servicequalität.",
      items: {
        quality: {
          title: "Sorgfältig geprüfte Fachkräfte",
          description: "Jeder Agent wird sorgfältig geprüft und trainiert, um unsere Standards für Sprachqualität, Empathie und Zuverlässigkeit zu erfüllen.",
        },
        security: {
          title: "Sicher & vertraulich",
          description: "Ihre Daten und Geschäftsinformationen sind durch Sicherheitsmaßnahmen auf Unternehmensebene geschützt.",
        },
        speed: {
          title: "Schnelles Onboarding",
          description: "Starten Sie schnell mit einem klaren Setup für Skripte, Tools, Qualitätschecks und Reporting.",
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
      subheading: "Echte Ergebnisse von Unternehmen, die ihre Kundenkommunikation mit DON-CALL verbessern.",
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
      description: "Praktische Leitfäden und Strategien zur Skalierung von Kundenservice und Call-Center-Prozessen.",
      by: "Von",
      readMore: "Weiterlesen",
      read: "Lesen",
    },

    // Case Studies
    caseStudies: {
      badge: "Erfolgsgeschichten",
      heading: "Echte <span class=\"text-gold\">Erfolgsgeschichten</span>",
      description: "Bewährte Ergebnisse von Teams, die ihren Kundenservice mit DON-CALL skalieren.",
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
      sectionBadge: "Preise",
      sectionTitle: "Einfache, transparente Preise",
      sectionDescription: "Wählen Sie das passende Agent-Paket für Ihren Support. Jederzeit flexibel skalierbar.",
      vaCountLabel: "Wie viele Agents benötigen Sie?",
      vaCountHelper: "Wählen Sie die Anzahl der Call-Center-Agents",
      startingFrom: "Ab €{price}/Monat · ca. €{hourly}/Std.",
      bulkDiscount: "{percent}% discount - {suffix} more!",
      bulkSavings: "Save €{amount} total",
      bulkHint: "Fügen Sie {count} weitere Agent{suffix} hinzu und erhalten Sie {percent}% Rabatt",
      bannerBadge: "Beratung",
      bannerTitle: "Kostenloses Gespräch buchen",
      bannerSubtitle: "Planen Sie Ihre kostenlose Beratung und finden Sie das passende Support-Setup.",
      bannerPoints: {
        noCommitment: "Keine Bindung",
        cancelAnytime: "Jederzeit kündbar", 
        fullAccess: "Volle Transparenz"
      },
      plans: {
        starter: {
          name: "Starter",
          hours: "10h / week",
          features: [
            "Dedizierter Call-Center-Agent",
            "Native Quality Control",
            "24h Replacement Guarantee", 
            "Slack/Email Support",
            "14 Tage Geld-zurück-Garantie"
          ]
        },
        professional: {
          name: "Professional", 
          hours: "20h / week",
          features: [
            "Alles aus Starter",
            "Keine Einrichtungsgebühr",
            "Priorisierter Support",
            "Zweiwöchentliche Fortschrittsberichte",
            "Flexible Stundenübernahme"
          ]
        },
        enterprise: {
          name: "Enterprise",
          hours: "40h / week", 
          badge: "Best Value",
          features: [
            "Alles aus Professional",
            "Keine Einrichtungsgebühr",
            "Dedizierter Account Manager", 
            "Wöchentliche Strategiegespräche",
            "Individuelle Workflow-Integration"
          ]
        }
      },
      button: "Jetzt starten",
      perMonth: "/Monat",
      hoursUnit: "Std.",
      planSetupFee: "+€{fee} Einrichtungsgebühr",
      planNoSetupFee: "Keine Einrichtungsgebühr",
      disclaimer: "Alle Preise gelten pro Agent. Mengenrabatte werden automatisch angewendet. Einrichtungsgebühren sind einmalige Kosten."
    },

    // ═══════════════════════════════════════════════════════════
    //  FINAL CTA
    // ═══════════════════════════════════════════════════════════
    finalCTA: {
      badge: "Bereit zu skalieren?",
      headlineLine1: "Starten Sie noch heute",
      headlineLine2: "mit DON-CALL",
      subheading: "Buchen Sie eine kostenlose Beratung und erleben Sie, wie wir Ihre Abläufe in 48 Stunden transformieren können.",
      benefits: ["14-Tage-Test", "Native Manager", "24/7 Support", "Flexible Skalierung"],
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
      tagline: "Professionelle Call-Center-Dienstleistungen, die Ihnen helfen, Kundenkommunikation effizient zu skalieren.",
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
