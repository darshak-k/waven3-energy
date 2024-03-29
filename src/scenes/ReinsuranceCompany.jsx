import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import StoreIcon from "@mui/icons-material/Store";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import Partner9 from "../assets/Partner9.png";
import Partner10 from "../assets/Partner10.png";
import Partner11 from "../assets/Partner11.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";

const ReinsuranceCompany = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="py-10 pb-32">
        <p className="my-10 flex justify-center text-center font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          {t("reinsurancecompany.title")}
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
              <div className="flex flex-col md:flex-row gap-10 mb-8">
                <img src={Partner9} alt="" className="w-28" />
                <img src={Partner10} alt="" className="w-28" />
                <img src={Partner11} alt="" className="w-28" />
              </div>
              <div>
                <h3 className="vertical-timeline-element-title font-bold text-xl underline">
                  {t("reinsurancecompany.title")}
                </h3>
                <p>{t("reinsurancecompany.companytext")}</p>
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
                  <p>{t("reinsurancecompany.afiancol")}</p>
                </h3>
                <div>
                  <p>{t("reinsurancecompany.afiancoltext")}</p>
                </div>
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
                  {t("reinsurancecompany.debtor")}
                </h3>
                <p>{t("reinsurancecompany.debtortext")}</p>
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
                  {t("reinsurancecompany.lendor")}
                </h3>
                <p>{t("reinsurancecompany.lendortext")}</p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
export default ReinsuranceCompany;
