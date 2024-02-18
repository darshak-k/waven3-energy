import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SwingLogo from "../assets/SwingLogo.png";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-[90%]"
      >
        <div>
          <p className="font-bigshoulder font-semibold text-4xl">
            <span className="text-orange-900">{t("contact.title")}</span>{" "}
            {t("contact.getstarted")}
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex flex-col md:flex-row md:justify-center gap-48 mt-5">
        <div className="max-w-[25%]">
          <img src={SwingLogo} alt="" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/info@waven3global.com"
            method="POST"
          >
            <input
              className="w-full bg-red font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder={t("contact.name")}
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-gray-800 mt-1">
                {errors.name.type === "required" && t("contact.validation1")}
                {errors.name.type === "maxLength" && t("contact.validation2")}
              </p>
            )}
            <input
              className="w-full bg-red font-semibold placeholder-opaque-black p-3 mt-3"
              type="text"
              placeholder={t("contact.country")}
              {...register("country", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-gray-800 mt-1">
                {errors.name.type === "required" && t("contact.validation1")}
                {errors.name.type === "maxLength" && t("contact.validation2")}
              </p>
            )}{" "}
            <input
              className="w-full bg-red font-semibold placeholder-opaque-black p-3 mt-3"
              type="text"
              placeholder={t("contact.phone")}
              {...register("phonenumber", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-gray-800 mt-1">
                {errors.name.type === "required" && t("contact.validation1")}
                {errors.name.type === "maxLength" && t("contact.validation2")}
              </p>
            )}
            <input
              className="w-full bg-red font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder={t("contact.email")}
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-gray-800  mt-1">
                {errors.name.type === "required" && t("contact.validation1")}
                {errors.name.type === "maxLength" && t("contact.validation2")}
              </p>
            )}
            <input
              className="w-full bg-red font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder={t("contact.personidentifier")}
              {...register("personidentifier", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.personidentifier && (
              <p className="text-gray-800  mt-1">
                {errors.name.type === "required" && t("contact.validation1")}
                {errors.name.type === "maxLength" && t("contact.validation2")}
              </p>
            )}
            <input
              className="w-full bg-red font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder={t("contact.identification")}
              {...register("identification", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.identification && (
              <p className="text-gray-800  mt-1">
                {errors.name.type === "required" && t("contact.validation1")}
                {errors.name.type === "maxLength" && t("contact.validation2")}
              </p>
            )}
            <textarea
              className="w-full bg-red font-semibold placeholder-opaque-black p-3 mt-5"
              name={t("contact.message")}
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-gray-800 mt-1">
                {errors.message.type === "required" && t("contact.validation1")}
                {errors.message.type === "maxLength" &&
                  t("contact.validation2")}
              </p>
            )}
            <button
              className="p-5 bg-red  font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              {t("contact.messaggebutton")}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
