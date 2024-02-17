import React from "react";
import { useTranslation } from "react-i18next";

const TheProjects = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="flex  w-full py-10 justify-center">
        <p className=" font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          {t("theprojectspage.title")}
        </p>
      </div>
      <div className="flex flex-col mt-10 font-bigshoulder tracking-wide text-xl gap-10 w-[90%] pb-20">
        <div className="flex flex-col ">
          <p className=" font-extrabold text-orange-900 justify-start items-start">
            {t("theprojectspage.ourproject")}
          </p>
          <p className="mt-10">
            {t("theprojectspage.Waven3_technology_claim.content")}
          </p>
          <p className="mt-10">
            {t("theprojectspage.white_hydrogen_intro.content")}
          </p>
          <p className="mt-10">
            {t("theprojectspage.white_hydrogen_details.content")}
          </p>

          <p className="mt-10">
            {t("theprojectspage.white_hydrogen_extraction.content")}
          </p>
          <p className="mt-10">
            {t("theprojectspage.white_hydrogen_summary.content")}
          </p>

          <p className="mt-10">
            {t("theprojectspage.blue_methanol_intro.content")}
          </p>

          <p className="mt-10">
            {t("theprojectspage.blue_methanol_details.content")}
          </p>

          <p className="mt-10">
            {t("theprojectspage.blue_methanol_context.content")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheProjects;
