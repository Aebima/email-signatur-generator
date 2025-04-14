"use client";

import React from "react";
import ContactForm from "@/components/SignaturGenerator/ContactForm";
import type { ContactFormValues } from "@/components/SignaturGenerator/ContactForm";
import SignaturePreview from "@/components/SignaturGenerator/SignaturePreview";

export default function SignatureGeneratorPage() {
  const handleFormChange = (data: ContactFormValues) => {
    console.log("Form data changed:", data);
    
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center font-bold mb-8">E-Mail Signatur Generator</h1>
        <ContactForm onFormChange={handleFormChange} />
      </div>
    </div>
  );
} 