import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  backend,
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

// import pustak from "../assets/web/pustak.png";
// import nepcart from "../assets/web/nepcart.png";
// import qr from "../assets/web/qr.png";
// import webnest from "../assets/web/wnh.png";
// import chess from "../assets/web/chess.png";
// import anime from "../assets/web/anime.png";
// import bubble from "../assets/web/bubble.png";
// import rps from "../assets/web/rps.png";
// import tracker from "../assets/web/tracker.png";
// import sahil from "../assets/web/itxsahil.png";
// import news from "../assets/web/news.png";
// import weather from "../assets/web/weather.png"


export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services: TService[] = [
  {
    title: "Website Developer",
    icon: web,
  },
  {
    title: "Ethical Hacker",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
    {
    title: "Python Coder",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Fullstack Web Developer",
    companyName: "Self-Employed",
    icon: web,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Built multiple responsive websites with modern frameworks like React, Node.js, and MongoDB.",
      "Developed and deployed fullstack projects using MERN stack.",
      "Implemented secure authentication, payment integration (eSewa), and dynamic dashboards.",
      "Explored SEO optimization, responsive design, and high-performance frontend practices.",
    ],
  },
  {
    title: "Python Developer",
    companyName: "Self Projects",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Built custom Python scripts for automation and data processing.",
      "Created standalone software solutions improving productivity.",
      "Worked with APIs and integrated Python with web apps.",
      "Explored AI/ML libraries while experimenting with small projects.",
    ],
  },
  {
    title: "Ethical Hacker & Cybersecurity Explorer",
    companyName: "Independent",
    icon: mobile,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Gained hands-on experience with Kali Linux and penetration testing tools.",
      "Performed ethical hacking attacks in controlled environments.",
      "Studied networking, OSINT, and system vulnerabilities.",
      "Leveraged cybersecurity knowledge to make my own apps more secure.",
    ],
  },
  {
    title: "Tech Explorer & Content Creator",
    companyName: "YouTube & Personal Brand",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Created tech-related content around coding, hacking, and mindset.",
      "Shared knowledge in web development, Python, and cybersecurity.",
      "Explored new technologies out of curiosity and documented learnings.",
      "Built personal projects to sharpen skills and inspire others.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Working with him was amazing. He built us a secure and scalable web app, exactly how we envisioned.",
    name: "Client A",
    designation: "Startup Founder",
    company: "TechNova",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    testimonial:
      "His mix of development and cybersecurity knowledge is rare. He not only built the platform but also ensured it was safe from vulnerabilities.",
    name: "Client B",
    designation: "CTO",
    company: "SecureTech",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    testimonial:
      "Brilliant fullstack developer with deep curiosity in tech. From coding to ethical hacking, he delivers value in every project.",
    name: "Client C",
    designation: "Manager",
    company: "InnovateHub",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
];

const projects: TProject[] = [
   {
    name: "ZoReelto",
    description:
      "A startup level website! Where user can scroll and see food and order it like a reel and seller can upload there reel and food details!!",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "reels", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
    ],
    image: "data:image/jpeg;base64,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",
    sourceCodeLink: "https://youtu.be/tGEcDozWFEk?si=T7eRBj1IhSHXdqpm",
  },
 {
    name: "Pustak Point",
    description:
      "MERN stack platform for students to register, earn points, download ebooks/notes, recharge via eSewa, access previews, leaderboards, and achievements.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "esewa", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
    ],
    image: "https://i.imgur.com/A8LIcNz.png",
    sourceCodeLink: "https://pustak-hubx.vercel.app",
  },
  {
    name: "NepCart",
    description:
      "Ecommerce shopping platform for online sales, product browsing, and order management with a user-friendly interface.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: "https://i.imgur.com/Qb6rlBW.png",
    sourceCodeLink: "https://nepcart.vercel.app",
  },
    {
    name: "AI CODE REVIEWER",
    description:
      "A AI powered website where you can paste your code and ai will review it and make it better!!",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "Gemini AI", color: "pink-text-gradient" },
    ],
    image: "data:image/png;base64,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",
    sourceCodeLink: "https://ai-crx.vercel.app",
  },
  {
    name: "WebNestHub",
    description:
      "Website selling platform with secure checkout, responsive design, product listings, and order tracking.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "bootstrap", color: "green-text-gradient" },
      { name: "mern", color: "pink-text-gradient" },
    ],
    image: "https://i.imgur.com/D80bxz5.png",
    sourceCodeLink: "https://web-nex.vercel.app",
  },
  {
    name: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and experience after completing frontend development journey.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: "https://i.imgur.com/mEH1L4j.png",
    sourceCodeLink: "https://itxsahil.netlify.app",
  },
  {
    name: "Anime Info Website",
    description:
      "Platform to search anime, watch trailers, view details, and follow the latest news.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "https://i.imgur.com/CfBqsaR.png",
    sourceCodeLink: "https://anime-versee.netlify.app",
  },
   {
    name: "NewsBoy",
    description:
      "Daily news aggregator fetching news from various topics for easy browsing.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
    ],
    image: "https://i.imgur.com/FTBp9pR.png",
    sourceCodeLink: "https://news-boys.vercel.app",
  },
  {
    name: "QR Generator",
    description: "Generates QR codes for URLs, text, and other data.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html-css", color: "green-text-gradient" },
    ],
    image: "https://i.imgur.com/nbX7Asz.png",
    sourceCodeLink: "https://qrgenxyz.netlify.app",
  },
  {
    name: "Rock Paper Scissor Game",
    description: "Classic rock-paper-scissor game implemented using JavaScript.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html-css", color: "green-text-gradient" },
    ],
    image: "https://i.imgur.com/3jlk6qO.png",
    sourceCodeLink: "https://rps-gamez.vercel.app",
  },
  {
    name: "Weather Forecast",
    description: "Shows real-time weather data using APIs with responsive UI.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
    ],
    image: "https://i.imgur.com/pllXJGF.png",
    sourceCodeLink: "https://itxsahil.netlify.app/sky",
  },
  {
    name: "Device Tracker",
    description: "Tracks locations of devices/users on a map in real-time.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "map-api", color: "green-text-gradient" },
    ],
    image: "https://i.imgur.com/jZhrLbi.png",
    sourceCodeLink: "https://mjavadh.github.io/4X4-Collection/Technology/Terminal/index.html",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
