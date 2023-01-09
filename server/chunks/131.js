"use strict";
exports.id = 131;
exports.ids = [131];
exports.modules = {

/***/ 5131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scrollspy_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4606);
/* harmony import */ var react_scrollspy_nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy_nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4537);
/* harmony import */ var _data_sidebar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_sidebar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);






// sidebar footer bottom content
const sidebarFooterContent = {
    name: "Nelson",
    email: "support@gmail.com",
    emailRef: "mailto:JF21@gmail.com"
};
const HeaderHorizontal = ()=>{
    const [click, setClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClick = ()=>setClick(!click);
    const [navbar, setNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const changeBackground = ()=>{
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", changeBackground);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `horizontal-menu ${navbar ? "fixed-header" : ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mob-header",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "toggler-menu",
                    onClick: handleClick,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: click ? "active" : "",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: click ? "jf_tm_sidebar  menu-open" : "jf_tm_sidebar",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "sidebar_inner",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: "logo_light",
                                        src: "/img/logo/dark.png",
                                        alt: "brand",
                                        width: "92",
                                        height: "37"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: "logo_dark",
                                        src: "/img/logo/dark.png",
                                        alt: "brand",
                                        width: "92",
                                        height: "37"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "menu",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_scrollspy_nav__WEBPACK_IMPORTED_MODULE_3___default()), {
                                scrollTargetIds: [
                                    "home",
                                    "about",
                                    "service",
                                    "portfolio",
                                    "testimonial",
                                    "blog",
                                    "contact"
                                ],
                                activeNavClass: "active",
                                offset: -80,
                                scrollDuration: "100",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "anchor_nav",
                                    children: _data_sidebar__WEBPACK_IMPORTED_MODULE_4___default().map((val, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "list_inner",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    href: val.itemRoute,
                                                    className: val.activeClass,
                                                    onClick: handleClick,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            className: "svg custom",
                                                            src: `img/svg/${val.icon}.svg`,
                                                            alt: "icon"
                                                        }),
                                                        val.itemName
                                                    ]
                                                })
                                            })
                                        }, i))
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "author",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "inner",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "main",
                                            style: {
                                                backgroundImage: "url(img/about/avatar.jpg)"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "short",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: sidebarFooterContent.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: sidebarFooterContent.emailRef,
                                                children: sidebarFooterContent.email
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderHorizontal);


/***/ })

};
;