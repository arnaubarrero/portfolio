'use client';
import React, { useEffect, useState } from 'react';
import { Briefcase  } from 'lucide-react';

const Experiencia = () => {
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
                const response = await import(`../json/experiencia/${language}.json`);
                setData(response.default);
            } catch (e) {
                const fallback = await import('../json/experiencia/castellano.json');
                setData(fallback.default);
            }
        };

        loadData();
    }, [language]);

    if (!data) {
        return <div className="m-auto py-12 text-black">Cargando...</div>;
    }

    return (
        <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-0">
            <h2 className="text-4xl mb-4 border-b-[2px] font-extrabold text-gray-900 flex items-center gap-3 border-">
                <Briefcase className="inline-block mr-2" size={32} color="#000" />{' '}
                {data.titulo}
            </h2>

            {data.experiencias.map((exp, index) => (
                <div key={index} className="bg-white shadow-md p-6 mb-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                        <h3 className="text-xl font-semibold text-gray-700">{exp.titulo}</h3>
                        <span className="text-sm bg-blue-100 text-blue-800 m-auto px-3 py-1 rounded-full">{exp.fecha}</span>
                    </div>

                    <h4 className="text-lg text-gray-600 mt-2 mb-4">{exp.empresa}</h4>

                    <p className="text-gray-700 mb-4">{exp.descripcion}</p>

                    <div className="mt-4">
                        <p className="text-sm font-medium text-gray-500 mb-2">{data.tecnologiasUtilizadas}</p>
                        <div className="flex flex-wrap gap-4">
                            {exp.tecnologias.map((tec) => (
                                <div key={tec} className="flex items-center space-x-2 border border-blue-500 px-3 py-2 rounded-full">
                                    <img width="24" height="24" src={getTechIcon(tec)} alt={tec.toLowerCase()} />
                                    <span className="text-gray-700">{tec}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const getTechIcon = (name) => {
    switch (name.toLowerCase()) {
        case 'laravel':
            return '/laravel.png';
        case 'vue.js':
        case 'vue':
            return '/vue.png';
        case 'mysql':
            return '/mysql.png';
        case 'php':
            return '/php.png';
        default:
            return '';
    }
};

export default Experiencia;