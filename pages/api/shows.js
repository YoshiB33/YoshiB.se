"use strict";
(() => {
var exports = {};
exports.id = 369;
exports.ids = [369];
exports.modules = {

/***/ 93:
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ 649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.withApiAuthRequired)(async function shows(req, res) {
    try {
        const { accessToken  } = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getAccessToken)(req, res, {
            scopes: [
                'read:shows'
            ]
        });
        const apiPort = process.env.API_PORT || 3001;
        const response = await fetch(`http://localhost:${apiPort}/api/shows`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const shows = await response.json();
        res.status(200).json(shows);
    } catch (error) {
        res.status(error.status || 500).json({
            error: error.message
        });
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(649));
module.exports = __webpack_exports__;

})();