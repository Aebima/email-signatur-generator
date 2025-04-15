import React from "react";
import { ContactFormValues } from "@/components/SignaturGenerator/ContactForm";
import { SignatureTemplate } from "./index";
import { BaseTemplate } from "./base";

export const stGallenIPTemplate: SignatureTemplate = {
  id: 'stgallen_ip',
  label: 'Template St. Gallen Innovation Park',
  address: 'OST – Ostschweizer Fachhochschule | Lerchenfeldstrasse 3 | 9014 St.Gallen | Schweiz |',
  phoneDirect: 'T direkt',
  phoneCentral: 'T zentral',
  slogan: 'WO WISSEN WIRKT.',
  logo: '/ost-logo.png',
  component: ({ contactInfo }) => (
    <BaseTemplate
      contactInfo={contactInfo}
      address={stGallenIPTemplate.address}
      phoneDirect={stGallenIPTemplate.phoneDirect}
      phoneCentral={stGallenIPTemplate.phoneCentral}
      slogan={stGallenIPTemplate.slogan}
      logo={stGallenIPTemplate.logo}
    />
  )
};

export const StGallenIPTemplate = stGallenIPTemplate.component; 