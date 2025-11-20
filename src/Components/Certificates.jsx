import React from "react";
import "./Certificates.css";
import { motion } from "framer-motion";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      tittle: "Frontend Development",
      img: "Certificate1.jpeg",
      pdf: "Certificate1.pdf",
    },
    {
      id: 2,
      tittle: "English Communication",
      img: "Certificate11.jpeg",
      pdf: "Certificate11.pdf",
    },
    {
      id: 3,
      tittle: "Ai Foundation Associate",
      img: "Certificate2.jpeg",
      pdf: "Certificate2.pdf",
    },
    {
      id: 4,
      tittle: "React JS",
      img: "Certificate5.jpeg",
      pdf: "Certificate5.pdf",
    },
    {
      id: 5,
      tittle: "Coding & Cloud",
      img: "Certificate4.jpeg",
      pdf: "Certificate4.pdf",
    },
  ];
  return (
    <>
      <div className="cerDet text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <div className="Cerdetails">
            <h1 style={{ padding: "20px" }}>
              Here is my section to view my <span>certificates</span>
            </h1>
            <h2 style={{ padding: "20px" }}>
              Proof of my commitment to staying updated with modern development
              practices
            </h2>
            <h3 style={{ padding: "20px" }}>
              Demonstrates my commitment toward continuous improvement and
              professional growth
            </h3>
            <p>My Certifications & Achievements</p>
          </div>
        </motion.div>
      </div>

      <div className="container-fluid Certificatemain">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <div className="row g-4">
            {certificates.map((item, index) => (
              <div className="  col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
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
        </motion.div>
      </div>
    </>
  );
};

export default Certificates;
