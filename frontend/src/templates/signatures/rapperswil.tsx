import React from "react";
import { ContactFormValues } from "@/components/SignaturGenerator/ContactForm";
import Image from "next/image";

interface SignatureTemplateProps {
  contactInfo: ContactFormValues;
}

export const RapperswilTemplate = ({ contactInfo }: SignatureTemplateProps) => {
  return (
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
          {contactInfo.phoneOffice && (
            <p>T direkt   {contactInfo.phoneOffice}</p>
          )}
          {contactInfo.phoneMobile && (
            <p>T zentral {contactInfo.phoneMobile}</p>
          )}
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
  );
}; 