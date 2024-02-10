import React from "react";

const Residency = () => {
  return (
    <section id="residency" className="pb-20">
      <div className="flex  w-full py-10 justify-center">
        <p className=" font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          RESIDENCY
        </p>
      </div>
      <div className="flex flex-col mt-10 font-bigshoulder justify-center items-center tracking-wide text-xl gap-10 w-[90%] pb-20">
        <div className="flex flex-col gap-10 border border-orange-900 mx-[24%] px-20 py-20 rounded-xl">
          <div className="flex flex-col md:flex-row gap-8 ">
            <p className=" font-extrabold text-orange-900 justify-start items-start  w-1/3">
              AMERICAN & UAE CITIZENS{"- "}
            </p>
            <p className=" w-2/3">
              CITIZENS THAT RESIDE IN THESE TERRITORIES ARE ABLE TO INVEST IN
              OUR COMPANY.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <p className=" font-extrabold text-orange-900 justify-start items-start w-1/3">
              CANADIAN CITIZENS {"       - "}
            </p>
            <p className="  w-2/3">WE ONLY ACCEPT LOANS</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <p className=" font-extrabold text-orange-900 justify-start items-start">
            FULLY INSURED HIGH YIELD RETURNS
          </p>
          <p className="mt-10">
            Returns that are historically higher than the S&P 500 index and
            offer a guaranteed yield that on average is three times higher then
            any other fixed or variable annuity product and higher than any
            REIT, mortgage note, ETF or other similar instrument. The
            quintessential annuity alternative with the same guarantees but with
            much higher yield(s).
          </p>
        </div>

        <div>
          <p className=" font-extrabold text-orange-900 ">
            FULLY GUARANTEED INCOME
          </p>
          <p className="mt-10">
            Significant quarterly income that is directly deposited into your
            bank account on the 1st of every 3 r d month. Build up your
            retirement, cover additional living expenses, enhance the quality of
            your life, start to travel or just continue to build up your savings
            account.
          </p>
        </div>

        <div>
          <p className=" font-extrabold text-orange-900 ">
            FULLY GUARANTEED LOAN
          </p>
          <p className="mt-10">
            Our Fully Secured Principal & Interest Fixed Rate loan & Investment
            Offering provides each note holder with a financial guarantee bond,
            similar to astandard surety bond with a dedicated insurance policy
            issued directly to our note holders from top A M Best rated insurers
            which guarantee our note holders cannotlose their principal
            investment and also serves as a guarantee that they will receive the
            interest offered in our note offering in full. DELIVERING CERTAINTY
            IN AN UNCERTAIN WORLD 2.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Residency;
