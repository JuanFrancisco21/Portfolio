"use strict";
exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 3978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Address = ()=>{
    const addressContent = [
        {
            id: 1,
            iconImg: "img/address/phone.png",
            name: "Telefono",
            info: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "Tel: +681 680 641"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "Tel: +681 680 641",
                            children: "+681 680 641"
                        })
                    })
                ]
            }),
            animDelay: "0"
        },
        {
            id: 2,
            iconImg: "img/address/email.png",
            name: "Email",
            info: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "mailto:juanfranciscoaguilarsanchez@gmail.com",
                            children: "JuanFran@gmail.com"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "mailto:jagusan2108@gmail.com",
                            children: "soporte@soporte.com"
                        })
                    })
                ]
            }),
            animDelay: "100"
        },
        {
            id: 3,
            iconImg: "img/address/location.png",
            name: "Direcci\xf3n",
            info: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "Fern\xe1n N\xfa\xf1ez,",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "14520, C\xf3rdoba."
                        ]
                    })
                })
            }),
            animDelay: "200"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "wrapper",
        children: addressContent.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                "data-aos": "fade-right",
                "data-aos-duration": "1200",
                "data-aos-delay": item.animDelay,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "list_inner",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "icon",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: item.iconImg,
                                alt: "icon"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: item.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    children: item.info
                                })
                            ]
                        })
                    ]
                })
            }, item.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Address);


/***/ }),

/***/ 6685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
react_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Contact = ()=>{
    const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const sendEmail = (e)=>{
        e.preventDefault();
        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2___default().sendForm("service_vacu99j", "template_toc4num", form.current, "WqO_8vlLzebOvBdOf").then((result)=>{
            console.log(result);
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Message Sent Successfully!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            document.getElementById("myForm").reset();
        }, (error)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error("Ops Message Not Sent!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: "contact_form",
            id: "myForm",
            ref: form,
            onSubmit: sendEmail,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "first_row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "Nombre *",
                        name: "name",
                        required: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "second",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "email",
                        placeholder: "Email *",
                        name: "user_email",
                        required: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "third",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        placeholder: "Mensaje *",
                        name: "message",
                        required: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jf_tm_button",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "color",
                        children: "Enviar"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Map = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "google-map",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                className: "embed-responsive-item",
                title: "my location",
                src: "https://maps.google.com/maps?q=Fern%C3%A1n%20N%C3%BA%C3%B1ez&t=&z=13&ie=UTF8&iwloc=&output=embed"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ }),

/***/ 7242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);



const SocialShare = [
    {
        iconName: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiGithub, {}),
        link: "https://github.com/JuanFrancisco21"
    },
    {
        iconName: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiTwitter, {}),
        link: "https://twitter.com/"
    },
    {
        iconName: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiInstagram, {}),
        link: "https://www.instagram.com/juanfran_ags/?theme=dark"
    },
    {
        iconName: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiBookOpen, {}),
        link: "https://www.iesfranciscodelosrios.es/"
    },
    {
        iconName: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiLinkedin, {}),
        link: "https://www.linkedin.com/in/juan-fco-aguilar-sanchez/"
    }
];
const Social = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        children: SocialShare.map((val, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: val.link,
                    target: "_blank",
                    rel: "noreferrer",
                    children: val.iconName
                })
            }, i))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Social);


/***/ }),

/***/ 4589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about_About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/about/Skills.jsx


const skillsContent = [
    {
        name: "React.Jsx",
        skillPercent: "65"
    },
    {
        name: "HTML/CSS",
        skillPercent: "90"
    },
    {
        name: "Ionic",
        skillPercent: "85"
    },
    {
        name: "Figma/Adobe XD",
        skillPercent: "55"
    },
    {
        name: "Java",
        skillPercent: "80"
    },
    {
        name: "Inkscape",
        skillPercent: "80"
    }
];
const Skills = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: skillsContent.map((val, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "progress_inner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "label",
                        children: val.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "background",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bar",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bar_in",
                                style: {
                                    width: val.skillPercent + "%"
                                }
                            })
                        })
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const about_Skills = (Skills);

// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9931);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
// EXTERNAL MODULE: ./data/achievements.js
var achievements = __webpack_require__(3612);
var achievements_default = /*#__PURE__*/__webpack_require__.n(achievements);
;// CONCATENATED MODULE: ./components/about/Achievements.jsx


const Achievements = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "row",
        children: achievements_default().map((val, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "box-stats with-margin",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "poppins-font position-relative",
                            children: val.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "open-sans-font m-0 position-relative text-uppercase",
                            children: [
                                val.subTitle1,
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "d-block",
                                    children: val.subTitle2
                                })
                            ]
                        })
                    ]
                })
            }, i))
    });
};
/* harmony default export */ const about_Achievements = (Achievements);

// EXTERNAL MODULE: ./data/personalInfo.js
var personalInfo = __webpack_require__(4273);
var personalInfo_default = /*#__PURE__*/__webpack_require__.n(personalInfo);
;// CONCATENATED MODULE: ./components/about/PersonalInfo.jsx


const PersonalInfo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "about-list list-unstyled open-sans-font",
        children: personalInfo_default().map((val, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "title",
                        children: [
                            val.meta,
                            ": "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "value d-block d-sm-inline-block d-lg-block d-xl-inline-block",
                        children: val.metaInfo
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const about_PersonalInfo = (PersonalInfo);

// EXTERNAL MODULE: ./data/experience.js
var experience = __webpack_require__(6153);
var experience_default = /*#__PURE__*/__webpack_require__.n(experience);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: ./components/about/Experience.jsx



const Experience = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: experience_default().map((val, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "icon",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiBriefcase, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "time open-sans-font text-uppercase",
                        children: val.year
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                        className: "poppins-font text-uppercase",
                        children: [
                            val.position,
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "place open-sans-font",
                                children: val.compnayName
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "open-sans-font",
                        children: val.details
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const about_Experience = (Experience);

// EXTERNAL MODULE: ./data/education.js
var education = __webpack_require__(9980);
var education_default = /*#__PURE__*/__webpack_require__.n(education);
;// CONCATENATED MODULE: ./components/about/Education.jsx



const Education = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: education_default().map((val, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "icon",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiBookOpen, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "time open-sans-font text-uppercase",
                        children: val.year
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                        className: "poppins-font text-uppercase",
                        children: [
                            val.degree,
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "place open-sans-font",
                                children: val.institute
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "open-sans-font",
                        children: val.details
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const about_Education = (Education);

;// CONCATENATED MODULE: ./components/about/modal/ModalContent.jsx






const ModalContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Informaci\xf3n Personal"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(about_PersonalInfo, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jf_tm_button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "img/CV.pdf",
                                    download: true,
                                    className: "color",
                                    children: "Descarga CV"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-6 achievements-wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Logros"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(about_Achievements, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row resume-box",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Experiencia"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(about_Experience, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Educaci\xf3n"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(about_Education, {})
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const modal_ModalContent = (ModalContent);

;// CONCATENATED MODULE: ./components/about/About.jsx





external_react_modal_default().setAppElement("#__next");
const About = ()=>{
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    function toggleModalOne() {
        setIsOpen(!isOpen);
    }
    return(//    ABOUT
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jf_tm_about",
        id: "about",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "about_title",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Sobre mi"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "leftpart",
                                "data-aos": "fade-right",
                                "data-aos-duration": "1200",
                                "data-aos-delay": "100",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "info",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                children: [
                                                    "Hola, soy ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Juan Fco Aguilar S\xe1nchez"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Soy un estudiante de desarrollo de aplicaciones Web. Soy una persona apasionada y dedicada con un gran inter\xe9s por la tecnolog\xeda y la inform\xe1tica. Tengo experiencia en el desarrollo de aplicaciones multiplataforma y actualmente estoy estudiando para ampliar mis habilidades y conocimientos en este campo."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "my_skills",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "title",
                                                children: "\xbfQue tecnologias conozco?"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "desc",
                                                children: "Aqui recopilo las tecnologias aprendidas a lo largo de mis estudios en los dos grados superiores."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "wrapper",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "dodo_progress",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(about_Skills, {})
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jf_tm_button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "submit",
                                                    className: "color",
                                                    onClick: toggleModalOne,
                                                    children: "Ver M\xe1s"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "rightpart",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "image",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "img/thumbs/26-35.jpg",
                                            alt: "thumb"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main",
                                            style: {
                                                backgroundImage: "url(img/about/2.jpg)"
                                            },
                                            "data-aos": "fade-left",
                                            "data-aos-duration": "1200",
                                            "data-aos-delay": "200"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "experience",
                                            "data-aos": "fade-up",
                                            "data-aos-duration": "1200",
                                            "data-aos-delay": "300",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "3 A\xf1os"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "de Aprendizaje"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_modal_default()), {
                isOpen: isOpen,
                onRequestClose: toggleModalOne,
                contentLabel: "My dialog",
                className: "custom-modal about-popup-wrapper",
                overlayClassName: "custom-overlay ",
                closeTimeoutMS: 500,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jf_tm_modalbox",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "close-modal",
                            onClick: toggleModalOne,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/svg/cancel.svg",
                                alt: "close icon"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "box_inner",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "description_wrap scrollable",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(modal_ModalContent, {})
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const about_About = (About);


/***/ }),

/***/ 8985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_blogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8549);
/* harmony import */ var _data_blogs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_blogs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7242);






react_modal__WEBPACK_IMPORTED_MODULE_2___default().setAppElement("#__next");
const Blog = ()=>{
    const [singleData, setSingleData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleblogsData = (id)=>{
        const find = _data_blogs__WEBPACK_IMPORTED_MODULE_4___default().find((item)=>{
            return (item === null || item === void 0 ? void 0 : item.id) === id;
        });
        setSingleData(find);
        setIsOpen(true);
    };
    const handleModle = (id)=>{
        handleblogsData(id);
    };
    var settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrow: false,
                    autoplay: false,
                    speed: 300,
                    draggable: true,
                    dots: true
                }
            }
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "news_inner my_carousel",
            id: "modal",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                        ...settings,
                        children: _data_blogs__WEBPACK_IMPORTED_MODULE_4___default().map((item)=>{
                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                "data-aos": "fade-right",
                                "data-aos-duration": "1200",
                                "data-aos-delay": "150",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "list_inner",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "image",
                                            onClick: ()=>{
                                                return handleModle(item === null || item === void 0 ? void 0 : item.id);
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "main",
                                                style: {
                                                    backgroundImage: `url(${item.img})`
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "news_details",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        item.date,
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            children: item.meta
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "title",
                                                    onClick: ()=>{
                                                        return handleModle(item === null || item === void 0 ? void 0 : item.id);
                                                    },
                                                    children: item.title
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, item.id);
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
                    isOpen: isOpen,
                    onRequestClose: ()=>setIsOpen(false),
                    contentLabel: "My dialog",
                    className: "custom-modal",
                    overlayClassName: "custom-overlay",
                    closeTimeoutMS: 500,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jf_tm_modalbox",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "close-modal",
                                onClick: ()=>setIsOpen(false),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "img/svg/cancel.svg",
                                    alt: "close icon"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "box_inner",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "description_wrap scrollable",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "image",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "main",
                                                style: {
                                                    backgroundImage: `url(${singleData === null || singleData === void 0 ? void 0 : singleData.img})`
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "news_details",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        singleData === null || singleData === void 0 ? void 0 : singleData.date,
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            children: singleData === null || singleData === void 0 ? void 0 : singleData.meta
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "title",
                                                    children: singleData === null || singleData === void 0 ? void 0 : singleData.title
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "main_content",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "descriptions",
                                                    children: [
                                                        singleData === null || singleData === void 0 ? void 0 : singleData.descriptionText1,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "quotebox",
                                                            children: singleData === null || singleData === void 0 ? void 0 : singleData.blockquote
                                                        }),
                                                        singleData === null || singleData === void 0 ? void 0 : singleData.descriptionText2
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "news_share ",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Share:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Social__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);


/***/ }),

/***/ 148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const HeaderMobile = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "logo",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "logo_light",
                        src: "/img/logo/dark.png",
                        alt: "brand",
                        width: "92",
                        height: "37"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "logo_dark",
                        src: "/img/logo/dark.png",
                        alt: "brand",
                        width: "92",
                        height: "37"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderMobile);


/***/ }),

/***/ 1384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7242);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1070);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);





const heroContent = {
    shapeImage: "img/hero/1.jpg",
    heroImage: "img/hero/2.jpg",
    name: "Juan Fco Aguilar S\xe1nchez",
    description: `Soy Desarrollador de Software.`
};
const Hero = ()=>{
    return(//    HERO
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jf_tm_hero",
        id: "home",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "img-shape",
                    "data-aos": "fade-up",
                    "data-aos-duration": "1200",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: heroContent.heroImage,
                        alt: "brand",
                        width: 300,
                        height: 300
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "extra",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            "data-aos-delay": "100",
                            className: "hello",
                            children: [
                                "Hola, soy ",
                                heroContent.name
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "name",
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            "data-aos-delay": "200",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "typer-toper",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_typed__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    loop: true,
                                    typeSpeed: 150,
                                    backSpeed: 60,
                                    strings: [
                                        "Desarrollador Web",
                                        "Desarrollador Multiplataforma"
                                    ],
                                    smartBackspace: true,
                                    shuffle: false,
                                    backDelay: 1,
                                    fadeOut: false,
                                    fadeOutDelay: 100,
                                    loopCount: 0,
                                    showCursor: true,
                                    cursorChar: "|"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text",
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            "data-aos-delay": "300",
                            children: heroContent.description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "social",
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            "data-aos-delay": "400",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Social__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jf_tm_button",
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            "data-aos-delay": "500",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "img/CV.pdf",
                                download: true,
                                className: "color",
                                children: "Descarga CV"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 5470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2076);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7242);
/* harmony import */ var _data_portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2536);
/* harmony import */ var _data_portfolio__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_portfolio__WEBPACK_IMPORTED_MODULE_6__);







react_modal__WEBPACK_IMPORTED_MODULE_2___default().setAppElement("#__next");
const Portfolio = ()=>{
    var settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrow: false,
                    autoplay: false,
                    draggable: true,
                    speed: 300,
                    dots: true
                }
            }
        ]
    };
    const [singleData, setSingleData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handlePortfolioData = (id)=>{
        const find = _data_portfolio__WEBPACK_IMPORTED_MODULE_6___default().find((item)=>{
            return (item === null || item === void 0 ? void 0 : item.id) === id;
        });
        setSingleData(find);
        setIsOpen(true);
    };
    const handleModle = (id)=>{
        handlePortfolioData(id);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "portfolio_inner my_carousel gallery_zoom",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                "data-aos": "fade-right",
                "data-aos-duration": "1200",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_4___default()), {
                    ...settings,
                    children: _data_portfolio__WEBPACK_IMPORTED_MODULE_6___default().map((item)=>{
                        /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "list_inner",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "image",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        onClick: ()=>{
                                            return handleModle(item === null || item === void 0 ? void 0 : item.id);
                                        },
                                        className: "details",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: item.portfolioImage,
                                                "data-tip": true,
                                                "data-for": item.tooltipId,
                                                alt: "portfolio"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_tooltip__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                id: item.tooltipId,
                                                place: "bottom",
                                                type: "light",
                                                effect: "float",
                                                className: "tooltip-wrapper",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                            children: item.title
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: item.meta
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        }, item.id);
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
                isOpen: isOpen,
                onRequestClose: ()=>setIsOpen(false),
                contentLabel: "My dialog",
                className: "custom-modal",
                overlayClassName: "custom-overlay",
                closeTimeoutMS: 500,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jf_tm_modalbox",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "close-modal",
                            onClick: ()=>setIsOpen(false),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/img/svg/cancel.svg",
                                alt: "close icon"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "box_inner",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "description_wrap scrollable",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "main",
                                            style: {
                                                backgroundImage: `url(${singleData === null || singleData === void 0 ? void 0 : singleData.portfolioImage})`
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "portfoiol_content-inner",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "left-content",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                        className: "title",
                                                        children: [
                                                            " ",
                                                            singleData === null || singleData === void 0 ? void 0 : singleData.title
                                                        ]
                                                    }),
                                                    singleData === null || singleData === void 0 ? void 0 : singleData.projectDescriptions
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "right-content",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "list",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    children: "Client"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: singleData === null || singleData === void 0 ? void 0 : singleData.clientName
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    children: "Category"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: singleData === null || singleData === void 0 ? void 0 : singleData.category
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    children: "Data"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: singleData === null || singleData === void 0 ? void 0 : singleData.date
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    children: "Link"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: singleData === null || singleData === void 0 ? void 0 : singleData.portfolioLink,
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        children: singleData === null || singleData === void 0 ? void 0 : singleData.portfolioLink
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            className: "news_share d-blok",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    children: "Share"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Social__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);


