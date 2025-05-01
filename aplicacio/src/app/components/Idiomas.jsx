import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

const Lenguajes = () => {
    const [language, setLanguage] = useState('castellano');
    const [texts, setTexts] = useState({
        title: "Idiomas",
        catalan: {
            label: "Catalán",
            level: "Nativo"
        },
        spanish: {
            label: "Castellano",
            level: "Nativo"
        },
        english: {
            label: "Inglés",
            level: "Nivel alto"
        }
    });

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'castellano';
        setLanguage(savedLanguage);
        updateTexts(savedLanguage);

        const handleLanguageChange = () => {
            const newLanguage = localStorage.getItem('language') || 'castellano';
            setLanguage(newLanguage);
            updateTexts(newLanguage);
        };

        window.addEventListener('languageChanged', handleLanguageChange);
        return () => window.removeEventListener('languageChanged', handleLanguageChange);
    }, []);

    const updateTexts = (lang) => {
        switch (lang) {
            case 'catalan':
                setTexts({
                    title: "Idiomes",
                    catalan: {
                        label: "Català",
                        level: "Natiu"
                    },
                    spanish: {
                        label: "Castellà",
                        level: "Natiu"
                    },
                    english: {
                        label: "Anglès",
                        level: "Nivell alt"
                    }
                });
                break;
            case 'ingles':
                setTexts({
                    title: "Languages",
                    catalan: {
                        label: "Catalan",
                        level: "Native"
                    },
                    spanish: {
                        label: "Spanish",
                        level: "Native"
                    },
                    english: {
                        label: "English",
                        level: "High level"
                    }
                });
                break;
            default:
                setTexts({
                    title: "Idiomas",
                    catalan: {
                        label: "Catalán",
                        level: "Nativo"
                    },
                    spanish: {
                        label: "Castellano",
                        level: "Nativo"
                    },
                    english: {
                        label: "Inglés",
                        level: "Nivel alto"
                    }
                });
        }
    };

    const renderStars = (filled) => {
        const total = 5;
        return (
            <div className="text-xl">
                {Array.from({ length: filled }).map((_, i) => (
                    <span key={`filled-${i}`} className="text-yellow-400">⭐</span>
                ))}
                {Array.from({ length: total - filled }).map((_, i) => (
                    <span key={`empty-${i}`} className="text-gray-400">☆</span>
                ))}
            </div>
        );
    };

    return (
        <div className="mx-auto pb-8">
            <h2 className="text-4xl text-gray-900 w-[90%] m-auto font-bold mb-8 border-b-2 border-black pb-2">
                <Globe className="inline-block mr-2" size={40} color="#000" />{' '}
                {texts.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[90%] m-auto">
                <div className="p-4 shadow">
                    <h3 className="text-2xl text-gray-900 font-semibold">{texts.catalan.label}</h3>
                    <p className="text-md text-gray-900">{texts.catalan.level}</p>
                    {renderStars(5)}
                </div>

                <div className="p-4 shadow">
                    <h3 className="text-2xl font-semibold text-gray-900">{texts.spanish.label}</h3>
                    <p className="text-md text-gray-900">{texts.spanish.level}</p>
                    {renderStars(5)}
                </div>

                <div className="p-4 shadow">
                    <h3 className="text-2xl font-semibold text-gray-900">{texts.english.label}</h3>
                    <p className="text-md text-gray-900">{texts.english.level}</p>
                    {renderStars(3)}
                </div>
            </div>

        </div>
    );
};

export default Lenguajes;
