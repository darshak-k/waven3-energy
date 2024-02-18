import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Waven3Tech from "../assets/Waven3Tech.png";
import CanadaFlag from "../assets/CanadaFlag.jpg";
import { NavLink } from "react-router-dom";
import { LANGUAGES } from "../Constants/languages";
import { useTranslation } from "react-i18next";

const Link = ({ page, title, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.replace(" ", "").toLowerCase();
  const redirectPage = title.replace(" ", "").toLowerCase();
  return (
    <NavLink
      to={`/${redirectPage}`}
      className={`${
        selectedPage === lowerCasePage ? "text-green-800" : ""
      } hover:text-yellow font-extrabold transition duration-500`}
      href={`#${redirectPage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </NavLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const { i18n, t } = useTranslation();

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || ""
  );
  const isDesktop = useMediaQuery("(min-width: 820px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    setSelectedLanguage(e.target.value);
  };

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <div className="items-end square w-[40%] md:w-44 md:2-56">
          <a href="/home">
            <img src={Waven3Tech} alt="" />
          </a>
        </div>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-12 font-bigshoulder text-xl font-semibold">
            <Link
              page={t("home")}
              title="home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={t("aboutus")}
              title="aboutus"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={t("projects")}
              title="projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={t("crypto")}
              title="crypto"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={t("joinus")}
              title="joinus"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={t("contactus")}
              title="contactus"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <select
              value={selectedLanguage}
              onChange={onChangeLang}
              className="p-2 bg-transparent border-2 border-orange-800 rounded-md text-orange-800 focus:outline-none focus:border-orange-500"
            >
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code} className="bg-red">
                  {label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[250px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page={t("home")}
                title="home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={t("aboutus")}
                title="aboutus"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={t("projects")}
                title="projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={t("crypto")}
                title="crypto"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={t("joinus")}
                title="joinus"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={t("contactus")}
                title="contactus"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <select
                value={selectedLanguage}
                onChange={onChangeLang}
                className="p-2 bg-transparent border-2 border-orange-800 rounded-md text-orange-800 focus:outline-none focus:border-orange-500"
              >
                {LANGUAGES.map(({ code, label }) => (
                  <option key={code} value={code} className="bg-red">
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
