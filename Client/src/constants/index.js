import web from "../assets/web.png";
import backend from "../assets/backend.png";
import mobile from "../assets/mobile.png";
import project1 from "../assets/e-commerce.png";
import project2 from "../assets/brainwave.png";
import project3 from "../assets/nike.png";
import project4 from "../assets/mern.png";
import project5 from "../assets/Service.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Back-end Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  
];

export const projects = [
  {
    title: "Restuarent Application",
    image: project4,
    live: "mern-restaurant-zeta.vercel.app/",
    source: "https://github.com/Rathore-shubham/MERN_RESTAURANT",
    name: "Restuarent Application",
    description:
      "A comprehensive full-stack website built using the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates a fully responsive, interactive user experience with a well-structured backend and seamless frontend functionality.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name:"MongoDB",
        color: "blue-text-gradient",
      }
    ],
  },
  {
    title: "Service Provider Application",
    image: project5,
    live: "",
    source: "https://github.com/Rathore-shubham/Service-Provider-Application",
    name: "Service Provider Application",
    description:
      "Service Provider is a modern and responsive web application built using React and Tailwind CSS. It connects customers with trusted service providers across various categories, such as home cleaning, plumbing, electrical repairs, and more. The application offers a seamless user experience with an intuitive interface and dynamic functionality.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      // {
      //   name: "Node.js",
      //   color: "pink-text-gradient",
      // },
      // {
      //   name:"MongoDB",
      //   color: "blue-text-gradient",
      // }
    ],
  },
  {
    image: project1,
    live: "https://e-commerce-store-nine-orpin.vercel.app/",
    source: "https://github.com/Rathore-shubham/CodeAlpha_E-commerce-store",
    title: "E-commerce Website",
    description:
      "A user-friendly online platform designed for seamless shopping experiences, featuring intuitive navigation and responsive design. This project showcases my skills in full-stack development, incorporating technologies like React and Node.js to create a dynamic and engaging marketplace.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    image: project2,
    live: "https://brainwave-zeta-peach.vercel.app/",
    source:
      "https://github.com/Rathore-shubham/Brainwave",
    title:
      "Brainwave Modern Website",
    description:
      " Brainwave is an innovative platform designed to enhance cognitive functions and boost mental performance through interactive and engaging brain training exercises. The platform offers a variety of scientifically-backed games and activities aimed at improving memory, attention.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    title: "Nike Landing Page",
    image: project3,
    live: "https://nike-landing-page-tau-nine.vercel.app/",
    source: "https://github.com/Rathore-shubham/nike_landing_page",
    name: "Nike Landing Page",
    description:
      "This project is a clone of the Nike website built using React and Tailwind CSS. The goal is to replicate the design and functionality of the Nike website to practice frontend development skills. The project utilizes React for building the UI components and Tailwind CSS for styling.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
  },

  
];
export const techs = [
  "HTML5",
  "CSS3",
  "React",
  "Rails",
  "Ruby",
  "JavaScript",
  "SQL",
  "PostgreSQL",
  "jQuery",
  "Next.js",
  "UI",
  "UX",
  "Graphic",
  "Content",
  "Remote",
  "GitHub",
  "Git",
  "React Native",
  "Nest.js",
  "AWS",
  "Flutter",
];
