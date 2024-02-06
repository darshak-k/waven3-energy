import Person1 from "../assets/person-1.jpeg";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import TimelineDot from "@mui/lab/TimelineDot";
import StoreIcon from "@mui/icons-material/Store";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import Typography from "@mui/material/Typography";
import ReinsuranceCompanyImg from "../assets/ReinsuranceCompany.png";

const ReinsuranceCompany = () => {
  return (
    <section>
      <div className="py-10 pb-32">
        <p className="my-10 flex justify-center font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          REINSURANCE COMPANY
        </p>
        <div className="flex flex-col">
          {/* <img
            src={ReinsuranceCompanyImg}
            alt="ReinsuranceCompanyImg"
            className="max-w-[40%]"
          /> */}
          <Timeline position="alternate" className=" font-bigshoulder">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <StoreIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Reinsurance Company
                </Typography>
                <Typography>
                  Primary guarantor of the financial obligation without
                  territoriality
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <AccountBalanceOutlinedIcon className="" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Afiancol S.A.
                </Typography>
                <Typography>
                  Assignor to reinsurance payment upon first request without
                  territoriality
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <EmojiPeopleOutlinedIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Debtor
                </Typography>
                <Typography>Entrenchend debtor</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <CreditScoreOutlinedIcon />
                </TimelineDot>
                <TimelineConnector className="bg-green-700" />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Lender Loans
                </Typography>
                <Typography>Bail & reinsurance benefeciary</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  );
};
export default ReinsuranceCompany;