/***/ }),

/***/ 3612:
/***/ ((module) => {


module.exports = [
    {
        title: "03",
        subTitle1: "A\xf1os de",
        subTitle2: "Aprendizaje"
    },
    {
        title: "02",
        subTitle1: "Grado",
        subTitle2: "Superior"
    },
    {
        title: "02",
        subTitle1: "Framework ",
        subTitle2: "Conocidos"
    },
    {
        title: "05",
        subTitle1: "Proyectos",
        subTitle2: "Propios"
    }
];


/***/ }),

/***/ 8549:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _jsxRuntime = __webpack_require__(997);
module.exports = [
    {
        id: 1,
        img: "img/news/4.jpg",
        title: "Ingeniero de Software, Derivco",
        date: "Nov 24, 2022",
        meta: "Flujo de Trabajo",
        descriptionText1: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Hoy, el IES Francisco de los R\xedos tiene el placer de contar con la presencia de Francisco Gracia Ahufinger, un experto en la gesti\xf3n de proyectos de desarrollo de software, quien nos hablar\xe1 sobre c\xf3mo llevar a cabo un proyecto de este tipo de manera efectiva."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Gracia Ahufinger es un profesional con amplia experiencia en el campo del desarrollo de software, y ha trabajado en diversos proyectos a lo largo de su carrera."
                })
            ]
        }),
        blockquote: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                children: "Durante su charla, compartir\xe1 con nosotros sus conocimientos y mejores pr\xe1cticas para gestionar un proyecto de desarrollo de software de manera efectiva, incluyendo la planificaci\xf3n, la asignaci\xf3n de tareas y la colaboraci\xf3n con el equipo de trabajo."
            })
        }),
        descriptionText2: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                children: "Este evento es de gran importancia para todos aquellos interesados en el desarrollo de software, ya que Gracia Ahufinger es un experto en la materia y su charla ser\xe1 de gran valor para aquellos que deseen aprender m\xe1s sobre c\xf3mo gestionar un proyecto de este tipo. \xa1No te lo pierdas!"
            })
        })
    },
    {
        id: 2,
        img: "img/news/3.jpg",
        title: "FPI + ML",
        date: "Feb 8, 2022",
        meta: "Concienciaci\xf3n",
        descriptionText1: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Hoy ha tocado hacer algo diferente, he asistido como oyente en unas jornadas de FPi + Mundo Laboral organizadas por el IES Francisco de los R\xedos. Una experiencia agradable e interesante que volver\xeda a repetir sin dudarlo."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "En estas jornadas se han contado con la participaci\xf3n de profesionales del \xe1mbito laboral y empresarial, quienes han compartido sus experiencias y conocimientos sobre el mercado laboral actual y las tendencias que se est\xe1n dando en el sector en el que se desenvuelven."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Adem\xe1s, han dado consejos y recomendaciones a los alumnos de FP sobre c\xf3mo orientar sus carreras para crecer tanto personal como profesionalmente desde el punto de vista personal de cada uno."
                })
            ]
        }),
        blockquote: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                children: "Adem\xe1s, durante las jornadas se han realizado diferentes actividades pr\xe1cticas y talleres, donde los alumnos han podido poner en pr\xe1ctica lo aprendido y obtener una visi\xf3n m\xe1s concreta y real del mundo laboral."
            })
        }),
        descriptionText2: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                children: "En resumen, ha sido una jornada muy enriquecedora que recomendar\xeda a todos aquellos que quieran conocer m\xe1s sobre el mercado laboral y c\xf3mo orientar su carrera de manera efectiva."
            })
        })
    },
    {
        id: 3,
        img: "img/news/2.jpg",
        title: "Primera Presentaci\xf3n",
        date: "Feb 16, 2022",
        meta: "Sprint",
        descriptionText1: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "La semana del 16 de Febrero junto al alumnado del 2\xba curso de Desarrollo de Aplicaciones Multiplataforma expusimos ante otros alumnos el resultado del primer sprint de los proyectos que est\xe1bamos llevando a cabo en diferentes m\xf3dulos y que darian respuesta a necesidades reales de empresas de la localidad."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Un proyecto que trabajamos en colaboraci\xf3n a la Asociaci\xf3n de Empresarios de Fern\xe1n N\xfa\xf1ez y que est\xe1 suponiendo todo un reto. El siguiente sprint lo presentaremos en las pr\xf3ximas semanas y tendr\xe1 un car\xe1cter m\xe1s comercial."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Finalmente, la defensa final se celebrar\xe1 en junio. Trabajabando, no solo los aspectos t\xe9cnicos, sino las, actualmente denominadas, soft-skills. Todo esto gracias al profesorado involucadro en dichas actividades y que se preocupan por nuestra prospera incorpocaci\xf3n al mundo laboral."
                })
            ]
        }),
        blockquote: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {}),
        descriptionText2: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {})
    },
    {
        id: 4,
        img: "img/news/1.jpg",
        title: "COLABORACI\xd3N TANDEM",
        date: "July 07,2021",
        meta: "SGE",
        descriptionText1: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Hoy despegamos con un notici\xf3n y  nos sentimos orgullos en Tandem de haber firmado un importante acuerdo de la mano de Sage con el Instituto Francisco de los R\xedos de Fern\xe1n N\xfa\xf1ez, hemos firmado un acuerdo mediante el cual formaremos al profesorado que imparte el m\xf3dulo de Sistemas de Gesti\xf3n Empresarial."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "El profesorado formar\xe1 en uno de sus m\xf3dulos al alumnado en los sistemas ERP de Sage, este acuerdo tiene como principal objetivo formar a los alumnos para que estos puedan optar a puestos laborales relacionados con SAGE 200ADV, muy demandados en la actualidad”"
                })
            ]
        }),
        blockquote: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {}),
        descriptionText2: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                children: "Agradecer su presencia al acto a la delegada territorial de Educaci\xf3n y Deporte en C\xf3rdoba, Inmaculada Troncoso, a la directora del IES Rafaela Campa\xf1a a Rafael Morales coordinador de este m\xf3dulo. Y por su puesto a Juan Francisco Torres Sereno Master Partners Team en Sage"
            })
        })
    }
];


