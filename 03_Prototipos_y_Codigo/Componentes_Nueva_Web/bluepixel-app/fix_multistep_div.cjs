const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Find the end of MultiStepContact
const start = txt.indexOf('const MultiStepContact =');
const end = txt.indexOf('const SolutionDrawer =', start);

// Extract the end of the MultiStepContact component
const block = txt.substring(end - 400, end);

// We want to replace:
//              </div>
//            </div>
//          </div>
//        </section>
// With an extra </div> to close the <div className="lg:w-7/12 w-full">

const oldEnd = `              </div>
            </div>
          </div>
        </section>
      );
    };`;

const newEnd = `              </div>
            </div>
          </div>
          </div>
        </section>
      );
    };`;

if (txt.includes(oldEnd)) {
    // We only want to replace the LAST occurrence within MultiStepContact
    // Let's do a replace on the substring, then put it back
    const newBlock = block.replace(oldEnd, newEnd);
    txt = txt.replace(block, newBlock);
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("Fixed the unclosed div in MultiStepContact!");
} else {
    console.error("Could not find the end block to replace.");
}
