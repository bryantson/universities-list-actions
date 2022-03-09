/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 105:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 82:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 383:
/***/ ((module) => {

module.exports = eval("require")("sort-json-array");


/***/ }),

/***/ 685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(105)
const github = __nccwpck_require__(82)
const http = __nccwpck_require__(685)
const sortJsonArray = __nccwpck_require__(383);


try {

  const country = core.getInput("country").replace(/\s/g,"+")

  console.log("You searched for unversities in: " + country)

  http.get('http://universities.hipolabs.com/search?country=' + country, (resp) => {
    let data = ''

    resp.on('data', (chunk) => {
      data += chunk
    });

    resp.on('end', () => {
      var dataJSON = sortJsonArray(JSON.parse(data),'name')

      var counter = 1

      for(university in dataJSON) {
        console.log(counter + " : " + dataJSON[university].name + " - " + dataJSON[university].web_pages)
        counter += 1
      }
      core.setOutput("total",count)
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message)
  });
} catch (error) {
  core.setFailed(error.message)
}
})();

module.exports = __webpack_exports__;
/******/ })()
;