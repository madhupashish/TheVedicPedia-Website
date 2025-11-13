'use client';
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when clicking on overlay or link
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <>
            <nav className="bg-[#f5deb3] shadow-md p-4 fixed w-full z-[9999]">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href={'/'}>
                        <div className="text-2xl font-bold text-[#713700] flex items-center gap-2">
                            <img src="/images/vh1.png" alt="logo" className="w-10 h-10" />
                            Vedic Pedia
                        </div>
                    </Link>
                    <div className="hidden md:flex space-x-6">
                        <a href="/vedas" className="text-[#713700] font-semibold hover:text-[#492401]">Vedic Section</a>
                        <a href="/mantrapedia" className="text-[#713700] font-semibold hover:text-[#492401]">Mantras</a>
                        <a href="/about-us" className="text-[#713700] font-semibold hover:text-[#492401]">About Us</a>
                        <a href="/yourcontribution" className="text-[#713700] font-semibold hover:text-[#492401]">Your Contribution</a>
                        <a href="/downloadapp" className="text-[#713700] font-semibold hover:text-[#492401]">Get App</a>
                    </div>

                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6 text-[#713700]" /> : <Menu className="w-6 h-6 text-[#713700]" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-[9998] md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Menu Slide-in from Right */}
            <div className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#f5deb3] shadow-lg z-[9999] transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col p-6 mt-16 space-y-6">
                    <button 
                        className="absolute top-4 right-4 p-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <X className="w-6 h-6 text-[#713700]" />
                    </button>
                    
                    <a 
                        href="/vedas" 
                        className="text-[#713700] font-semibold text-lg hover:text-[#492401] py-2 border-b border-[#71370020]"
                        onClick={() => setIsOpen(false)}
                    >
                        Vedic Section
                    </a>
                    <a 
                        href="/mantrapedia" 
                        className="text-[#713700] font-semibold text-lg hover:text-[#492401] py-2 border-b border-[#71370020]"
                        onClick={() => setIsOpen(false)}
                    >
                        Mantras
                    </a>
                    <a 
                        href="/about-us" 
                        className="text-[#713700] font-semibold text-lg hover:text-[#492401] py-2 border-b border-[#71370020]"
                        onClick={() => setIsOpen(false)}
                    >
                        About Us
                    </a>
                    <a 
                        href="/yourcontribution" 
                        className="text-[#713700] font-semibold text-lg hover:text-[#492401] py-2 border-b border-[#71370020]"
                        onClick={() => setIsOpen(false)}
                    >
                        Your Contribution
                    </a>
                    <a 
                        href="/downloadapp" 
                        className="text-[#713700] font-semibold text-lg hover:text-[#492401] py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Get App
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;