/***/ }),

/***/ 9980:
/***/ ((module) => {


module.exports = [
    {
        year: "2023",
        degree: "Desarrollador Aplicaciones Web",
        institute: "I.E.S Francisco de los Rios",
        details: ` Desarrolo Pericles, para la producción de productos, destinados a institutos de Cordoba.`
    },
    {
        year: "2022",
        degree: "Desarrollador Aplicaciones Multiplataforma",
        institute: "I.E.S Francisco de los Rios",
        details: `Implicación en aplicaciones reales para empresas locales, de Fernán Núñez, en conjunto a la asociación de empresarios local.`
    },
    {
        year: "2020",
        degree: "Bachillerato Tecnol\xf3gico ",
        institute: "I.E.S Francisco de los Rios",
        details: `En esta modalidad se estudian materias como Matemáticas, Biología, Geología y Ciencias Ambientales, Dibujo Técnico, Física y Química.`
    }
];


/***/ }),

/***/ 6153:
/***/ ((module) => {


module.exports = [
    {
        year: "2022 - 2022",
        position: " Desarrollador SoftWare",
        compnayName: "Microsensory",
        details: `Desarrollo de Aplicaciones móviles, como diversas tareas de ofimática.`
    },
    {
        year: "2016 - 2020",
        position: "Automoci\xf3n",
        compnayName: "Autodidacta",
        details: `Aprendizaje del funcionamiento y las bases de la automoción, como practicas en vehiculos propios.`
    },
    {
        year: "2018 - 2020",
        position: "Pe\xf3n Agr\xedcola",
        compnayName: "",
        details: `Trabajo del cual se aprende a trabajar en grupo, como la adaptación a los problemas.`
    }
];


/***/ }),

