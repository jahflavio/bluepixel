const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const start = txt.indexOf('const MultiStepContact =');
const end = txt.indexOf('const SolutionDrawer =', start);

const block = txt.substring(start, end);

// Find the last </section> in the block
const lastSectionClose = block.lastIndexOf('</section>');

if (lastSectionClose !== -1) {
    // Insert an extra </div> before it
    const newBlock = block.substring(0, lastSectionClose) + '</div>\n        ' + block.substring(lastSectionClose);
    txt = txt.replace(block, newBlock);
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("Robust fix applied: inserted missing </div>");
} else {
    console.error("Could not find </section> in MultiStepContact");
}
