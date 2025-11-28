# EdisonTKP — AI Agent Custom Service Packages

A production-ready landing page website for EdisonTKP's AI agent consulting and implementation services.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC)

## Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Button, Card, Badge, Accordion)
- **Icons**: lucide-react
- **Layout**: Responsive, mobile-first, clean SaaS style
- **Deployment**: GitHub Pages ready

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and CSS variables
├── components/             # React components
│   ├── ui/                 # shadcn/ui components (Button, Card, etc.)
│   ├── Hero.tsx            # Hero section
│   ├── WhyAgents.tsx       # Why AI Agents section
│   ├── PackagesSection.tsx # Service packages grid
│   ├── HowItWorks.tsx      # Process timeline
│   ├── UseCases.tsx        # Industry use cases
│   ├── About.tsx           # About EdisonTKP
│   ├── FAQ.tsx             # Frequently asked questions
│   ├── Contact.tsx         # Contact form and CTA
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Site footer
├── config/                 # Configuration
│   └── content.ts          # All text content (easy to customize)
├── lib/                    # Utility functions
│   └── utils.ts            # cn() utility for classNames
└── .github/workflows/      # GitHub Actions
    └── deploy.yml          # GitHub Pages deployment
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AI-Agents-Builder/ai-agents-edisontkp.git
cd ai-agents-edisontkp

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Customizing Content

All text content is centralized in `config/content.ts`. You can easily update:

- **Brand info**: Site name, tagline, description, email
- **Hero section**: Headline, subheadline, bullet points, CTAs
- **Why AI Agents**: Feature cards
- **Service Packages**: All 6 package tiers with pricing, features, and descriptions
- **How It Works**: Process steps
- **Use Cases**: Industry cards
- **About section**: Description and highlights
- **FAQs**: Questions and answers

### Example: Updating a Package

```typescript
// config/content.ts
export const packages = [
  {
    id: "pilot",
    tier: "Special",
    name: "AI Agent Pilot",
    price: "RM6,800",
    duration: "2–3 weeks",
    forWho: "Anyone wanting to start with a focused proof-of-concept",
    includes: [
      "1 core agent",
      "1 real workflow on real data",
      // ... more items
    ],
    highlighted: true,
    badge: "Most Popular"
  },
  // ... more packages
]
```

## Deploying to GitHub Pages

### Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages when you push to the `main` branch.

### Setup Steps

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Under "Build and deployment", select "GitHub Actions"

2. **Custom Domain (Optional)**:
   - Add your domain in the `CNAME` file
   - Configure DNS settings with your domain provider

3. **Push to main**:
   ```bash
   git push origin main
   ```

The site will be available at `https://aiagent.edisontkp.com` (or your GitHub Pages URL).

### Manual Build

```bash
# Build static export
npm run build

# The output will be in the ./out directory
```

## Customizing Styles

### Color Palette

The color palette is defined in `app/globals.css` using CSS custom properties:

```css
:root {
  --primary: 221.2 83.2% 53.3%;     /* Blue accent */
  --background: 0 0% 100%;           /* White background */
  --foreground: 222.2 84% 4.9%;      /* Dark text */
  /* ... more variables */
}

.dark {
  --primary: 217.2 91.2% 59.8%;      /* Lighter blue for dark mode */
  --background: 222.2 84% 4.9%;      /* Dark background */
  /* ... more variables */
}
```

### Tailwind Configuration

Extended theme configuration is in `tailwind.config.ts`.

## SEO

SEO metadata is configured in `app/layout.tsx`:

- Title and description
- Open Graph tags
- Twitter cards
- Robots configuration

## License

This project is private. All rights reserved.

## Contact

- Website: [aiagent.edisontkp.com](https://aiagent.edisontkp.com)
- Email: hello@edisontkp.com
