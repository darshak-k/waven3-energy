import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Partner1 from "../assets/Partner1.png";
import Partner2 from "../assets/Partner2.png";
import Partner3 from "../assets/Partner3.png";
import Partner4 from "../assets/Partner4.png";
import Partner5 from "../assets/Partner5.png";
import Partner6 from "../assets/Partner6.png";
import Partner7 from "../assets/Partner7.png";
import Partner8 from "../assets/Partner8.png";
import Partner9 from "../assets/Partner9.png";
import Partner10 from "../assets/Partner10.png";
import Partner11 from "../assets/Partner11.png";

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
  { id: 10, name: "Partner C", logo: Partner10 },
  { id: 11, name: "Partner C", logo: Partner11 },
];

const Partners = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) =>
        prevOffset < partners.length - 1 ? prevOffset + 1 : 0
      );
    }, 4000); // change the interval to control the speed of the slider
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <div className="mt-16 w-full py-10  font-bigshoulder">
          <p className="flex my=-10 justify-center  font-extrabold text-5xl md:3xl sm:xl">
            OUR PARTNERS
          </p>
          <p className="flex mt-4 text-xl justify-center">
            Some of our strategic partnerships include:
          </p>
        </div>
        <div className="w-full flex">
          <Marquee
            pauseOnHover="true"
            className="rounded-2xl py-3 overflow-hidden grid  "
          >
            {partners.map((partner, index) => (
              <div className=" flex pr-10 flex-col justify-center items-center mx-5 ">
                <img src={partner.logo} className="w-48" alt="" />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Partners;
