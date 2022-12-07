import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactIMG from "../assets/react.webp";
import Tailwind from "../assets/tailwind.jpg";
import Firebase from "../assets/firebase.webp";
import Github from "../assets/git.png";
import Nextjs from "../assets/next.png";
import Java from "../assets/java.png";
import Node from "../assets/node.png";
import html from "../assets/html.png";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
      </div>
      {/* SKILLS */}
      <div>
        <div id="skills" className="w-full p-2 text-white py-[90px]">
          <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <img src={html} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>HTML</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <img src={Css} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>CSS</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <img src={Javascript} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>JavaScript</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <img src={ReactIMG} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>React</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <img src={Tailwind} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Tailwind</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <img src={Firebase} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Firebase</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <img src={Github} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Github</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <img src={Nextjs} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Next</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <img src={Java} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Java</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <img src={Node} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Node JS</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
