import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import { motion, AnimatePresence } from "framer-motion";
import About from "./scenes/About";
import LineGradient from "./components/LineGradient";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
import CarbonCredit from "./scenes/CarbonCredit";
import AccreditationProcess from "./scenes/AccreditationProcess";
import RigourousApproval from "./scenes/RigourousApproval";
import MarketOpportunity from "./scenes/MarketOpportunity";
import CryptoToken from "./scenes/CryptoToken";
import JoinUs from "./scenes/JoinUs";
import ReinsuranceCompany from "./scenes/ReinsuranceCompany";
import AMBestRating from "./scenes/AMBestRating";
import Partners from "./scenes/OurPartners";
import AboutUs from "./scenes/AboutUs";
import OurOffices from "./scenes/OurOffices";
import TheProjects from "./scenes/TheProjects";
import NotFound404 from "./scenes/NotFound404";
import Residency from "./scenes/Residency";
import Contact from "./scenes/Contact";

const childVariants = {
  initial: {
    opacity: 0,
    y: "50px",
  },
  final: {
    opacity: 1,
    y: "0px",
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <LocationProvider>
          <Routes>
            <Route
              path="/"
              element={<Home setSelectedPage={setSelectedPage} />}
            />
            <Route
              path="/home"
              element={<Home setSelectedPage={setSelectedPage} />}
            />
            <Route
              path="/aboutus"
              element={<AboutFn setSelectedPage={setSelectedPage} />}
            />
            <Route
              path="/projects"
              element={<ProjectsFn setSelectedPage={setSelectedPage} />}
            />
            <Route
              path="/joinus"
              element={<JoinFn setSelectedPage={setSelectedPage} />}
            />
            <Route
              path="/contactus"
              element={<ContactFn setSelectedPage={setSelectedPage} />}
            />
            <Route
              path="/rigorousapproval"
              element={<RegorousApprovalFn setSelectedPage={setSelectedPage} />}
            />
            <Route
              path="/marketopportunity"
              element={<MarketFn setSelectedPage={setSelectedPage} />}
            />
            <Route
              path="/accreditationprocess"
              element={<AccreditationFn setSelectedPage={setSelectedPage} />}
            />
            <Route path="*" exact={true} element={<NotFound />} />
          </Routes>
        </LocationProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

function RegorousApprovalFn({ setSelectedPage }) {
  return (
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        className="mt-28"
        amount="all"
        initial="initial"
        animate="final"
        exit="exit"
      >
        <motion.div variants={childVariants} initial="initial" animate="final">
          <RigourousApproval />
        </motion.div>
      </motion.div>
    </div>
  );
}
function MarketFn({ setSelectedPage }) {
  return (
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        className="mt-28"
        amount="all"
        initial="initial"
        animate="final"
        exit="exit"
      >
        <motion.div variants={childVariants} initial="initial" animate="final">
          <MarketOpportunity />
        </motion.div>
      </motion.div>
    </div>
  );
}
function AccreditationFn({ setSelectedPage }) {
  return (
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        className="mt-28"
        amount="all"
        initial="initial"
        animate="final"
        exit="exit"
      >
        <motion.div variants={childVariants} initial="initial" animate="final">
          <AccreditationProcess />
        </motion.div>
      </motion.div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        className="mt-28"
        amount="all"
        initial="initial"
        animate="final"
        exit="exit"
      >
        <motion.div variants={childVariants} initial="initial" animate="final">
          <NotFound404 />
        </motion.div>
      </motion.div>
    </div>
  );
}
function Home({ setSelectedPage }) {
  return (
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        className="mt-28"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
        initial="initial"
        animate="final"
        exit="exit"
      >
        <motion.div variants={childVariants} initial="initial" animate="final">
          <Landing setSelectedPage={setSelectedPage} />
          <LineGradient />
          <About setSelectedPage={setSelectedPage} />
          <LineGradient />
          <Partners setSelectedPage={setSelectedPage} />
          <CarbonCredit setSelectedPage={setSelectedPage} />
          <LineGradient />

          <AccreditationProcess setSelectedPage={setSelectedPage} />
          <LineGradient />
          <MarketOpportunity setSelectedPage={setSelectedPage} />

          <LineGradient />
          <ReinsuranceCompany setSelectedPage={setSelectedPage} />
          <LineGradient />
          <AMBestRating setSelectedPage={setSelectedPage} />
        </motion.div>
      </motion.div>
    </div>
  );
}

function CryptoFn({ setSelectedPage }) {
  return (
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        className="mt-28"
        amount="all"
        initial="initial"
        animate="final"
        exit="exit"
      >
        <motion.div variants={childVariants} initial="initial" animate="final">
          <CryptoToken setSelectedPage={setSelectedPage} />
        </motion.div>
      </motion.div>
    </div>
  );
}

function AboutFn({ setSelectedPage }) {
  return (
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        className="mt-28"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
        initial="initial"
        animate="final"
        exit="exit"
      >
        <motion.div variants={childVariants} initial="initial" animate="final">
          <AboutUs setSelectedPage={setSelectedPage} />
        </motion.div>
      </motion.div>
    </div>
  );
}

function JoinFn({ setSelectedPage }) {
  return (
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        className="mt-28"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
        initial="initial"
        animate="final"
        exit="exit"
      >
        <motion.div variants={childVariants} initial="initial" animate="final">
          <JoinUs setSelectedPage={setSelectedPage} />
          <Residency setSelectedPage={setSelectedPage} />
        </motion.div>
      </motion.div>
    </div>
  );
}

function ContactFn({ setSelectedPage }) {
  return (
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        className="mt-28"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
        initial="initial"
        animate="final"
        exit="exit"
      >
        <motion.div variants={childVariants} initial="initial" animate="final">
          <Contact setSelectedPage={setSelectedPage} />
          <OurOffices setSelectedPage={setSelectedPage} />
        </motion.div>
      </motion.div>
    </div>
  );
}

function ProjectsFn({ setSelectedPage }) {
  return (
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        className="mt-28"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
        initial="initial"
        animate="final"
        exit="exit"
      >
        <motion.div variants={childVariants} initial="initial" animate="final">
          <TheProjects setSelectedPage={setSelectedPage} />
        </motion.div>
      </motion.div>
    </div>
  );
}
export default App;
