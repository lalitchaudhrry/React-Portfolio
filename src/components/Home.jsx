import { Link } from 'react-router-dom';



const scrollToFooter = () => {
  const footer = document.getElementById("footer");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};


const Home = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20"> 
        <div>
          <img src="/profile.jpg" alt="Lalit Chaudhary" className="w-80 h-80 rounded-full object-cover shadow-lg" />
        </div>
        
        <div className="md:ml-10 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-8xl text-center md:text-left mt-6 md:mt-0 pl-7">Hello </h1>
          <h2 className="text-3xl font-bold pl-7.5 pt-3.5"> A Bit About Me</h2>
          <p className="text-gray-700 mt-2 max-w-md pl-7.5 pt-2"> I build modern, responsive websites that help businesses and people grow.</p>
        </div>

        <div className="flex gap-6 mt-6 justify-center md:justify-start">
          {/* Resume Button */}
          <a href="/resume.pdf" download="Lalit-Chaudhary-Resume.pdf">
            <div className="w-36 h-36 bg-yellow-500 rounded-full flex justify-center items-center shadow-lg hover:scale-110 transition-transform duration-300">
              <span className="text-black font-bold">Resume</span>
            </div>
          </a>

          {/* Projects Button */}
          <Link to="/projects">
          <div className="w-36 h-36 bg-red-500 rounded-full flex justify-center items-center shadow-lg hover:scale-110 transition-transform duration-300">

            <span className="text-black font-bold">Projects</span>
          </div>
          </Link>

          {/* Contact Button (Scroll to Footer) */}
          <button onClick={scrollToFooter} className="w-36 h-36 bg-blue-300 rounded-full flex justify-center items-center shadow-lg hover:scale-110 transition-transform duration-300">
            <span className="text-black font-bold">Contact</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
