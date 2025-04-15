import React from "react";
import { ContactFormValues } from "@/components/SignaturGenerator/ContactForm";
import { SignatureTemplate } from "./index";
import { BaseTemplate } from "./base";

export const stGallenIPTemplateEN: SignatureTemplate = {
  id: 'stgallen_ip_en',
  label: 'Template St. Gallen Innovation Park (English)',
  address: 'Eastern Switzerland University of Applied Sciences | Lerchenfeldstrasse 3 | 9014 St.Gallen | Switzerland |',
  phoneDirect: 'T direct',
  phoneCentral: 'T central',
  slogan: 'EMPOWERING EXPERTISE.',
  logo: '/ost-logo-englisch.png',
  component: ({ contactInfo }) => (
    <BaseTemplate
      contactInfo={contactInfo}
      address={stGallenIPTemplateEN.address}
      phoneDirect={stGallenIPTemplateEN.phoneDirect}
      phoneCentral={stGallenIPTemplateEN.phoneCentral}
      slogan={stGallenIPTemplateEN.slogan}
      logo={stGallenIPTemplateEN.logo}
    />
  )
};

export const StGallenIPTemplateEN = stGallenIPTemplateEN.component; 