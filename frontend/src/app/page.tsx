"use client";

import React, { useState } from "react";
import ContactForm from "@/components/SignaturGenerator/ContactForm";
import type { ContactFormValues } from "@/components/SignaturGenerator/ContactForm";
import TemplateSlider from "@/components/SignaturGenerator/TemplateSlider";

export default function Home() {
  const [currentTemplate, setCurrentTemplate] = useState("default");

  const handleFormChange = (data: ContactFormValues) => {
    console.log("Form data changed:", data);
  };

  const handleTemplateChange = (template: string) => {
    setCurrentTemplate(template);
    console.log("Template changed to:", template);
  };

  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl text-center font-bold mb-6">E-Mail Signatur Generator</h1>
      <TemplateSlider onTemplateChange={handleTemplateChange} currentTemplate={currentTemplate} />
      <ContactForm onFormChange={handleFormChange} currentTemplate={currentTemplate} />
    </main>
  );
} 