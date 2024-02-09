import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SwingLogo from "../assets/SwingLogo.png";
import { TypeAnimation } from "react-type-animation";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 mb-40"
    >
      {/* IMAGE SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 70, y: 70 },
          visible: { opacity: 1, x: 0 },
        }}
        className="basis-3/5 z-10 mt-32 flex justify-center md:order-2"
      >
        {isAboveLarge ? (
          <motion.img
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-20%, -20%)",
            }}
            alt="profile"
            src={SwingLogo}
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
          />
        ) : (
          <motion.img
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            alt="profile"
            src={SwingLogo}
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
          />
        )}
      </motion.div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-3/5 my-20">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair z-10 text-center pt-16 w-full">
            <TypeAnimation
              sequence={["JOIN US CHANGING THE WORLD TODAY"]}
              wrapper="span"
              cursor={false}
              repeat={1}
              className="text-2xl sm:text-3xl md:text-5xl"
            />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
