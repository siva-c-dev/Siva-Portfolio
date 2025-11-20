import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Skills from "./Components/Skills";
import Certificates from "./Components/Certificates";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./Components/App.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Navbar */}

      <div
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#ffff" }}
      >
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand nav-link fs-4 ">
            <img src="./LOGO.png" alt="Logo" className="nav-icon"  style={{height:"50px" ,width:"60px", color:"black"}}/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen(!open)}
          >
          </button>
          <div
            className={`collapse navbar-collapse ${open ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link text-dark"
                  onClick={() => setOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Skills"
                  className="nav-link  text-dark"
                  onClick={() => setOpen(false)}
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Certificates"
                  className="nav-link  text-dark"
                  onClick={() => setOpen(false)}
                >
                  Certificates
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink
                  to="/About"
                  className="nav-link  text-dark"
                  onClick={() => setOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className="nav-link  text-dark"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}
const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div className="container-fluid main text-center">
          <div className="row homeRow align-items-center justify-content-center text-center flex-direction-column">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h1>
                Hello I'm <span className="name">Siva</span>
              </h1>
              <h3 className="typing">I am a Developer</h3>
              <h5>
                I build beautiful, fast, and modern web applications.
              </h5>{" "}
              <br />
              <div className="resume">
                <a href="./SIVA Resume.pfd" download>
                  <button className="download-btn">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
            <div className=" image col-12 col-md-6 d-flex justify-content-center">
              <img
                src="./SIVA.png"
                alt="IMAGE"
                className="profile-img"
                style={{ borderRadius: "40%", height: "350px", width: "250px" }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;
export { Home };
