import Trustee from "../assets/Trustee.png";
import AMBestRatingImg from "../assets/AMBestRatingImg.jpeg";
import { motion } from "framer-motion";

const AMBestRating = () => {
  return (
    <section>
      <div className="py-10 pb-32">
        <p className="my-10 flex justify-center font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          Am Best Ratings For Our Insurers
        </p>

        <div>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            <div className="flex flex-col items-center md:w-1/2">
              <a
                href="https://news.ambest.com/PressContent.aspx?altsrc=14&refnum=28004"
                className="w-1/2"
              >
                <motion.img
                  src={AMBestRatingImg}
                  alt="AM Best Rating"
                  whileHover={{ scale: 1.1 }}
                />
              </a>
              <a href="https://news.ambest.com/PressContent.aspx?altsrc=14&refnum=28004">
                <p className="text-center font-bigshoulder font-extrabold text-2xl md:xl sm:lg mt-8  px-10">
                  AM Best Assigns Credit Ratings to Redbridge Insurance Company
                  Limited
                </p>
              </a>
            </div>

            <div className="flex flex-col items-center md:w-1/2">
              <a
                href="https://news.ambest.com/newscontent.aspx?refnum=220823&altsrc=23"
                className="w-1/2"
              >
                <motion.img
                  src={AMBestRatingImg}
                  alt="AM Best Rating"
                  whileHover={{ scale: 1.1 }}
                />
              </a>
              <a href="https://news.ambest.com/newscontent.aspx?refnum=220823&altsrc=23">
                <p className="text-center font-bigshoulder font-extrabold text-2xl md:xl sm:lg mt-8 px-10">
                  AM Best Affirms Credit Ratings of Ocean International
                  Reinsurance Company Limited
                </p>
              </a>
            </div>

            <div className="flex flex-col items-center md:w-1/2">
              <a
                href="https://news.ambest.com/presscontent.aspx?refnum=32260&altsrc=2"
                className="w-1/2"
              >
                <motion.img
                  src={AMBestRatingImg}
                  alt="AM Best Rating"
                  whileHover={{ scale: 1.1 }}
                />
              </a>
              <a href="https://news.ambest.com/presscontent.aspx?refnum=32260&altsrc=2">
                <p className="text-center font-bigshoulder font-extrabold text-2xl md:xl sm:lg mt-8  px-10">
                  AM Best Affirms Credit Ratings of Lloyd’s
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AMBestRating;
