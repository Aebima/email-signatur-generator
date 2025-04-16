import React from "react";
import { SignatureTemplate } from "./index";
import { BaseTemplate } from "./base";

export const stGallenTemplateEN: SignatureTemplate = {
  id: 'stgallen_en',
  label: 'Template St. Gallen (English)',
  address: 'Eastern Switzerland University of Applied Sciences | Rosenbergstrasse 59 | 9001 St.Gallen | Switzerland | ',
  phoneDirect: 'T direct',
  phoneCentral: 'T central',
  slogan: 'EMPOWERING EXPERTISE.',
  logo: '/ost-logo-englisch.png',
  component: ({ contactInfo }) => (
    <BaseTemplate
      contactInfo={contactInfo}
      address={stGallenTemplateEN.address}
      phoneDirect={stGallenTemplateEN.phoneDirect}
      phoneCentral={stGallenTemplateEN.phoneCentral}
      slogan={stGallenTemplateEN.slogan}
      logo={stGallenTemplateEN.logo}
    />
  )
};

export const StGallenTemplateEN = stGallenTemplateEN.component; 