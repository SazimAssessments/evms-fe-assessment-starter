# Next.js Frontend Template

A frontend template with Next.js 15, TailwindCSS, and shadcn.

## Getting Started

1. Clone this template:
```bash
git clone <your-repo-url>
cd your-project-name
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Your app will be running at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── form/            # Form page example
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # Reusable UI components
│   └── ui/             # Shadcn UI components
├── lib/                 # Utility functions
├── modules/            # Feature-based modules
│   └── application-form/# Example form module
└── public/             # Static assets
```

## Pre-configured Features

### Styling
- TailwindCSS and shadcn

### Forms and Validation
- React Hook Form for form management
- Zod schema validation

### Development Tools
- ESLint with Next.js and React configurations
- Prettier for code formatting
