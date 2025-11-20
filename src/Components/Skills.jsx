import { motion } from "framer-motion";
import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="container-fluid Skills">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <div className="Skills p-5 text-center">
            <div className="details my-5">
              <h2 style={{ fontSize: "50px" }}>
                Welcome to explore my <span>Skills</span> Page
              </h2>{" "}
              <br />
              <p style={{ fontSize: "50px" }}>
                Here are the technologies and tools I work with to build clean,
                responsive, and user-friendly applications.
              </p>{" "}
              <br />
              <p>
                I focus on writing clean, structured code and continuously
                improving my skills.
              </p>
              <h6>Skills & Technologies</h6>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <div className="DisplaySkills">
            <div className="Frontend">
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                I have a strong basement in frontend technology
              </p>
              <ul>
                <li>HTML 5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.jS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="Backend">
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                I also have Backend Knowledge
              </p>
              <ul>
                <li>Node Js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="Database">
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                I can use database to store data
              </p>
              <ul>
                <li>Mongo DB</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="Tools">
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                I also use some usefull tools to manage codes
              </p>
              <ul>
                <li>VS Code</li>
                <li>Vite</li>
                <li>Git & GitHub</li>
                <li>Postman</li>
                <li>NPM</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
