const NavLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const projectsData = [
  {
    id: 1,
    title: "PicShareHub",
    description:
      "PicShareHub is a straightforward and engaging platform for sharing images with others. Users can easily upload images, and the platform provides a convenient way to share the uploaded image's URL. The project consists of a React frontend for user interaction and a Node.js backend for image handling and storage.",
    image: "/images/projects/picShareHub.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Real-Time Web Chat",
    description:
      "This project is a real-time web chat application that enables users to communicate instantly using WebSocket technology provided by Socket.IO.",
    image: "/images/projects/webchat.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "NumberQuest",
    description:
      "NumberQuest is a web-based game built with React, challenging players to guess a randomly generated 5-digit number using hints and real-time feedback. The game incorporates React Icons for stylish iconography.",
    image: "/images/projects/numberQuest.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "GTA 6 - MERN",
    description: "MERN - MongoDB, Express, React, Node.js",
    image: "/images/projects/gta6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "TelegramIpLoggerInSite",
    description:
      "This project is a simple web-based tool designed to log information about new users accessing a website and send the data to a designated Telegram channel. It utilizes JavaScript and the Telegram Bot API to capture and communicate user details.",
    image: "/images/projects/ipLogger.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "GreenMind Shop",
    description:
      "This is a simple React-based e-commerce application named GreenMind Shop. It allows users to browse products, search for specific items, and manage their shopping basket.",
    image: "/images/projects/greenMind.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "RikkyUserBot",
    description:
      "RikkyUserBot is your interactive multifunctional assistant in Telegram.",
    image: "/images/projects/rikkyUserBot.png",
    tag: ["All", "Python"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "TelegramRat",
    description: "Warrior controlled via a telegram bot.",
    image: "/images/projects/rat.webp",
    tag: ["All", "Python"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "OpenGPT",
    description:
      "OpenGPT is a free and open source project that uses the openai API to work.",
    image: "/images/projects/opengpt.png",
    tag: ["All", "Cpp"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

export { NavLinks, TAB_DATA, projectsData, achievementsList };
