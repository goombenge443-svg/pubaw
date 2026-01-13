import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-zinc-900 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-serif font-bold text-gray-700 mb-4">
          웬 늑대에게 주워졌다
        </h2>
        <p className="text-sm text-gray-600 mb-8">
          Noir Romantic Comedy Roleplay Scenario
        </p>
        <div className="flex justify-center gap-6 text-xs text-gray-700 font-mono uppercase tracking-wider">
          <span>Romania 2026</span>
          <span>•</span>
          <span>Mafia</span>
          <span>•</span>
          <span>Beastmen</span>
        </div>
        <p className="mt-8 text-[10px] text-gray-800">
          © 2024 Character Chat Setup. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;