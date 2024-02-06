import AMBestRatingImg from "../assets/AMBestRatingImg.png";
import { motion } from "framer-motion";

const AMBestRating = () => {
  return (
    <section>
      <div className="py-10 pb-32">
        <p className="my-10 flex justify-center font-bigshoulder font-extrabold text-5xl md:3xl sm:xl">
          Am Best Ratings For Our Insurers
        </p>

        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100, y: -100 },
            visible: { opacity: 1, x: 0, y: 0 },
          }}
        >
          <img
            src={AMBestRatingImg}
            alt="AMBestRatingImg"
            className="max-w-[50%]"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default AMBestRating;
