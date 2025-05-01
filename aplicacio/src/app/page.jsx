'use client'
import React from 'react';
import Navbar from './components/Navbar';
import Idiomas from './components/Idiomas';
import Estudios from './components/Estudios';
import Lenguajes from './components/Lenguajes';
import Proyectos from './components/Proyectos';
import Experiencia from './components/Experiencia';
import { MapPin, Mail } from 'lucide-react';

function App() {
  return (
    // Smoth Scroll
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16 w-[80%] m-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-black">Arnau Barrero Sorribas</h1>
          <p className="mt-4 text-gray-600 flex gap-2">
            <MapPin size={24} />
            Esplugas de Llobregat, Barcelona
          </p>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=arnau.baso@gmail.com"
            target="_blank"
            rel="noopener noreferrer" 
            className="mt-4 text-gray-600 flex gap-2 transition-[2s] hover:underline cursor-pointer"
          >
            <Mail size={24} />
            arnau.baso@gmail.com
          </a>

        </div>
      </div>

      <div className='max-w-[2500px] m-auto smooth-scroll'>
        <div className='pt-16 w-[80%] m-auto' id="lenguajes">
          <Lenguajes />
        </div>

        <div className='pt-16 w-[80%] m-auto' id="proyectos">
          <Proyectos />
        </div>

        <div className='pt-16 w-[80%] m-auto' id="experiencia">
          <Experiencia />
        </div>

        <div className='pt-16 w-[80%] m-auto' id="idiomas">
          <Idiomas />
        </div>

        <div className='pt-16 w-[80%] m-auto' id="estudios">
          <Estudios />
        </div>
      </div>
    </div>
  );
}

export default App;