import useMediaQuery from "../hooks/useMediaQuery";
import CarbonCreditImg from "../assets/CarbonCredit.png";
import { motion } from "framer-motion";

const CarbonCredit = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const imageStyles = {
    filter:
      "invert(96%) sepia(9%) saturate(1662%) hue-rotate(4deg) brightness(92%) contrast(86%)",
  };
  return (
    <section id="skills" className="px-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="z-10 mt-32 flex justify-center">
        <img
          alt="Carbon Credit"
          class="justify-center z-10 h-auto w-auto "
          src={CarbonCreditImg}
        />
      </div>
    </section>
  );
};

export default CarbonCredit;
