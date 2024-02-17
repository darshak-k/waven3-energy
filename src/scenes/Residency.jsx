import React from "react";
import { useTranslation } from "react-i18next";

const Residency = () => {
  const { t } = useTranslation();
  return (
    <section id="residency" className="pb-20">
      {/* <div className="flex  w-full py-10 justify-center">
        <p className=" font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          RESIDENCY
        </p>
      </div> */}
      <div className="flex flex-col mt-10 font-bigshoulder tracking-wide text-xl gap-10 pb-20 mx-[10%]">
        <div>
          <p className=" font-extrabold text-orange-900 ">
            {t("residencypage.AMERICAN_UAE_CITIZENS.title")}
          </p>
          <p className="mt-10">
            {t("residencypage.AMERICAN_UAE_CITIZENS.content")}
          </p>
        </div>
        <div>
          <p className=" font-extrabold text-orange-900 ">
            {t("residencypage.CANADIAN_CITIZENS.title")}
          </p>
          <p className="mt-10">
            {t("residencypage.CANADIAN_CITIZENS.content")}
          </p>
        </div>
        <div className="flex flex-col ">
          <p className=" font-extrabold text-orange-900">
            {t("residencypage.FULLY_INSURED_HIGH_YIELD_RETURNS.title")}
          </p>
          <p className="mt-10">
            {t("residencypage.FULLY_INSURED_HIGH_YIELD_RETURNS.content")}
          </p>
        </div>

        <div>
          <p className=" font-extrabold text-orange-900 ">
            {t("residencypage.FULLY_GUARANTEED_INCOME.title")}
          </p>
          <p className="mt-10">
            {t("residencypage.FULLY_GUARANTEED_INCOME.content")}
          </p>
        </div>

        <div>
          <p className=" font-extrabold text-orange-900 ">
            {t("residencypage.FULLY_GUARANTEED_LOAN_OR_INVESTMENT.title")}
          </p>
          <p className="mt-10">
            {t("residencypage.FULLY_GUARANTEED_LOAN_OR_INVESTMENT.content")}
          </p>
        </div>

        <div>
          <p className=" font-extrabold text-orange-900 ">
            {" "}
            {t("residencypage.DISTRIBUTED_FUNDS_HANDLING.title")}
          </p>
          <p className="mt-10">
            {t("residencypage.DISTRIBUTED_FUNDS_HANDLING.content")}
          </p>
        </div>

        <div className="flex flex-col items-center mt-20">
          <p className="text-4xl text-orange-800 font-extrabold ">
            {t(
              "residencypage.FINANCIAL_GUARANTEE_LOAN_OR_INVESTMENT_FACT_SHEET.title"
            )}
          </p>
          <p className="pt-10">
            {t(
              "residencypage.FINANCIAL_GUARANTEE_LOAN_OR_INVESTMENT_FACT_SHEET.subtitle"
            )}
          </p>
        </div>
        <div>
          <p className=" font-extrabold text-orange-900 ">
            {t(
              "residencypage.FINANCIAL_GUARANTEE_LOAN_OR_INVESTMENT_FACT_SHEET.content.0.title"
            )}
          </p>
          <p className="mt-10">
            {t(
              "residencypage.FINANCIAL_GUARANTEE_LOAN_OR_INVESTMENT_FACT_SHEET.content.0.paragraphs.0"
            )}
          </p>
          <p className="mt-10">
            {t(
              "residencypage.FINANCIAL_GUARANTEE_LOAN_OR_INVESTMENT_FACT_SHEET.content.0.paragraphs.1"
            )}
          </p>

          <p className="mt-10">
            {t(
              "residencypage.FINANCIAL_GUARANTEE_LOAN_OR_INVESTMENT_FACT_SHEET.content.0.paragraphs.2"
            )}
          </p>
        </div>
        <div>
          <p className=" font-extrabold text-orange-900 ">
            {t(
              "residencypage.FINANCIAL_GUARANTEE_LOAN_OR_INVESTMENT_FACT_SHEET.content.1.title"
            )}
          </p>
          <p className="mt-10">
            {t(
              "residencypage.FINANCIAL_GUARANTEE_LOAN_OR_INVESTMENT_FACT_SHEET.content.1.paragraphs.0"
            )}
          </p>
        </div>
        <section className="w-full md:w-[80%] dark:bg-opacity-100 dark:text-gray-800">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="space-y-4">
              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri">
                  {t("residencypage.questions.0.question")}
                </summary>
                <p className="px-4 py-4">
                  {t("residencypage.questions.0.answer")}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg">
                <summary className="px-4 py-4 font-extrabold  focus:outline-none focus-visible:ri">
                  {t("residencypage.questions.1.question")}{" "}
                </summary>
                <p className="px-4 py-4">
                  {t("residencypage.questions.1.answer")}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg">
                <summary className="px-4 py-4 font-extrabold  focus:outline-none focus-visible:ri">
                  {t("residencypage.questions.2.question")}{" "}
                </summary>
                <p className="px-4 py-4">
                  {t("residencypage.questions.2.answer")}
                </p>
              </details>
              <details className="w-full border border-gray-900 rounded-lg">
                <summary className="px-4 py-4 font-extrabold  focus:outline-none focus-visible:ri">
                  {t("residencypage.questions.3.question")}{" "}
                </summary>
                <p className="px-4 py-4">
                  {t("residencypage.questions.3.answer")}
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="w-full md:w-[80%] dark:bg-opacity-100 dark:text-gray-800">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="space-y-4">
              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t("residencypage.loan_details.interest.title")}
                </summary>
                <p className="px-4 py-4">
                  {t("residencypage.loan_details.interest.content.0")}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t("residencypage.loan_details.time_of_payments.title")}
                </summary>
                <p className="px-4 py-4">
                  {t("residencypage.loan_details.time_of_payments.content.0")}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t(
                    "residencypage.loan_details.maturity_date_prepayment_acceleration.title"
                  )}
                </summary>
                <p className="px-4 py-4">
                  {t(
                    "residencypage.loan_details.maturity_date_prepayment_acceleration.content.0"
                  )}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t(
                    "residencypage.loan_details.mode_and_place_of_payment.title"
                  )}
                </summary>
                <p className="px-4 py-4">
                  {t(
                    "residencypage.loan_details.mode_and_place_of_payment.content.0"
                  )}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t("residencypage.loan_details.default.title")}
                </summary>
                <p className="px-4 py-4">
                  {t("residencypage.loan_details.default.content.0")}
                </p>

                <p className="px-4 py-4">
                  {t("residencypage.loan_details.default.content.1")}
                </p>
                <p className="px-4 py-4">
                  {t("residencypage.loan_details.default.content.2")}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t("residencypage.loan_details.cancellation.title")}
                </summary>
                <p className="px-4 py-4">
                  {t("residencypage.loan_details.cancellation.content.0")}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t(
                    "residencypage.loan_details.presentment_demand_notice.title"
                  )}
                </summary>
                <p className="px-4 py-4">
                  {t(
                    "residencypage.loan_details.presentment_demand_notice.content.0"
                  )}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t("residencypage.loan_details.specific_performance.title")}
                </summary>
                <p className="px-4 py-4">
                  {t(
                    "residencypage.loan_details.specific_performance.content.0"
                  )}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t(
                    "residencypage.loan_details.costs_enforcement_protection.title"
                  )}
                </summary>
                <p className="px-4 py-4">
                  {t(
                    "residencypage.loan_details.costs_enforcement_protection.content.0"
                  )}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t("residencypage.loan_details.governing_law_venue.title")}
                </summary>
                <p className="px-4 py-4">
                  {t(
                    "residencypage.loan_details.governing_law_venue.content.0"
                  )}
                </p>
                <p className="px-4 py-4">
                  {t(
                    "residencypage.loan_details.governing_law_venue.content.1"
                  )}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t("residencypage.loan_details.no_waiver.title")}
                </summary>
                <p className="px-4 py-4">
                  {t("residencypage.loan_details.no_waiver.content.0")}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t("residencypage.loan_details.notices.title")}
                </summary>
                <p className="px-4 py-4">
                  {t("residencypage.loan_details.notices.content.0")}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t("residencypage.loan_details.legend.title")}
                </summary>
                <p className="px-4 py-4">
                  {t("residencypage.loan_details.legend.content.0")}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t("residencypage.loan_details.original_intent.title")}
                </summary>
                <p className="px-4 py-4">
                  {t("residencypage.loan_details.original_intent.content.0")}
                </p>
              </details>

              <details className="w-full border border-gray-900 rounded-lg text-bold">
                <summary className="px-4 py-4 font-extrabold focus:outline-none focus-visible:ri ">
                  {t(
                    "residencypage.loan_details.unconditional_guarantee.title"
                  )}
                </summary>
                <p className="px-4 py-4">
                  {t(
                    "residencypage.loan_details.unconditional_guarantee.content.0"
                  )}
                </p>
                <p className="px-4 py-4">
                  {t(
                    "residencypage.loan_details.unconditional_guarantee.content.1"
                  )}
                </p>
                <p className="px-4 py-4">
                  {t(
                    "residencypage.loan_details.unconditional_guarantee.content.2"
                  )}
                </p>
                <p className="px-4 py-4">
                  {t(
                    "residencypage.loan_details.unconditional_guarantee.content.3"
                  )}
                </p>
                <p className="px-4 py-4">
                  {t(
                    "residencypage.loan_details.unconditional_guarantee.content.4"
                  )}
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Residency;
