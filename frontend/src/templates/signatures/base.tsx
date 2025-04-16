import React from "react";
import { ContactFormValues } from "@/components/SignaturGenerator/ContactForm";
import Image from "next/image";

interface BaseTemplateProps {
    contactInfo: ContactFormValues;
    address: string;
    phoneDirect: string;
    phoneCentral: string;
    slogan: string;
    logo: string;
}

export const BaseTemplate = ({
    contactInfo,
    address,
    phoneDirect,
    phoneCentral,
    slogan,
    logo
}: BaseTemplateProps) => {
    // Check if the logo is a data URL
    const isDataUrl = logo.startsWith('data:');

    return (
        <div className="font-sans text-sm">
            <div className="flex flex-col space-y-1">
                <p className="mb-1">
                    <strong>
                        {contactInfo.prefixedTitle && `${contactInfo.prefixedTitle} `}
                        {contactInfo.fullName}
                    </strong>
                    {contactInfo.suffixTitle && `, ${contactInfo.suffixTitle}`}
                </p>
                <p className="italic mb-4">{contactInfo.function}</p>

                <div className="space-y-1 mb-4">
                    {contactInfo.phoneOffice && (
                        <p>{phoneDirect}   {contactInfo.phoneOffice}</p>
                    )}
                    {contactInfo.phoneMobile && (
                        <p>{phoneCentral} {contactInfo.phoneMobile}</p>
                    )}
                    <p>
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-blue-600 no-underline hover:underline"
                        >
                            {contactInfo.email}
                        </a>
                    </p>
                </div>

                <div>
                    <div className="mb-2">
                        {isDataUrl ? (
                            // Use regular img tag for data URLs
                            <img
                                src={logo}
                                alt="OST Logo"
                                width={250}
                                style={{ height: 'auto', width: '250px' }}
                            />
                        ) : (
                            // Use Next.js Image component for regular URLs
                            <Image
                                src={logo}
                                alt="OST Logo"
                                width={250}
                                height={100}
                                style={{ height: 'auto', width: '250px' }}
                            />
                        )}
                    </div>
                    <p className="italic mb-1">{contactInfo.abteilung}</p>
                    <p>
                        {address}
                        <a
                            href="https://www.ost.ch"
                            className="text-blue-600 no-underline hover:underline"
                            target="_blank"
                            rel="nofollow"
                        >
                            ost.ch
                        </a>
                    </p>
                    <p className="mt-4 font-bold">{slogan}</p>
                </div>
            </div>
        </div>
    );
}; 