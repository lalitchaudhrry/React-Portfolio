import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "Fullstack Chat App",
      description:
        "Real-time full-stack chat app using React, Node.js, MongoDB, Gemini API. Frontend hosted on Vercel.",
      tech: ["React", "Vite", "Tailwind", "Node.js", "MongoDB"],
      github: "https://github.com/lalitchaudhrry/Fullstack-chat-app",
      live: "https://fullstack-chat-app-5nck.vercel.app",
    },
    {
      title: "Full-stack AI Chatbot",
      description:
        "Chatbot web app using React, Node.js, and MongoDB. Integrates AI for conversational interaction.",
      tech: ["React", "Vite", "Tailwind", "Node.js", "MongoDB", "Gemini API"],
      github: "https://github.com/lalitchaudhrry/full-stack-AI-Chatbot",
      live:"https://full-stack-ai-chatbot.vercel.app/",
    },
    {
      title: "Currency Converter",
      description:
        "A responsive currency converter app using React and a live exchange rate API.",
      tech: ["React", "API"],
      github: "https://github.com/lalitchaudhrry/react-currency-converter",
    },
    {
      title: "Counter App",
      description:
        "A simple responsive counter app built with React and Vite.",
      tech: ["React", "Vite"],
      github: "https://github.com/lalitchaudhrry/Counter-app",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-10 text-blue-500 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                GitHub Repo
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-green-600 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
