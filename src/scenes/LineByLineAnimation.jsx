import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GreenCheck from "../assets/GreenCheck.png";

const LineByLineAnimation = () => {
  const [lines, setLines] = useState(0);

  const data = [
    {
      line1: "The environment through monetary advantages.",
      line2: "Transparency and Accountability through Blockchain Technology",
    },
    {
      line1:
        "Efficiency and cost-effectiveness through minimum administration.",
      line2: "Global accessibility through a Worldwide Exchange.",
    },
    {
      line1: "Liquidity and tradability through Tokenization.",
      line2:
        "Innovation and scalability through Block chain Technology for trading.",
    },
    {
      line1:
        "Community engagement through Financial Advantages and e-learning.",
      line2:
        "Fidelity through discounts and special promotions program for the owner of our Crypto.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prevLines) => {
        if (prevLines < 4) {
          return prevLines + 1;
        } else {
          clearInterval(interval);
          return prevLines;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-20 md:flex md:flex-row gap-8">
      <AnimatePresence initial={false}>
        {[...Array(lines)].map((_, index) => (
          <>
            <div className="pt-8">
              <motion.div
                className="mx-auto relative items-center rounded-xl shadow-2xl bg-opacity-100 max-w-[400px] h-[350px] flex flex-col  p-16
            md:justify-center hover:shadow-green-800"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <img
                  src={GreenCheck}
                  alt="GreenCheck"
                  className="flex w-[20%]"
                />
                <p className="font-playfair text-4xl">“</p>
                <div className="flex flex-col gap-4">
                  <p className="text-center  font-semibold font-bigshoulder text-xl">
                    {data[index].line1}
                  </p>
                  <p className="text-center font-semibold font-bigshoulder text-xl">
                    {data[index].line2}
                  </p>
                </div>
              </motion.div>
            </div>
          </>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default LineByLineAnimation;
