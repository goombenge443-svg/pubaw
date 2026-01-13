import React from 'react';
import { WORLD_DATA } from '../constants';
import { MapPin, Globe, Building2 } from 'lucide-react';

const WorldView: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-noir-gray to-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            World View
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            2026년 동유럽, 인간과 수인이 공존하는 회색 지대.
            <br />
            오래된 석조 건물과 붉은 지붕 아래 숨겨진 이야기를 소개합니다.
          </p>
        </div>

        <div className="space-y-12">
          {WORLD_DATA.map((section, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col md:flex-row gap-8 items-stretch ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-4 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  {idx === 0 && <Building2 className="w-6 h-6 text-blood-red" />}
                  {idx === 1 && <MapPin className="w-6 h-6 text-gold-accent" />}
                  {idx === 2 && <Globe className="w-6 h-6 text-gray-400" />}
                  {idx > 2 && <Globe className="w-6 h-6 text-gray-600" />}
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                </div>
                <h4 className="text-xl font-serif italic text-gray-600">{section.originalName}</h4>
                <p className="text-gray-300 leading-relaxed">{section.description}</p>
                
                <ul className="space-y-2 mt-4">
                  {section.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Image Block */}
              <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center overflow-hidden relative group shrink-0">
                {section.imageUrl ? (
                  <>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                     <img 
                      src={section.imageUrl} 
                      alt={section.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-60 z-10" />
                    <div className="text-gray-700 font-serif text-6xl opacity-20 font-bold group-hover:scale-110 transition-transform duration-700 select-none">
                        {section.title.charAt(0)}
                    </div>
                  </>
                )}
                 {/* Abstract accent lines */}
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50 z-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldView;