const fs = require('fs');
const path = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// The exact corrupted text to find
const searchStr = `{/* ==================================================
                <line x1="20" y1="20" x2="80" y2="20" stroke="#22d3ee" strokeWidth="2.5" />`;

const replaceStr = `{/* ==================================================
            SLIDE 6: CORE ROADSIDE SERVICES
            ================================================== */}
        <section
          id="slide-5"
          className="min-h-[100dvh] h-auto lg:h-screen w-full snap-start flex flex-col justify-between bg-[#020811] px-6 pt-[68px] pb-1.5 relative overflow-hidden animate-[fadeIn_0.5s_ease-out]"
          style={{backgroundImage:'radial-gradient(ellipse at 50% 30%, rgba(47,128,255,0.06) 0%, transparent 65%)'}}
        >
          {/* ── UPPER HERO HEADER SECTION ── */}
          <div className="shrink-0 w-full h-[180px] relative rounded-xl border border-white/10 bg-slate-950/20 backdrop-blur-md overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-between">
            {/* Cinematic City Skyline Background Image */}
            <div 
              className="absolute inset-0 bg-[url('/rollback_truck_cinematic_hero_1778782614539.png')] bg-cover bg-center bg-no-repeat opacity-85 hover:scale-102 transition-transform duration-1000"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-950/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-cyan-500/[0.02] mix-blend-overlay z-10" />

            {/* Left Column: Title, Section & Description Info */}
            <div className="relative z-20 ml-6 my-3 p-6 rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/10 max-w-[650px] flex flex-col justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <div className="text-[11px] font-black text-cyan-400 uppercase tracking-[0.25em] mb-1">
                CORE ROADSIDE SERVICES
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase leading-none mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Integrated RSA & Recovery Operations
              </h2>
              <p className="text-[12px] text-slate-200 leading-relaxed font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                <span className="text-[#2F80FF] font-bold">NationwideRoadsideAssist</span> delivers integrated roadside coordination and recovery operations through intelligent dispatch systems, nationwide provider ecosystems, and enterprise mobility support infrastructure.
              </p>
            </div>

            {/* Floating Drone Hover Overlay */}
            <div className="absolute top-2 right-[460px] z-20 flex flex-col items-center pointer-events-none select-none">
              <svg viewBox="0 0 100 50" className="w-14 h-8 text-cyan-400 animate-bounce duration-[4000ms]">
                {/* Arms & Rotors */}
                <line x1="20" y1="20" x2="80" y2="20" stroke="#22d3ee" strokeWidth="2.5" />`;

// Normalize line endings for replacement
const contentNormalized = content.replace(/\r\n/g, '\n');
const searchNormalized = searchStr.replace(/\r\n/g, '\n');

if (contentNormalized.includes(searchNormalized)) {
    content = contentNormalized.replace(searchNormalized, replaceStr);
    fs.writeFileSync(path, content, 'utf8');
    console.log('Successfully repaired Slide 6 header');
} else {
    console.log('Error: Could not find exact search string.');
}
