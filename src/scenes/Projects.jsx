import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import firstProject from "../assets/projectOne.png";
import secondProject from "../assets/projectTwo.png";
import thirdProject from "../assets/projectThree.jpg";
import fourthProject from "../assets/projectFourr.png";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 1, scale: 1 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, image, text, live, demo, x, y }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue-color`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-sm font-playfair text-black font-bold">{title}</p>
        <p className="hidden md:block md:text-md text-black text-sm">{text}</p>
        <div className="md:text-lg text-center underline">
          <a target="/blank" href={live}>
            <button className="underline text-center rounded-lg p-1 m-1 bg-white text-gray-700 font-bold text-[10px]">
              {x}
            </button>
          </a>
          <a target="/blank" href={demo}>
            <button className="underline text-center rounded-lg p-1 m-1 bg-white text-gray-700 font-bold text-[10px]">
              {y}
            </button>
          </a>
        </div>
      </div>
      <img src={image} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            PRO <span className="text-red">JECTS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center py-6">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          <div
            className="hidden md:flex justify-center text-center items-center p-10 bg-red max-[400px]
        max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            x="Demo"
            y="Code"
            title="BasketballFit Workout Application"
            image={firstProject}
            text="Built a web application in React that can help young and aspiring
            basketball players get better at their craft, with pdf workouts, and a chat
            section where authenticated users can talk to each other. I used Firebase’s realtime database for faster queries so users can
            instantly see other user’s messages. I used React Router for fast single page navigation."
            live="https://basketballfit-15b82.web.app/"
            demo="https://github.com/Eshwar1212-maker/Basketba-lFit"
          />
          <Project
            title="FamilyGram Social Media App"
            image={secondProject}
            text="Created a full stack social media website with React JS,
            Tailwind CSS, and Firebase. Used firebase’s google authentication for ease to use SDK’s
            and ready-make UI libraries to authenticate users."
            live="https://fsgvfsgsgbgffa.web.app/"
            x="Demo"
          />
          <Project
            x="Demo"
            y="Code"
            title="BreakingBad Characters Search"
            image={thirdProject}
            text="Fetched data from an API in React and sorted that data using
            React components.Users can search any character in the very popular show Breaking
            Bad, and it will filter out all respective characters."
            live="https://peppy-youtiao-774dc2.netlify.app/"
            demo="https://github.com/Eshwar1212-maker/BreakingBad-API"
          />
          <Project
            title="ExpressPedia Social Media App coming soon"
            image={fourthProject}
            text=""
            live=""
          />
          <div
            className="hidden md:flex justify-center text-center items-center p-10 bg-slate-600 max-[400px]
        max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
      <div className="md:hidden">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  );
};

export default Projects;
