import Person1 from "../assets/person-1.jpeg";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import TimelineDot from "@mui/lab/TimelineDot";
import StoreIcon from "@mui/icons-material/Store";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import Typography from "@mui/material/Typography";
import Partner9 from "../assets/Partner9.png";
import Partner10 from "../assets/Partner10.png";
import Partner11 from "../assets/Partner11.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ReinsuranceCompany = () => {
  return (
    <section>
      <div className="py-10 pb-32">
        <p className="my-10 flex justify-center font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          REINSURANCE COMPANY
        </p>
        <div className="flex flex-col font-bigshoulder">
          <VerticalTimeline lineColor={"#212121"}>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgb(134, 216, 172)",
                color: "#212121",
                boxShadow: "8px 8px 8px 8px rgb(111, 189, 109)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(134, 216, 172)",
              }}
              iconStyle={{ background: "rgb(134, 216, 172)", color: "#212121" }}
              icon={<StoreIcon />}
            >
              <div className="flex gap-10 mb-8">
                <img src={Partner9} alt="" className="w-28" />
                <img src={Partner10} alt="" className="w-28" />
                <img src={Partner11} alt="" className="w-28" />
              </div>
              <div>
                <h3 className="vertical-timeline-element-title font-bold text-xl underline">
                  Reinsurance Company
                </h3>
                <p>
                  Primary guarantor of the financial obligation without
                  territoriality
                </p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgb(134, 216, 172)",
                color: "#212121",
                boxShadow: "8px 8px 8px 8px rgb(111, 189, 109)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(134, 216, 172)",
              }}
              iconStyle={{ background: "rgb(134, 216, 172)", color: "#212121" }}
              icon={<AccountBalanceOutlinedIcon />}
            >
              <div>
                <h3 className="vertical-timeline-element-title font-bold text-xl underline">
                  Afiancol S.A. Insurance
                </h3>
                <p>
                  Assignor to reinsurance payment upon first request without
                  territoriality
                </p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgb(134, 216, 172)",
                color: "#212121",
                boxShadow: "8px 8px 8px 8px rgb(111, 189, 109)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(134, 216, 172)",
              }}
              iconStyle={{ background: "rgb(134, 216, 172)", color: "#212121" }}
              icon={<EmojiPeopleOutlinedIcon />}
            >
              <div>
                <h3 className="vertical-timeline-element-title font-bold text-xl underline">
                  Debtor
                </h3>
                <p>Entrenchend debtor</p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgb(134, 216, 172)",
                color: "#212121",
                boxShadow: "8px 8px 8px 8px rgb(111, 189, 109)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(134, 216, 172)",
              }}
              iconStyle={{ background: "rgb(134, 216, 172)", color: "#212121" }}
              icon={<CreditScoreOutlinedIcon />}
            >
              <div>
                <h3 className="vertical-timeline-element-title font-bold text-xl underline">
                  Lender Loans
                </h3>
                <p>Bail & reinsurance benefeciary</p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
export default ReinsuranceCompany;
