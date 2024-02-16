import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="flex  w-full py-10 justify-center">
        <p className=" font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          {t("aboutus")}
        </p>
      </div>
      <div className="flex flex-col mt-10 font-bigshoulder tracking-wide text-xl gap-10 w-[90%] pb-20">
        <div>
          <p className=" font-extrabold text-orange-900">OUR MISSION</p>
          <p className="mt-4">
            Unless the Lender & Investor shall have executed a written waiver,
            and then only to the extent specifically set forth in that written
            waiver, no act, omission or delay will be deemed to constitute a
            waiver of any of the Lender’s & Investor’s rights or remedies under
            this Loan or investment, and no act, delay, omission or waiver on
            any one occasion will be deemed a bar to enforcement or a waiver of
            the same or any other right or remedy on any other occasion
          </p>
        </div>

        <div>
          <p className=" font-extrabold text-orange-900 ">OUR DEDICATION</p>
          <p className="mt-4">
            We are dedicated to ensuring the sustainability and protection of
            forests across the world. We have solidified partnerships in key
            regions across the world including Congo, Amazonia, and Columbia.
          </p>
        </div>

        <div>
          <p className=" font-extrabold text-orange-900">OUR TECHNOLOGY</p>
          <p className="mt-4">
            We have secured technology that facilitates the extraction and
            production of Green Hydrogen and Natural Gas from both water and
            various other elements in North America. The technology used to
            confirm the presence of these gases and minerals is part of an
            exclusive partnership established in 2023 using patented equipment
            that scans the surface of land or water via helicopter or drone with
            99.9% accuracy.
          </p>
        </div>

        <div>
          <p className=" font-extrabold text-orange-900">GREEN HYDROGEN</p>
          <p className="mt-4">
            Green Hydrogen is a type of hydrogen that is produced through a
            process called electrolysis, specifically using renewable energy
            sources such as wind, solar, or hydroelectric power.
          </p>
          <p className="mt-4">
            In the electrolysis process, electricity is used to split water into
            hydrogen and oxygen. If the electricity used in this process comes
            from renewable sources, the hydrogen produced is considered “green”
            because its production does not emit any carbon dioxide.
          </p>

          <p className="mt-4">
            In the electrolysis process, electricity is used to split water into
            hydrogen and oxygen. If the electricity used in this process comes
            from renewable sources, the hydrogen produced is considered “green”
            because its production does not emit any carbon dioxide.
          </p>

          <p className="mt-4">
            However, the production of Green Hydrogen is currently more
            expensive than other methods of hydrogen production, and it requires
            a significant amount of electricity.Therefore, the availability of
            cheap, renewable electricity is a key factor for its production.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
