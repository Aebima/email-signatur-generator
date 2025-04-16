"use client";

import React, { useState } from "react";
import { Button } from "@radix-ui/themes";

interface SignatureExportProps {
  htmlCode?: string;
  formattedText?: string;
}

const SignatureExport = ({
  htmlCode = ""
}: SignatureExportProps) => {
  const [copied, setCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const copyToClipboard = async () => {
    const tempDiv = document.createElement('div');
    try {
      tempDiv.innerHTML = htmlCode;
      
      const htmlBlob = new Blob([tempDiv.outerHTML], { type: 'text/html' });
      const textBlob = new Blob([tempDiv.innerText], { type: 'text/plain' });

      const data = new ClipboardItem({
        'text/html': htmlBlob,
        'text/plain': textBlob
      });

      await navigator.clipboard.write([data]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);

      try {
        tempDiv.style.position = 'fixed';
        tempDiv.style.left = '-9999px';
        document.body.appendChild(tempDiv);
        const range = document.createRange();
        range.selectNode(tempDiv);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        document.execCommand('copy');
      } catch (fallbackErr) {
        console.error('Fallback copy failed', fallbackErr);
      }
    } finally {
      if (document.body.contains(tempDiv)) {
        document.body.removeChild(tempDiv);
      }
    }
  };

  const copyHtmlCode = () => {
    navigator.clipboard.writeText(htmlCode).then(() => {
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    });
  };

  return (
    <div className="flex justify-center gap-4 mt-4">
      <Button
        type="button"
        onClick={copyToClipboard}
        variant="solid"
        size="3"
        className="px-8 py-3"
      >
        {copied ? "Kopiert!" : "Signatur kopieren"}
      </Button>

      <Button
        type="button"
        onClick={copyHtmlCode}
        variant="solid"
        size="3"
        className="px-8 py-3"
      >
        {codeCopied ? "Kopiert!" : "Quellcode kopieren"}
      </Button>
    </div>
  );
};

export default SignatureExport; 