"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Phone } from "lucide-react";
import { Button } from "@radix-ui/themes";
import SignaturePreview from "./SignaturePreview";

interface ContactFormProps {
  onFormChange?: (data: ContactFormValues) => void;
  currentTemplate: string;
}

export interface ContactFormValues {
  fullName: string;
  prefixedTitle: string;
  suffixTitle: string;
  function: string;
  abteilung: string;
  email: string;
  phoneOffice: string;
  phoneMobile: string;
}

const defaultValues: ContactFormValues = {
  fullName: "Hans Muster",
  prefixedTitle: "Prof. Dr.",
  suffixTitle: "M.Sc.",
  function: "Leiter Organisationseinheit",
  abteilung: "Abteilung",
  email: "hans.muster@ost.ch",
  phoneOffice: "+41 58 257 xx xx",
  phoneMobile: "+41 58 257 xx xx",
};

const ContactForm = ({ onFormChange = () => {}, currentTemplate }: ContactFormProps) => {
  const form = useForm<ContactFormValues>({
    mode: "onChange",
  });

  const [formData, setFormData] = React.useState<ContactFormValues>(defaultValues);
  const [formErrors, setFormErrors] = React.useState<Record<string, string>>({});

  const handleUpdatePreview = () => {
    const currentFormData = form.getValues();
    const errors: Record<string, string> = {};

    // Validation
    if (!currentFormData.fullName.trim()) {
      errors.fullName = "Name ist erforderlich";
    }
    if (!currentFormData.email.trim()) {
      errors.email = "Email ist erforderlich";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(currentFormData.email)) {
      errors.email = "Bitte geben Sie eine gültige Email-Adresse ein";
    }
    if (!currentFormData.function.trim()) {
      errors.function = "Funktion ist erforderlich";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setFormData(currentFormData);
      onFormChange(currentFormData);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full max-w-xl p-6 bg-card rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                Name *
              </label>
              <input
                id="fullName"
                className={`w-full px-3 py-2 border rounded-md ${formErrors.fullName ? 'border-red-500' : ''}`}
                placeholder="Hans Muster"
                {...form.register("fullName")}
              />
              {formErrors.fullName && (
                <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="prefixedTitle" className="block text-sm font-medium mb-1">
                  Vorgestellter Titel
                </label>
                <input
                  id="prefixedTitle"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Prof. Dr."
                  {...form.register("prefixedTitle")}
                />
              </div>

              <div>
                <label htmlFor="suffixTitle" className="block text-sm font-medium mb-1">
                  Nachgestellter Titel
                </label>
                <input
                  id="suffixTitle"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="M.Sc."
                  {...form.register("suffixTitle")}
                />
              </div>

              <div>
                <label htmlFor="function" className="block text-sm font-medium mb-1">
                  Funktion *
                </label>
                <input
                  id="function"
                  className={`w-full px-3 py-2 border rounded-md ${formErrors.function ? 'border-red-500' : ''}`}
                  placeholder="Leiter Organisationseinheit"
                  {...form.register("function")}
                />
                {formErrors.function && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.function}</p>
                )}
              </div>
              <div>
                <label htmlFor="abteilung" className="block text-sm font-medium mb-1">
                  Abteilung
                </label>
                <input
                  id="abteilung"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Abteilung"
                  {...form.register("abteilung")}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email *
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-3 py-2 border rounded-md ${formErrors.email ? 'border-red-500' : ''}`}
                placeholder="hans.muster@ost.ch"
                {...form.register("email")}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phoneOffice" className="block text-sm font-medium mb-1">
                  Telefon direkt
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    id="phoneOffice"
                    className="w-full pl-10 px-3 py-2 border rounded-md"
                    placeholder="+41 58 257 xx xx"
                    {...form.register("phoneOffice")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phoneMobile" className="block text-sm font-medium mb-1">
                  Telefon zentral
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    id="phoneMobile"
                    className="w-full pl-10 px-3 py-2 border rounded-md"
                    placeholder="+41 58 257 xx xx"
                    {...form.register("phoneMobile")}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button 
                type="button"
                onClick={handleUpdatePreview}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
              >
                Vorschau aktualisieren
              </Button>
            </div>
          </form>
        </div>
        <SignaturePreview contactInfo={formData} currentTemplate={currentTemplate} />

      </div>
    </div>
  );
};

export default ContactForm;
