import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    bootstrap,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    aqol,
    itnetwork,
    tesla,
    shopify,
    pojistenci,
    portfolio,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "O mě",
    },
    {
      id: "work",
      title: "Práce",
    },
    {
      id: "contact",
      title: "Kontakt",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "React Native Developer",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
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
      name: "Bootstrap",
      icon: bootstrap,
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
    /*{
      name: "docker",
      icon: docker,
    },*/
  ];
  
  const experiences = [
    {
      title: "Projektant",
      company_name: "AQOL",
      icon: aqol,
      iconBg: "#383E56",
      date: "r.2017 - do teď",
      points: [
        "Projektování všech stupní projektové dokumentace.",
      ],
    },
    {
      title: "Rekvalifikační kurz",
      company_name: "ITnetwork",
      icon: itnetwork,
      iconBg: "#E6DEDD",
      date: "r.2022 - r.2023",
      points: [
        "Rekvalifikační kurz WWW aplikací JavaScript",
        "Výstupem kurzu byl projekt evidence pojistníků",
      ],
    },
  ];
  
    
  const projects = [
    {
      name: "Projekt z rekvalifikace ITnetwork",
      description:
        "Webová aplikace, která vypisuje tabulku z formuláře a ukládá ji do paměti u uživatele. V rámci zpracování bylo použito OOP",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: pojistenci,
      source_code_link: "https://github.com/FaRys11/Gottwald_Aplikace",
    },
    {
      name: "Vlastní portfolio",
      description:
        "Moje vlastní protfolio s využitím three.js. Interaktivní modely a plně responzivní webová stránka",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Three.js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/FaRys11/Portfolio",
    },
  ];
  
  export { services, technologies, experiences, projects };