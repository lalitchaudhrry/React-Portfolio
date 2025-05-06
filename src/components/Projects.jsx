import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from "./PageWrapper";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// If you have real preview images, place them in public/assets and uncomment the `image` lines:
// image: "/assets/chat-app-preview.png",
const projectList = [
  {
    title: "Fullstack Chat App",
    description:
      "Real‑time full‑stack chat app using React, Node.js, MongoDB & Gemini API. Frontend on Vercel.",
    tech: ["React", "Vite", "Tailwind", "Node.js", "MongoDB"],
    github: "https://github.com/lalitchaudhrry/Fullstack-chat-app",
    live: "https://fullstack-chat-app-5nck.vercel.app",
    image: "/assets/image1.png",
  },
  {
    title: "Smart AI Chatbot",
    description:
      "Conversational AI chatbot built with React, Node.js & MongoDB.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    github: "https://github.com/lalitchaudhrry/full-stack-AI-Chatbot",
    live: "https://full-stack-ai-chatbot.vercel.app/",
    image: "/assets/image.png",
  },
  {
    title: "Currency Converter",
    description:
      "Responsive currency converter using a live exchange‑rate API.",
    tech: ["React", "API"],
    github: "https://github.com/lalitchaudhrry/react-currency-converter",
    image: "/assets/image2.png",
  },
  {
    title: "Counter App",
    description: "Simple responsive counter built with React & Vite.",
    tech: ["React", "Vite"],
    github: "https://github.com/lalitchaudhrry/Counter-app",
    image: "/assets/image3.png",
  },
];

const Projects = () => {
  return (
    <PageWrapper>
      <div className="p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-blue-600">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {/* Image or placeholder icon */}
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                {/* Uncomment below if you supply `project.image` */}
               {project.image ? 
               (
                <img src ={project.image} alt={`${project.title} preview`} className="object-cover h-full w-full" />):
                (<FaGithub size={48} className="text-gray-400" />)}
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                  >
                    <FaGithub className="mr-1" /> Repo
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-green-600 hover:underline"
                    >
                      <FaExternalLinkAlt className="mr-1" /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
