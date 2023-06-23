/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/quiz/page",{

/***/ "(app-client)/./app/quiz/Quiz.tsx":
/*!***************************!*\
  !*** ./app/quiz/Quiz.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button/Button */ \"(app-client)/./components/Button/Button.tsx\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n//Components\n\nconst Quiz = (param)=>{\n    let { questions , totalQuestions  } = param;\n    _s();\n    const [currentQuestionIndex, setCurrentQuestionIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [userAnswers, setUserAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleOnAnswerClick = (answer, currentQuestionIndex)=>{\n        //if user has already answered, do nothing\n        if (isQuestionAnswered) return;\n        //check answer against correct answer\n        const isCorrect = questions[currentQuestionIndex].correct_answer === answer;\n        //add score if answer is correct\n        if (isCorrect) setScore((prev)=>prev + 1);\n        //save the answer in the object for user answer\n        setUserAnswers((prev)=>({\n                ...prev,\n                [currentQuestionIndex]: answer\n            }));\n    };\n    const handleChangeQuestion = (step)=>{\n        const newQuestionIndex = currentQuestionIndex + step;\n        if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;\n        setCurrentQuestionIndex(newQuestionIndex);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-white text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"p-8 font-bold text-[20px]\",\n                children: [\n                    \"Score: \",\n                    score\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\react-quiz-2023-start-here\\\\app\\\\quiz\\\\Quiz.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[#9f50ac] font-bold pb-2 text-[14px]\",\n                children: [\n                    \"Question \",\n                    currentQuestionIndex + 1,\n                    \" out of \",\n                    totalQuestions\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\react-quiz-2023-start-here\\\\app\\\\quiz\\\\Quiz.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            \"QuestionCard\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"Prev\",\n                        onClick: ()=>handleChangeQuestion(-1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\react-quiz-2023-start-here\\\\app\\\\quiz\\\\Quiz.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: currentQuestionIndex === totalQuestions - 1 ? \"End\" : \"Next\",\n                        onClick: currentQuestionIndex === totalQuestions - 1 ? ()=>router.push(\"/\") : ()=>handleChangeQuestion(1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\react-quiz-2023-start-here\\\\app\\\\quiz\\\\Quiz.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\react-quiz-2023-start-here\\\\app\\\\quiz\\\\Quiz.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\react-quiz-2023-start-here\\\\app\\\\quiz\\\\Quiz.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Quiz, \"dB/RaZOIY5zUpkBLZ9ZUQod/bq4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3F1aXovUXVpei50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXVDO0FBQ0k7QUFDM0MsWUFBWTtBQUNtQztBQVUvQyxNQUFNSSxPQUFPLFNBQXlDO1FBQXhDLEVBQUNDLFVBQVMsRUFBRUMsZUFBYyxFQUFTOztJQUMvQyxNQUFNLENBQUNDLHNCQUFzQkMsd0JBQXdCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pFLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQXlCLENBQUM7SUFFeEUsTUFBTVkscUJBQXFCRixXQUFXLENBQUNKLHFCQUFxQixHQUFHLElBQUksR0FBRyxLQUFLO0lBRTNFLE1BQU1PLFNBQVNaLDBEQUFTQTtJQUV4QixNQUFNYSxzQkFBc0IsQ0FBQ0MsUUFBZ0JULHVCQUFpQztRQUM1RSwwQ0FBMEM7UUFDMUMsSUFBSU0sb0JBQW9CO1FBQ3hCLHFDQUFxQztRQUNyQyxNQUFNSSxZQUFZWixTQUFTLENBQUNFLHFCQUFxQixDQUFDVyxjQUFjLEtBQUtGO1FBQ3JFLGdDQUFnQztRQUNoQyxJQUFJQyxXQUFXUCxTQUFTUyxDQUFBQSxPQUFRQSxPQUFPO1FBQ3ZDLCtDQUErQztRQUMvQ1AsZUFBZU8sQ0FBQUEsT0FBUztnQkFBQyxHQUFHQSxJQUFJO2dCQUFFLENBQUNaLHFCQUFxQixFQUFFUztZQUFNO0lBQ2xFO0lBRUEsTUFBTUksdUJBQXVCLENBQUNDLE9BQWlCO1FBQzdDLE1BQU1DLG1CQUFtQmYsdUJBQXVCYztRQUNoRCxJQUFJQyxtQkFBbUIsS0FBS0Esb0JBQW9CaEIsZ0JBQWdCO1FBRWhFRSx3QkFBd0JjO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBRUQsV0FBVTs7b0JBQTRCO29CQUFRZjs7Ozs7OzswQkFDakQsOERBQUNnQjtnQkFBRUQsV0FBVTs7b0JBQTRDO29CQUM3Q2pCLHVCQUF1QjtvQkFBRTtvQkFBU0Q7Ozs7Ozs7WUFDMUM7MEJBRUosOERBQUNpQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNyQixpRUFBTUE7d0JBQUN1QixNQUFLO3dCQUFPQyxTQUFTLElBQU1QLHFCQUFxQixDQUFDOzs7Ozs7a0NBQ3pELDhEQUFDakIsaUVBQU1BO3dCQUNMdUIsTUFBTW5CLHlCQUF5QkQsaUJBQWlCLElBQUksUUFBUSxNQUFNO3dCQUNsRXFCLFNBQVNwQix5QkFBeUJELGlCQUFpQixJQUFJLElBQU1RLE9BQU9jLElBQUksQ0FBQyxPQUFPLElBQU1SLHFCQUFxQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkg7R0ExQ01oQjs7UUFPV0Ysc0RBQVNBOzs7S0FQcEJFO0FBNENOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9xdWl6L1F1aXoudHN4PzdmMjgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcbi8vQ29tcG9uZW50c1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvblwiXHJcblxyXG4vL1R5cGVzXHJcbmltcG9ydCB7IFF1ZXN0aW9uc1N0YXRlIH0gZnJvbSBcIkAvdHlwZXMvcXVpelwiXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHF1ZXN0aW9uczogUXVlc3Rpb25zU3RhdGVcclxuICB0b3RhbFF1ZXN0aW9uczogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IFF1aXogPSAoe3F1ZXN0aW9ucywgdG90YWxRdWVzdGlvbnN9IDogUHJvcHMpID0+IHtcclxuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uSW5kZXgsIHNldEN1cnJlbnRRdWVzdGlvbkluZGV4XSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt1c2VyQW5zd2Vycywgc2V0VXNlckFuc3dlcnNdID0gdXNlU3RhdGU8UmVjb3JkPG51bWJlciwgc3RyaW5nPj4oe30pXHJcblxyXG4gIGNvbnN0IGlzUXVlc3Rpb25BbnN3ZXJlZCA9IHVzZXJBbnN3ZXJzW2N1cnJlbnRRdWVzdGlvbkluZGV4XSA/IHRydWUgOiBmYWxzZVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVPbkFuc3dlckNsaWNrID0gKGFuc3dlcjogc3RyaW5nLCBjdXJyZW50UXVlc3Rpb25JbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAvL2lmIHVzZXIgaGFzIGFscmVhZHkgYW5zd2VyZWQsIGRvIG5vdGhpbmdcclxuICAgIGlmIChpc1F1ZXN0aW9uQW5zd2VyZWQpIHJldHVyblxyXG4gICAgLy9jaGVjayBhbnN3ZXIgYWdhaW5zdCBjb3JyZWN0IGFuc3dlclxyXG4gICAgY29uc3QgaXNDb3JyZWN0ID0gcXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbkluZGV4XS5jb3JyZWN0X2Fuc3dlciA9PT0gYW5zd2VyXHJcbiAgICAvL2FkZCBzY29yZSBpZiBhbnN3ZXIgaXMgY29ycmVjdFxyXG4gICAgaWYgKGlzQ29ycmVjdCkgc2V0U2NvcmUocHJldiA9PiBwcmV2ICsgMSlcclxuICAgIC8vc2F2ZSB0aGUgYW5zd2VyIGluIHRoZSBvYmplY3QgZm9yIHVzZXIgYW5zd2VyXHJcbiAgICBzZXRVc2VyQW5zd2VycyhwcmV2ID0+ICh7Li4ucHJldiwgW2N1cnJlbnRRdWVzdGlvbkluZGV4XTogYW5zd2VyfSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VRdWVzdGlvbiA9IChzdGVwOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IG5ld1F1ZXN0aW9uSW5kZXggPSBjdXJyZW50UXVlc3Rpb25JbmRleCArIHN0ZXBcclxuICAgIGlmIChuZXdRdWVzdGlvbkluZGV4IDwgMCB8fCBuZXdRdWVzdGlvbkluZGV4ID49IHRvdGFsUXVlc3Rpb25zKSByZXR1cm5cclxuXHJcbiAgICBzZXRDdXJyZW50UXVlc3Rpb25JbmRleChuZXdRdWVzdGlvbkluZGV4KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwLTggZm9udC1ib2xkIHRleHQtWzIwcHhdXCI+U2NvcmU6IHtzY29yZX08L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyM5ZjUwYWNdIGZvbnQtYm9sZCBwYi0yIHRleHQtWzE0cHhdXCI+XHJcbiAgICAgICAgUXVlc3Rpb24ge2N1cnJlbnRRdWVzdGlvbkluZGV4ICsgMX0gb3V0IG9mIHt0b3RhbFF1ZXN0aW9uc31cclxuICAgICAgPC9wPlxyXG4gICAgICBRdWVzdGlvbkNhcmRcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC0xNlwiPlxyXG4gICAgICAgIDxCdXR0b24gdGV4dD1cIlByZXZcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VRdWVzdGlvbigtMSl9IC8+XHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgIHRleHQ9e2N1cnJlbnRRdWVzdGlvbkluZGV4ID09PSB0b3RhbFF1ZXN0aW9ucyAtIDEgPyAnRW5kJyA6ICdOZXh0J30gXHJcbiAgICAgICAgICBvbkNsaWNrPXtjdXJyZW50UXVlc3Rpb25JbmRleCA9PT0gdG90YWxRdWVzdGlvbnMgLSAxID8gKCkgPT4gcm91dGVyLnB1c2goJy8nKSA6ICgpID0+IGhhbmRsZUNoYW5nZVF1ZXN0aW9uKDEpfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpeiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQnV0dG9uIiwiUXVpeiIsInF1ZXN0aW9ucyIsInRvdGFsUXVlc3Rpb25zIiwiY3VycmVudFF1ZXN0aW9uSW5kZXgiLCJzZXRDdXJyZW50UXVlc3Rpb25JbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJ1c2VyQW5zd2VycyIsInNldFVzZXJBbnN3ZXJzIiwiaXNRdWVzdGlvbkFuc3dlcmVkIiwicm91dGVyIiwiaGFuZGxlT25BbnN3ZXJDbGljayIsImFuc3dlciIsImlzQ29ycmVjdCIsImNvcnJlY3RfYW5zd2VyIiwicHJldiIsImhhbmRsZUNoYW5nZVF1ZXN0aW9uIiwic3RlcCIsIm5ld1F1ZXN0aW9uSW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwidGV4dCIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/quiz/Quiz.tsx\n"));

/***/ }),

/***/ "(app-client)/./node_modules/next/navigation.js":
/*!*****************************************!*\
  !*** ./node_modules/next/navigation.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/components/navigation */ \"(app-client)/./node_modules/next/dist/client/components/navigation.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL25leHQvbmF2aWdhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSx3SkFBK0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbmF2aWdhdGlvbi5qcz83YzM4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb24nKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/next/navigation.js\n"));

/***/ })

});