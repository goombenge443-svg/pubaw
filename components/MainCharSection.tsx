import React, { useState } from 'react';
import { MAIN_CHARACTER, BASIL_PHASES } from '../constants';
import { User, PawPrint, Heart, Activity } from 'lucide-react';

const MainCharSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section className="py-24 px-4 bg-noir-gray relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Main Character
          </h2>
          <div className="w-20 h-1 bg-blood-red mx-auto" />
        </div>

        {/* Concept Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 max-w-2xl mx-auto group">
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-50"></div>
             <img 
              src="https://i.postimg.cc/SRXYkKsk/22.jpg" 
              alt="Basil Concept Art" 
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual / Stats Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative p-8 bg-zinc-900 ring-1 ring-gray-800/50 rounded-2xl leading-none flex flex-col h-full border border-gray-800">
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 leading-tight break-keep">
                    {MAIN_CHARACTER.name}
                  </h3>
                  <p className="text-gold-accent font-medium">{MAIN_CHARACTER.role}</p>
                </div>
                <PawPrint className="w-10 h-10 text-gray-700 shrink-0" />
              </div>

              <div className="space-y-6 text-gray-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">Species</p>
                    <p className="font-semibold text-lg">{MAIN_CHARACTER.species}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">MBTI</p>
                    <p className="font-semibold text-lg">{MAIN_CHARACTER.mbti}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 p-4 bg-black/30 rounded-lg border border-gray-800">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">HEIGHT</p>
                    <p className="text-xl font-bold text-white">{MAIN_CHARACTER.height}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">BUILD</p>
                    <p className="text-sm md:text-lg font-bold text-white break-words">{MAIN_CHARACTER.build}</p>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed pt-4 border-t border-gray-800">
                  {MAIN_CHARACTER.description}
                </p>
              </div>
            </div>
          </div>

          {/* Relationship Phases */}
          <div className="flex flex-col h-full justify-center">
            <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
              <Heart className="w-5 h-5 text-blood-red" />
              <span>Relationship Progression</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-2 p-1 bg-black/40 rounded-lg backdrop-blur-sm">
                {BASIL_PHASES.map((phase, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhase(idx)}
                    className={`flex-1 py-3 text-sm md:text-base font-medium rounded-md transition-all duration-300 ${
                      activePhase === idx
                        ? 'bg-zinc-800 text-white shadow-lg ring-1 ring-gray-700'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    Phase {idx + 1}
                  </button>
                ))}
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl min-h-[250px] transition-all duration-500">
                <h4 className="text-2xl font-bold text-gold-accent mb-3">
                  {BASIL_PHASES[activePhase].title}
                </h4>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {BASIL_PHASES[activePhase].description}
                </p>
                <blockquote className="border-l-4 border-blood-red pl-4 italic text-lg text-gray-400">
                  "{BASIL_PHASES[activePhase].quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCharSection;