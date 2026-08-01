import React from 'react';
import sponsorsData from '../data/sponsors.json';

function CenteredLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-xs text-zinc-300 font-mono mb-8 rounded-full">
      // {children}
    </div>
  );
}

function SponsorRewards() {
  const sponsorsCategories = sponsorsData?.sponsorsSection?.categories ?? [];
  
  // Extract sponsors with rewards
  const rewardSponsors = sponsorsCategories.flatMap(cat => 
    (cat.sponsors || []).filter(s => s.rewards)
  );

  if (rewardSponsors.length === 0) return null;

  return (
    <section id="sponsor-rewards" data-fade className="py-24 px-4 sm:px-6 lg:px-10 relative">
      <div className="mx-auto max-w-[1100px] flex flex-col items-center">
        <CenteredLabel>BOUNTIES</CenteredLabel>
        <p className="text-center text-[25px] font-semibold uppercase tracking-[0.32em] text-[#c0c0c0] mb-6">
          SPONSOR TRACKS
        </p>
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-4">
          Exclusive <span className="text-zinc-400">Rewards</span>
        </h2>
        <p className="text-center text-zinc-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          Special prizes and credits provided by our ecosystem partners
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {rewardSponsors.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 hover:border-white/20 p-8 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-2 relative overflow-hidden backdrop-blur-md">
              <div className="flex justify-center items-center h-24 mb-8 p-4 bg-transparent">
                <img src={s.logo} alt={s.name} className="rounded-full max-h-full max-w-full object-contain filter brightness-100 hover:brightness-125 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">{s.name}</h3>
              <div className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                {s.rewards}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsorRewards;
