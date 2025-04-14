"use client";

import React, { useState } from "react";

interface SignatureExportProps {
  htmlCode?: string;
  formattedText?: string;
}

const SignatureExport = ({
  htmlCode = "",
  formattedText = "",
}: SignatureExportProps) => {
  const [copied, setCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const copyHtmlCode = () => {
    navigator.clipboard.writeText(htmlCode).then(() => {
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    });
  };

  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button
        onClick={copyToClipboard}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
      >
        {copied ? "Kopiert!" : "Signatur kopieren"}
      </button>

      <button
        onClick={copyHtmlCode}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
      >
        {codeCopied ? "Kopiert!" : "Quellcode kopieren"}
      </button>
    </div>
  );
};

export default SignatureExport; 