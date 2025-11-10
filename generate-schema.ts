import { generateDomainV1JsonSchema } from '@awesome-pages/parser';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generate the JSON Schema
const schema = {
	$id: 'https://awesome-pages.github.io/schemas/domain/v1.json',
	...generateDomainV1JsonSchema(),
};

// Create output directory
const outputDir = join(__dirname, 'domain');
mkdirSync(outputDir, { recursive: true });

// Write the schema file
const outputPath = join(outputDir, 'v1.json');
writeFileSync(outputPath, JSON.stringify(schema, null, 2));

console.log(`✅ JSON Schema generated successfully at: ${outputPath}`);
