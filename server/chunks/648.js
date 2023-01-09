"use strict";
exports.id = 648;
exports.ids = [648];
exports.modules = {

/***/ 8648:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9738);
/* harmony import */ var _hero_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1384);
/* harmony import */ var _about_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5470);
/* harmony import */ var _blog_Blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8985);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6685);
/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3978);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7476);
/* harmony import */ var _header_HeaderMobile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(148);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Contact__WEBPACK_IMPORTED_MODULE_8__]);
_Contact__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const JFHomeSidebar = ()=>{
    const [isDark, setIsDark] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.querySelector("body").classList.remove("rtl");
    }, []);
    const handleLabelClick = ()=>{
        if (isDark) {
            localStorage.setItem("theme-color", "theme-light");
            document.querySelector("body").classList.add("theme-light");
            document.querySelector("body").classList.remove("theme-dark");
            setIsDark(false);
        } else {
            localStorage.setItem("theme-color", "theme-dark");
            document.querySelector("body").classList.add("theme-dark");
            document.querySelector("body").classList.remove("theme-light");
            setIsDark(true);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `home-light jf_tm_mainpart ${isDark ? "theme-dark" : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                className: `theme-switcher-label d-flex  ${isDark ? "active" : ""}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "checkbox",
                        onClick: handleLabelClick,
                        className: "theme-switcher"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "switch-handle",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "light-text",
                                title: "Switch to Dark",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaMoon, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "dark-text",
                                title: "Switch to Light",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaSun, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: "header-area",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "header-inner",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_HeaderMobile__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_Sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hero_Hero__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_about_About__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jf_tm_portfolio",
                id: "portfolio",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jf_tm_title",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Portfolio"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Estos son algunos de los proyectos desarrollados a lo largo del aprendizaje en ambos grados superiores, de desarrollo de software."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jf_tm_news",
                id: "blog",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jf_tm_title",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Blog"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Recuerdos de eventos vividos gracias al aprendizaje como programador."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blog_Blog__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jf_tm_contact",
                id: "contact",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jf_tm_title",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Contacto"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Toda la informaci\xf3n y m\xe9todos para poder contactarme personalmente."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "extra_info",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Address__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mainpart",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "left",
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "300",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "title",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "Siempre abierto a escuchar ofertas",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: " para desarrollo de software."
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "fields",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Contact__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "right",
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "400",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Map__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JFHomeSidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;