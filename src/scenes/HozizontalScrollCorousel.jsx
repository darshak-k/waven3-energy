import React, { useState } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import RigourousApproval from "./RigourousApproval";
import { useTranslation } from "react-i18next";

const OpenCards = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      // height: "400px",
      width: "400px",
    },
    collapsed: {
      // height: "400px",
      width: "100px",
    },
  };

  const belowLargeCardVariants = {
    expanded: {
      height: "400px",
      width: "100%",
    },
    collapsed: {
      height: "100px",
      width: "100%",
    },
  };

  const cardDescriptions = t("theprojects.carddescriptions", {
    returnObjects: true,
  });
  const processSteps = t("theprojects.processSteps", { returnObjects: true });

  return (
    <section key="AccreditationProcess">
      <div className="py-10 pb-32">
        <p className="my-10 flex justify-center font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          {t("theprojects.title")}
        </p>
      </div>
      <RigourousApproval />
      {isAboveLarge ? (
        <div className="flex flex-row w-full">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div
              key={index}
              className={`flex flex-row gap-1  w-full h-[400px]`}
            >
              <motion.div
                key={index}
                className={`flex-grow  w-11/12 ${
                  index === expandedIndex ? "expanded" : "collapsed"
                }`}
                variants={cardVariants}
                initial="collapsed"
                animate={index === expandedIndex ? "expanded" : "collapsed"}
                transition={{ duration: 0.3 }}
                onHoverStart={() => handleCardClick(index)}
                onHoverEnd={() => handleCardClick(index)}
                onClick={() => handleCardClick(index)}
              >
                {index !== expandedIndex ? (
                  <>
                    <div className="flex flex-row h-full items-end  overflow-hidden  w-full">
                      <div
                        className={`font-bigshoulder flex  relative text-xl font-extrabold justify-start w-1/6 px-2`}
                      >
                        <p className="-rotate-90">{`0${index + 1}`}</p>
                      </div>
                      <div
                        className={`text-2xl font-bigshoulder font-extrabold w-full py-24 whitespace-nowrap`}
                      >
                        <p className="-rotate-90 mx-0 my-0">{`${cardDescriptions[index]}`}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center h-full overflow-hidden ">
                      <div className="flex flex-row py-4 w-full">
                        <div
                          className={`pl-6 font-bigshoulder flex relative text-2xl  justify-start`}
                        >
                          {`0${index + 1}`}
                        </div>

                        <motion.div
                          initial={{ x: "-100%" }}
                          animate={{ x: 0 }}
                          transition={{ duration: 0.5 }}
                          className={`text-3xl py-6 font-bigshoulder font-extrabold rotate-0`}
                        >
                          {`${cardDescriptions[index]}`}
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "80%" }}
                        transition={{ duration: 0.5 }}
                        className="bg-black h-px"
                      ></motion.div>
                      {index === expandedIndex ? (
                        <motion.div
                          initial={{ x: "-100%", y: "100%" }}
                          animate={{ x: 0, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className={`flex h-full px-10 py-10 text-sm font-serif  text-justify`}
                        >
                          {`${processSteps[index]}`}
                        </motion.div>
                      ) : (
                        ""
                      )}
                    </div>
                  </>
                )}
              </motion.div>

              <div className={`w-1 bg-gradient-green h-full `} />
            </div>
          ))}
        </div>
      ) : (
        <>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div className="flex flex-col w-full " key={`process-${index}`}>
              <motion.div
                key={index}
                className={`font-extrabold text-5xl md:4xl sm:3xl  md:${
                  index === expandedIndex ? "expanded" : "collapsed"
                }`}
                variants={belowLargeCardVariants}
                initial="collapsed"
                animate={index === expandedIndex ? "expanded" : "collapsed"}
                transition={{ duration: 0.3 }}
                onHoverStart={() => handleCardClick(index)}
                onHoverEnd={() => handleCardClick(index)}
              >
                <div className="flex items-center h-full overflow-auto">
                  <div
                    className={`font-bigshoulder flex relative text-xl font-extrabold text-blue-800 items-center ${
                      index !== -1 ? "w-1/12" : " w-4/12"
                    }`}
                  >
                    {`0${index + 1}`}
                  </div>
                  <div
                    className={`text-2xl font-normal ${
                      index !== -1 ? "w-8/12" : "w-3/12"
                    }`}
                  >{`${cardDescriptions[index]}`}</div>
                  {index === expandedIndex ? (
                    <div
                      className={`flex h-full px-10 py-20 text-lg font-thin w-8/12 text-justify `}
                    >{`${processSteps[index]}`}</div>
                  ) : (
                    ""
                  )}
                </div>
              </motion.div>

              <div className={`h-1 bg-gradient-green w-[95%]`} />
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default OpenCards;
