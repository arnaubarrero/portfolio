import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

const Lenguajes = () => {
    const [language, setLanguage] = useState('castellano');
    const [texts, setTexts] = useState({
        title: "Lenguajes",
        estetica: "Estética",
        database: "Base de Datos",
        other: "Otros"
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
                    title: "Llenguatges",
                    estetica: "Estètica",
                    database: "Base de Dades",
                    other: "Altres"
                });
                break;
            case 'ingles':
                setTexts({
                    title: "Languages",
                    estetica: "Styling",
                    database: "Database",
                    other: "Others"
                });
                break;
            default:
                setTexts({
                    title: "Lenguajes",
                    estetica: "Estética",
                    database: "Base de Datos",
                    other: "Otros"
                });
        }
    };

    const frontendItems = [
        { name: 'NEXTjs',       icon: <img width="30" height="30" src="/nextjs.png" alt="nextjs"            /> },
        { name: 'VUEjs',        icon: <img width="30" height="30" src="/vue.png"    alt="vuejs"             /> },
        { name: 'NUXTjs',       icon: <img width="30" height="30" src="/nuxt.png"   alt="nuxt-jc"           /> },
        { name: 'HTML',         icon: <img width="30" height="30" src="/html.png"   alt="html"              /> },
        { name: 'JS',           icon: <img width="30" height="30" src="js.png"      alt="javascript--v1"    /> }
    ];

    const backendItems = [
        { name: 'Laravel',  icon: <img width="30" height="30" src="/laravel.png"    alt="laravel"               /> },
        { name: 'Solidity', icon: <img width="30" height="30" src="/solidity.png"   alt="solidity"              /> },
        { name: 'PHP',      icon: <img width="30" height="30" src="/php.png"        alt="php"                   /> },
        { name: 'Java',     icon: <img width="30" height="30" src="/java.png"       alt="java-coffee-cup-logo"  /> },
        { name: 'Node.js',  icon: <img width="30" height="30" src="node-js.png"     alt="node-js"               /> }
    ];

    const esteticaItems = [
        { name: 'Tailwind',     icon: <img width="30" height="30" src="/tailwind.png"   alt="tailwind_css"  /> },
        { name: 'CSS',          icon: <img width="30" height="30" src="/css.png"        alt="css"           /> },
        { name: 'Bootstrap',    icon: <img width="30" height="30" src="/bootstrap.png"  alt="bootstrap"     /> }
    ];

    const databaseItems = [
        { name: 'MySQL', icon: <img width="30" height="30" src="/mysql.png" alt="my-sql" /> }
    ];

    const otherItems = [
        { name: 'Github',   icon: <img width="30" height="30" src="/github.png" alt="github"    /> },
        { name: 'Figma',    icon: <img width="30" height="30" src="/figma.png"  alt="figma--v1" /> },
        { name: 'nginx',    icon: <img width="30" height="30" src="/nginx.png"  alt="nginx"     /> },
        { name: 'apache',   icon: <img width="30" height="30" src="/apache.png" alt="apache"    /> },
        { name: 'docker',   icon: <img width="30" height="30" src="/docker.png" alt="docker"    /> },
        { name: 'UX/UI',    icon: <img width="30" height="30" src="/ux-ui.png"  alt="ux-ui"     /> },
    ];

    return (
            <div className="mx-auto">
                <h2 className="text-4xl font-bold mb-12 border-b-2 border-black pb-2">
                    <Code2 className="inline-block mr-2" size={30} color="#000" />{' '}
                    {texts.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] m-auto">
                    {/* Frontend Section */}
                    <div className="backdrop-blur-sm p-6 shadow-xl hover:cursor-pointer hover:border-gray-500 border-1 border-white transition-[2s]">
                        <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                Frontend
                            </span>
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {frontendItems.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 rounded-full px-3 py-1 border border-blue-500 hover:bg-blue-200 text-black transition-all duration-300 cursor-pointer">
                                    <div className="flex-shrink-0">{item.icon}</div>
                                    <span className="text-black font-medium">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Section */}
                    <div className="backdrop-blur-sm p-6 shadow-xl hover:cursor-pointer hover:border-gray-500 border-1 border-white transition-[2s]">
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Backend
                            </span>
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {backendItems.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 rounded-full px-3 py-1 border border-blue-500 hover:bg-blue-200 text-black transition-all duration-300 cursor-pointer">
                                    <div className="flex-shrink-0">{item.icon}</div>
                                    <span className="text-black font-medium">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Estética Section */}
                    <div className="backdrop-blur-sm p-6 shadow-xl hover:cursor-pointer hover:border-gray-500 border-1 border-white transition-[2s]">
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                                {texts.estetica}
                            </span>
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {esteticaItems.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 rounded-full px-3 py-1 border border-blue-500 hover:bg-blue-200 text-black transition-all duration-300 cursor-pointer">
                                    <div className="flex-shrink-0">{item.icon}</div>
                                    <span className="text-black font-medium">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Database Section */}
                    <div className="backdrop-blur-sm p-6 shadow-xl hover:cursor-pointer hover:border-gray-500 border-1 border-white transition-[2s]">
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                {texts.database}
                            </span>
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {databaseItems.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 rounded-full px-3 py-1 border border-blue-500 hover:bg-blue-200 text-black transition-all duration-300 cursor-pointer">
                                    <div className="flex-shrink-0">{item.icon}</div>
                                    <span className="text-black font-medium">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Database Section */}
                <div className="mt-8 backdrop-blur-sm p-6 shadow-xl hover:cursor-pointer hover:border-gray-500 border-1 border-white transition-[2s] w-[90%] m-auto">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                        <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">
                            {texts.other}
                        </span>
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
                        {otherItems.map((item, index) => (
                            <div key={index} className="flex items-center space-x-3 rounded-full px-3 py-1 border border-blue-500 hover:bg-blue-200 text-black transition-all duration-300 cursor-pointer">
                                <div className="flex-shrink-0">{item.icon}</div>
                                <span className="text-black font-medium">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default Lenguajes;