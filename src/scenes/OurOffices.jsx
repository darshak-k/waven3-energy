import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NavigationIcon from "@mui/icons-material/Navigation";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import Person3Icon from "@mui/icons-material/Person3";
import CanadaFlag from "../assets/CanadaFlag.jpg";
import USAFlag from "../assets/USAFlag.png";
import UAEFlag from "../assets/UAEFlag.png";
import SwitzerlandFlag from "../assets/SwitzerlandFlag.jpg";
import { useTranslation } from "react-i18next";

const OurOffices = () => {
  const cardsData = [
    {
      flag: CanadaFlag,
      country: "CANADA",
      person: "Robert Trudeau",
      email: "rtrudeau@waven3global.com",
    },
    {
      flag: USAFlag,
      country: "USA",
      person: "Michel Faille",
      email: "mfaille@waven3global.com",
    },
    {
      flag: UAEFlag,
      country: "UAE",
      person: "Rafa Ren",
      email: "rafaren@waven3global.com",
    },
    {
      flag: SwitzerlandFlag,
      country: "SWITZERLAND",
      person: "Carlo D’anello",
      email: "cdanello@waven3glegal.com",
    },
  ];

  const { t } = useTranslation();

  return (
    <section>
      <div className="flex  w-full justify-center">
        <p className=" font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          {t("offices.title")}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-20 mt-20">
        {cardsData.map((data, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-64  opacity-100 shadow-lg rounded-lg overflow-hidden m-4"
          >
            <img
              src={cardsData[index].flag}
              alt={`${cardsData[index].country} flag`}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">
                {cardsData[index].country}
              </h2>

              <div className="flex text-center font-semibold font-bigshoulder text-xl gap-5">
                <Person3Icon />
                <p className="text-gray-700 mb-2">{cardsData[index].person}</p>
              </div>
              <div className="flex text-center font-semibold font-bigshoulder text-xl gap-5">
                <EmailIcon />
                <a href={`mailto:${cardsData[index].email}`}>
                  <p className="text-gray-700">{cardsData[index].email}</p>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex  w-full justify-center">
        <p className=" font-bigshoulder font-extrabold text-4xl md:2xl sm:lg mt-20 text-orange-800">
          {t("offices.locations")}
        </p>
      </div>
      <div className="flex flex-col ss:flex-row justify-center my-28 font-bigshoulder tracking-wide text-xl gap-20 w-full px-[5%]">
        <div className="pt-8">
          <motion.div
            className="mx-auto relative items-center rounded-xl shadow-2xl bg-opacity-100 max-w-[400px] h-auto flex flex-col  p-16
            md:justify-center shadow-orange-800 hover:shadow-green-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <LocationOnIcon fontSize="large" />
            <div className="flex flex-col gap-4 mt-10">
              <p className="text-center text-orange-800 font-extrabold font-bigshoulder text-2xl underline ">
                {t("offices.headoffice")}
              </p>
              <p className="text-center text-orange-800 font-extrabold font-bigshoulder text-2xl  pb-10">
                {t("offices.canadausa")}
              </p>
              <div className="flex text-center font-semibold font-bigshoulder text-xl gap-5">
                <NavigationIcon />
                <p> {t("offices.canadaaddress")}</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="pt-8">
          <motion.div
            className="mx-auto relative items-center rounded-xl shadow-2xl bg-opacity-100 max-w-[400px] h-auto flex flex-col  p-16
            md:justify-center shadow-orange-800 hover:shadow-green-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <LocationOnIcon fontSize="large" />
            <div className="flex flex-col gap-4 mt-10">
              <p className="text-center text-orange-800 font-extrabold font-bigshoulder text-2xl underline ">
                {t("offices.headoffice")}
              </p>
              <p className="text-center text-orange-800 font-extrabold font-bigshoulder text-2xl  pb-10">
                {t("offices.switzerlanduae")}
              </p>

              <div className="flex text-center font-semibold font-bigshoulder text-xl gap-5">
                <NavigationIcon />
                <p> {t("offices.switzerlandaddress")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
