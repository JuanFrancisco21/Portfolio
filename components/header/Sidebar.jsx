import React, { useState } from "react";
import Link from "next/link";
import ScrollspyNav from "react-scrollspy-nav";
import sidebarContent from "../../data/sidebar";
import Image from "next/image";

// sidebar footer bottom content
const sidebarFooterContent = {
  name: "Juan Francisco",
  email: "JF@gmail.com",
  emailRef: "Email:juanfranciscoaguilarsanchez@gmail.com",
};

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}

      <div
        className={click ? "jf_tm_sidebar menu-open" : "jf_tm_sidebar"}
      >
        <div className="sidebar_inner">
          <div className="logo">
            <Link href="/">
              <img className="logo_light" src={'img/logo/dark.png'} alt="brand"  width="92" height="37"/>
              <img className="logo_dark"  src={'img/logo/light.png'} alt="brand" width="92" height="37"/>
            </Link>
          </div>
          {/* End .logo */}

          <div className="menu">
            <ScrollspyNav
              scrollTargetIds={[
                "home",
                "about",
                "portfolio",
                "blog",
                "contact",
              ]}
              activeNavClass="active"
              offset={0}
              scrollDuration="100"
            >
              <ul className="anchor_nav">
                {sidebarContent.map((val, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <a
                        href={val.itemRoute}
                        className={val.activeClass}
                        onClick={handleClick}
                      >
                        <img
                          className="svg custom"
                          src={`img/svg/${val.icon}.svg`}
                          alt="icon"
                        />
                        {val.itemName}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
          </div>
          {/* End .menu */}

          <div className="author">
            <div className="inner">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(img/about/avatar.jpg)",
                  }}
                ></div>
              </div>
              <div className="short">
                <h3>{sidebarFooterContent.name}</h3>
                <a href={sidebarFooterContent.emailRef}>
                  {sidebarFooterContent.email}
                </a>
              </div>
            </div>
          </div>
          {/* End author */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
