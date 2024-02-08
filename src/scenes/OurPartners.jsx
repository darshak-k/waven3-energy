import React from "react";
import { motion } from "framer-motion";
import Partner1 from "../assets/Partner1.png";
import Partner2 from "../assets/Partner2.png";
import Partner3 from "../assets/Partner3.png";
import Partner4 from "../assets/Partner4.png";
import Partner5 from "../assets/Partner5.png";
import Partner6 from "../assets/Partner6.png";
import Partner7 from "../assets/Partner7.png";
import Partner8 from "../assets/Partner8.png";
import Partner9 from "../assets/Partner9.png";

const partners = [
  { id: 1, name: "Partner A", logo: Partner1 },
  { id: 2, name: "Partner B", logo: Partner2 },
  { id: 3, name: "Partner C", logo: Partner3 },
  { id: 4, name: "Partner A", logo: Partner4 },
  { id: 5, name: "Partner B", logo: Partner5 },
  { id: 6, name: "Partner C", logo: Partner6 },
  { id: 7, name: "Partner A", logo: Partner7 },
  { id: 8, name: "Partner B", logo: Partner8 },
  { id: 9, name: "Partner C", logo: Partner9 },
];

const Partners = () => {
  return (
    <section className="flex flex-col">
      <div className="mt-16 w-full py-10">
        <p className="flex my=-10 justify-center  font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          OUR PARTNERS
        </p>
        <p className="flex mt-4 text-xl justify-center">
          Some of our strategic partnerships include:
        </p>
      </div>
      <motion.div
        className="flex"
        animate={{
          x: [-100, 0, 100],
          transition: { loop: Infinity, duration: 5 },
        }}
      >
        {partners.map((partner) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: partner.id * 0.1 }}
            className="partner"
          >
            <img src={partner.logo} alt={partner.name} className="h-16 mx-4" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Partners;
