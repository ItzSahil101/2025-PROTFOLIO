type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Sahil Jogi -3d protfolio",
    fullName: "Sahil Jogi",
    email: "sahiljogi2066@gmail.com",
  },
  hero: {
    name: "Sahil Jogi",
    p: ["I am a fullstack developer,", "Ethical Hacker, Python dev and Content Creator!!"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `💻 I'm a passionate Full-Stack Web Developer with 1.5 years of hands-on experience in building dynamic and scalable web applications. Alongside web development, I’m also a Python Developer and an Ethical Hacker with a strong foundation in Kali Linux, networking, and cybersecurity practices.

⚡ Over the years, I’ve developed and deployed multiple websites, crafted Python programs and software solutions, and explored practical hacking techniques to understand system vulnerabilities. My journey in tech started from deep curiosity—over the past 2 years, I’ve been continuously exploring new technologies, experimenting with real-world projects, and sharpening my problem-solving skills.

🌐 Whether it’s designing user-friendly web apps, automating with Python, or securing systems against threats, I love working at the intersection of development and cybersecurity to build efficient, secure, and future-ready solutions.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Web Based Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
