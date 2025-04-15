import React from "react";
import { ContactFormValues } from "@/components/SignaturGenerator/ContactForm";
import { SignatureTemplate } from "./index";
import { BaseTemplate } from "./base";

export const stGallenTemplate: SignatureTemplate = {
  id: 'stgallen',
  label: 'Template St. Gallen',
  address: 'OST – Ostschweizer Fachhochschule | Rosenbergstrasse 59 | 9001 St.Gallen | Schweiz |',
  phoneDirect: 'T direkt',
  phoneCentral: 'T zentral',
  slogan: 'WO WISSEN WIRKT.',
  logo: '/ost-logo.png',
  component: ({ contactInfo }) => (
    <BaseTemplate
      contactInfo={contactInfo}
      address={stGallenTemplate.address}
      phoneDirect={stGallenTemplate.phoneDirect}
      phoneCentral={stGallenTemplate.phoneCentral}
      slogan={stGallenTemplate.slogan}
      logo={stGallenTemplate.logo}
    />
  )
};

export const StGallenTemplate = stGallenTemplate.component; 