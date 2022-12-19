import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="copy">
          <p>
            &copy; {new Date().getFullYear()} by{" "}
            <a
              href="https://github.com/JuanFrancisco21"
              target="_blank"
              rel="noreferrer"
            >
              JF
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
