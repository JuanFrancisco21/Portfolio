import React from "react";
import Achievements from "../Achievements";
import PersonalInfo from "../PersonalInfo";
import Experience from "../Experience";
import Education from "../Education";

const ModalContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h3>Información Personal</h3>
          <PersonalInfo />
          <div className="jf_tm_button">
            <a href="img/CV.pdf" download className="color">
              Descarga CV
            </a>
          </div>
        </div>
        {/* End  PersonalInfo */}

        <div className="col-6 achievements-wrapper">
          <h3>Logros</h3>
          <Achievements />
        </div>
        {/* End  Achievements */}
      </div>
      {/* End .row */}

      <div className="row resume-box">
        <div className="col-6">
          <h3>Experiencia</h3>
          <Experience />
        </div>
        {/* End  Experience */}

        <div className="col-6">
          <h3>Educación</h3>
          <Education />
        </div>
        {/* End  Education */}
      </div>
    </>
  );
};

export default ModalContent;
