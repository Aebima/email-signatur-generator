import React from "react";
import { SignatureTemplate } from "./index";
import { BaseTemplate } from "./base";

export const rapperswilTemplate: SignatureTemplate = {
  id: 'rapperswil',
  label: 'Template Rapperswil',
  address: 'OST – Ostschweizer Fachhochschule | Oberseestrasse 10 | 8640 Rapperswil | Schweiz |',
  phoneDirect: 'T direkt',
  phoneCentral: 'T zentral',
  slogan: 'WO WISSEN WIRKT.',
  logo: '/ost-logo.png',
  component: ({ contactInfo }) => (
    <BaseTemplate
      contactInfo={contactInfo}
      address={rapperswilTemplate.address}
      phoneDirect={rapperswilTemplate.phoneDirect}
      phoneCentral={rapperswilTemplate.phoneCentral}
      slogan={rapperswilTemplate.slogan}
      logo={rapperswilTemplate.logo}
    />
  )
};

export const RapperswilTemplate = rapperswilTemplate.component; 