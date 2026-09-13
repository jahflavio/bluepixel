const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// The first replacement in the previous script failed because it looked for "export const HeroPromptEngine"
// instead of just "const HeroPromptEngine". 
// Also, because the placeholder replacement succeeded, placeholderText was undefined and crashed the app.

// Let's first undo the broken placeholder replacement if we need to, 
// or just inject the missing state variables and useEffect.
const targetLine = `  const [activePreset, setActivePreset] = React.useState ? React.useState(PRESETS[0]) : useState(PRESETS[0]);`;
// Wait, the actual line is:
// const [activePreset, setActivePreset] = useState(PRESETS[0]);

const searchStr = `  const [activePreset, setActivePreset] = useState(PRESETS[0]);`;
const replacement = `  const [activePreset, setActivePreset] = useState(PRESETS[0]);

  // Typewriter Effect State
  const [placeholderText, setPlaceholderText] = useState('');
  const [presetIndex, setPresetIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // We use React.useEffect to be absolutely safe in case useEffect isn't destructured
  (React.useEffect || useEffect)(() => {
    let timer;
    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2500); // Pause before deleting
      return () => clearTimeout(timer);
    }

    const currentPrompt = PRESETS[presetIndex].prompt;
    
    if (isDeleting) {
      if (placeholderText.length === 0) {
        setIsDeleting(false);
        setPresetIndex((prev) => (prev + 1) % PRESETS.length);
      } else {
        timer = setTimeout(() => {
          setPlaceholderText(currentPrompt.substring(0, placeholderText.length - 2)); // Fast delete
        }, 15);
      }
    } else {
      if (placeholderText.length === currentPrompt.length) {
        setIsPaused(true);
      } else {
        timer = setTimeout(() => {
          setPlaceholderText(currentPrompt.substring(0, placeholderText.length + 1));
        }, 40); // Typing speed
      }
    }
    return () => clearTimeout(timer);
  }, [placeholderText, isDeleting, isPaused, presetIndex]);`;

if (txt.includes('const [isDeleting, setIsDeleting]')) {
  console.log('The state already exists! We do not need to inject it again.');
} else {
  txt = txt.replace(searchStr, replacement);
  fs.writeFileSync('../index.html', txt, 'utf8');
  console.log('Successfully injected the typewriter state and useEffect.');
}
