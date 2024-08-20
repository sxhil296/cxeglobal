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

export interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

export const products: Product[] =[
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/aboutPage1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/connect.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/connect.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/aboutPage1.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/connect.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/aboutPage1.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/aboutPage1.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/aboutPage1.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/aboutPage1.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/hero-bggg.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/server.jpg",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/hero-bggg.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/aboutPage1.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/hero-bggg.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/aboutPage1.png",
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

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  reverse: boolean;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Consulting",
    description: `CXE has spearheaded and overseen numerous digital transformation
                  endeavors for organizations of all sizes. In today&apos;s technology
                  landscape, every platform and software should be meticulously
                  crafted to seamlessly align with industry best practices. However,
                  making the right choice among available solutions based on
                  business requirements, priorities, processes, and budget is a
                  crucial decision.`,
    image: "/consulting.jpeg",
    reverse: false,
  },
  {
    id: 2,
    title: "Application Transformation",
    description: `With our deep expertise in leading business platforms like
                  NetSuite, Odoo, and SAP, we seamlessly support your organization
                  and its customers. Project Planning and Management Design,
                  Implementation, Development and Test Application Management
                  Upgrade`,
    image: "/aaptrans.jpeg",
    reverse: true,
  },
  {
    id: 3,
    title: "Experience Transformation",
    description: `Our customer experience strategy is comprehensive and tailored for success. 
                  Embrace agility and drive profitability through our digital commerce solutions, 
                  crafted to deliver a seamless omnichannel experience leveraging premier 
                  business platforms such as Adobe Magento, Hybris/CX, and Shopify.`,
    image: "/exptrans.jpg",
    reverse: false,
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
