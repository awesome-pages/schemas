# @awesome-pages/schemas

JSON Schema definitions for Awesome Pages domain objects.

This package automatically generates and publishes JSON Schemas based on the [`@awesome-pages/parser`](https://github.com/awesome-pages/parser) package.

## � Related Projects

- **[awesome-pages/parser](https://github.com/awesome-pages/parser)** - Parse awesome lists into structured data
- **[awesome-pages/parser-action](https://github.com/awesome-pages/parser-action)** - GitHub Action for parsing awesome lists

## Live Schemas

All schemas are automatically published to GitHub Pages:

**🔗 https://awesome-pages.github.io/schemas**

### Available Schemas

- **Domain Schema v1**: https://awesome-pages.github.io/schemas/domain/v1.json

## Usage

Reference the schemas in your JSON files using the `$schema` property:

```json
{
  "$schema": "https://awesome-pages.github.io/schemas/domain/v1.json",
  "metadata": {
    "title": "My Awesome List",
    "description": "A curated list of awesome resources"
  },
  "items": []
}
```

## Development

### Prerequisites

- Node.js 20+
- pnpm 8+

### Install Dependencies

```bash
pnpm install
```

### Generate Schemas

```bash
pnpm run generate
```

This will:
1. Import `generateDomainV1JsonSchema` from `@awesome-pages/parser`
2. Generate the JSON Schema
3. Save it to `domain/v1.json`

## Deployment

Schemas are automatically deployed to GitHub Pages on every push to `main` branch via GitHub Actions.

The workflow:
1. Installs dependencies
2. Generates JSON schemas
3. Creates an HTML index page
4. Deploys to GitHub Pages

## Package Structure

```
schemas/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── generate-schema.ts          # Schema generation script
├── package.json
├── tsconfig.json
├── biome.json
└── README.md
```

## Updates

This package automatically uses the latest published version of `@awesome-pages/parser`. 

To update the schemas with the latest parser version:
1. Ensure `@awesome-pages/parser` has published its latest version to npm
2. Update the dependency: `pnpm update @awesome-pages/parser`
3. Run `pnpm run generate` to regenerate schemas
4. Commit and push to trigger automatic deployment

## License

MIT
