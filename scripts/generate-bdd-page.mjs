import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const content = await fs.readFile(path.join(__dirname, 'bdd-template.tsx'), 'utf-8');
await fs.writeFile(path.join(__dirname, '../app/bdd-testing-guide/page.tsx'), content);
console.log('Done');
