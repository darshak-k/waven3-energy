import React from "react";
import { motion } from "framer-motion";
import CryptoBitcoin from "../assets/CryptoBitcoin.png";
import Finma from "../assets/Finma.png";
import LineByLineAnimation from "./LineByLineAnimation";
import { useTranslation } from "react-i18next";

const CryptoToken = () => {
  const { t } = useTranslation();
  const textStyle = "text-2xl font-bigshoulder text-center";

  return (
    <section id="crypto" className="flex flex-col items-center gap-10 ">
      <div className="flex mt-16 w-full py-10 justify-center">
        <p className="my=-10  font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          {t("cryptotoken.title")}
        </p>
      </div>

      <div className="flex flex-col justify-center gap-5 px-10 max-w-[1200px]">
        <div className={`${textStyle}`}>{t("cryptotoken.text1")}</div>
        <div className={`${textStyle}`}>{t("cryptotoken.text2")}</div>
      </div>

      <div className="flex flex-col md:flex-row h-full w-full py-10 justify-center items-center gap-20">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative h-full  md:min-h-[400px] rounded-lg p-4 transition-all duration-300"
        >
          {/* Main Image */}
          <img
            src={Finma}
            alt="Main Image"
            className="max-w-[300px] md:max-w-[600px]  rounded-lg"
          />

          {/* Blur Image and Text on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-75 bg-gray-800"
          >
            {/* Text */}
            <p className="mt-2 text-sm md:text-xl font-bigshoulder justify-between tracking-wider font-bold px-20">
              {t("cryptotoken.image1")}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative  rounded-lg p-4 transition-all duration-300"
        >
          {/* Main Image */}
          <img
            src={CryptoBitcoin}
            alt="Main Image"
            className="max-w-[400px] md:max-w-[600px] rounded-lg"
          />

          {/* Blur Image and Text on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-75 bg-gray-800 transition-all duration-300"
          >
            {/* Text */}
            <p className="mt-2 text-xl font-bigshoulder tracking-wider font-bold px-20">
              {t("cryptotoken.image2")}
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div>
        <LineByLineAnimation />
      </div>
    </section>
  );
};

export default CryptoToken;
