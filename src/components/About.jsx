import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col items-center text-center px-6">
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="/profile.jpg" 
          alt="Lalit Chaudhary" 
          className="w-60 h-60 object-cover shadow-lg mt-5 rounded-3xl"
        />
      </div>
      
      <div className="mt-6">
        <h2 className="text-5xl font-bold text-gray-900 uppercase">About Me</h2>
      </div>

      <div className="mt-4 max-w-2xl text-justify">
        <p className="text-lg text-gray-700 leading-relaxed mb-7">
          Hi, I'm <strong>Lalit Chaudhary</strong>, a Computer Science Engineer with a strong passion for 
          <strong> Data Structures & Algorithms (DSA)</strong> and <strong>Web Development</strong>. 
          I enjoy solving complex problems and building scalable web applications that enhance user experience.
          <br /><br />
          My expertise includes React.js, JavaScript, Tailwind CSS, and Cloud Technologies. 
          I am always eager to learn new technologies and improve my skills to create high-quality web applications.
        </p>
      </div>
    </section>
  );
}

export default About;
