import { useState } from 'react';

export const useDownloadPdf = () => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const downloadPdf = async (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (isGeneratingPdf) return;
    setIsGeneratingPdf(true);
    try {
      const response = await fetch('/api/generate-pdf');
      if (!response.ok) throw new Error('PDF generation failed');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'NationwideRoadsideAssist-Capability-Report.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('PDF download error:', error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return { isGeneratingPdf, downloadPdf };
};
