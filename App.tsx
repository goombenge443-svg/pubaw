import React from 'react';
import Hero from './components/Hero';
import MainCharSection from './components/MainCharSection';
import SupportingCast from './components/SupportingCast';
import WorldView from './components/WorldView';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-noir-black text-gray-100 font-sans selection:bg-blood-red selection:text-white">
      {/* Sticky Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center px-6 justify-between">
        <span className="font-serif text-lg font-bold text-gray-200">De un lup</span>
        <div className="hidden md:flex gap-6 text-sm text-gray-400 font-medium">
          <span className="hover:text-white cursor-default transition-colors">Character</span>
          <span className="hover:text-white cursor-default transition-colors">World</span>
          <span className="hover:text-white cursor-default transition-colors">Scenario</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <span className="text-xs font-bold text-gray-500">W</span>
        </div>
      </nav>

      <main>
        <Hero />
        <MainCharSection />
        <SupportingCast />
        <WorldView />
      </main>

      <Footer />
    </div>
  );
}

export default App;