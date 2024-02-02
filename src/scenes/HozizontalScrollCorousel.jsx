import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const OpenCards = () => {
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

  const cardDescriptions = [
    "Accurate data collection",
    "Verification methodologies",
    "Additionality",
    "Baseline determination",
    "Monitoring and reporting",
    "Independent verification",
    "Compliance with standards and regulations",
    "Transparency and auditability",
    "Stakeholder engagement",
  ];

  const processSteps = [
    "Validating carbon credits starts with accurate data collection on emissions reductions or offsets. This includes collecting data on baseline emissions, project activities, and monitoring methodologies. It's crucial to ensure that the data collected is reliable, verifiable, and follows recognized standards",
    "Establishing robust verification methodologies to asses the validity of carbon credits. This involves evaluating the project's adherence to approved methodologies, the accuracy of data collection and monitoring, and the credibility of emission reduction claims. Verification may be conducted by certified third-party organizations or accredited auditors",
    " Additionality refers to the requirement that the emissions reductions or offsets claimed from the project would not have occurred without the project's intervention. It is essential to assess and demonstrate that the project's activities go beyond business-as-usual practices and result in real, measurable emissions reductions.",
    "Establishing an accurate baseline is crucial for validating carbon credits. The baseline represents the emissions that would have occurred in the absence of the project. It is important to determine the baseline using recognized methodologies and ensure it is consistent with established guidelines and standards",
    " Implement robust monitoring and reporting systems to track the progress of carbon reduction activities over time. This includes regular monitoring of emissions, project activities, and other relevant parameters. Accurate and transparent reporting is essential for the validation process",
    "Seek independent verification of the carbon credits by certified third-party organizations or accredited auditors. Independent verification adds credibility and ensures that the carbon credits meet the required standards and criteria.",
    "Ensure that the carbon credits comply with relevant standards, methodologies, and regulatory frameworks. This includes adherence to internationally recognized standards such as the Verification Carbon Standards (VCS), the Gold Standard, or the Clean Development Mechanism (CDM) of the United Nations Framework Convention on Climate Change (UNFCCC)",
    "Maintain transparency throughout the validation process by providing access to relevant data, documentation, and methodologies. The ability to audit and verify the carbon credit claims is crucial for building trust and credibility",
    "Engage with stakeholders, including local communities, project participants, and relevant authorities, to ensure their involvement and understanding of the validation process. Stakeholder engagement fosters transparency, accountability, and acceptance of the carbon credit validation outcomes.",
  ];

  return (
    <section>
      <div className="py-10 pb-32">
        <p className="my-10 flex justify-center font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          ACCREDITATION PROCESS
        </p>
      </div>

      {isAboveLarge ? (
        <div className="flex flex-row w-full">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div className={`flex flex-row gap-1  w-full h-[400px]`}>
              <motion.div
                key={index}
                className={` border ${
                  index === expandedIndex ? "expanded" : "collapsed"
                }`}
                variants={cardVariants}
                initial="collapsed"
                animate={index === expandedIndex ? "expanded" : "collapsed"}
                transition={{ duration: 0.3 }}
                onHoverStart={() => handleCardClick(index)}
                onHoverEnd={() => handleCardClick(index)}
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
                        className={`text-2xl font-bigshoulder font-extrabold w-full py-20 whitespace-nowrap`}
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
            <div className="flex flex-col w-full ">
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
