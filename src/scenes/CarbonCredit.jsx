import useMediaQuery from "../hooks/useMediaQuery";
import CarbonCreditImg from "../assets/CarbonCredit.png";
import { motion } from "framer-motion";

const CarbonCredit = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const imageStyles = {
    filter:
      "invert(96%) sepia(9%) saturate(1662%) hue-rotate(4deg) brightness(92%) contrast(86%)",
  };
  const textStyles =
    "z-0 font-bigshoulder text-2xl md:text-3xl lg:text-4xl font-bold text-center ";

  return (
    <section id="skills" className="px-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="relative py-16">
        <motion.div
          className="z-10 mt-32 flex justify-center"
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
            alt="Carbon Credit"
            className="justify-center z-0  max-w-[70%] h-auto md:max-w-[80%] lg:max-w-[90%]"
            src={CarbonCreditImg}
          />
        </motion.div>
        <div className="absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center">
          <p className={`${textStyles} absolute top-1/4 left-1/4`}>
            Hydrogen technologies
          </p>
          <p className={`${textStyles} absolute top-1/2 right-0`}>
            Fertilizers
          </p>
          <p className={`${textStyles} absolute bottom-1/3 left-0`}>
            Clean fuels
          </p>
          <p className={`${textStyles} absolute top-3/4 right-0`}>
            Carbon capture technologies
          </p>
          <p
            className={`${textStyles} absolute top-1/4 right-0 transform -translate-x-1/2 -translate-y-1/2`}
          >
            Blockchain technology
          </p>
          <p
            className={`${textStyles} absolute bottom-16 left-1/3 transform -translate-x-1/2 mb-4`}
          >
            Education
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarbonCredit;
