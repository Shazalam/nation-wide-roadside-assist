const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const lines = content.split('\n');
const fixedLines = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('{/* Side dot navigation indicators */}')) {
        // If we hit a duplicate Side dot nav at line 2632, we know we've gone too far.
        // Wait, the FIRST one is around 2598!
        // Let's just truncate the file where the duplication starts.
        if (i > 2600) {
            // we are in the duplicated area!
            // Let's stop copying.
            break;
        }
    }
    fixedLines.push(line);
}

// Ensure we finish the Next Slide button, div, div, ); }
// The duplicated area started at line 2632, cutting off the button:
// 2628:         <button
// 2629:           onClick={() => currentSlide < slides.length - 1 && scrollToSlide(currentSlide + 1)}
// 2630:           disabled={currentSlide === slides.length - 1}
// 2631:           className="p-2 rounded-xl border border-white/10 bg-slate-950/60 backdrop-blur-md text-white/80 hover:text-white hover:bg-slate-900 disabled:opacity-30 disabled:pointer-events-none transition"
// 2632:       {/* Side dot navigation indicators */}

let text = fixedLines.join('\n');
text += `
          aria-label="Next Slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  </div>
  );
}
`;

fs.writeFileSync(file, text);
console.log("File fixed!");
