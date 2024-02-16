import React from "react";
import { useTranslation } from "react-i18next";

const NotFound404 = () => {
  const { t } = useTranslation();

  return (
    <section className="flex items-center h-full p-16 font-bigshoulder tracking-wide text-2xl">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-900">
            <span className="sr-only">{t("notfound.error")}</span>
            {t("notfound.404")}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            {t("notfound.notfoundtext")}
          </p>
          <p className="mt-4 mb-8 ">{t("notfound.hometext")}</p>
          <a
            rel="noopener noreferrer"
            href="/home"
            className="px-8 py-3 font-semibold rounded dark:bg-red"
          >
            {t("notfound.backtohome")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound404;
