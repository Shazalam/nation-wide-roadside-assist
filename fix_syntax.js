const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The problematic string
const badString = `                      {[
                        { icon: Building2, label: "ENTERPRISE\nPARTNER" },
                        { icon: Headset, label: "24/7 RSA\nINTAKE" },
                        { icon: BrainCircuit, label: "AI DISPATCH\nCOORDINATION" },
                        { icon: Users, label: "VENDOR\nASSIGNMENT" },
                        { icon: MapPin, label: "GPS\nMONITORING" },
                        { icon: AlertTriangle, label: "ESCALATION\nMANAGEMENT" },
                        { icon: CheckCircle2, label: "RESOLUTION &\nREPORTING" }
                      ].map((step, idx) => (`;

const goodString = `                      {[
                        { icon: Building2, label: "ENTERPRISE\\nPARTNER" },
                        { icon: Headset, label: "24/7 RSA\\nINTAKE" },
                        { icon: BrainCircuit, label: "AI DISPATCH\\nCOORDINATION" },
                        { icon: Users, label: "VENDOR\\nASSIGNMENT" },
                        { icon: MapPin, label: "GPS\\nMONITORING" },
                        { icon: AlertTriangle, label: "ESCALATION\\nMANAGEMENT" },
                        { icon: CheckCircle2, label: "RESOLUTION &\\nREPORTING" }
                      ].map((step, idx) => (`;

if (content.includes(badString)) {
    content = content.replace(badString, goodString);
    fs.writeFileSync(file, content);
    console.log('Fixed unterminated strings.');
} else {
    // maybe line endings differ? Let's just use regex for each line
    console.log('Exact string not found. Using line-by-line replacement.');
    content = content.replace(/label: "ENTERPRISE\r?\nPARTNER"/, 'label: "ENTERPRISE\\nPARTNER"');
    content = content.replace(/label: "24\/7 RSA\r?\nINTAKE"/, 'label: "24/7 RSA\\nINTAKE"');
    content = content.replace(/label: "AI DISPATCH\r?\nCOORDINATION"/, 'label: "AI DISPATCH\\nCOORDINATION"');
    content = content.replace(/label: "VENDOR\r?\nASSIGNMENT"/, 'label: "VENDOR\\nASSIGNMENT"');
    content = content.replace(/label: "GPS\r?\nMONITORING"/, 'label: "GPS\\nMONITORING"');
    content = content.replace(/label: "ESCALATION\r?\nMANAGEMENT"/, 'label: "ESCALATION\\nMANAGEMENT"');
    content = content.replace(/label: "RESOLUTION &\r?\nREPORTING"/, 'label: "RESOLUTION &\\nREPORTING"');
    fs.writeFileSync(file, content);
    console.log('Fixed using regex.');
}
