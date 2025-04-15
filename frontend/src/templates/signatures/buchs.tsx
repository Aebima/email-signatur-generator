import React from "react";
import { ContactFormValues } from "@/components/SignaturGenerator/ContactForm";
import { SignatureTemplate } from "./index";
import { BaseTemplate } from "./base";

export const buchsTemplate: SignatureTemplate = {
  id: 'buchs',
  label: 'Template Buchs',
  address: 'OST – Ostschweizer Fachhochschule | Werdenbergstrasse 4 | 9471 Buchs | Schweiz |',
  phoneDirect: 'T direkt',
  phoneCentral: 'T zentral',
  slogan: 'WO WISSEN WIRKT.',
  logo: '/ost-logo.png',
  component: ({ contactInfo }) => (
    <BaseTemplate
      contactInfo={contactInfo}
      address={buchsTemplate.address}
      phoneDirect={buchsTemplate.phoneDirect}
      phoneCentral={buchsTemplate.phoneCentral}
      slogan={buchsTemplate.slogan}
      logo={buchsTemplate.logo}
    />
  )
};

export const BuchsTemplate = buchsTemplate.component; 