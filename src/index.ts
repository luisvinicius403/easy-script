import fs from 'fs';
import chalk from 'chalk';
import { lexicalAnalyzer } from './analysis/lexical/index.js';
import { syntaxAnalyzer } from './analysis/syntatic/index.js';

// Read the code from code.txt
fs.readFile('./src/code.txt', 'utf8', (err, code) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Print the source code
  console.log(`${chalk.magenta('Source Code Read:')}\n${code}\n\n`);

  // Run the lexical analysis
  const tokens = lexicalAnalyzer(code);

  // Print the tokens with line numbers
  console.log(`${chalk.magenta('Tokens Generated:')}\n`, tokens);

  // Run the syntatic analysis
  const tree = syntaxAnalyzer(tokens);

  // Print the syntatic tree
  console.log(`${chalk.magenta('\nSyntatic Tree:')}\n`, tree);
});
