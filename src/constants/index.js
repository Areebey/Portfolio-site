import project1 from "../assets/projects/project-1.jpeg";
import project02 from "../assets/projects/chat-app.png"
import project002 from "../assets/projects/weather-app.jpeg"
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";

export const HERO_CONTENT = `Hi, I'm a passionate Front-end developer with over a year of experience crafting 
responsive and visually appealing web interfaces. Proficient in HTML5, CSS, Bootstrap, Tailwind CSS, JavaScript, 
and React.js, I bring creativity and technical expertise to build seamless user experiences. Alongside front-end 
development, I have beginner-level experience with Node.js and MongoDB, giving me a foundational understanding of 
backend technologies. Having recently finished my final year graduation exams, I’m now eager to explore new 
opportunities and secure a front-end internship to grow and contribute to exciting projects!".`;

export const ABOUT_TEXT = `I’m a dedicated front-end developer with a strong foundation in React.js, JavaScript, 
and UI/UX design. With hands-on experience in building scalable applications and crafting seamless user experiences, 
I thrive on solving complex problems through clean, efficient code.

From developing real-time chat apps to full-featured blog platforms, I love transforming ideas into functional, 
user-friendly digital solutions. My expertise in Git, Tailwind CSS, and responsive design ensures that my work is 
not just visually appealing but also robust and maintainable.

Beyond code, I bring collaboration, adaptability, and a strong work ethic—whether it's working with 
cross-functional teams or engaging clients in a sales-driven environment. Always eager to learn and innovate, 
I aim to contribute to projects that make a meaningful impact in the tech world`;

export const EXPERIENCES = [
  {
    year: "Oct-2024 - Dec-2024",
    role: "Front-End Intern ",
    company: "Experts 360 Solutions",
    description: `As a Front-End Intern, I gained hands-on experience in web development, focusing on designing 
    and implementing user-friendly interfaces. I worked with HTML, CSS, JavaScript and Reactjs with tailwind to 
    enhance website functionality and responsiveness. Collaborating with senior developers, contributed to 
    real-world projects, and gained insight into front-end as well as back-end best practices.`,
    technologies: ["React.js", "Javascript", "Node.js", "mongoDB"],
  },
  {
    year: "Mar-2024 - May-2024",
    role: "Digital Sales Executive",
    company: "Quixotic Creatives",
    description: `As a Sales Executive, I involved driving business growth by identifying and pursuing sales 
    opportunities. responsible for building relationships with potential clients, understanding their 
    creative needs, and offering tailored solutions. The key tasks likely included lead generation, pitching 
    services, negotiating contracts, and closing deals.`,
    technologies: ["Discord", "Twitch", "Twitter", "Instagram"]
  },
  {
    year: "Aug-2023 - Nov-2023",
    role: "Web Development",
    company: "CodeSoft",
    description: `I also completed a remote internship to practice HTML, CSS, and JavaScript, building 
    beginner-level projects to strengthen my web development skills.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "Blog App",
    image: project1,
    description:
    "Built a full-featured Blog App using React Router, Redux Toolkit, and Appwrite for backend services. Includes Signup/Signin, protected pages, a visual editor, image uploads, and more. Designed for scalability with a seamless user experience.",
    technologies: ["HTML", "CSS", "Tailwindcss", "React","Appwrite"],
  },
  {
    title: "Chat App",
    image: project02,
    source: "https://fluffy-quokka-011a14.netlify.app/",
    description:
      "Built a React.js chat app with Firebase backend for real-time messaging. Features instantupdates, user authentication with google, and a responsive interface",
    technologies: ["HTML", "CSS", "React", "Firebase"],
  },
  {
    title: "Doctor's Website",
    image: project8,
    source: "https://my-doctorapp.netlify.app/",
    description:
    "",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Weather App",
    image: project002,
    source: "https://weather-update-by-areeb.netlify.app/",
    description:
    "",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Food Wagon Website",
    image: project2,
    source: "https://me-foodwagon-app.netlify.app/",
    description:
    "",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Home and Guest",
    image: project4,
    sourec: "https://legendary-daifuku-2bdc2f.netlify.app/",
    description:
    "",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Pepsi Website",
    image: project5,
    source: "https://mepepsi.netlify.app/",
    description:
    "",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Tere-Web Website",
    image: project6,
    source: "https://my-ride-share.netlify.app/",
    description:
    "",
    technologies: ["HTML", "CSS","Bootstrap"],
  },
  {
    title: "SaltnPepper Website",
    image: project3,
    source: "https://mesaltnpepper.netlify.app/",
    description:
      "A basic website",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Basic Portfolio",
    image: project7,
    source: "https://meek-crepe-bf9a13.netlify.app/",
    description:
    "A personal portfolio website showcasing projects, skills, and contact information",
    technologies: ["HTML", "CSS"],
  },
];

export const CONTACT = {
  address: "75050 - Karachi, Pakistan",
  phoneNo: "+92 (3112466735) ",
  email: "areebrafiq125@gmail.com",
};