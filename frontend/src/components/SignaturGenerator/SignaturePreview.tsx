"use client";

import React from "react";
import { ContactFormValues } from "./ContactForm";
import Image from "next/image";
import SignatureExport from "./SignatureExport";

interface SignaturePreviewProps {
  contactInfo: ContactFormValues;
}

const SignaturePreview = ({ contactInfo }: SignaturePreviewProps) => {
  const generateHtmlSignature = () => {
    return `
<div style="font-family: Arial, sans-serif; font-size: 12px; line-height: 1.5;">
  <p style="margin: 0;">
    <strong>
      ${contactInfo.prefixedTitle ? `${contactInfo.prefixedTitle} ` : ''}
      ${contactInfo.fullName}
      ${contactInfo.suffixTitle ? `, ${contactInfo.suffixTitle}` : ''}
    </strong>
  </p>
  <p style="margin: 0; font-style: italic;">${contactInfo.function}</p>
  
  <div style="margin: 10px 0;">
    <p style="margin: 0;">T direkt ${contactInfo.phoneOffice}</p>
    <p style="margin: 0;">T zentral ${contactInfo.phoneMobile}</p>
    <p style="margin: 0;">
      <a href="mailto:${contactInfo.email}" style="color: #0066cc; text-decoration: none;">
        ${contactInfo.email}
      </a>
    </p>
  </div>

  <div>
    <div style="margin-bottom: 10px;">
      <img src="/ost-logo.png" alt="OST Logo" style="width: 250px; height: auto;">
    </div>
    <p style="margin: 0; font-style: italic;">${contactInfo.abteilung}</p>
    <p style="margin: 0;">
      OST – Ostschweizer Fachhochschule | Oberseestrasse 10 | 8640 Rapperswil | Schweiz |{' '}
      <a href="https://www.ost.ch" style="color: #0066cc; text-decoration: none;" target="_blank" rel="nofollow">
        ost.ch
      </a>
    </p>
    <p style="margin: 10px 0 0; font-weight: bold;">WO WISSEN WIRKT.</p>
  </div>
</div>
    `.trim();
  };

  const generateTextSignature = () => {
    return `
${contactInfo.prefixedTitle ? `${contactInfo.prefixedTitle} ` : ''}${contactInfo.fullName}${contactInfo.suffixTitle ? `, ${contactInfo.suffixTitle}` : ''}
${contactInfo.function}

T direkt ${contactInfo.phoneOffice}
T zentral ${contactInfo.phoneMobile}
${contactInfo.email}

${contactInfo.abteilung}
OST – Ostschweizer Fachhochschule | Oberseestrasse 10 | 8640 Rapperswil | Schweiz | ost.ch

WO WISSEN WIRKT.
    `.trim();
  };

  return (
    <div className="w-full">
      <div className="w-full bg-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Vorschau</h2>
          <div className="border p-4 rounded-md bg-gray-50">
            <div className="font-sans text-sm">
              <div className="flex flex-col space-y-1">
                <p className="mb-1">
                  <strong>
                    {contactInfo.prefixedTitle && `${contactInfo.prefixedTitle} `}
                    {contactInfo.fullName}
                  </strong>
                  {contactInfo.suffixTitle && `, ${contactInfo.suffixTitle}`}
                </p>
                <p className="italic mb-4">{contactInfo.function}</p>
                
                <div className="space-y-1 mb-4">
                  {contactInfo.phoneOffice && <p>T direkt   {contactInfo.phoneOffice}</p>}
                  {contactInfo.phoneMobile && <p>T zentral {contactInfo.phoneMobile}</p>}
                  <p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-blue-600 no-underline hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </p>
                </div>

                <div>
                  <div className="mb-2">
                    <Image 
                      src="/ost-logo.png" 
                      alt="OST Logo" 
                      width={250}
                      height={40}
                      className="h-auto w-[250px]" 
                    />
                  </div>
                  <p className="italic mb-1">{contactInfo.abteilung}</p>
                  <p>
                    OST – Ostschweizer Fachhochschule | Oberseestrasse 10 | 8640 Rapperswil | Schweiz |{' '}
                    <a 
                      href="https://www.ost.ch" 
                      className="text-blue-600 no-underline hover:underline"
                      target="_blank"
                      rel="nofollow"
                    >
                      ost.ch
                    </a>
                  </p>
                  <p className="mt-4 font-bold">WO WISSEN WIRKT.</p>
                </div>
              </div>
            </div>
          </div>
          <SignatureExport 
            htmlCode={generateHtmlSignature()}
            formattedText={generateTextSignature()}
          />
        </div>
      </div>
    </div>
  );
};

export default SignaturePreview;
