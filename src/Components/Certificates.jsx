import React from "react";
import "./Certificates.css";
import { motion } from "framer-motion";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      tittle: "Frontend Development",
      img: "/frontendDev1.jpeg",
      pdf: "/frontendDev.pdf",
    },
    {
      id: 2,
      tittle: "English Communication",
      img: "/engCommunication1.jpeg",
      pdf: "/engCommunication.pdf",
    },
    {
      id: 3,
      tittle: "Oracle Cloud Ai Foundation",
      img: "/oracleCloudAiFoundation1.jpeg",
      pdf: "/oracleCloudAiFoundation.pdf",
    },
    {
      id: 4,
      tittle: "React JS",
      img: "/reactJs1.jpeg",
      pdf: "/reactJs.pdf",
    },
    {
      id: 5,
      tittle: "Oracle Cloud Arichitecture",
      img: "/oracleCloud1.jpeg",
      pdf: "/oracleCloud.pdf",
    },
    {
      id: 6,
      tittle: "Create A Website And Hosting",
      img: "/createWebsite1.jpeg",
      pdf: "/createWebsite.pdf",
    }
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="cerDet text-center">
          <div className="Cerdetails">
            <h1>
              Here is my section to view my <span>certificates</span>
            </h1>
            <h2>
              Proof of my commitment to staying updated with modern development
              practices
            </h2>
            <h3>
              Demonstrates my commitment toward continuous improvement and
              professional growth
            </h3>
            <p>My Certifications & Achievements</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="container-fluid Certificatemain">
            <div className="row g-4">
              {certificates.map((item, index) => (
                <div
                  className="  col-12 col-sm-6 col-md-4 col-lg-3"
                  key={index}
                >
                  <div className="Box certificate-card h-100 shadow-sm ">
                    <img
                      src={item.img}
                      className="certificate-card-img"
                      alt={item.tittle}
                    />

                    <div className="certificate-card-body text-center">
                      <h5 className="certificate-card-title mb-3">
                        {item.tittle}
                      </h5>

                      <a
                        href={item.pdf}
                        target="_blank"
                        className="certificate-card-btn"
                      >
                        View PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Certificates;
