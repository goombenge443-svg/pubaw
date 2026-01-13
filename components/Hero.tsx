import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-noir-black text-white">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-noir-black/80 to-noir-black" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-4 flex items-center justify-center gap-4 text-gold-accent/80 tracking-widest text-sm md:text-base uppercase font-serif">
          <span>Noir</span>
          <span className="w-1 h-1 rounded-full bg-gold-accent" />
          <span>Romance</span>
          <span className="w-1 h-1 rounded-full bg-gold-accent" />
          <span>Comedy</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-2 tracking-tight text-white drop-shadow-2xl">
          웬 <span className="text-wolf-gray">늑대</span>에게
          <br />
          주워졌다
        </h1>
        
        <div className="mt-4 mb-8 flex flex-col items-center gap-1">
          <p className="text-2xl md:text-3xl font-serif italic text-blood-red/90">
            "De un lup"
          </p>
          <p className="text-sm text-gray-500 tracking-wider uppercase opacity-60">
            Pick up by a wolf
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
          2026년 동유럽 루마니아, 다뉴브 강.<br/>
          떠내려오던 당신을 주운 것은<br/>
          러시아 마피아 보스이자 늑대 수인이었다.
        </p>

        <div className="mt-12 animate-bounce">
          <ArrowDown className="w-8 h-8 text-gold-accent opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;