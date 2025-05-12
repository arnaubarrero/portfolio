'use client';
import React, { useEffect, useState } from 'react';
import { School } from 'lucide-react';

const Estudios = () => {
    const [language, setLanguage] = useState('castellano');
    const [data, setData] = useState(null);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'castellano';
        setLanguage(savedLanguage);

        const handleLanguageChange = () => {
            const newLanguage = localStorage.getItem('language') || 'castellano';
            setLanguage(newLanguage);
        };

        window.addEventListener('languageChanged', handleLanguageChange);
        return () => window.removeEventListener('languageChanged', handleLanguageChange);
    }, []);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await import(`../json/estudios/${language}.json`);
                setData(response.default);
            } catch (e) {
                const fallback = await import('../json/estudios/castellano.json');
                setData(fallback.default);
            }
        };

        loadData();
    }, [language]);

    if (!data) {
        return <div className="flex justify-center items-center h-40 text-gray-700">Cargando...</div>;
    }

    return (
        <section className="w-[90%] py-12 mx-auto">
            <header className="mb-10">
                <h2 className="text-4xl border-b-[2px] font-extrabold text-gray-900 flex items-center gap-3 border-">
                    <School className="text-primary" size={32} />
                    {data.titulo}
                </h2>
            </header>

            <div className="space-y-6">
                {data.estudios.map((estudio, index) => (
                    <article
                        key={index}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-200"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                            <h3 className="text-xl font-semibold text-gray-800">{estudio.titulo}</h3>
                            <span
                                className={`mt-2 md:mt-0 text-sm px-3 py-1 rounded-full self-end md:self-auto md:ml-auto
        ${["En Proceso", "En Procès", "In Process"].includes(estudio.fecha)
                                        ? "bg-orange-100 text-orange-700"
                                        : "bg-emerald-100 text-emerald-700"
                                    }`}
                            >
                                {estudio.fecha}
                            </span>

                        </div>
                        <p className="text-gray-600 text-md">{estudio.institucion}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Estudios;