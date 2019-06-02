webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap_TweenMax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/TweenMax */ "./node_modules/gsap/TweenMax.js");
/* harmony import */ var _ExpandingTextarea_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandingTextarea.vue */ "./src/ExpandingTextarea.vue");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ExpandingTextarea: _ExpandingTextarea_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      numDaysLeft: 30,
      currentDay: 20,
      promptOn: false,
      todaysHMSubmitted: false,
      todaysHMShared: false,
      todaysHM: '',
      vitalities: [{
        name: '',
        doneBy: 0
      }]
    };
  },
  methods: {
    handleDone: function handleDone() {
      this.todaysHMSubmitted = true;
    },
    handleShare: function handleShare() {
      this.todaysHMShared = true;
      this.promptOn = false;
    },
    handleLeft: function handleLeft() {
      console.log('left!');
    },
    handleRight: function handleRight() {
      console.log('right!');
    }
  },
  computed: {
    numDaysRounded: function numDaysRounded() {
      return this.numDaysLeft.toFixed(0);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var mouth = document.getElementById('mouth');
    var mc = new hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.Manager(mouth);
    mc.add(new hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.Pan({
      direction: hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.DIRECTION_ALL,
      threshold: 50
    }));
    mc.on("pandown", function () {
      if (_this.promptOn) return;
      _this.promptOn = true;
    });
    TweenLite.to(this.$data, 1, {
      numDaysLeft: this.currentDay
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#app[data-v-7ba5bd90] {\n  font-family: 'Ubuntu', sans-serif;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n#app .title-box[data-v-7ba5bd90] {\n    position: absolute;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    top: 15vh;\n}\n#app .title-box .title[data-v-7ba5bd90] {\n      font-size: 50px;\n      font-weight: 700;\n      text-align: center;\n}\n#app .title-box .title.top[data-v-7ba5bd90] {\n        margin-bottom: 0.7em;\n}\n#app .cheeks-box[data-v-7ba5bd90] {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    padding-bottom: 10vh;\n    display: flex;\n    justify-content: center;\n}\n#app .cheeks-box #mouth-hitbox[data-v-7ba5bd90] {\n      width: 35vw;\n      height: 65vw;\n      background-color: red;\n}\n#app .cheeks-box canvas[data-v-7ba5bd90] {\n      position: absolute;\n      z-index: 10;\n      width: 86vw;\n      height: 65vw;\n      bottom: 10vh;\n      border: 1px solid #000000;\n      pointer-events: none;\n}\n#app .cheeks-box .cheek[data-v-7ba5bd90] {\n      position: absolute;\n      width: 65vw;\n      height: 65vw;\n      border-radius: 50%;\n      background-color: rgba(0, 0, 0, 0.2);\n      bottom: 10vh;\n      animation: rotation-data-v-7ba5bd90 4s infinite linear;\n}\n#app .cheeks-box .cheek .cheek-hitbox[data-v-7ba5bd90] {\n        position: absolute;\n        width: inherit;\n        height: inherit;\n        border-radius: 50%;\n}\n#app .cheeks-box .cheek img[data-v-7ba5bd90] {\n        z-index: -10;\n        position: absolute;\n        width: 126%;\n        height: 126%;\n        top: -13%;\n        left: -13%;\n}\n@keyframes rotation-data-v-7ba5bd90 {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\n#app .cheeks-box .cheek.left[data-v-7ba5bd90] {\n        left: -17.5vh;\n}\n#app .cheeks-box .cheek.right[data-v-7ba5bd90] {\n        right: -17.5vh;\n}\n#app .prompt-box[data-v-7ba5bd90] {\n    z-index: 20;\n    position: absolute;\n    width: 100%;\n    top: 10vh;\n}\n#app .prompt-box .input-box[data-v-7ba5bd90] {\n      z-index: 21;\n      width: 90vw;\n      height: 90vw;\n      border-radius: 50%;\n      background-color: black;\n      margin: 0 auto;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      overflow: hidden;\n      font-size: 35px;\n}\n#app .prompt-box .input-button[data-v-7ba5bd90] {\n      z-index: 22;\n      width: 24vw;\n      height: 24vw;\n      border-radius: 50%;\n      background-color: #ff7474;\n      margin: -12vw auto 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 25px;\n      color: white;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [
    _c("div", { staticClass: "title-box" }, [
      _c("div", { staticClass: "title top" }, [
        _vm._v("\n      After"),
        _c("br"),
        _vm._v("\n      " + _vm._s(_vm.numDaysRounded) + " days,\n    ")
      ]),
      _vm._v(" "),
      _vm._m(0)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "cheeks-box" }, [
      _c("canvas", { attrs: { id: "mouth", width: "400", height: "300" } }),
      _vm._v(" "),
      _c("div", { attrs: { id: "mouth-hitbox" } }),
      _vm._v(" "),
      _c("div", { staticClass: "cheek left" }, [
        _c("div", {
          staticClass: "cheek-hitbox",
          on: { click: _vm.handleLeft }
        }),
        _vm._v(" "),
        _c("img", { attrs: { src: "/assets/vitality.png" } })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "cheek right", on: { click: _vm.handleRight } },
        [
          _c("div", {
            staticClass: "cheek-hitbox",
            on: { click: _vm.handleLeft }
          }),
          _vm._v(" "),
          _c("img", { attrs: { src: "/assets/achievement.png" } })
        ]
      )
    ]),
    _vm._v(" "),
    _vm.promptOn
      ? _c("div", { staticClass: "prompt-box" }, [
          _c(
            "div",
            { staticClass: "input-box" },
            [
              _c("ExpandingTextarea", {
                attrs: { placeholder: "Today's happy movement", cols: "12" },
                model: {
                  value: _vm.todaysHM,
                  callback: function($$v) {
                    _vm.todaysHM = $$v
                  },
                  expression: "todaysHM"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          !_vm.todaysHMSubmitted
            ? _c(
                "div",
                { staticClass: "input-button", on: { click: _vm.handleDone } },
                [_vm._v("\n      Done\n    ")]
              )
            : _vm.todaysHMSubmitted && !_vm.todaysHMShared
            ? _c(
                "div",
                { staticClass: "input-button", on: { click: _vm.handleShare } },
                [_vm._v("\n      Share\n    ")]
              )
            : _vm._e()
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title bottom" }, [
      _vm._v("\n      I'll be"),
      _c("br"),
      _vm._v("\n      okay.\n    ")
    ])
  }
]
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/ODBjZSIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT8xYTk5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREEsR0FEQTtBQUlBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLG9CQUZBO0FBR0EscUJBSEE7QUFJQSw4QkFKQTtBQUtBLDJCQUxBO0FBTUEsa0JBTkE7QUFPQSxtQkFDQTtBQUNBLGdCQURBO0FBRUE7QUFGQSxPQURBO0FBUEE7QUFjQSxHQW5CQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsS0FQQTtBQVFBO0FBQ0E7QUFDQSxLQVZBO0FBV0E7QUFDQTtBQUNBO0FBYkEsR0FwQkE7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQSxHQW5DQTtBQXdDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQWpEQSxHOzs7Ozs7Ozs7OztBQzdDQSwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLHNDQUFzQyx1QkFBdUIsZ0JBQWdCLGlCQUFpQixxQkFBcUIsR0FBRyxvQ0FBb0MseUJBQXlCLGtCQUFrQixvQkFBb0IsNkJBQTZCLDBCQUEwQixnQkFBZ0IsR0FBRywyQ0FBMkMsd0JBQXdCLHlCQUF5QiwyQkFBMkIsR0FBRywrQ0FBK0MsK0JBQStCLEdBQUcscUNBQXFDLHlCQUF5QixrQkFBa0IsZ0JBQWdCLDJCQUEyQixvQkFBb0IsOEJBQThCLEdBQUcsbURBQW1ELG9CQUFvQixxQkFBcUIsOEJBQThCLEdBQUcsNENBQTRDLDJCQUEyQixvQkFBb0Isb0JBQW9CLHFCQUFxQixxQkFBcUIsa0NBQWtDLDZCQUE2QixHQUFHLDRDQUE0QywyQkFBMkIsb0JBQW9CLHFCQUFxQiwyQkFBMkIsNkNBQTZDLHFCQUFxQiwrREFBK0QsR0FBRywwREFBMEQsNkJBQTZCLHlCQUF5QiwwQkFBMEIsNkJBQTZCLEdBQUcsZ0RBQWdELHVCQUF1Qiw2QkFBNkIsc0JBQXNCLHVCQUF1QixvQkFBb0IscUJBQXFCLEdBQUcsdUNBQXVDLFFBQVEsOEJBQThCLEdBQUcsTUFBTSxnQ0FBZ0MsR0FBRyxHQUFHLGlEQUFpRCx3QkFBd0IsR0FBRyxrREFBa0QseUJBQXlCLEdBQUcscUNBQXFDLGtCQUFrQix5QkFBeUIsa0JBQWtCLGdCQUFnQixHQUFHLGdEQUFnRCxvQkFBb0Isb0JBQW9CLHFCQUFxQiwyQkFBMkIsZ0NBQWdDLHVCQUF1QixzQkFBc0IsNEJBQTRCLGdDQUFnQyx5QkFBeUIsd0JBQXdCLEdBQUcsbURBQW1ELG9CQUFvQixvQkFBb0IscUJBQXFCLDJCQUEyQixrQ0FBa0MsNkJBQTZCLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLHdCQUF3QixxQkFBcUIsR0FBRzs7Ozs7Ozs7Ozs7Ozs7QUNGenJGO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVMsWUFBWSxFQUFFO0FBQzNDLGVBQWUsMkJBQTJCO0FBQzFDLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNEJBQTRCO0FBQzNDLG9CQUFvQixTQUFTLDJDQUEyQyxFQUFFO0FBQzFFO0FBQ0EsaUJBQWlCLFNBQVMscUJBQXFCLEVBQUU7QUFDakQ7QUFDQSxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsU0FBUztBQUNUO0FBQ0EsbUJBQW1CLFNBQVMsOEJBQThCLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGtDQUFrQyx5QkFBeUIsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0EscUJBQXFCLFNBQVMsaUNBQWlDLEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBLGFBQWEsMkJBQTJCO0FBQ3hDO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQW9EO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DLHdCQUF3QixFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DLHlCQUF5QixFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4QkFBOEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5jYTk5OTYwMmEzNjFmYzIyZGUxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiOzx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1ib3hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSB0b3BcIj5cbiAgICAgICAgQWZ0ZXI8YnI+XG4gICAgICAgIHt7bnVtRGF5c1JvdW5kZWR9fSBkYXlzLFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGUgYm90dG9tXCI+XG4gICAgICAgIEknbGwgYmU8YnI+XG4gICAgICAgIG9rYXkuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hlZWtzLWJveFwiPlxuICAgICAgPGNhbnZhcyBpZD1cIm1vdXRoXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzMDBcIi8+XG4gICAgICA8ZGl2IGlkPVwibW91dGgtaGl0Ym94XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlZWsgbGVmdFwiPlxuICAgICAgICA8ZGl2IEBjbGljaz1cImhhbmRsZUxlZnRcIiBjbGFzcz1cImNoZWVrLWhpdGJveFwiPjwvZGl2PlxuICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvdml0YWxpdHkucG5nXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgQGNsaWNrPVwiaGFuZGxlUmlnaHRcIiBjbGFzcz1cImNoZWVrIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgQGNsaWNrPVwiaGFuZGxlTGVmdFwiIGNsYXNzPVwiY2hlZWstaGl0Ym94XCI+PC9kaXY+XG4gICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9hY2hpZXZlbWVudC5wbmdcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgdi1pZj1cInByb21wdE9uXCIgY2xhc3M9XCJwcm9tcHQtYm94XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYm94XCI+XG4gICAgICAgIDxFeHBhbmRpbmdUZXh0YXJlYSBwbGFjZWhvbGRlcj1cIlRvZGF5J3MgaGFwcHkgbW92ZW1lbnRcIiB2LW1vZGVsPVwidG9kYXlzSE1cIiBjb2xzPVwiMTJcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1pZj1cIiF0b2RheXNITVN1Ym1pdHRlZFwiIEBjbGljaz1cImhhbmRsZURvbmVcIiBjbGFzcz1cImlucHV0LWJ1dHRvblwiPlxuICAgICAgICBEb25lXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1lbHNlLWlmPVwidG9kYXlzSE1TdWJtaXR0ZWQgJiYgIXRvZGF5c0hNU2hhcmVkXCIgQGNsaWNrPVwiaGFuZGxlU2hhcmVcIiBjbGFzcz1cImlucHV0LWJ1dHRvblwiPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7VHdlZW5NYXgsIFBvd2VyMiwgVGltZWxpbmVMaXRlfSBmcm9tIFwiZ3NhcC9Ud2Vlbk1heFwiO1xuaW1wb3J0IEV4cGFuZGluZ1RleHRhcmVhIGZyb20gJy4vRXhwYW5kaW5nVGV4dGFyZWEudnVlJztcbmltcG9ydCBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBFeHBhbmRpbmdUZXh0YXJlYVxuICB9LFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbnVtRGF5c0xlZnQ6IDMwLFxuICAgICAgY3VycmVudERheTogMjAsXG4gICAgICBwcm9tcHRPbjogZmFsc2UsXG4gICAgICB0b2RheXNITVN1Ym1pdHRlZDogZmFsc2UsXG4gICAgICB0b2RheXNITVNoYXJlZDogZmFsc2UsXG4gICAgICB0b2RheXNITTogJycsXG4gICAgICB2aXRhbGl0aWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICBkb25lQnk6IDBcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZURvbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50b2RheXNITVN1Ym1pdHRlZCA9IHRydWU7XG4gICAgfSxcbiAgICBoYW5kbGVTaGFyZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRvZGF5c0hNU2hhcmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJvbXB0T24gPSBmYWxzZTtcbiAgICB9LFxuICAgIGhhbmRsZUxlZnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coJ2xlZnQhJyk7XG4gICAgfSxcbiAgICBoYW5kbGVSaWdodDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygncmlnaHQhJyk7XG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBudW1EYXlzUm91bmRlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5udW1EYXlzTGVmdC50b0ZpeGVkKDApO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbW91dGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW91dGgnKTtcbiAgICB2YXIgbWMgPSBuZXcgSGFtbWVyLk1hbmFnZXIobW91dGgpO1xuICAgIG1jLmFkZCggbmV3IEhhbW1lci5QYW4oeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMLCB0aHJlc2hvbGQ6IDUwIH0pICk7XG4gICAgbWMub24oXCJwYW5kb3duXCIsICgpPT4ge1xuICAgICAgaWYgKHRoaXMucHJvbXB0T24pIHJldHVybjtcbiAgICAgIHRoaXMucHJvbXB0T24gPSB0cnVlO1xuICAgIH0pO1xuICAgIFR3ZWVuTGl0ZS50byh0aGlzLiRkYXRhLCAxLCB7bnVtRGF5c0xlZnQ6IHRoaXMuY3VycmVudERheX0pO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblxuI2FwcCB7XG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC50aXRsZS1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0b3A6IDE1dmg7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICYudG9wIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43ZW07XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cblxuICAuY2hlZWtzLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgI21vdXRoLWhpdGJveCB7XG4gICAgICB3aWR0aDogMzV2dztcbiAgICAgIGhlaWdodDogNjV2dztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB9XG5cbiAgICBjYW52YXMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICB3aWR0aDogODZ2dztcbiAgICAgIGhlaWdodDogNjV2dztcbiAgICAgIGJvdHRvbTogMTB2aDtcbiAgICAgIGJvcmRlcjoxcHggc29saWQgIzAwMDAwMDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIC5jaGVlayB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogNjV2dztcbiAgICAgIGhlaWdodDogNjV2dztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgIGJvdHRvbTogMTB2aDtcbiAgICAgIFxuICAgICAgLmNoZWVrLWhpdGJveCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHotaW5kZXg6IC0xMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTI2JTtcbiAgICAgICAgaGVpZ2h0OiAxMjYlO1xuICAgICAgICB0b3A6IC0xMyU7XG4gICAgICAgIGxlZnQ6IC0xMyU7XG4gICAgICB9XG5cbiAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gNHMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG4gICAgfVxuXG4gICAgICAmLmxlZnQge1xuICAgICAgICBsZWZ0OiAtMTcuNXZoO1xuICAgICAgfVxuICAgICAgJi5yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAtMTcuNXZoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLnByb21wdC1ib3gge1xuICAgIHotaW5kZXg6IDIwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDEwdmg7XG4gICAgLmlucHV0LWJveCB7XG4gICAgICB6LWluZGV4OiAyMTtcbiAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgaGVpZ2h0OiA5MHZ3O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBtYXJnaW46IDAgYXV0bzsgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIFxuICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgXG4gICAgfVxuICAgIC5pbnB1dC1idXR0b24ge1xuICAgICAgei1pbmRleDogMjI7XG4gICAgICB3aWR0aDogMjR2dztcbiAgICAgIGhlaWdodDogMjR2dztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDExNiwgMTE2KTtcbiAgICAgIG1hcmdpbjogLTEydncgYXV0byAwOyBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbiAgXG59XG5cblxuPC9zdHlsZT4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNhcHBbZGF0YS12LTdiYTViZDkwXSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNhcHAgLnRpdGxlLWJveFtkYXRhLXYtN2JhNWJkOTBdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdG9wOiAxNXZoO1xcbn1cXG4jYXBwIC50aXRsZS1ib3ggLnRpdGxlW2RhdGEtdi03YmE1YmQ5MF0ge1xcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2FwcCAudGl0bGUtYm94IC50aXRsZS50b3BbZGF0YS12LTdiYTViZDkwXSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjdlbTtcXG59XFxuI2FwcCAuY2hlZWtzLWJveFtkYXRhLXYtN2JhNWJkOTBdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNhcHAgLmNoZWVrcy1ib3ggI21vdXRoLWhpdGJveFtkYXRhLXYtN2JhNWJkOTBdIHtcXG4gICAgICB3aWR0aDogMzV2dztcXG4gICAgICBoZWlnaHQ6IDY1dnc7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4jYXBwIC5jaGVla3MtYm94IGNhbnZhc1tkYXRhLXYtN2JhNWJkOTBdIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgei1pbmRleDogMTA7XFxuICAgICAgd2lkdGg6IDg2dnc7XFxuICAgICAgaGVpZ2h0OiA2NXZ3O1xcbiAgICAgIGJvdHRvbTogMTB2aDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4jYXBwIC5jaGVla3MtYm94IC5jaGVla1tkYXRhLXYtN2JhNWJkOTBdIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDY1dnc7XFxuICAgICAgaGVpZ2h0OiA2NXZ3O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgICAgYm90dG9tOiAxMHZoO1xcbiAgICAgIGFuaW1hdGlvbjogcm90YXRpb24tZGF0YS12LTdiYTViZDkwIDRzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuI2FwcCAuY2hlZWtzLWJveCAuY2hlZWsgLmNoZWVrLWhpdGJveFtkYXRhLXYtN2JhNWJkOTBdIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4jYXBwIC5jaGVla3MtYm94IC5jaGVlayBpbWdbZGF0YS12LTdiYTViZDkwXSB7XFxuICAgICAgICB6LWluZGV4OiAtMTA7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMTI2JTtcXG4gICAgICAgIGhlaWdodDogMTI2JTtcXG4gICAgICAgIHRvcDogLTEzJTtcXG4gICAgICAgIGxlZnQ6IC0xMyU7XFxufVxcbkBrZXlmcmFtZXMgcm90YXRpb24tZGF0YS12LTdiYTViZDkwIHtcXG5mcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcbnRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG59XFxufVxcbiNhcHAgLmNoZWVrcy1ib3ggLmNoZWVrLmxlZnRbZGF0YS12LTdiYTViZDkwXSB7XFxuICAgICAgICBsZWZ0OiAtMTcuNXZoO1xcbn1cXG4jYXBwIC5jaGVla3MtYm94IC5jaGVlay5yaWdodFtkYXRhLXYtN2JhNWJkOTBdIHtcXG4gICAgICAgIHJpZ2h0OiAtMTcuNXZoO1xcbn1cXG4jYXBwIC5wcm9tcHQtYm94W2RhdGEtdi03YmE1YmQ5MF0ge1xcbiAgICB6LWluZGV4OiAyMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAxMHZoO1xcbn1cXG4jYXBwIC5wcm9tcHQtYm94IC5pbnB1dC1ib3hbZGF0YS12LTdiYTViZDkwXSB7XFxuICAgICAgei1pbmRleDogMjE7XFxuICAgICAgd2lkdGg6IDkwdnc7XFxuICAgICAgaGVpZ2h0OiA5MHZ3O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBmb250LXNpemU6IDM1cHg7XFxufVxcbiNhcHAgLnByb21wdC1ib3ggLmlucHV0LWJ1dHRvbltkYXRhLXYtN2JhNWJkOTBdIHtcXG4gICAgICB6LWluZGV4OiAyMjtcXG4gICAgICB3aWR0aDogMjR2dztcXG4gICAgICBoZWlnaHQ6IDI0dnc7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc0NzQ7XFxuICAgICAgbWFyZ2luOiAtMTJ2dyBhdXRvIDA7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJhcHBcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlLWJveFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdG9wXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBBZnRlclwiKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLm51bURheXNSb3VuZGVkKSArIFwiIGRheXMsXFxuICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNoZWVrcy1ib3hcIiB9LCBbXG4gICAgICBfYyhcImNhbnZhc1wiLCB7IGF0dHJzOiB7IGlkOiBcIm1vdXRoXCIsIHdpZHRoOiBcIjQwMFwiLCBoZWlnaHQ6IFwiMzAwXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcIm1vdXRoLWhpdGJveFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjaGVlayBsZWZ0XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hlZWstaGl0Ym94XCIsXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS5oYW5kbGVMZWZ0IH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9hc3NldHMvdml0YWxpdHkucG5nXCIgfSB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2hlZWsgcmlnaHRcIiwgb246IHsgY2xpY2s6IF92bS5oYW5kbGVSaWdodCB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjaGVlay1oaXRib3hcIixcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlTGVmdCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvYXNzZXRzL2FjaGlldmVtZW50LnBuZ1wiIH0gfSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnByb21wdE9uXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvbXB0LWJveFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWJveFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiRXhwYW5kaW5nVGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIlRvZGF5J3MgaGFwcHkgbW92ZW1lbnRcIiwgY29sczogXCIxMlwiIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udG9kYXlzSE0sXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS50b2RheXNITSA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidG9kYXlzSE1cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0udG9kYXlzSE1TdWJtaXR0ZWRcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWJ1dHRvblwiLCBvbjogeyBjbGljazogX3ZtLmhhbmRsZURvbmUgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBEb25lXFxuICAgIFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0udG9kYXlzSE1TdWJtaXR0ZWQgJiYgIV92bS50b2RheXNITVNoYXJlZFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtYnV0dG9uXCIsIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlU2hhcmUgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBTaGFyZVxcbiAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgYm90dG9tXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiXFxuICAgICAgSSdsbCBiZVwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCJcXG4gICAgICBva2F5LlxcbiAgICBcIilcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=