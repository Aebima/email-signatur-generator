"use client";

import React from "react";
import ContactForm from "@/components/SignaturGenerator/ContactForm";
import type { ContactFormValues } from "@/components/SignaturGenerator/ContactForm";

export default function Home() {
  const handleFormChange = (data: ContactFormValues) => {
    console.log("Form data changed:", data);
    
  };

  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl text-center font-bold mb-6">E-Mail Signatur Generator</h1>
      <ContactForm onFormChange={handleFormChange} />
    </main>
  );
} 