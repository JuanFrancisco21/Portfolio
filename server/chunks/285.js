"use strict";
exports.id = 285;
exports.ids = [285];
exports.modules = {

/***/ 6277:
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
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3124);
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_parallax_tilt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8501);
/* harmony import */ var _data_services__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_services__WEBPACK_IMPORTED_MODULE_4__);





react_modal__WEBPACK_IMPORTED_MODULE_2___default().setAppElement("#__next");
const Service = ()=>{
    const [singleData, setSingleData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleBServicesData = (id)=>{
        const find = _data_services__WEBPACK_IMPORTED_MODULE_4___default().find((item)=>item?.id === id);
        setSingleData(find);
        setIsOpen(true);
    };
    const handleModle = (id)=>{
        handleBServicesData(id);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "service_list",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: _data_services__WEBPACK_IMPORTED_MODULE_4___default().map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        "data-aos": "fade-right",
                        "data-aos-duration": "1200",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_parallax_tilt__WEBPACK_IMPORTED_MODULE_3___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "list_inner",
                                onClick: ()=>handleModle(item?.id),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hover",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "svg custom",
                                            src: item.imgIcon,
                                            alt: "icon"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "service_title",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: item.title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "learn_more",
                                            children: [
                                                "Learn More",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }, item.id))
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
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "description_wrap ",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "popup_informations",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "image",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "main",
                                                style: {
                                                    backgroundImage: `url(${singleData?.popupImg})`
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "description",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: singleData?.popupTitle
                                                }),
                                                singleData?.firstDescriptionText,
                                                singleData?.serviceListDescriptions
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);


/***/ }),

/***/ 4870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Testimonial)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_testimonial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5285);
/* harmony import */ var _data_testimonial__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_testimonial__WEBPACK_IMPORTED_MODULE_3__);




function Testimonial() {
    var settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    arrow: false,
                    slidesToShow: 1,
                    speed: 300
                }
            }
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...settings,
        children: _data_testimonial__WEBPACK_IMPORTED_MODULE_3___default().map((val, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                "data-aos": "fade-right",
                "data-aos-duration": "1200",
                "data-aos-delay": val.delayAnimation,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "list_inner",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "details",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "author",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "image",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "main",
                                                style: {
                                                    backgroundImage: `url(img/testimonials/${val.img}.jpg)`
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "short",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: val.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: val.designation
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "svg",
                                        src: "img/svg/quote.svg",
                                        alt: "quote"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: val.desc
                            })
                        })
                    ]
                })
            }, i))
    });
}


/***/ }),

/***/ 8501:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _jsxRuntime = __webpack_require__(997);
module.exports = [
    {
        id: 1,
        imgIcon: "img/svg/1.svg",
        title: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                "Motion & Web ",
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("br", {}),
                " Graphy"
            ]
        }),
        popupImg: "img/service/1.jpg",
        popupTitle: `Motion & Web Graphy Breakdown In Cinema 4D`,
        firstDescriptionText: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Just because we cant get out and about like we normally would, doesn’t mean we have to taking pictures. There’s still plenty you can do, provided you are prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now we can remember them when it is all over."
                })
            ]
        }),
        serviceListDescriptions: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                    children: "What Is Motion & Web?"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    className: "in_list",
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                    children: "Email is a crucial channel in any marketing."
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                    children: "Curious what to say? How to say it?"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                    children: "Whether you’re kicking off a new ca mpaign."
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                    children: "Habitasse per feugiat aliquam luctus accumsan curae"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                })
            ]
        })
    },
    {
        id: 2,
        imgIcon: "img/svg/2.svg",
        title: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                "Ui/Ux ",
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("br", {}),
                " Consultancy"
            ]
        }),
        popupImg: "img/service/2.jpg",
        popupTitle: `
    Ui/Ux Consultancy Design Breakdown In Cinema 4D`,
        firstDescriptionText: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Just because we cant get out and about like we normally would, doesn’t mean we have to taking pictures. There’s still plenty you can do, provided you are prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now we can remember them when it is all over."
                })
            ]
        }),
        serviceListDescriptions: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                    children: "What Is Ui/Ux?"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    className: "in_list",
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                    children: "Email is a crucial channel in any marketing."
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                    children: "Curious what to say? How to say it?"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                })
            ]
        })
    },
    {
        id: 3,
        imgIcon: "img/svg/3.svg",
        title: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                "Branding & ",
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("br", {}),
                " Design"
            ]
        }),
        popupImg: "img/service/3.jpg",
        popupTitle: `Branding & Design Breakdown In Cinema 4D`,
        firstDescriptionText: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Just because we cant get out and about like we normally would, doesn’t mean we have to taking pictures. There’s still plenty you can do, provided you are prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now we can remember them when it is all over."
                })
            ]
        }),
        serviceListDescriptions: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                    children: "What Is Branding & Design?"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    className: "in_list",
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                    children: "Email is a crucial channel in any marketing."
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                    children: "Curious what to say? How to say it?"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                    children: "Whether you’re kicking off a new ca mpaign."
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                })
            ]
        })
    },
    {
        id: 4,
        imgIcon: "img/svg/4.svg",
        title: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                "Mobile App ",
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("br", {}),
                " Design"
            ]
        }),
        popupImg: "img/service/4.jpg",
        popupTitle: `Mobile App Design is the trending Part of Graphics`,
        firstDescriptionText: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Just because we cant get out and about like we normally would, doesn’t mean we have to taking pictures. There’s still plenty you can do, provided you are prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now we can remember them when it is all over."
                })
            ]
        }),
        serviceListDescriptions: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                    children: "What Is Mobile App Design?"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria."
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    className: "in_list",
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                    children: "Email is a crucial channel in any marketing."
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                    children: "Curious what to say? How to say it?"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                    children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                })
            ]
        })
    }
];


/***/ }),

/***/ 5285:
/***/ ((module) => {


module.exports = [
    {
        img: "1",
        desc: `Hi, I’m Alvara Atkins and I am designer &amp; developer who dream making the world better place by products. I am also very active for international clients.`,
        name: "Alvara Atkins",
        designation: "Marketing Manager",
        delayAnimation: ""
    },
    {
        img: "2",
        desc: `These people really know what they are doing! Great customer support availability and supperb kindness. I am very happy that I've purchased this liscense!!!`,
        name: "Fabian Gattuzo",
        designation: "Photographer",
        delayAnimation: "100"
    },
    {
        img: "3",
        desc: `These people really know what they are doing! Great customer support availability and supperb kindness. I am very happy that I've purchased this liscense!!!`,
        name: "Alizee Bonita",
        designation: "App Developer",
        delayAnimation: "200"
    }
];


/***/ })

};
;