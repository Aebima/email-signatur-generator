"use client";

import React from "react";
import { Card } from "@radix-ui/themes";
import type { ContactFormValues } from "./ContactForm";

interface SignaturePreviewProps {
  contactInfo?: ContactFormValues;
}

const SignaturePreview = ({
  contactInfo = {
    fullName: "Hans Muster",
    prefixedTitle: "Prof. Dr.",
    suffixTitle: "M.Sc.",
    function: "Leiter Organisationseinheit",
    abteilung: "Abteilung",
    email: "hans.muster@ost.ch",
    phoneOffice: "+41 58 257 xx xx",
    phoneMobile: "+41 58 257 xx xx",
  },
}: SignaturePreviewProps) => {
  return (
    <div className="w-full">
      <Card className="w-full bg-white">
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
                  <p>T direkt   {contactInfo.phoneOffice}</p>
                  <p>T zentral {contactInfo.phoneMobile}</p>
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
                  <img 
                    src="/ost-logo.png" 
                    alt="OST Logo" 
                    className="h-auto w-[250px] mb-2" 
                  />
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
        </div>
      </Card>
    </div>
  );
};

export default SignaturePreview;
