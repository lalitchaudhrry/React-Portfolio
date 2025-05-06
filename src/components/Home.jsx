import { Link } from 'react-router-dom';
import PageWrapper from "./PageWrapper";

const scrollToFooter = () => {
  const footer = document.getElementById("footer");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};


const Home = () => {
  return (
    <>
        <PageWrapper>
      <section className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-12">
        <div>
          <img src="/profile.jpg" alt="Lalit Chaudhary" className="w-80 h-80 rounded-full object-cover shadow-lg" />
        </div>
        
        <div className="md:ml-10 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-8xl text-center md:text-left mt-6 md:mt-0 pl-7">Hello </h1>
          <h2 className="text-3xl font-bold pl-7.5 pt-3.5"> A Bit About Me</h2>
          <p className="text-gray-700 mt-2 max-w-md pl-7.5 pt-2"> I build modern, responsive websites that help businesses and people grow.</p>
        </div>

        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center mt-10">
          {/* Resume Button */}
          <Link to="/resume">
          <div className="w-36 h-36 sm:w-28 sm:h-28 md:w-32= md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold shadow-lg hover:scale-105 transition mb-4">
              <span className="text-black font-bold">Resume</span>
            </div>
            </Link>

          {/* Projects Button */}
          <Link to="/projects">
          <div className="w-36 h-36 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full bg-red-600 flex items-center justify-center text-black font-bold shadow-lg hover:scale-105 transition mb-4">
            <span className="text-black font-bold">Projects</span>
          </div>
          </Link>

          {/* Contact Button (Scroll to Footer) */}
          <button onClick={scrollToFooter}  className="w-36 h-36 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full bg-blue-500 flex items-center justify-center text-black font-bold shadow-lg hover:scale-105 transition mb-4">
            <span className="text-black font-bold">Contact</span>
          </button>
        </div>
      </section>
      </PageWrapper>
    </>
  );
};

export default Home;
