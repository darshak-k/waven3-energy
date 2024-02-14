import useMediaQuery from "../hooks/useMediaQuery";
import CarbonCapture from "../assets/CarbonCapture.png";
import Hydrogen from "../assets/Hydrogen.png";
import CleanFuel from "../assets/CleanFuel.png";
import Blockchain from "../assets/Blockchain.png";
import Education from "../assets/Education.png";
import Fertilizer from "../assets/Fertilizer.png";
import { motion } from "framer-motion";

const Card = ({ image, title }) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center p-4 border border-orange-700 rounded-lg shadow-md hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <img src={image} alt={title} className="w-[50%] rounded-lg mb-4 h-9/12" />
      <h2 className="text-2xl font-bold text-orange-800 h-3/12">{title}</h2>
    </motion.div>
  );
};

const Grid = ({ data }) => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

const CarbonCredit = () => {
  const imageStyles = {
    filter:
      "invert(96%) sepia(9%) saturate(1662%) hue-rotate(4deg) brightness(92%) contrast(86%)",
  };
  const textStyles =
    "z-0 font-bigshoulder text-2xl md:text-3xl lg:text-4xl font-bold text-center ";

  const textStyle =
    "flex text-xl md:text-2xl font-bigshoulder justify-center items-center  font-semibold -center";
  const data = [
    { image: CarbonCapture, title: "Carbon capture technologies" },
    { image: Hydrogen, title: "Hydrogen technologies" },
    { image: CleanFuel, title: "Clean fuels" },
    { image: Blockchain, title: "Blockchain technology" },
    { image: Education, title: "Education" },
    { image: Fertilizer, title: "Fertilizers" },
  ];

  return (
    <section id="skills" className="justify-center items-center mb-28">
      {/* HEADER AND IMAGE SECTION */}
      <div className="flex mt-24 w-full py-10 mb-10 justify-center">
        <p className="my=-10  font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          PROJECTS
        </p>
      </div>

      <div className="flex flex-col w-full gap-10 px-[10%]  mb-20">
        <div className={`${textStyle}`}>
          <p>
            To kickstart the{" "}
            <span className="text-orange-900 font-extrabold tracking-wide">
              WAVEN3 TECHNOLOGY PROJECT
            </span>{" "}
            , our company participate in innovative high technology in every
            domain sphere.
          </p>
        </div>

        <div className={`${textStyle}2`}>
          <p>
            At the same time,{" "}
            <span className="text-orange-900 font-extrabold tracking-wide">
              WAVEN3 TECHNOLOGY
            </span>{" "}
            is working to finance other carbon generating projects and sell
            their carbon credits .
          </p>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <Grid data={data} />
      </div>
      {/* 
      <div className="relative py-1 mb-40 px-20">
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
            className="justify-center z-0  h-auto max-w-[100%]"
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
      </div> */}
    </section>
  );
};

export default CarbonCredit;
