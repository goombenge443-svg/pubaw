import React from 'react';
import { SUPPORTING_CHARACTERS } from '../constants';
import { Users, Info } from 'lucide-react';

const SupportingCast: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-noir-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
              Supporting Cast
            </h2>
            <p className="text-gray-500">검은 두나우와 주변 인물들</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 border px-3 py-1 rounded-full border-gray-800">
            <Users className="w-4 h-4" />
            <span>조직원 & 관계자</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUPPORTING_CHARACTERS.map((char) => (
            <div 
              key={char.id}
              className="group relative bg-zinc-900/40 border border-zinc-800 hover:border-zinc-600 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-gold-accent transition-colors">
                      {char.name}
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{char.role}</p>
                  </div>
                  <div className="bg-zinc-800 px-2 py-1 rounded text-xs text-gray-300 font-mono">
                    {char.mbti}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                   <span className="px-2 py-0.5 bg-gray-800 rounded">{char.species}</span>
                   <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                   <span>{char.height}</span>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
                  {char.description}
                </p>

                <div className="pt-4 border-t border-gray-800 mt-auto">
                  <p className="text-sm italic text-gray-500 flex gap-2">
                    <span className="text-blood-red font-bold">"</span>
                    {char.quote}
                    <span className="text-blood-red font-bold">"</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportingCast;