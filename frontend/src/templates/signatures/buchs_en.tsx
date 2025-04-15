import React from "react";
import { SignatureTemplate } from "./index";
import { BaseTemplate } from "./base";

export const buchsTemplateEN: SignatureTemplate = {
  id: 'buchs_en',
  label: 'Template Buchs (English)',
  address: 'Eastern Switzerland University of Applied Sciences | Werdenbergstrasse 4 | 9471 Buchs | Switzerland |',
  phoneDirect: 'T direct',
  phoneCentral: 'T central',
  slogan: 'EMPOWERING EXPERTISE.',
  logo: '/ost-logo-englisch.png',   
  component: ({ contactInfo }) => (
    <BaseTemplate
      contactInfo={contactInfo}
      address={buchsTemplateEN.address}
      phoneDirect={buchsTemplateEN.phoneDirect}
      phoneCentral={buchsTemplateEN.phoneCentral}
      slogan={buchsTemplateEN.slogan}
      logo={buchsTemplateEN.logo}
    />
  )
};

export const BuchsTemplateEN = buchsTemplateEN.component; 