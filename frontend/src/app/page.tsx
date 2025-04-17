"use client";

import React, { useState, useEffect } from "react";
import ContactForm from "@/components/SignaturGenerator/ContactForm";
import type { ContactFormValues } from "@/components/SignaturGenerator/ContactForm";
import TemplateSlider from "@/components/SignaturGenerator/TemplateSlider";
import { templates } from "@/templates/signatures";

const STORAGE_KEYS = {
  TEMPLATE: 'ost_signature_template',
  FORM_DATA: 'ost_signature_form_data'
};

export default function Home() {
  const [currentTemplate, setCurrentTemplate] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.TEMPLATE);
      return saved || templates[0].id;
    }
    return templates[0].id;
  });

  const [savedFormData, setSavedFormData] = useState<ContactFormValues | null>(null);

  useEffect(() => {
    const savedFormDataString = localStorage.getItem(STORAGE_KEYS.FORM_DATA);
    if (savedFormDataString) {
      try {
        const parsed = JSON.parse(savedFormDataString);
        setSavedFormData(parsed);
        console.log("Formulardaten gespeichert:", parsed);
      } catch (e) {
        console.error('Fehler beim Laden der gespeicherten Daten:', e);
      }
    }
  }, []);

  const handleFormChange = (data: ContactFormValues) => {
    localStorage.setItem(STORAGE_KEYS.FORM_DATA, JSON.stringify(data));
    console.log("Formulardaten gespeichert:", data);
  };

  const handleTemplateChange = (template: string) => {
    setCurrentTemplate(template);
    localStorage.setItem(STORAGE_KEYS.TEMPLATE, template);
    console.log("Template geändert zu:", template);
  };

  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl text-center font-bold mb-6">E-Mail Signatur Generator</h1>
      <TemplateSlider onTemplateChange={handleTemplateChange} currentTemplate={currentTemplate} />
      <ContactForm 
        onFormChange={handleFormChange} 
        currentTemplate={currentTemplate}
        initialData={savedFormData}
      />
    </main>
  );
} 