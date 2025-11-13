"use client";
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import PDFViewer from './pdf-viewer';

const PDFModal = ({ isOpen, onClose, pdfUrl, fileName }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
            setError(null);
        }
    }, [isOpen, pdfUrl]);

    const handleClose = () => {
        onClose();
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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[99999]">
            <div className="relative w-full h-full flex flex-col">
                {/* Close Button (always visible, top-right) */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-50 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-colors"
                    title="Close"
                >
                    <X className="w-7 h-7 text-[#713700]" />
                </button>
                {/* PDF Viewer Fullscreen */}
                <div className="flex-1 w-full h-full">
                    <PDFViewer pdfUrl={pdfUrl} fileName={fileName} />
                </div>
            </div>
        </div>
    );
};

export default PDFModal; 