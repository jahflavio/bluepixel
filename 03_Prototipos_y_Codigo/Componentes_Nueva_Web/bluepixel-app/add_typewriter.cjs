const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const oldComponentStart = `export const HeroPromptEngine = ({ onSelectSolution }) => {
  const [inputVal, setInputVal] = useState('');
  const [activePreset, setActivePreset] = useState(PRESETS[0]);`;

const newComponentStart = `export const HeroPromptEngine = ({ onSelectSolution }) => {
  const [inputVal, setInputVal] = useState('');
  const [activePreset, setActivePreset] = useState(PRESETS[0]);

  // Typewriter Effect State
  const [placeholderText, setPlaceholderText] = useState('');
  const [presetIndex, setPresetIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
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
  }, [placeholderText, isDeleting, isPaused, presetIndex]);
`;

txt = txt.replace(oldComponentStart, newComponentStart);

// Now replace the placeholder string in the input
const oldInput = `placeholder="Describe un cuello de botella de tu empresa (o selecciona un ejemplo)..."`;
const newInput = `placeholder={placeholderText || "Escribe o selecciona un caso..."}`;

txt = txt.replace(oldInput, newInput);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Added typewriter effect to HeroPromptEngine placeholder');
