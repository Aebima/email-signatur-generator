import React from "react";
import { SignatureTemplate } from "./index";
import { BaseTemplate } from "./base";

export const rapperswilTemplateEN: SignatureTemplate = {
  id: 'rapperswil_en',
  label: 'Template Rapperswil (English)',
  address: 'Eastern Switzerland University of Applied Sciences | Oberseestrasse 10 | 8640 Rapperswil | Switzerland | ',
  phoneDirect: 'T direct',
  phoneCentral: 'T central',
  slogan: 'EMPOWERING EXPERTISE.',
  logo: '/ost-logo-englisch.png',
  component: ({ contactInfo }) => (
    <BaseTemplate
      contactInfo={contactInfo}
      address={rapperswilTemplateEN.address}
      phoneDirect={rapperswilTemplateEN.phoneDirect}
      phoneCentral={rapperswilTemplateEN.phoneCentral}
      slogan={rapperswilTemplateEN.slogan}
      logo={rapperswilTemplateEN.logo}
    />
  )
};

export const RapperswilTemplateEN = rapperswilTemplateEN.component; 