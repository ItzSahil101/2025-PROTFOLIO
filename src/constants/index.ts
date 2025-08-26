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

import pustak from "../assets/web/pustak.png";
import nepcart from "../assets/web/nepcart.png";
import qr from "../assets/web/qr.png";
import webnest from "../assets/web/wnh.png";
import chess from "../assets/web/chess.png";
import anime from "../assets/web/anime.png";
import bubble from "../assets/web/bubble.png";
import rps from "../assets/web/rps.png";
import tracker from "../assets/web/tracker.png";
import sahil from "../assets/web/itxsahil.png";
import news from "../assets/web/news.png";
import weather from "../assets/web/weather.png"


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
  },
    {
    id: "det",
    title: "About ME",
  },
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
    name: "Pustak Point",
    description:
      "MERN stack platform for students to register, earn points, download ebooks/notes, recharge via eSewa, access previews, leaderboards, and achievements.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "esewa", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
    ],
    image: pustak,
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
    image: nepcart,
    sourceCodeLink: "https://nepcart.vercel.app",
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
    image: webnest,
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
    image: sahil,
    sourceCodeLink: "https://itxsahil.netlify.app",
  },
  {
    name: "Chess Game",
    description: "Interactive chess game built with JavaScript for gameplay and logic.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html-css", color: "green-text-gradient" },
    ],
    image: chess,
    sourceCodeLink: "https://mjavadh.github.io/4X4-Collection/Technology/Terminal/index.html",
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
    image: anime,
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
    image: news,
    sourceCodeLink: "https://news-boys.vercel.app",
  },
  {
    name: "QR Generator",
    description: "Generates QR codes for URLs, text, and other data.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html-css", color: "green-text-gradient" },
    ],
    image: qr,
    sourceCodeLink: "https://qrgenxyz.netlify.app",
  },
  {
    name: "Rock Paper Scissor Game",
    description: "Classic rock-paper-scissor game implemented using JavaScript.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html-css", color: "green-text-gradient" },
    ],
    image: rps,
    sourceCodeLink: "https://rps-gamez.vercel.app",
  },
  {
    name: "Bubble Game",
    description: "Interactive bubble popping game built with JavaScript and CSS animations.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: bubble,
    sourceCodeLink: "https://itxsahil.netlify.app/bbl",
  },
  {
    name: "Weather Forecast",
    description: "Shows real-time weather data using APIs with responsive UI.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
    ],
    image: weather,
    sourceCodeLink: "https://itxsahil.netlify.app/sky",
  },
  {
    name: "Device Tracker",
    description: "Tracks locations of devices/users on a map in real-time.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "map-api", color: "green-text-gradient" },
    ],
    image: tracker,
    sourceCodeLink: "https://mjavadh.github.io/4X4-Collection/Technology/Terminal/index.html",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
