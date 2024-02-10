import React from "react";
import Office from "../assets/Office.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NavigationIcon from "@mui/icons-material/Navigation";
import EmailIcon from "@mui/icons-material/Email";
import { AnimatePresence, motion } from "framer-motion";
import Person3Icon from "@mui/icons-material/Person3";
import GreenCheck from "../assets/GreenCheck.png";

const OurOffices = () => {
  return (
    <section>
      <div className="flex  w-full justify-center">
        <p className=" font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          Our Offices
        </p>
      </div>
      <div className="flex flex-col ss:flex-row justify-center my-28 font-bigshoulder tracking-wide text-xl gap-20 w-full px-[5%]">
        <>
          <div className="pt-8">
            <motion.div
              className="mx-auto relative items-center rounded-xl shadow-2xl bg-opacity-100 max-w-[500px] h-[350px] flex flex-col  p-16
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
                <p className="text-center text-orange-800 font-extrabold font-bigshoulder text-2xl underline pb-10">
                  HEAD OFFICE - CANADA & USA
                </p>
                <div className="flex text-center font-semibold font-bigshoulder text-xl gap-5">
                  <NavigationIcon />
                  <p> 3225 Blvd Saint Martin O Suite 104 Laval QC H7T1S2</p>
                </div>

                <div className="flex text-center font-semibold font-bigshoulder text-xl gap-5">
                  <Person3Icon />
                  <p>ROBERT TRUDEAU</p>
                </div>
                <div className="flex text-center font-semibold font-bigshoulder text-xl gap-5">
                  <EmailIcon />
                  <p>rtrrudeau@waven3tech.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
        <>
          <div className="pt-8">
            <motion.div
              className="mx-auto relative items-center rounded-xl shadow-2xl bg-opacity-100 max-w-[500px] h-[350px] flex flex-col  p-16
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
                <p className="text-center text-orange-800 font-extrabold font-bigshoulder text-2xl underline pb-10">
                  HEAD OFFICE - SWITZERLAND
                </p>
                <div className="flex text-center font-semibold font-bigshoulder text-xl gap-5">
                  <NavigationIcon />
                  <p> Gartenstrasse 6 6300 Zug Switzerland</p>
                </div>

                <div className="flex text-center font-semibold font-bigshoulder text-xl gap-5">
                  <Person3Icon />
                  <p>RAFA REN</p>
                </div>
                <div className="flex text-center font-semibold font-bigshoulder text-xl gap-5">
                  <EmailIcon />
                  <p>rafaren@waven3tech.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      </div>
    </section>
  );
};

export default OurOffices;
