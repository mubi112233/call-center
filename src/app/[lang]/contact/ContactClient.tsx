"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Navbar } from "@/components/Navbar";
import {
  Send,
  Loader2,
  CheckCircle2,
  Shield,
  Clock,
} from "lucide-react";

type FormValues = {
  email: string;
  phone: string;
  vaCount: string;
  va1Background?: string;
  va2Industry?: string;
  va2Background?: string;
  va3Industry?: string;
  va3Background?: string;
  va4Industry?: string;
  va4Background?: string;
  mainService: string;
  mainServiceOther?: string;
  otherTasks: string;
};

const translations: Record<string, Record<string, string>> = {
  en: {
    badge: "Get In Touch",
    title: "Contact Our Call Center Team",
    subtitle: "Tell us what you need and we’ll recommend the right inbound/outbound support setup within 48 hours.",
    email: "Email Address",
    phone: "Phone Number",
    mainServiceLabel: "Main Service Needed",
    mainServicePlaceholder: "Select a service",
    mainServiceOtherLabel: "Describe the service",
    mainServiceOtherPlaceholder: "Describe what you need...",
    vaCountLabel: "How many agents do you need?",
    vaCountPlaceholder: "e.g. 2",
    va1Label: "Agent #1 — Skills & Tasks",
    va2IndustryLabel: "Agent #2 — Industry",
    va2Label: "Agent #2 — Skills & Tasks",
    va3IndustryLabel: "Agent #3 — Industry",
    va3Label: "Agent #3 — Skills & Tasks",
    va4IndustryLabel: "Agent #4 — Industry",
    va4Label: "Agent #4 — Skills & Tasks",
    otherTasksLabel: "Additional Notes",
    otherTasksPlaceholder: "Anything else you'd like us to know...",
    submit: "Send Message",
    submitSending: "Sending...",
    emailRequired: "Email is required",
    emailInvalid: "Enter a valid email",
    phoneRequired: "Phone is required",
    phoneInvalid: "Enter a valid phone number",
    mainServiceRequired: "Please select a service",
    vaCountRequired: "Please enter the number of agents",
    sideTitle: "Why Work With Us?",
    stat1Value: "200+",
    stat1Label: "Happy Clients",
    stat2Value: "48h",
    stat2Label: "Onboarding Time",
    stat3Value: "4.9/5",
    stat3Label: "Average Rating",
    feature1: "Pre-trained call center agents",
    feature2: "Inbound + outbound coverage",
    feature3: "Scripts, QA & reporting included",
    feature4: "Dedicated account manager",
    responseTime: "We typically respond within 2 hours",
  },
  ge: {
    badge: "Kontakt aufnehmen",
    title: "Kontaktieren Sie unser Call Center Team",
    subtitle: "Sagen Sie uns, was Sie benötigen, und wir empfehlen innerhalb von 48 Stunden die passende Inbound/Outbound-Lösung.",
    email: "E-Mail-Adresse",
    phone: "Telefonnummer",
    mainServiceLabel: "Hauptdienstleistung",
    mainServicePlaceholder: "Dienst auswählen",
    mainServiceOtherLabel: "Dienst beschreiben",
    mainServiceOtherPlaceholder: "Beschreiben Sie Ihre Anforderungen...",
    vaCountLabel: "Wie viele Agents benötigen Sie?",
    vaCountPlaceholder: "z.B. 2",
    va1Label: "Agent #1 — Skills & Aufgaben",
    va2IndustryLabel: "Agent #2 — Branche",
    va2Label: "Agent #2 — Skills & Aufgaben",
    va3IndustryLabel: "Agent #3 — Branche",
    va3Label: "Agent #3 — Skills & Aufgaben",
    va4IndustryLabel: "Agent #4 — Branche",
    va4Label: "Agent #4 — Skills & Aufgaben",
    otherTasksLabel: "Weitere Anmerkungen",
    otherTasksPlaceholder: "Was sollen wir noch wissen...",
    submit: "Nachricht senden",
    submitSending: "Wird gesendet...",
    emailRequired: "E-Mail ist erforderlich",
    emailInvalid: "Gültige E-Mail eingeben",
    phoneRequired: "Telefon ist erforderlich",
    phoneInvalid: "Gültige Telefonnummer eingeben",
    mainServiceRequired: "Bitte wählen Sie einen Dienst",
    vaCountRequired: "Bitte geben Sie die Anzahl der Agents ein",
    sideTitle: "Warum mit uns arbeiten?",
    stat1Value: "200+",
    stat1Label: "Zufriedene Kunden",
    stat2Value: "48h",
    stat2Label: "Onboarding-Zeit",
    stat3Value: "4.9/5",
    stat3Label: "Durchschnittsbewertung",
    feature1: "Geschulte Call Center Agents",
    feature2: "Inbound- und Outbound-Support",
    feature3: "Skripte, QA & Reporting inklusive",
    feature4: "Persönlicher Account Manager",
    responseTime: "Wir antworten in der Regel innerhalb von 2 Stunden",
  },
};

