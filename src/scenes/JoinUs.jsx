import useMediaQuery from "../hooks/useMediaQuery";
import JoinUsGraph from "../assets/JoinUsGraph.png";
import Img15 from "../assets/Img15.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const JoinUs = () => {
  const { t } = useTranslation();
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="joinus"
      className="flex flex-col justify-center items-center mb-40"
    >
      <div className="py-10 pb-16">
        <p className="my-10 flex justify-center font-bigshoulder font-extrabold text-5xl">
          {t("joinuspage.title")}
        </p>
      </div>

      <div className="flex flex-col  items-center justify-center md:flex-row gap-20">
        <div className="flex items-center justify-center text-3xl md:text-4xl font-bigshoulder md:w-1/2 md:pl-20">
          <p>
            {" "}
            <span className="text-orange-900 font-extrabold tracking-wide">
              {t("carboncredit.waventechnology")}
            </span>{" "}
            {t("joinuspage.text1")}
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end  md:w-1/2 md:pr-40">
          <motion.div
            className="flex w-[40%] md:pr-[10%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img src={Img15} alt="15%" />
          </motion.div>
          <motion.div
            className="w-[70%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img src={JoinUsGraph} alt="InvestUs" />
          </motion.div>

          <div className="flex justify-center mt-10">
            <p className="text-4xl font-bigshoulder flex items-center px-[3%] font-semibold">
              {" "}
              {t("joinuspage.text2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
