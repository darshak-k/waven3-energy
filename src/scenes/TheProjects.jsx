import React from "react";

const TheProjects = () => {
  return (
    <section>
      <div className="flex  w-full py-10 justify-center">
        <p className=" font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          The Projects
        </p>
      </div>
      <div className="flex flex-col mt-10 font-bigshoulder tracking-wide text-xl gap-10 w-[90%] pb-20">
        <div className="flex flex-col ">
          <p className=" font-extrabold text-orange-900 justify-start items-start">
            OUR PROJECTS
          </p>
          <p className="mt-10">
            Waven3 technology is in the process of securing claims ( DEC 2023 )
            in the territory of Quebec that have been initially prospected and
            contain large pockets of White Hydrogen. We are also continuously
            working on securing partnerships to include projects dedicated to
            the production of Blue Methanol and clean energy.
          </p>
        </div>

        <div>
          <p className=" font-extrabold text-orange-900 ">OUR PROJECTS</p>
          <p className="mt-10">
            White Hydrogen, also known as Natural Hydrogen, is a naturally
            occurring form of Hydrogen,that is found in underground deposits and
            in the air It is the lightest chemical element and the first on the
            periodic table of elements.
          </p>
          <p className="mt-10">
            This form of Hydrogen is released from underground deposits through
            processes . However, even though it is the most abundant, element in
            the universe, it is rare in its pure form. which is why it isn’t
            being considered for collection to be used as an emission-free fuel.
          </p>
          <p className="mt-10">
            Instead, H2 is usually combined with other atoms to create other
            molecules . For example, an easily recognizable combination is H2O,
            better known as water. While the natural form may be renewable and
            is just as non-polluting as those forms made with renewable energy,
            it cannot be reasonably captured without other processes to extract
            it from where it has been combined.
          </p>

          <p className="mt-10">
            In summary, White Hydrogen is a naturally occurring form of Hydrogen
            that is found in the air and in underground deposits but it is
            challenging to capture and use as a fuel source due to its rarity in
            pure form and the energy-intensive extraction process
          </p>

          <p className="mt-10">
            Blue Methanol is a type of methanol produced using Carbon Capture
            and Sequestration (CCS) technology. This process involves capturing
            and compressing waste CO2 at the plant site and injecting it deep
            into contained geological formations where it is. permanently and
            safely sequestered
          </p>

          <p className="mt-10">
            Blue Methanol serves as a versatile building block for countless
            everyday products, including adhesives and construction materials It
            is also being evaluated for use as a low-carbon fuel for industries
            such as shipping.
          </p>

          <p className="mt-10">
            In the context of Waven3, Blue Methanol is produced from Clean
            Hydrogen. The production of Blue Methanol displaces more
            carbon-intensive gray or black products manufactured without CCS or
            other carbon reduction technologies. It has multiple and growing
            applications in both the petrochemical and transportation industries
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheProjects;
