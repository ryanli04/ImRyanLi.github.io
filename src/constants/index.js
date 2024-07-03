import { three } from "maath";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    typescript,
    html,
    css,
    cpp,
    python,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    airbnbclone,
    lidar,
    pathfind,
    retaildata,
    mes,
    peel,
    first,
    lego,
    cell
  } from "../assets";
  
  export const navLinks = [
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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Student",
      icon: creator,
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
      name: "Next JS",
      icon: redux,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Infrastructure Team",
      company_name: "McMaster Engineering Society",
      icon: mes,
      iconBg: "#383E56",
      date: "Sep 2023 - April 2024",
      points: [
        "Designed, developed, and maintained the McMaster Engineering Society website using HTML, Tailwind CSS, TypeScript, and Next.js.",
        "Utlizied Git for version control and collaborated with team members through platforms like Github, ensuring smooth and organized development workflows.",
      ],
    },
    {
      title: "Publications Editor",
      company_name: "McMaster Engineering Society",
      icon: mes,
      iconBg: "#383E56",
      date: "Sep 2023 - April 2024",
      points: [
        "Collaborated alongside engineering students to create informational newsletters with goals of increasing engagement in the engineering community.",
        "Communicated with editorial and website committee to publish newsletters in a timely manner",
      ],
    },
    {
      title: "Research Associate",
      company_name: "RetailData",
      icon: retaildata,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Presented research findings to senior management and clients, providing actionable recommendations based on data analysis.",
        "Conducted market research and competitive analysis to evaluate the performance of retail products and strategies",
      ],
    },
    {
      title: "Head of Competition",
      company_name: "Computer Science Club",
      icon: peel,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Jun 2022",
      points: [
        "Created questions and solutions to practice for the Canadian Computing Competition (CCC) using both Python and Java.",
        "Collaborated with team members to teach a class of 30+ students about programming fundamentals.",
        "Used problem-solving skills to guide students through solutions."
      ],
    },
    {
      title: "Software/Electrical Sub-Team",
      company_name: "FIRST Robotics 1241",
      icon: first,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Jun 2022",
      points: [
        "Assisted in the wiring and coding components of the robot alongside numerous team members.",
        "Operated machines to help create physical components of the robot."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Airbnb Clone",
      description:
        "Web-based platform that mocks the actions of Airbnb. This application allows users to search, book, create, and manage home rentals from various providers.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: airbnbclone,
      source_code_link: "https://github.com/ryanli04/Airbnb-clone",
    },
    {
      name: "LiDAR-Scanner",
      description:
        "A simple 3D LiDAR Scanner using a ToF sensor, a stepper motor, and a microcontroller. The set up also includes an externally wired push button.",
      tags: [
        {
          name: "c",
          color: "blue-text-gradient",
        },
        {
          name: "assembly",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: lidar,
      source_code_link: "https://github.com/ryanli04/LiDAR-Scanner",
    },
    {
      name: "A* Pathfinding Simulation",
      description:
        "A* search algorithm path finding visualizer using python.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: pathfind,
      source_code_link: "https://github.com/ryanli04/A-PathFinding",
    },
    {
      name: "Lego Minifigure Playground",
      description:
        "A fun customizable lego minifigure playground.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: lego,
      source_code_link: "https://github.com/ryanli04/Lego-Minifigure-Playground",
    },
    {
      name: "Cell Growth Simulator",
      description:
        "React application that simulates the growth of bacterial cells on a grid representing a petri dish.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: cell,
      source_code_link: "https://github.com/ryanli04/CellGrowthSimulation",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };