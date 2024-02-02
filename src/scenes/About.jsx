import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import EarthCity from "../assets/EarthCity.png";
import { motion } from "framer-motion";

const About = () => {
  const imageStyles = {
    filter:
      "invert(54%) sepia(81%) saturate(418%) hue-rotate(90deg) brightness(96%) contrast(96%)",
  };
  const imageAnimation = {
    initial: { y: "0", opacity: 0 }, // Initial position above the viewport
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, type: "spring", bounce: 0.5 },
    }, // Landing animation
  };

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="flex flex-col md:justify-between">
        <motion.div
          className="mt-16 flex justify-center md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            alt="skills"
            className="justify-center z-10 max-w-[70%] h-auto "
            style={imageStyles}
            src={EarthCity}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="mt-10 mb-7 font-bigshoulder md:text-3xl sm:text-xl">
            "
            <span className="text-green-950 font-extrabold tracking-wide">
              Waven3
            </span>{" "}
            Tech is a high-tech company operating in the fields of hydrogen and
            artificial intelligence. Our mission is to fund projects that
            generate carbon credits, thereby attracting funds for the overall
            collective well-being of every global citizen. This entire process
            will be channeled into the carbon credit exchange ecosystem. The
            creation of carbon credits extends across various sectors such as
            energy, high technology, natural resources, education, and several
            others. Together, we provide a sustainable solution, passing on to
            future generations a better future and a greener planet."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
