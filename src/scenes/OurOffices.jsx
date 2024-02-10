import React from "react";
import Office from "../assets/Office.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const OurOffices = () => {
  return (
    <section>
      <div className="flex  w-full py-10 justify-center">
        <p className=" font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          OUR OFFICES
        </p>
      </div>
      <div className="flex flex-col ss:flex-row my-28 font-bigshoulder tracking-wide text-xl gap-10 w-full px-[5%]">
        <div className="flex flex-col gap-20 w-1/3  md:w-1/2 pt-20">
          <div>
            <p className=" font-extrabold text-orange-900">
              HEAD OFFICE - CANADA
            </p>
            <div className="flex flex-row gap-6 items-center">
              <LocationOnIcon />
              <p className="mt-4">
                3225 Blvd Saint Martin O Suite 104 Laval QC H7T1S2
              </p>
            </div>
          </div>
          <div>
            <p className=" font-extrabold text-orange-900">
              HEAD OFFICE - SWITZERLAND
            </p>
            <div className="flex flex-row gap-6 items-center">
              <LocationOnIcon />
              <p className="mt-4">Gartenstrasse 6 6300 Zug Switzerland</p>
            </div>
          </div>

          <div>
            <p className=" font-extrabold text-orange-900">
              HEAD OFFICE - EMIRATES UNITED
            </p>
            <div className="flex flex-row gap-6 items-center">
              <LocationOnIcon />
              <p className="mt-4">Gartenstrasse 6 6300 Zug Switzerland</p>
            </div>
          </div>
        </div>

        <div className="flex w-2/3 md:w-1/2 justify-center">
          <img src={Office} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
