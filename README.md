# BlueHorizon

An animated, ocean-themed landing page for an ocean research and reef restoration collective.

## Description

BlueHorizon is a responsive single-page website built with React, TypeScript, Vite and Tailwind CSS. It includes an animated hero with rising bubbles and sun rays, a features grid, an interactive depth explorer, animated impact counters, expedition cards and a validated newsletter form. A production Docker setup with Nginx is included for deployment.

## Screenshot

![BlueHorizon landing page](/pic/Screenshot_16-10-2026_02623_localhost.jpeg)

> Placeholder: take a screenshot of the running site, save it as `docs/screenshot.png`, and it will appear here.

## Key Features

- Animated hero section with bubbles, sun rays and a wave divider
- Sticky glass-style navigation bar with a mobile drawer menu
- Six-card features grid (research, marine life, reefs, open data and more)
- Interactive depth explorer: a slider that moves through the four ocean zones, showing depth range, pressure, marine life and a fun fact
- Animated impact counters with a progress bar toward the 30% by 2030 ocean protection goal
- Expedition cards and a testimonial section
- Newsletter signup form with name and email validation and a success state
- Scroll-reveal animations that respect `prefers-reduced-motion`
- Custom ocean color palette and Outfit font
- Docker, Docker Compose and Nginx configuration for production

## Tech Stack

- React 19
- TypeScript 5
- Vite 7
- Tailwind CSS 4
- clsx and tailwind-merge
- vite-plugin-singlefile (bundles the build into one HTML file)
- Docker and Nginx (optional, for deployment)

## Prerequisites

- Node.js 20 or newer (includes npm). Download from https://nodejs.org
- Git (to clone the project)
- Docker Desktop (optional, only for the Docker steps)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Comelanggilesgiles/bluehorizon-ocean-landing-page.git
   ```

2. Move into the project folder:

   ```bash
   cd bluehorizon-ocean-landing-page
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

Start the development server:

```bash
npm run dev
```

Open http://localhost:5173 in your browser. The page reloads automatically when you edit a file.

Create a production build:

```bash
npm run build
```

The output is written to the `dist` folder. Preview it locally with:

```bash
npm run preview
```

## Run with Docker (optional)

Using Docker Compose:

```bash
docker compose up --build -d
```

Open http://localhost:8080. Stop it with:

```bash
docker compose down
```

Using plain Docker:

```bash
docker build -t bluehorizon/landing:latest .
docker run -d --name bluehorizon-web -p 8080:80 bluehorizon/landing:latest
```

## Project Structure

```
.
├── Dockerfile              Multi-stage build: Node build, then Nginx runtime
├── docker-compose.yml      Local container setup on port 8080
├── nginx.conf              SPA fallback, gzip, caching and security headers
├── index.html              Document shell, meta tags, font loading
├── package.json
├── vite.config.ts
└── src
    ├── main.tsx            Application entry point
    ├── App.tsx             Page layout and section order
    ├── index.css           Design tokens, animations and utilities
    ├── hooks
    │   └── useReveal.ts    Scroll-reveal and count-up logic
    ├── utils
    │   └── cn.ts           Class name merge helper
    └── components
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── Bubbles.tsx
        ├── Features.tsx
        ├── DepthExplorer.tsx
        ├── Stats.tsx
        ├── Expeditions.tsx
        ├── Newsletter.tsx
        ├── Footer.tsx
        └── Reveal.tsx
```

## Design Tokens

| Token   | Value     | Use                     |
| ------- | --------- | ----------------------- |
| `abyss` | `#03101f` | Page background         |
| `deep`  | `#061c33` | Deep sections           |
| `navy`  | `#0b2b4a` | Panels                  |
| `teal`  | `#0f6f83` | Gradients               |
| `aqua`  | `#35d6d0` | Primary buttons, accents|
| `foam`  | `#9ff5ec` | Text highlights         |
| `sand`  | `#f3e4cd` | Warm accents            |

## Author

Comelanggilesgiles - https://github.com/Comelanggilesgiles