const industryOptions = [
  { value: "ecommerce", label: "E-Commerce" },
  { value: "marketing", label: "Marketing / Agency" },
  { value: "saas", label: "SaaS / Tech" },
  { value: "other", label: "Other" },
];

function FieldError({ message }: { message?: string }) {
  return message ? <p className="text-xs font-medium text-destructive mt-1">{message}</p> : null;
}

export default function ContactClient({ lang }: { lang: string }) {
  const c = translations[lang] ?? translations.en;
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      email: "", phone: "", vaCount: "",
      va1Background: "", va2Industry: "", va2Background: "",
      va3Industry: "", va3Background: "", va4Industry: "", va4Background: "",
      mainService: "", mainServiceOther: "", otherTasks: "",
    },
    mode: "onBlur",
  });

  const vaCountValue = useWatch({ control, name: "vaCount" });
  const mainServiceValue = useWatch({ control, name: "mainService" });

  const emailPattern = useMemo(() => /[^\s@]+@[^\s@]+\.[^\s@]+/, []);
  const phonePattern = useMemo(() => /^[0-9+\-()\s]{7,20}$/i, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = new FormData();
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "8aff1902-6795-4608-ad79-be6702aa7f3a");
    formData.append("to", "patryk@dononlineagency.com");
    formData.append("subject", "New contact request - Call Center");
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("vaCount", data.vaCount);
    if (data.va1Background?.trim()) formData.append("va1Background", data.va1Background.trim());
    if (data.va2Industry?.trim()) formData.append("va2Industry", data.va2Industry.trim());
    if (data.va2Background?.trim()) formData.append("va2Background", data.va2Background.trim());
    if (data.va3Industry?.trim()) formData.append("va3Industry", data.va3Industry.trim());
    if (data.va3Background?.trim()) formData.append("va3Background", data.va3Background.trim());
    if (data.va4Industry?.trim()) formData.append("va4Industry", data.va4Industry.trim());
    if (data.va4Background?.trim()) formData.append("va4Background", data.va4Background.trim());
    if (data.mainService) formData.append("mainService", data.mainService);
    if (data.mainService === "other" && data.mainServiceOther?.trim())
      formData.append("mainServiceOther", data.mainServiceOther.trim());
    if (data.otherTasks.trim()) formData.append("otherTasks", data.otherTasks.trim());

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const json = await res.json();
      if (json.success) {
        toast({ title: "Success!", description: "Your message has been sent." });
        reset();
      } else {
        toast({ title: "Error", description: json.message || "Please try again." });
      }
    } catch {
      toast({ title: "Network error", description: "Please try again later." });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-10 xl:px-12 pt-28 pb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Card className="border border-gold/20 bg-card/70 shadow-2xl shadow-black/10 backdrop-blur-xl rounded-2xl">
              <CardHeader className="space-y-3 pb-6">
                <div className="inline-flex items-center gap-2 w-fit rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {c.badge}
                </div>
                <CardTitle className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  {c.title}
                </CardTitle>
                <CardDescription className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {c.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                  <form className="space-y-7 lg:col-span-3" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">{c.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        className="h-11"
                        {...register("email", {
                          required: c.emailRequired,
                          pattern: { value: emailPattern, message: c.emailInvalid },
                        })}
                      />
                      <FieldError message={errors.email?.message} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{c.phone}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 555 123 4567"
                        className="h-11"
                        {...register("phone", {
                          required: c.phoneRequired,
                          pattern: { value: phonePattern, message: c.phoneInvalid },
                        })}
                      />
                      <FieldError message={errors.phone?.message} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>{c.mainServiceLabel}</Label>
                    <Select onValueChange={(v) => setValue("mainService", v, { shouldValidate: true })}>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder={c.mainServicePlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inbound-calls">Inbound Call Support</SelectItem>
                        <SelectItem value="outbound-calls">Outbound Sales Calls</SelectItem>
                        <SelectItem value="customer-service">Customer Service</SelectItem>
                        <SelectItem value="technical-support">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" {...register("mainService", { required: c.mainServiceRequired })} />
                    <FieldError message={errors.mainService?.message} />
                    {mainServiceValue === "other" && (
                      <div className="space-y-2 mt-3">
                        <Label htmlFor="mainServiceOther">{c.mainServiceOtherLabel}</Label>
                        <Textarea
                          id="mainServiceOther"
                          rows={3}
                          placeholder={c.mainServiceOtherPlaceholder}
                          className="min-h-[96px]"
                          {...register("mainServiceOther")}
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vaCount">{c.vaCountLabel}</Label>
                    <Input
                      id="vaCount"
                      type="number"
                      min={1}
                      max={10}
                      placeholder={c.vaCountPlaceholder}
                      className="h-11"
                      {...register("vaCount", { required: c.vaCountRequired })}
                    />
                    <FieldError message={errors.vaCount?.message} />
                  </div>

                  {Number(vaCountValue) >= 1 && (
                    <div className="space-y-2">
                      <Label htmlFor="va1Background">{c.va1Label}</Label>
                      <Textarea
                        id="va1Background"
                        rows={3}
                        placeholder="Example: Inbound calls + chat, fluent English/German, CRM experience, ticketing tools."
                        className="min-h-[96px]"
                        {...register("va1Background")}
                      />
                    </div>
                  )}

                  {Number(vaCountValue) >= 2 && (
                    <div className="space-y-2">
                      <Label>{c.va2IndustryLabel}</Label>
                      <Select onValueChange={(v) => setValue("va2Industry", v, { shouldValidate: false })}>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder={c.va2IndustryLabel} />
                        </SelectTrigger>
                        <SelectContent>
                          {industryOptions.map((o) => (
                            <SelectItem key={o.value} value={o.value}>
                              {o.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Label htmlFor="va2Background">{c.va2Label}</Label>
                      <Textarea
                        id="va2Background"
                        rows={3}
                        placeholder="Example: Outbound calls: lead generation, appointment setting, follow-ups, sales scripts."
                        className="min-h-[96px]"
                        {...register("va2Background")}
                      />
                    </div>
                  )}

                  {Number(vaCountValue) >= 3 && (
                    <div className="space-y-2">
                      <Label>{c.va3IndustryLabel}</Label>
                      <Select onValueChange={(v) => setValue("va3Industry", v, { shouldValidate: false })}>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder={c.va3IndustryLabel} />
                        </SelectTrigger>
                        <SelectContent>
                          {industryOptions.map((o) => (
                            <SelectItem key={o.value} value={o.value}>
                              {o.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Label htmlFor="va3Background">{c.va3Label}</Label>
                      <Textarea
                        id="va3Background"
                        rows={3}
                        placeholder="Example: Customer service: refunds, returns, order issues, escalation handling."
                        className="min-h-[96px]"
                        {...register("va3Background")}
                      />
                    </div>
                  )}

                  {Number(vaCountValue) >= 4 && (
                    <div className="space-y-2">
                      <Label>{c.va4IndustryLabel}</Label>
                      <Select onValueChange={(v) => setValue("va4Industry", v, { shouldValidate: false })}>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder={c.va4IndustryLabel} />
                        </SelectTrigger>
                        <SelectContent>
                          {industryOptions.map((o) => (
                            <SelectItem key={o.value} value={o.value}>
                              {o.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Label htmlFor="va4Background">{c.va4Label}</Label>
                      <Textarea
                        id="va4Background"
                        rows={3}
                        placeholder="Example: QA/training: call monitoring, scorecards, coaching, reporting."
                        className="min-h-[96px]"
                        {...register("va4Background")}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="otherTasks">{c.otherTasksLabel}</Label>
                    <Textarea
                      id="otherTasks"
                      rows={3}
                      placeholder={c.otherTasksPlaceholder}
                      className="min-h-[96px]"
                      {...register("otherTasks")}
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
                    <div className="text-xs text-muted-foreground flex items-center gap-2 sm:mr-auto">
                      <Clock className="w-4 h-4 text-gold" />
                      {c.responseTime}
                    </div>
                    <Button
                      type="submit"
                      className="px-8 h-11 shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:scale-[1.02] active:scale-[0.99] transition-transform duration-200"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          {c.submitSending}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          {c.submit}
                        </span>
                      )}
                    </Button>
                  </div>
                  </form>

                  <div className="lg:col-span-2">
                    <div className="lg:sticky lg:top-28 space-y-5">
                      <div className="rounded-2xl border border-border/60 bg-background/40 p-5">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="text-sm font-bold text-foreground">{c.sideTitle}</div>
                            <div className="text-xs text-muted-foreground mt-1">{c.badge}</div>
                          </div>
                          <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-gold" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mt-5">
                          <div className="rounded-xl border border-border/60 bg-background/50 p-3 text-center">
                            <div className="text-lg font-black text-gold">{c.stat1Value}</div>
                            <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{c.stat1Label}</div>
                          </div>
                          <div className="rounded-xl border border-border/60 bg-background/50 p-3 text-center">
                            <div className="text-lg font-black text-gold">{c.stat2Value}</div>
                            <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{c.stat2Label}</div>
                          </div>
                          <div className="rounded-xl border border-border/60 bg-background/50 p-3 text-center">
                            <div className="text-lg font-black text-gold">{c.stat3Value}</div>
                            <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{c.stat3Label}</div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-border/60 bg-background/40 p-5">
                        <div className="text-sm font-bold text-foreground">{lang === "ge" ? "Leistungen" : "What you get"}</div>
                        <div className="mt-4 space-y-3">
                          {[c.feature1, c.feature2, c.feature3, c.feature4].map((f) => (
                            <div key={f} className="flex items-start gap-3">
                              <div className="mt-0.5 w-6 h-6 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="w-4 h-4 text-gold" />
                              </div>
                              <div className="text-sm text-muted-foreground leading-relaxed">{f}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
 }
