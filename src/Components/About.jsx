import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="container-fluid Aboutme">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="About p-5 text-center">
          <div className="details my-5">
            <h2 style={{ fontSize: "50px" }}>
              Welcome To Know <span>About</span> Me...
            </h2>{" "}
            <br />
            <h5 style={{ fontSize: "50px" }}>
              Turning ideas into interactive and meaningful digital experiences
            </h5>{" "}
            <br />
            <p>Focused on clean code, modern UI, and continuous learning</p>
            <h6>Let’s Talk About Me</h6>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="Education">
            <div className="Intro">
              <h3>Let Know About Me ...</h3>
              <p>
                {" "}
                I’m Siva C, a BSc IT graduate from TDMNS College (Manonmanyam
                Sundaranar University ,Tirunelveli). I enjoy building
                responsive, modern websites and continuously improving my skills
                in frontend development.
              </p>
              <p>
                {" "}
                I enjoy creating websites, learning new tools, and improving my
                skills every day.
              </p>
              <p>
                I love turning ideas into clean, responsive, and visually
                appealing websites. Learning new tools, solving problems, and
                building user-friendly interfaces keep me motivated. I’m excited
                to grow as a developer and create work that reflects both
                creativity and functionality.
              </p>
            </div>
            <h3>Education</h3>
            <div className="Edu">
              <div className="School card">
                <h5>School </h5>
                <p>Govt Higher Secondary School</p>
                <p>Moolakarapatti</p>
                <p>Year :2021 to 2022</p>
                <p>Percentage :76%</p>
              </div>
              <div className="College card">
                <h5>College</h5>
                <p>Tirunelveli Dakshina Mara Nadar Sangam College</p>
                <p>T.kallikulam</p>
                <p>Degree :Bsc.Information Technology</p>
                <p>Percentage :</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="Bio">
            <div className="Strength">
              <h5>Strengths </h5>
              <div className="pic">
                <img
                  src="/Strength.jpeg"
                  alt="Pic"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <p>Quick learner</p>
              <p>Strong communication</p>
              <p>Teamwork</p>
            </div>
            <div className="Weakness">
              <h5>Weakness</h5>
              <div className="pic">
                <img
                  src="/Weakness.jpeg"
                  alt="Pic"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <p>Overthinking</p>
              <p>Self-Doubt</p>
              <p>Shy Type</p>
            </div>
            <div className="Goals">
              <h5>Goals</h5>
              <div className="pic">
                <img
                  src="/Goal.jpeg"
                  alt="Pic"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <p>Learn new technologies</p>
              <p>Improve technical skills</p>
              <p>Work in a good team</p>
            </div>
            <div className="WhatIdo">
              <h5>What I Do...</h5>
              <div className="pic">
                <img
                  src="/WhatIDo.jpeg"
                  alt="Pic"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <p>Web Development</p>
              <p>FrontEnd Design</p>
              <p>UI/UX Design</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
