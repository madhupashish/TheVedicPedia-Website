"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import VedicHero from "../../components/vedic-section/vedic-hero";
import VedicSectionAbout from "../../components/vedic-section/vedic-section-about";

export default function AllVedas() {
    const params = useParams();
    let decodedVed = decodeURIComponent(params?.fourvedas || "").trim();

    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedSection, setSelectedSection] = useState(null);

    const normalizeVedaName = (name) => {
        name = name.toLowerCase().replace(/\s+/g, " ").trim();
        if (name.includes("yjur")) return "yajur veda";
        if (name.includes("sam")) return "sam veda";
        if (name.includes("atharva")) return "atharva veda";
        if (name.includes("rig")) return "rig veda";
        return name;
    };

    const correctedVed = normalizeVedaName(decodedVed);

    const vedaConfig = {
        "rig veda": {
            folder: "rigvedamandal",
            sectionType: "MANDAL",
            sectionCount: 10,
            prefix: "RV"
        },
        "yajur veda": {
            folder: "yajurvedaandsamveda",
            sectionType: "Mandal",
            sectionCount: 1,
            prefix: "YV"
        },
        "sam veda": {
            folder: "samvedamandal",
            sectionType: "KANDA",
            sectionCount: 10,
            prefix: "SV"
        },
        "atharav veda": {
            folder: "atharvavedakanda",
            sectionType: "KANDA",
            sectionCount: 17,
            prefix: "AV"
        }
    };

    const currentVeda = vedaConfig[correctedVed] || vedaConfig["rig veda"];
    const sections = Array.from({ length: currentVeda.sectionCount }, (_, i) => i + 1);

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    const handleSectionSelect = (section, language) => {
        const languageFormatted = language.charAt(0).toUpperCase() + language.slice(1).toLowerCase();
        const sectionTypeFormatted =
            currentVeda.sectionType.charAt(0).toUpperCase() + currentVeda.sectionType.slice(1).toLowerCase();

        const fileName = `Study ${currentVeda.prefix} ${sectionTypeFormatted} ${section} ${languageFormatted}.pdf`;
        const pdfPath = `/pdf/${currentVeda.folder}/${encodeURIComponent(fileName)}`;

        console.log("Opening PDF:", pdfPath); // debugging

        window.open(pdfPath, "_blank");
    };


    return (
        <>
            <div>
                <VedicHero />
            </div>
            <div>
                <VedicSectionAbout />
            </div>
            <div>
                <h1 className="text-4xl font-bold text-[#713700] m-5">{correctedVed} - {selectedLanguage || "Select Language"}</h1>

                {!selectedLanguage && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white min-w-[400px] p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold text-center">Select Preferred Language</h2>
                            <br />
                            <div className="flex justify-center">
                                <button
                                    onClick={() => handleLanguageSelect("english")}
                                    className="bg-[#713700] w-full text-white px-4 py-2 rounded mr-2"
                                >
                                    English
                                </button>
                                <button
                                    onClick={() => handleLanguageSelect("hindi")}
                                    className="bg-[#713700] w-full text-white px-4 py-2 rounded"
                                >
                                    Hindi
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {selectedLanguage && (
                    <div className="w-full max-h-screen overflow-y-auto p-5">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => handleSectionSelect(section, selectedLanguage)}
                                className="block w-full bg-white text-[#713700] font-semibold text-lg py-3 px-5 mb-3 rounded-lg shadow-sm hover:bg-gray-100"
                            >
                                {currentVeda.sectionType} {section}
                            </button>
                        ))}

                    </div>
                )}
            </div>
        </>
    );
}