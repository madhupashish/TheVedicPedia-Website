"use client";
import { useState } from 'react';

const PDFViewer = ({ pdfUrl, fileName }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showFallback, setShowFallback] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
        setError(null);
    };

    const handleError = () => {
        setIsLoading(false);
        setError('Failed to load PDF');
        setShowFallback(true);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = fileName;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleOpenInNewTab = () => {
        window.open(pdfUrl, '_blank');
    };

    return (
        <div className="w-full h-full min-h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
            {isLoading && (
                <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#713700] mx-auto mb-4"></div>
                        <p className="text-[#713700]">Loading PDF...</p>
                    </div>
                </div>
            )}
            
            {error && showFallback && (
                <div className="flex flex-col items-center justify-center h-full p-8">
                    <div className="text-center mb-6">
                        <div className="text-6xl mb-4">📄</div>
                        <h3 className="text-xl font-semibold text-[#713700] mb-2">{fileName}</h3>
                        <p className="text-gray-600 mb-6">Unable to display PDF directly. Please try one of the options below:</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={handleOpenInNewTab}
                            className="bg-[#713700] text-white px-6 py-3 rounded-lg hover:bg-[#5a2c00] transition-colors"
                        >
                            Open in New Tab
                        </button>
                        <button
                            onClick={handleDownload}
                            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Download PDF
                        </button>
                    </div>
                    
                    <div className="mt-6 text-sm text-gray-500">
                        <p>If the PDF still doesn't load, please check your internet connection or try again later.</p>
                    </div>
                </div>
            )}

            {!showFallback && (
                <iframe
                    src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                    className="w-full h-full min-h-[600px] border-0"
                    onLoad={handleLoad}
                    onError={handleError}
                    title={fileName}
                />
            )}
        </div>
    );
};

export default PDFViewer; 