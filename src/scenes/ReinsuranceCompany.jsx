import { motion, useAnimation } from "framer-motion";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
import ReinsuranceCompanyImg from "../assets/ReinsuranceCompany.png";
import Person1 from "../assets/person-1.jpeg";

const ReinsuranceCompany = () => {
  return (
    <section>
      <div className="py-10 pb-32">
        <p className="my-10 flex justify-center font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          REINSURANCE COMPANY
        </p>
        <div className=" border flex flex-col">
          {/* <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={Person1}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline> */}
        </div>
      </div>
    </section>
  );
};
export default ReinsuranceCompany;
