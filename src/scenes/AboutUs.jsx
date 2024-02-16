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
          <p className=" font-extrabold text-orange-900">{t("ourmission")}</p>
          <p className="mt-4">{t("ourmissiontext")}</p>
        </div>

        <div>
          <p className=" font-extrabold text-orange-900 ">
            {t("ourdedication")}
          </p>
          <p className="mt-4">{t("ourdedicationtext")}</p>
        </div>

        <div>
          <p className=" font-extrabold text-orange-900">
            {t("ourtechnology")}
          </p>
          <p className="mt-4">{t("ourtechnologytext")}</p>
        </div>

        <div>
          <p className=" font-extrabold text-orange-900">
            {t("greenhydrogen")}
          </p>
          <p className="mt-4">{t("greenhydrogentext1")}</p>
          <p className="mt-4">{t("greenhydrogentext2")} </p>
          <p className="mt-4">{t("greenhydrogentext3")}</p>
          <p className="mt-4">{t("greenhydrogentext4")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
