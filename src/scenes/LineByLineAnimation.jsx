import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GreenCheck from "../assets/GreenCheck.png";
import { useTranslation } from "react-i18next";

const LineByLineAnimation = () => {
  const { t } = useTranslation();
  const [lines, setLines] = useState(0);

  const data = t("cryptotoken.data", {
    returnObjects: true,
  });

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
    <div className="mb-20 md:flex md:flex-row justify-evenly gap-8">
      <AnimatePresence initial={false} key="Animate">
        {[...Array(lines)].map((_, index) => (
          <div className="pt-8" key={index}>
            <motion.div
              className="mx-auto relative items-center rounded-xl shadow-2xl bg-opacity-100 flex flex-col  p-8
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
              <img src={GreenCheck} alt="GreenCheck" className="flex w-[20%]" />
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
        ))}
      </AnimatePresence>
    </div>
  );
};

export default LineByLineAnimation;
