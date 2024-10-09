"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const codingSchoolContent = [
  {
    title: "Interactive Coding Workshops",
    description:
      "Join real-time coding workshops where you can collaborate with peers, mentors, and experts. Share your projects, discuss techniques, and get instant feedback to enhance your coding skills. Our platform makes learning coding interactive and engaging.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Interactive Coding Workshops
      </div>
    ),
  },
  {
    title: "Real-Time Code Changes",
    description:
      "Experience the power of real-time code updates. With our platform, you can track every change as it happens, ensuring you’re always working with the latest version. Simplify your workflow and stay on top of your projects with instant updates.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Real-Time Code Changes
      </div>
    ),
  },
  {
    title: "Effortless Version Control",
    description:
      "Eliminate version control headaches with our advanced tools. Our platform automatically manages versions and keeps your codebase up-to-date, so you can focus on coding without worrying about conflicts or manual updates.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Effortless Version Control
      </div>
    ),
  },
  {
    title: "Endless Coding Challenges",
    description:
      "Never run out of coding practice with our dynamic challenges. Whether you’re working on app development, web design, game creation, AI projects, or mastering Next.js, our platform offers endless opportunities to test and improve your skills.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Endless Coding Challenges
      </div>
    ),
  },
  {
    title: "Frontend Development Mastery",
    description:
      "Gain expertise in frontend development with our comprehensive courses. Learn about HTML, CSS, JavaScript, and modern libraries and frameworks like React.js. Build responsive and dynamic user interfaces that enhance user experiences.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--blue-500))] flex items-center justify-center text-white">
        Frontend Development Mastery
      </div>
    ),
  },
  {
    title: "Backend Development Essentials",
    description:
      "Master backend development with our in-depth courses. Understand server-side languages, database management, and API design. Build scalable and efficient server-side applications to support complex frontend functionalities.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        Backend Development Essentials
      </div>
    ),
  },
  {
    title: "Mastering Next.js",
    description:
      "Unlock the power of Next.js with our specialized courses. Learn how to build server-rendered React applications with optimal performance. Explore features like static generation, server-side rendering, and API routes to create scalable and dynamic web applications.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--violet-500))] flex items-center justify-center text-white">
        Mastering Next.js
      </div>
    ),
  },
  {
    title: "Mastering React.js",
    description:
      "Deepen your knowledge of React.js with advanced techniques and patterns. Explore state management, hooks, context, and performance optimization. Build complex and high-performance React applications with best practices.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-600),var(--blue-600))] flex items-center justify-center text-white">
        Mastering React.js
      </div>
    ),
  },
  {
    title: "MERN Stack Integration",
    description:
      "Become proficient in the MERN stack with our integrated courses. Learn how to combine MongoDB, Express.js, React.js, and Node.js to build full-stack applications. Develop robust and scalable applications using the complete MERN stack.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-600),var(--red-600))] flex items-center justify-center text-white">
        MERN Stack Integration
      </div>
    ),
  },
  {
    title: "Web Wizards",
    description:
      "Dive deep into web development with our comprehensive courses. Learn everything from basic HTML and CSS to advanced JavaScript frameworks like React and Next.js. Build dynamic and responsive websites and become a web development pro.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--blue-500))] flex items-center justify-center text-white">
        Web Wizards
      </div>
    ),
  },
  {
    title: "Mastering Mobile Mastery",
    description:
      "Master app development with our focused courses. From mobile apps to desktop applications, learn the best practices, tools, and techniques to build high-performance, user-friendly applications. Get hands-on experience with popular frameworks and languages.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        Mastering Mobile Mastery
      </div>
    ),
  },
  {
    title: "Game Development Innovation",
    description:
      "Create engaging and interactive games with our game development courses. Learn game design principles, development tools, and programming languages essential for building captivating games. Bring your creative visions to life with practical projects and expert guidance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] flex items-center justify-center text-white">
        Game Development Innovation
      </div>
    ),
  },
  {
    title: "AI Generative Masterys",
    description:
      "Explore the fascinating world of AI generative models with our advanced and cutting-edge courses. Dive deep into the techniques and technologies that power intelligent systems capable of creating diverse types of content, from high-resolution images to complex text. Understand the underlying principles of generative adversarial networks (GANs), variational autoencoders (VAEs), and transformers. Learn how these models work and how to apply them to real-world problems. Discover how to leverage these technologies to transform your innovative ideas into practical, intelligent solutions that push the boundaries of what's possible with AI.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--blue-600))] flex items-center justify-center text-white">
        AI Generative Mastery
      </div>
    ),
  },
  {
    title: "Thank You!",
    description:
      "Thank you for exploring our comprehensive coding courses. We hope you found the information valuable and inspiring. If you have any questions or need further assistance, feel free to reach out to us.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--gray-500),var(--blue-300))] flex items-center justify-center text-white">
        Thank You!
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={codingSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
