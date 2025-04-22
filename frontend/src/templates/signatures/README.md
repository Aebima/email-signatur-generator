# Signaturen Templates

## Template hinzufügen

1. Neue Datei erstellen:
   - Erstelle eine neue Datei in `frontend/src/templates/signatures/`
   - Benenne sie nach dem Muster: `[standort]_[abteilung].tsx`

2. Template-Struktur:
```typescript
import { BaseTemplate } from "./base";

export const TemplateName = (contactInfo: ContactFormValues) => {
    return (
        <BaseTemplate
            contactInfo={contactInfo}
            address="OST – Ostschweizer Fachhochschule | Lerchenfeldstrasse 3 | 9014 St.Gallen | Schweiz"
            phoneDirect="T direkt"
            phoneCentral="T"
            slogan="Bildung, Forschung, Entwicklung, Dienstleistung"
            logo="/path/to/logo.png"
        />
    );
};
```

3. Template registrieren:
   - Öffne `frontend/src/templates/signatures/index.ts`
   - Füge das neue Template zur Liste hinzu:
```typescript
export const templates = [
    // ... bestehende Templates
    {
        id: "template_name",
        label: "Template Name",
        component: TemplateName
    }
];
```

## Best Practices

- Verwende immer `BaseTemplate` als Grundlage
- Halte die Adresse konsistent
- Verwende das korrekte Logo für den Standort
- Teste die Signatur in verschiedenen E-Mail-Clients
- Stelle sicher, dass alle Links funktionieren
- Prüfe die mobile Ansicht

## Wichtige Hinweise

- Templates müssen responsiv sein
- Bilder müssen als data-URL eingebunden werden
- Telefonnummern sollten klickbar sein
- Email-Links müssen funktionieren
- Slogan muss korrekt sein 