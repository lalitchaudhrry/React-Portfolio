import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const Resume = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center px-4"
    >
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-700 hover:text-black transition-colors"
        aria-label="Close"
      >
        <FiX size={30} />
      </button>

      {/* Resume Viewer */}
      <iframe
        src="/resume.pdf"
        title="Resume Viewer"
        className="w-full max-w-5xl h-[90vh] border-2 border-gray-300 rounded-xl shadow-2xl"
      ></iframe>
    </motion.div>
  );
};

export default Resume;
