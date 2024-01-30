import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const About = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
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
          <p className="mt-10 mb-7 font-bigshoulder text-3xl text-green-700 ">
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

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
