import socialBlogCover from "../assets/projects/social-blog/cover.jpg";
import bonsaiCover from "../assets/projects/bonsai-landing/cover.jpg";
import interactiveCardCover from "../assets/projects/interactive-card/cover.jpg";
import pokedexCover from "../assets/projects/pokedex/cover.jpg";
import weatherCover from "../assets/projects/weather-app/cover.jpg";

export const projects = [
  // --- Featured / Selected Work ---
  {
    slug: "video-organizer",
    title: "Video Organizer",
    category: "featured",
    year: 2025,
    isPlaceholder: true,
    shortDescription: "Case study content pending.",
    tags: ["React", "Node.js"],
    links: {},
    images: { cover: null },
    caseStudy: {
      overview:
        "This case study is still being written up. Add the project description, the problem it solves, the stack, screenshots and links here before publishing.",
    },
  },
  {
    slug: "social-blog",
    title: "Social Blog",
    category: "featured",
    year: 2024,
    shortDescription:
      "A full-stack social blogging platform where users create accounts, publish posts with images, and explore content from other members.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    links: {
      demo: "https://blog-social-frontend.vercel.app/",
      github: "https://github.com/AlexFranciscoDev/Blog-social-frontend",
    },
    images: { cover: socialBlogCover },
    caseStudy: {
      overview:
        "Social Blog is a MERN-stack blogging platform built to practice the full loop of a production web app: authenticated users, CRUD content, image uploads and a REST API consumed by a React frontend.",
      problem:
        "Most of my professional experience is on WordPress, where content management is handled by the platform itself. I wanted to prove I could build that kind of experience — accounts, posts, media — from scratch, owning both the API and the client.",
      solution:
        "A REST API built with Node, Express and MongoDB handles authentication (JWT), posts and image uploads. The React frontend, styled with Tailwind CSS, consumes that API directly through a small set of typed request helpers.",
      features: [
        "Email and password authentication with JWT sessions",
        "Create, edit and delete posts, including image uploads",
        "Public feed to browse posts from other users",
        "Responsive layout built with Tailwind CSS",
      ],
      challenges:
        "Designing an API that stayed simple while still handling authentication, ownership checks (a user can only edit their own posts) and file uploads was the main challenge — it's the part of full-stack work that WordPress normally hides from you.",
      learnings:
        "This is the project where REST API design, JWT auth and MongoDB schema design stopped being course material and became things I'd actually built and debugged in a working app.",
    },
  },
  {
    slug: "bonsai-landing",
    title: "Bonsai Pricing Page",
    category: "featured",
    year: 2023,
    shortDescription:
      "A pixel-focused recreation of a SaaS pricing page, built to practice component structure and precise, responsive layout.",
    tags: ["React", "SASS", "Responsive Layout"],
    links: {
      demo: "https://bonsai-app-alex-francisco-dev.netlify.app/",
      github: "https://github.com/AlexFranciscoDev/Bonsai_app",
    },
    images: { cover: bonsaiCover },
    caseStudy: {
      overview:
        "A front-end-only rebuild of Bonsai's pricing page, focused entirely on layout precision — spacing, alignment and responsive behavior — rather than backend logic.",
      problem:
        "Most of my WordPress work uses page builders where layout decisions are made for you. I wanted deliberate practice translating a real design into markup and CSS by hand, with no shortcuts.",
      solution:
        "The page is broken down into small, styled React components with SASS, matching the source's spacing and typography scale as closely as possible across breakpoints.",
      features: [
        "Component-based layout matching the source design section by section",
        "Responsive behavior tested across mobile, tablet and desktop",
        "SASS structure with variables for spacing and color",
      ],
      challenges:
        "Getting the responsive breakpoints to match the source design's rhythm — not just stacking on mobile, but preserving the same visual proportions — took more iteration than expected.",
      learnings:
        "It sharpened how I read a design and translate it into a layout system, instead of eyeballing spacing.",
    },
  },

  // --- Other Projects / Experiments ---
  {
    slug: "interactive-card",
    title: "Interactive Card",
    category: "other",
    year: 2023,
    shortDescription: "A credit card form that updates a live preview as you type, with full validation.",
    tags: ["React", "CSS"],
    links: {
      demo: "https://interactive-card-alex-francisco-dev.netlify.app",
      github: "https://github.com/AlexFranciscoDev/Interactive-card",
    },
    images: { cover: interactiveCardCover },
  },
  {
    slug: "pokedex",
    title: "Pokédex",
    category: "other",
    year: 2022,
    shortDescription: "A Pokémon browser built on PokeAPI, with search and paginated navigation.",
    tags: ["React", "REST API"],
    links: {
      demo: "https://pokedex-alex-francisco-dev.netlify.app",
      github: "https://github.com/AlexFranciscoDev/Pokedex_app",
    },
    images: { cover: pokedexCover },
  },
  {
    slug: "weather-app",
    title: "Weather App",
    category: "other",
    year: 2022,
    shortDescription: "Current and forecast weather by city, powered by the OpenWeatherMap API.",
    tags: ["React", "REST API"],
    links: {
      demo: "https://weather-app-alex-francisco-dev.netlify.app",
      github: "https://github.com/AlexFranciscoDev/Weather_app",
    },
    images: { cover: weatherCover },
  },
];