/***/ 4273:
/***/ ((module) => {


module.exports = [
    {
        meta: "Nombre",
        metaInfo: "Juan Francisco "
    },
    {
        meta: "Apellidos",
        metaInfo: "Aguilar S\xe1nchez"
    },
    {
        meta: "Edad",
        metaInfo: "20 A\xf1os"
    },
    {
        meta: "Nacionalidad",
        metaInfo: "Espa\xf1a"
    },
    {
        meta: "Trabajo",
        metaInfo: "Disponible"
    },
    {
        meta: "Direcci\xf3n",
        metaInfo: "C\xf3rdoba"
    },
    {
        meta: "Telefono",
        metaInfo: "681 680 641"
    },
    {
        meta: "Linkedin",
        metaInfo: " Juan Fco"
    },
    {
        meta: "Idiomas",
        metaInfo: "Espa\xf1ol, Ingles"
    },
    {
        meta: "Github",
        metaInfo: "JuanFrancisco21"
    }
];


/***/ }),

/***/ 2536:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _jsxRuntime = __webpack_require__(997);
module.exports = [
    {
        id: 1,
        tooltipId: "WEB KAZE",
        portfolioImage: "img/portfolio/1.jpg",
        portfolioLink: "https://juanfrancisco21.github.io/K-A-Z-E/",
        title: "WEB KAZE",
        meta: "HTML",
        clientName: "Miguel Carmona",
        category: "Desarrollo Interfaces",
        date: "Noviembre 22, 2022",
        projectDescriptions: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Este es un proyecto, que surje de una actividad de Dise\xf1o de Interfaces en la cual se nos requiere de realizar una p\xe1gina web de un cantante que nosotros elijamos. Todo ello lo desarrollariamos con tecnologias tan simples y tan usadas como son HTML, CSS, JS."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Mi Proyecto se bas\xf3 en el cantante KAZE, rapero espa\xf1ol - para ello se dise\xf1an y crean 3 vistas. La p\xe1gina de Inicio, Blog y Galeria. Una caracteristica que era importante para este proyecto era la posibilidad de reproducir las caciones de cierto album nuevo, todo ello sin salir de la misma Web, al cual le a\xf1ad\xed la posibilidad de leer la letra de dichas canciones."
                })
            ]
        })
    },
    {
        id: 2,
        tooltipId: "Cofradia  Nazarenos",
        portfolioImage: "img/portfolio/2.jpg",
        portfolioLink: "https://juanfrancisco21.github.io/Cofradia/",
        title: "COFRADIA NAZARENOS",
        meta: "BOOTSTRAP",
        clientName: "Miguel Carmona",
        category: "Desarrollo Interfaces",
        date: "Diciembre 16, 2022",
        projectDescriptions: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Todo este proyecto comienza como una actividad para el grado superior DAW. Donde partimos del problema proporcionado por el profesor de crear una P\xe1gina web basada en el color morado. Con la cual el mismo hizo una sugerencia de hacerla basada en una cofradia. Una vez que ten\xedamos el problema planteado, comenzamos a trabajar en la soluci\xf3n. Primero, se hizo una investigaci\xf3n sobre el color morado y su simbolismo en la cultura y la historia descubriendo que el color morado ha sido asociado con la realeza, la sabidur\xeda y la espiritualidad en muchas culturas a lo largo de la historia. Tambi\xe9n encontramos que en muchas cofrad\xedas, el color morado se utiliza como s\xedmbolo de penitencia y humildad."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Con esta informaci\xf3n en mente, decidimos enfocar nuestra p\xe1gina web en el simbolismo del color morado en la historia y en la cultura de las cofrad\xedas. Creamos un dise\xf1o atractivo y f\xe1cil de usar que destacaba el color morado y utilizaba im\xe1genes y gr\xe1ficos para ilustrar el simbolismo del color en diferentes contextos hist\xf3ricos y culturales."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Finalizando la web con tecnologias como principales tecnologias HTML5, SCSS Y BOOTSTRAP. Todo ello cumpliendo los estandares, tanto de accesibilidad como de usabilidad definidos por WCAG, realizando pruebas con la herramienta WAVE, a la par que comprobaciones con lectura de pantalla para personas con capacidad reducida, o el uso de heatmaps para comprobrar la usabilidad."
                })
            ]
        })
    },
    {
        id: 3,
        tooltipId: "Banco",
        portfolioImage: "img/portfolio/3.jpg",
        portfolioLink: "https://github.com/JuanFrancisco21/Ud3-Sockets",
        title: "SCAMMER BANK",
        meta: "CLI - SERV",
        clientName: "Juan Francisco",
        category: "Conexi\xf3nes TCP",
        date: "Febrero 02, 2021",
        projectDescriptions: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Lo que se pretende con este proyecto es desarrollar una aplicaci\xf3n cliente-servidor utilizando Java y conexi\xf3n TCP, con el objetivo de cumplir con los requisitos de una asignatura y demostrar la capacidad de crear software funcional."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "La aplicaci\xf3n debe permitir que el cliente env\xede y reciba informaci\xf3n del servidor, utilizando la conexi\xf3n TCP para establecer la comunicaci\xf3n entre ambos. Es importante  asegurarse de que la aplicaci\xf3n funcione correctamente y sea f\xe1cil de usar para el cliente. Adem\xe1s, es necesario tener en cuenta aspectos como la seguridad y la escalabilidad de la aplicaci\xf3n para garantizar su sostenibilidad a largo plazo."
                })
            ]
        })
    },
    {
        id: 4,
        tooltipId: "Wishlist",
        portfolioImage: "img/portfolio/4.jpg",
        portfolioLink: "https://github.com/JuanFrancisco21/React_WishList",
        title: "WISHLIST",
        meta: "REACT",
        clientName: "Juan Francisco",
        category: "Entorno Cliente",
        date: "Octubre 22, 2022",
        projectDescriptions: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: 'Este es el primer proyecto desarrollado con el framework react "La lista de deseos es una aplicaci\xf3n sencilla pero muy \xfatil para llevar un registro de las cosas que queremos adquirir o hacer en el futuro. Con React, hemos podido crear una interfaz intuitiva y f\xe1cil de usar, lo que hace que sea muy agradable de utilizar.'
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Adem\xe1s, hemos implementado algunas caracter\xedsticas avanzadas, como la posibilidad de marcar los elementos de la lista como completados y de eliminarlos de manera sencilla con solo un clic. Tambi\xe9n hemos a\xf1adido la opci\xf3n de filtrar la lista por diferentes categor\xedas para poder encontrar  m\xe1s f\xe1cilmente lo que buscamos. En resumen, este proyecto con React ha sido una gran oportunidad para aprender y poner en pr\xe1ctica nuestros conocimientos en el desarrollo de aplicaciones web modernas."
                })
            ]
        })
    }
];


/***/ }),

/***/ 4537:
/***/ ((module) => {


module.exports = [
    {
        icon: "home",
        itemName: "Inicio",
        itemRoute: "#home",
        activeClass: "active"
    },
    {
        icon: "human",
        itemName: "Sobre mi",
        itemRoute: "#about",
        activeClass: ""
    },
    {
        icon: "portfolio",
        itemName: "Portfolio",
        itemRoute: "#portfolio",
        activeClass: ""
    },
    {
        icon: "blog",
        itemName: "Blog",
        itemRoute: "#blog",
        activeClass: ""
    },
    {
        icon: "contact",
        itemName: "Contacto",
        itemRoute: "#contact",
        activeClass: ""
    }
];


/***/ })

};
;