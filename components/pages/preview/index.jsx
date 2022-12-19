import Link from "next/link";
import { useEffect } from "react";
import Slider from "react-slick";

const previewDemo = [
  {
    id: 1,
    img: "1",
    title: "Home Horizontal",
    routerPath: "/home-horizontal",
    delayAnimation: "",
  },
  {
    id: 2,
    img: "3",
    title: "Home Sidebar",
    routerPath: "/home-sidebar",

    delayAnimation: "50",
  },
  {
    id: 3,
    img: "2",
    title: "Home Horizontal (RTL)",
    routerPath: "/home-horizontal_rtl",
    delayAnimation: "",
  },
  {
    id: 4,
    img: "4",
    title: "Home Sidebar (RTL)",
    routerPath: "/home-sidebar-rtl",
    delayAnimation: "50",
  },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: false,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        arrow: false,
        slidesToShow: 1,
        speed: 300,
      },
    },
  ],
};

const JFPreview = () => {
  useEffect(() => {
    document.querySelector("body").classList.remove("theme-dark");
  }, []);

  return (
    <div
      className="jf_tm_intro bg-image"
      style={{
        backgroundImage: `url(img/1.jpg)`,
      }}
    >
      <span className=" preview-sticker pos-sticker react-sticker">
        <h6>NextJS</h6>
        <img className="logo" src="img/intro/react.png" alt="react nextjs" />
      </span>
      {/* preview sticker */}

      <div className="mainpart" id="demos">
        <div className="container">
          <div className="main_title">
            <img src="img/intro/logo.png" alt="brand" />
            <p>Personal Portfolio React NextJS Template + RTL</p>
          </div>
          {/* End main_title */}

          <div className="demo_list">
            <ul>
              <Slider {...settings} arrows={false}>
                {" "}
                {previewDemo.map((val) => (
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay={val.delayAnimation}
                    key={val.id}
                  >
                    <div className="list_inner">
                      <img src={`img/intro/${val.img}.jpg`} alt="demo" />
                      <h3>{val.title}</h3>
                      <Link
                        className="jf_tm_full_link"
                        href={val.routerPath}
                        target="_blank"
                        rel="noreferrer"
                      ></Link>
                    </div>
                  </li>
                ))}
              </Slider>
            </ul>
          </div>
        </div>
      </div>
      {/* End  .mainpart */}

      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} JF by{" "}
          <a
            href="https://github.com/JuanFrancisco21"
            target="_blank"
            rel="noopener noreferrer"
          >
            me.
          </a>
          All Rights Reserved.
        </p>
      </div>
      {/* End .copyright */}
    </div>
  );
};

export default JFPreview;
