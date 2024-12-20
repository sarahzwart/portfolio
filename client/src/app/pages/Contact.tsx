import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="pt-12 h-[100vh] flex items-center justify-center bg-[#f4f4f4]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-[#f759ba]">Contact Me</h2>
        <p className="mt-4 text-[#545454]">I&apos;d love to connect!</p>
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="mailto:sarahczwart@gmail.com"
            className="inline-block px-6 py-3 text-[#f759ba] border-2 border-[#f759ba] rounded-lg hover:bg-[#f759ba] hover:text-white transition duration-300"
          >
            Email Me
          </a>

          <a
            href="https://github.com/sarahzwart"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-3 bg-[#333] text-white rounded-full hover:bg-[#f759ba] transition duration-300"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/sarahzwart/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-3 bg-[#0077b5] text-white rounded-full hover:bg-[#f759ba] transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
