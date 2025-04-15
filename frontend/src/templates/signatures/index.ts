import { ContactFormValues } from "@/components/SignaturGenerator/ContactForm";
import { rapperswilTemplate } from './rapperswil';
import { buchsTemplate } from './buchs';
import { stGallenTemplate } from './stgallen';
import { stGallenIPTemplate } from './stgallen_ip';
import { rapperswilTemplateEN } from './rapperswil_en';
import { buchsTemplateEN } from './buchs_en';
import { stGallenTemplateEN } from './stgallen_en';
import { stGallenIPTemplateEN } from './stgallen_ip_en';

export interface SignatureTemplate {
  id: string;
  label: string;
  address: string;
  phoneDirect: string;
  phoneCentral: string;
  slogan: string;
  logo: string;
  component: React.FC<{ contactInfo: ContactFormValues }>;
}

export const templates: SignatureTemplate[] = [
  rapperswilTemplate,
  buchsTemplate,
  stGallenTemplate,
  stGallenIPTemplate,
  rapperswilTemplateEN,
  buchsTemplateEN,
  stGallenTemplateEN,
  stGallenIPTemplateEN
];

export { RapperswilTemplate } from './rapperswil';
export { BuchsTemplate } from './buchs';
export { StGallenTemplate } from './stgallen';
export { StGallenIPTemplate } from './stgallen_ip'; 
export { RapperswilTemplateEN } from './rapperswil_en';
export { BuchsTemplateEN } from './buchs_en';
export { StGallenTemplateEN } from './stgallen_en';
export { StGallenIPTemplateEN } from './stgallen_ip_en';