import { motion, useAnimation } from "framer-motion";
import Raining from "../assets/Raining.png";
import Factory from "../assets/ActivitySector.png";
import Trees from "../assets/Trees.png";
import useMediaQuery from "../hooks/useMediaQuery";

const RigourousApproval = ({}) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const arrowVariants = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: { ease: "linear", duration: 2, repeat: Infinity },
    },
  };

  return (
    <section>
      <div className="py-10 pb-64">
        {isAboveLarge ? (
          <div className="flex flex-col pl-10">
            <div className="flex flex-row  gap-[25%]  px-[10%]">
              <motion.div
                initial={{ x: "0%", y: "-100%" }}
                animate={{ x: 0, y: 0 }}
                whileInView="visible"
                className=" max-w-[200px]"
                transition={{ duration: 1 }}
              >
                <img src={Raining} alt="Raining" />
              </motion.div>
              <div className="text-3xl font-bigshoulder items-center font-extrabold "></div>
              <motion.div
                initial={{ x: "0%", y: "100%" }}
                animate={{ x: 0, y: 0 }}
                whileInView="visible"
                className=" max-w-[200px]"
                transition={{ duration: 1 }}
              >
                <img src={Raining} alt="Raining" className="rotate-180" />
              </motion.div>
            </div>

            <div className="flex flex-row gap-[10%]  pl-10 max-h-[300px]">
              <div className="items-start w-[20%] ">
                <img src={Factory} alt="Factory" />

                <div className="flex font-bigshoulder text-4xl justify-center">
                  <p>CARBON CREDITS</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl font-bigshoulder top-64 h-10 font-extrabold ">
                  ENERGY SAVINGS
                </div>
                <div className="">
                  <svg width="200" height="20">
                    <path
                      d="M 0,10 H 200 L 190,0 M 200,10 L 190,20"
                      fill="none"
                      stroke="black"
                    />
                  </svg>
                </div>
              </div>
              <div className="items-end square w-[25%]">
                <img src={Trees} alt="Trees" />

                <div className="flex font-bigshoulder text-4xl justify-center pt-10">
                  <p>ACTIVITY SECTOR</p>
                </div>
              </div>
              {/* <div className="quare max-w-sm py-32">
                <img src={Trees} alt="Trees" />
                <div className="flex font-bigshoulder text-4xl justify-center py-16">
                  <p>CARBON CREDITS CREATED</p>
                </div>
              </div> */}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-10 justify-center items-center">
            <motion.div
              initial={{ x: "0%", y: "-100%" }}
              animate={{ x: 0, y: 0 }}
              whileInView="visible"
              className="square max-w-xs px-14"
              transition={{ duration: 1 }}
            >
              <img src={Raining} alt="Raining" />
            </motion.div>
            <div className="items-end square max-w-md ">
              <img src={Factory} alt="Factory" />

              <div className="flex font-bigshoulder text-4xl justify-center">
                <p>ACTIVITY SECTOR</p>
              </div>
            </div>
            <div className="my-20 rotate-90">
              <svg width="200" height="20">
                <path
                  d="M 0,10 H 200  M 200,10 L 190,20"
                  fill="none"
                  stroke="black"
                />
              </svg>
            </div>

            <div className="items-end square max-w-sm">
              <img src={Trees} alt="Trees" />
              <div className="flex font-bigshoulder text-4xl justify-center py-16">
                <p>CARBON CREDITS CREATED</p>
              </div>
            </div>

            <motion.div
              initial={{ x: "0%", y: "100%" }}
              animate={{ x: 0, y: 0 }}
              whileInView="visible"
              className="square max-w-xs px-14 "
              transition={{ duration: 1 }}
            >
              <img src={Raining} alt="Raining" />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
export default RigourousApproval;
