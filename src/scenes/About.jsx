import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="flex flex-col pt-10 pb-24 justify-center items-center "
    >
      <div className="flex  w-full py-10 justify-center">
        <p className=" font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          {t("aboutus")}
        </p>
      </div>

      {/* HEADER AND IMAGE SECTION */}
      <div className="flex flex-col max-w-[90%]">
        <motion.div
          className="flex justify-center items-center"
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
            className="justify-center z-10 max-w-[70%]  "
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
          className="px-[10%]"
        >
          <p className="mt-10 mb-7 font-bigshoulder text-base  sm:text-xl md:text-2xl">
            <span className="text-green-950 font-extrabold tracking-wide">
              {t("companyname")} 3
            </span>{" "}
            {t("aboutustext")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
