import Trustee from "../assets/Trustee.png";
import AMBestRatingImg from "../assets/AMBestRatingImg.jpeg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AMBestRating = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="py-10 pb-32">
        <p className="my-10 flex justify-center text-center font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          {t("ambestrating.title")}
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
              <a
                href="https://news.ambest.com/PressContent.aspx?altsrc=14&refnum=28004"
                className="hover:underline"
              >
                <p className="text-center font-bigshoulder font-extrabold text-2xl md:xl sm:lg mt-8  px-10 ">
                  {t("ambestrating.rating1")}
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
              <a
                href="https://news.ambest.com/newscontent.aspx?refnum=220823&altsrc=23"
                className="hover:underline"
              >
                <p className="text-center font-bigshoulder font-extrabold text-2xl md:xl sm:lg mt-8 px-10">
                  {t("ambestrating.rating2")}
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
              <a
                href="https://news.ambest.com/presscontent.aspx?refnum=32260&altsrc=2"
                className="hover:underline"
              >
                <p className="text-center font-bigshoulder font-extrabold text-2xl md:xl sm:lg mt-8  px-10">
                  {t("ambestrating.rating3")}
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
