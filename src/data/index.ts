import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaSearch,
  FaPaintBrush,
  FaLock,
  FaNetworkWired,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface TechService {
  id: Number;
  icon: IconType;
  title: string;
  description: string;
}

export const techServices: TechService[] = [
  {
    id: 1,
    icon: FaCode,
    title: "Web Development",
    description:
      "Building responsive and high-performing websites tailored to your business needs using modern technologies.",
  },
  {
    id: 2,
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description:
      "Creating intuitive and user-friendly mobile applications for both iOS and Android platforms.",
  },
  {
    id: 3,
    icon: FaCloud,
    title: "Cloud Computing",
    description:
      "Providing scalable cloud solutions for storage, computing, and deployment, ensuring smooth and secure operations.",
  },
  {
    id: 4,
    icon: FaDatabase,
    title: "Database Management",
    description:
      "Designing and maintaining robust database solutions to securely store and manage your business data.",
  },
  {
    id: 5,
    icon: FaSearch,
    title: "SEO Optimization",
    description:
      "Improving your website's visibility on search engines with effective SEO strategies and analytics.",
  },
  {
    id: 6,
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description:
      "Crafting engaging and aesthetically pleasing user interfaces with a focus on user experience.",
  },
  {
    id: 7,

    icon: FaLock,
    title: "Cybersecurity",
    description:
      "Implementing security measures to protect your digital assets from cyber threats and vulnerabilities.",
  },
  {
    id: 8,
    icon: FaNetworkWired,
    title: "Network Solutions",
    description:
      "Providing comprehensive network setup and management services for seamless connectivity and communication.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Hack This Feb",
    des: "A hackathon website created with React and TailwindCSS, providing event information and seamless participant registration.",
    img: "/p111.png",
    iconLists: ["/re.svg", "/tail.svg", "/javaScript.svg"],
    link: "https://hackthisfeb.netlify.app/",
  },
  {
    id: 2,
    title: "Advocate Portfolio",
    des: "An advocate's portfolio built with React and TailwindCSS, showcasing legal expertise and achievements in a sleek, user-friendly design.",
    img: "/p222.png",
    iconLists: ["/re.svg", "/tail.svg", "/javaScript.svg"],
    link: "https://advamjad.netlify.app/",
  },
  {
    id: 3,
    title: "Quizzz",
    des: "Quizzz is an interactive app for learning about Islam through engaging quizzes. Built with ReactJS and TailwindCSS for a fun, educational experience.",
    img: "/p333.png",
    iconLists: ["/re.svg", "/tail.svg", "/javaScript.svg", "/shadcn.svg"],
    link: "https://islam-quizzz.netlify.app/",
  },
  {
    id: 4,
    title: "Blogosphere",
    des: "Blogosphere is a full-stack blogging app with user authentication, post and comment management, and profile updates. Built with the MERN stack for a seamless user experience.",
    img: "/p44.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/javaScript.svg",
      "/mongodb.svg",
      "/nodejs.svg",
      "/express.svg",
    ],
    link: "https://github.com/Sxhil296/Blogosphere",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Sahil on our website was fantastic. His skills in React, Tailwind CSS, and JavaScript made our vision a reality. The site they built is sleek, user-friendly, and exceeded our expectations. Highly recommended for anyone seeking top-notch web development.",
    name: "HackThisFeb",
    title: "Hackathon",
    img: "/pfp.jpeg",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis est exercitationem voluptates harum ratione officia quas laboriosam. Consequatur, error porro beatae iusto laboriosam quae minus autem officia ea. Quam nihil dolores repudiandae repellendus dolore incidunt!",
    name: "Lorem Ipsum",
    title: "Director of Lorem Ipsum",
    img: "/pfp.jpeg",
  },
  {
    quote:
      "Thanks to Sahil, my legal practice now has a professional and easy-to-use website. He created exactly what I needed, and I'm impressed with his skills and dedication. I highly recommend Sahil for anyone looking to improve their online presence.",
    name: "Adv. Amjad",
    title: "Advocate",
    img: "/pfp.jpeg",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis est exercitationem voluptates harum ratione officia quas laboriosam. Consequatur, error porro beatae iusto laboriosam quae minus autem officia ea. Quam nihil dolores repudiandae repellendus dolore incidunt!",
    name: "Lorem Ipsum",
    title: "Director of Lorem Ipsum",
    img: "/pfp.jpeg",
  },
];

export const companies = [
  {
    id: 1,

    img: "/aws.png",
    name: "aws",
  },
  {
    id: 2,

    img: "/ibm.png",
    name: "ibm",
  },
  {
    id: 3,

    img: "/dell.png",
    name: "dell",
  },
  {
    id: 4,

    img: "/salesforce.png",
    name: "salesforce",
  },
  {
    id: 5,

    img: "/microsoft.png",
    name: "microsoft",
  },
  {
    id: 6,

    img: "/mcafee.png",
    name: "mcafee",
  },
  {
    id: 7,
    img: "/symantec.png",
    name: "symantec",
  },
  {
    id: 8,
    img: "/vmware.png",
    name: "vmware",
  },
];

export const techStack = [
  {
    id: 1,

    img: "/awss.png",
    name: "aws",
  },
  {
    id: 2,

    img: "/phpp.png",
    name: "php",
  },
  {
    id: 3,

    img: "/mongo.png",
    name: "mongodb",
  },
  {
    id: 4,
    img: "/bi.png",
    name: "powerbi",
  },
  {
    id: 5,
    img: "/tensorflow.png",
    name: "tensorflow",
  },
  {
    id: 6,

    img: "/python.png",
    name: "python",
  },
  {
    id: 7,
    img: "/kafka.png",
    name: "kafka",
  },
  {
    id: 8,
    img: "/mysql.png",
    name: "mysql",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern - Devopskey",
    desc: "Assisted in the development and maintenance of web applications using HTML, CSS, JavaScript, and ReactJS.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  {
    id: 3,
    title: "Freelance Web Developer",
    desc: "Designed and developed custom websites and applications for a diverse range of clients using HTML, CSS, JavaScript, and modern frameworks.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp3.svg",
  // },
];
