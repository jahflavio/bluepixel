const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const appStart = txt.indexOf('const App = () => {');
const returnStart = txt.indexOf('return (', appStart);
const returnEnd = txt.indexOf(');', returnStart);

const oldReturnBlock = txt.substring(returnStart, returnEnd + 2);

const newReturnBlock = `return (
        <div className="min-h-screen">
          <Navbar onOpenContact={() => scrollToForm()} />
          <HeroWithPrompt 
            onSelectSolution={(sol) => setSelectedSolution(sol)} 
            onOpenContact={() => scrollToForm()}
          />
          <SocialProofSection />
          <WorkflowTeardown />
          <AgentTerminalDemo />
          <AgenticTechStack />
          <TechPartners />
          <CaseStudiesSection onOpenCase={(client) => scrollToForm(client)} />
          <ROICalculator onOpenContact={(data) => scrollToForm(data)} />
          <ThreeWaysToWork onSelectPackage={(pkg) => scrollToForm(pkg)} />
          <EngineeringLeadership />
          <FinalCTA onOpenContact={() => scrollToForm()} />
          
          <MultiStepContact />
          <SolutionDrawer 
            solution={selectedSolution} 
            onClose={() => setSelectedSolution(null)} 
            onOpenContact={() => scrollToForm()} 
          />
        </div>
      );`;

txt = txt.replace(oldReturnBlock, newReturnBlock);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Fixed App component JSX structure!");
