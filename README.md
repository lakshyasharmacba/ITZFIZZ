# Scroll-Driven Hero Section Animation

A hero section built for the Itzfizz web development internship assignment. It has a letter-spaced headline, animated impact stats, and a car image that moves with the page scroll.

## Live Demo

https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/

## Features

- Full-screen hero section (above the fold)
- Letter-spaced headline: `W E L C O M E  I T Z F I Z Z`
- Headline letters fade in one by one on page load (staggered reveal)
- Stats animate in one by one with a small delay
- Car image moves based on scroll progress (not autoplay)
- Smooth motion using GSAP `scrub`, so scrolling back reverses the animation
- Only `transform` and `opacity` are animated, so there is no layout reflow

## Tech Stack

- HTML, CSS, JavaScript
- React (with Vite)
- Tailwind CSS
- GSAP + ScrollTrigger
- `@gsap/react` (`useGSAP` hook)

## How It Works

**Load animation:** A GSAP timeline first reveals each headline letter with `stagger`, then reveals the stats one by one.

**Scroll animation:** GSAP ScrollTrigger is linked to the hero section.
- `scrub: 1` ties the animation to scroll position and adds smoothing
- `pin: true` keeps the hero on screen while the car moves
- The car animates only `y` and `scale` (transform properties)

## Project Structure

```
animation/
├── src/
│   ├── assets/
│   │   └── car.png        # car image
│   ├── components/
│   │   └── Hero.jsx       # hero layout + all animations
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          # Tailwind import
├── index.html
├── vite.config.js
└── package.json
```

## Run Locally

```bash
npm install
npm run dev
```

Open the link shown in the terminal (for example `http://localhost:5173/YOUR-REPO-NAME/`).

## Deploy to GitHub Pages

```bash
npm run deploy
```

Then in the GitHub repo go to **Settings → Pages**, choose the `gh-pages` branch and save.

Note: the `base` value in `vite.config.js` must match the GitHub repository name.