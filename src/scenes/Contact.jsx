import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineCopy } from "react-icons/ai";

function copy() {
  navigator.clipboard.writeText("eshwartangirala11@gmail.com");
}

const Contact = () => {
  return (
    <section id="contact" className="py-48 text-center items-center">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex w-full justify-center text-center"
      >
        <div className="text-center items-center">
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>
      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-center gap-16 mt-5 items-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 md:mt-0"
        >
          <div
            className="py-[60px] w-full lg:h-screen p-2 m-auto text-white items-center text-center"
            id="contact"
          >
            <div className="flex-col text-center items-center max-w-[1000px] m-auto flex justify-center gap-11 ">
              <h1 className="text-gray-400 font-bold">
                I am very active on my Linkedin and Email, feel free to get in
                touch!
              </h1>
              <div className="cursor-pointer">
                <a
                  className=""
                  target="/blank"
                  href="https://www.linkedin.com/in/eshwar-tangirala-08973316b/"
                >
                  <FaLinkedin size={50} />
                </a>
              </div>
              <div className="flex flex-row pt-3">
                <p
                  onClick={copy}
                  className="text-xl font-thirdFont cursor-pointer"
                >
                  eshwartangirala11@gmail.com
                </p>
                <AiOutlineCopy
                  onClick={copy}
                  className="cursor-pointer hover:text-gray-400"
                  size={30}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <br /> <br /> <br /> <br />
    </section>
  );
};

export default Contact;
