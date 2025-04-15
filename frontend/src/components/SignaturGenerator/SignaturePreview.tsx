"use client";

import React from "react";
import { ContactFormValues } from "./ContactForm";
import SignatureExport from "./SignatureExport";
import { templates } from "@/templates/signatures";
import { BaseTemplate } from "@/templates/signatures/base";
import ReactDOMServer from "react-dom/server";

interface SignaturePreviewProps {
  contactInfo: ContactFormValues;
  currentTemplate: string;
}

const SignaturePreview = ({ contactInfo, currentTemplate }: SignaturePreviewProps) => {
  const template = templates.find(t => t?.id === currentTemplate) || templates[0];

  if (!template) {
    return <div>No template found</div>;
  }

  const generateHtmlSignature = () => {
    return `
      <div style="font-family: Arial, sans-serif; font-size: 12px; line-height: 1.5; border: none;">
        <div style="border: none;">
          <p style="margin-bottom: 4px; border: none; outline: none;"><strong style="border: none; outline: none;">${contactInfo.prefixedTitle ? `${contactInfo.prefixedTitle} ` : ''}${contactInfo.fullName}</strong>${contactInfo.suffixTitle ? `, ${contactInfo.suffixTitle}` : ''}</p>
          <p style="font-style: italic; margin-bottom: 16px; border: none;">${contactInfo.function}</p>
          
          <div style="margin-bottom: 16px; border: none;">
            ${contactInfo.phoneOffice ? `<p style="margin: 4px 0; border: none;">${template.phoneDirect} ${contactInfo.phoneOffice}</p>` : ''}
            ${contactInfo.phoneMobile ? `<p style="margin: 4px 0; border: none;">${template.phoneCentral} ${contactInfo.phoneMobile}</p>` : ''}
            <p style="margin: 4px 0; border: none;"><a href="mailto:${contactInfo.email}" style="color: #2563eb; text-decoration: none; border: none; outline: none;">${contactInfo.email}</a></p>
          </div>

          <div style="border: none;">
            <div style="margin-bottom: 8px; border: none;">
              <img src="${window.location.origin}${template.logo}" alt="OST Logo" width="250" style="height: auto; width: 250px; border: none;" />
            </div>
            <p style="font-style: italic; margin-bottom: 4px; border: none;">${contactInfo.abteilung}</p>
            <p style="margin: 0; border: none;">${template.address} <a href="https://www.ost.ch" style="color: #2563eb; text-decoration: none; border: none; outline: none;" target="_blank" rel="nofollow">ost.ch</a></p>
            <p style="margin-top: 16px; font-weight: bold; border: none;">${template.slogan}</p>
          </div>
        </div>
      </div>
    `.trim();
  };

  const generateTextSignature = () => {
    return `
${contactInfo.prefixedTitle ? `${contactInfo.prefixedTitle} ` : ''}${contactInfo.fullName}${contactInfo.suffixTitle ? `, ${contactInfo.suffixTitle}` : ''}
${contactInfo.function}

${contactInfo.phoneOffice ? `${template.phoneDirect} ${contactInfo.phoneOffice}` : ''}
${contactInfo.phoneMobile ? `${template.phoneCentral} ${contactInfo.phoneMobile}` : ''}
${contactInfo.email}

${contactInfo.abteilung}
${template.address} ost.ch

${template.slogan}
    `.trim();
  };

  return (
    <div className="w-full">
      <div className="w-full bg-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Vorschau</h2>
          <div className="border p-4 rounded-md bg-gray-50">
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', lineHeight: 1.5 }}>
              <BaseTemplate
                contactInfo={contactInfo}
                address={template.address}
                phoneDirect={template.phoneDirect}
                phoneCentral={template.phoneCentral}
                slogan={template.slogan}
                logo={template.logo}
              />
            </div>
          </div>
        </div>
      </div>
      <SignatureExport 
        htmlCode={generateHtmlSignature()} 
        formattedText={generateTextSignature()}
      />
    </div>
  );
};

export default SignaturePreview;
