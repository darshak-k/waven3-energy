import { motion, useAnimation } from "framer-motion";
import Raining from "../assets/Raining.png";
import Factory from "../assets/Factory.png";
import Trees from "../assets/Trees.png";

const RigourousApproval = () => {
  const arrowVariants = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: { ease: "linear", duration: 2, repeat: Infinity },
    },
  };

  return (
    <section>
      <div className="py-10 pb-32">
        <p className="my-10 flex justify-center font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          RIGOUROUS APPROVAL
        </p>
        <div className=" border flex flex-col">
          <div className="flex flex-row gap-72 px-24">
            <motion.div
              initial={{ x: "0%", y: "-100%" }}
              animate={{ x: 0, y: 0 }}
              whileInView="visible"
              className="square max-w-xs px-14"
              transition={{ duration: 1 }}
            >
              <img src={Raining} alt="Raining" />
            </motion.div>
            <div className="text-3xl font-bigshoulder items-center font-extrabold "></div>
            <motion.div
              initial={{ x: "0%", y: "100%" }}
              animate={{ x: 0, y: 0 }}
              whileInView="visible"
              className="square max-w-xs px-14 "
              transition={{ duration: 1 }}
            >
              <img src={Raining} alt="Raining" className="rotate-180" />
            </motion.div>
          </div>

          <div className="flex flex-row gap-40">
            <div className="items-start square max-w-md ">
              <img src={Factory} alt="Factory" />
            </div>
            <div className="flex flex-col">
              <div className="relative text-3xl font-bigshoulder top-64 h-10 font-extrabold ">
                ENERGY SAVINGS
              </div>
              <div className="relative top-64 h-10">Hi</div>
            </div>
            <div className="items-end square max-w-sm py-24">
              <img src={Trees} alt="Trees" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RigourousApproval;
