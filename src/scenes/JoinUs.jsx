import useMediaQuery from "../hooks/useMediaQuery";
import JoinUsGraph from "../assets/JoinUsGraph.png";
import Img15 from "../assets/Img15.png";
import { motion } from "framer-motion";

const JoinUs = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="joinus"
      className="flex flex-col justify-center items-center mb-40"
    >
      <div className="py-10 pb-16">
        <p className="my-10 flex justify-center font-bigshoulder font-extrabold text-5xl">
          JOIN US
        </p>
      </div>

      <div className="flex flex-col  items-center justify-center md:flex-row gap-20">
        <div className="flex items-center justify-center text-3xl md:text-4xl font-bigshoulder md:w-1/2 md:pl-20">
          <p>
            {" "}
            <span className="text-orange-900 font-extrabold tracking-wide">
              WAVEN3 Technology
            </span>{" "}
            Principal & Interest Protected Guaranteed Loan™ or Investment
            Offering w/Full Insurance Protection
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end  md:w-1/2 md:pr-40">
          <motion.div
            className="flex w-[30%] md:pr-[10%]"
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
            className="w-[60%]"
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
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
