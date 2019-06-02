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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ExpandingTextarea: _ExpandingTextarea_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      numDaysLeft: 30,
      currentDay: 20,
      promptOn: false,
      todaysHMSubmitted: false
    };
  },
  methods: {
    handleInputDone: function handleInputDone() {}
  },
  computed: {
    numDaysRounded: function numDaysRounded() {
      return this.numDaysLeft.toFixed(0);
    }
  },
  mounted: function mounted() {
    var mouth = document.getElementById('mouth'); // const mouthHammer = new Hammer(mouth);//, myOptions);
    // mouthHammer.on('pandown', function(event) {
    //   console.log(event);
    // });

    var mc = new hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.Manager(mouth);
    mc.add(new hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.Pan({
      direction: hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.DIRECTION_ALL,
      threshold: 50
    }));
    mc.on("pandown", function (event) {
      console.log(event);
    }); // var mc = new Hammer.Manager(mouth);
    // console.log(new Hammer.Pandown());
    // // create a recognizer
    // var Rotate = new Hammer.Pandown();
    // // add the recognizer
    // mc.add(Rotate);
    // // subscribe to events
    // mc.on('rotate', function(e) {
    //     // do something cool
    //     var rotation = Math.round(e.rotation);    
    //     stage.style.transform = 'rotate('+rotation+'deg)';
    // });

    TweenLite.to(this.$data, 1, {
      numDaysLeft: this.currentDay
    });
  }
});

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
    _vm._m(1),
    _vm._v(" "),
    _vm.promptOn
      ? _c("div", { staticClass: "prompt-box" }, [
          _c(
            "div",
            { staticClass: "input-box" },
            [
              _c("ExpandingTextarea", {
                attrs: { placeholder: "Today's happy movement", cols: "12" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "input-button", on: { click: _vm.handleInputDone } },
            [_vm._v("\n      Done\n    ")]
          )
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cheeks-box" }, [
      _c("canvas", { attrs: { id: "mouth", width: "400", height: "300" } }),
      _vm._v(" "),
      _c("div", { staticClass: "cheek left" }, [
        _c("img", { attrs: { src: "/assets/vitality.png" } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cheek right" }, [
        _c("img", { attrs: { src: "/assets/achievement.png" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/MWE5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBLEdBREE7QUFJQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxvQkFGQTtBQUdBLHFCQUhBO0FBSUE7QUFKQTtBQU1BLEdBWEE7QUFZQTtBQUNBLGlEQUVBO0FBSEEsR0FaQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUhBLEdBakJBO0FBc0JBO0FBQ0EsaURBREEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEtBRkEsRUFSQSxDQVdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQWhEQSxHOzs7Ozs7Ozs7Ozs7QUN2Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUyxZQUFZLEVBQUU7QUFDM0MsZUFBZSwyQkFBMkI7QUFDMUMsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0EsYUFBYSwyQkFBMkI7QUFDeEM7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUMsNkJBQTZCLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4QkFBOEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xELG9CQUFvQixTQUFTLDJDQUEyQyxFQUFFO0FBQzFFO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QyxtQkFBbUIsU0FBUyw4QkFBOEIsRUFBRTtBQUM1RDtBQUNBO0FBQ0EsaUJBQWlCLDZCQUE2QjtBQUM5QyxtQkFBbUIsU0FBUyxpQ0FBaUMsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uNWFkY2NiMGEzZGRiNThmZmY5ZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1ib3hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSB0b3BcIj5cbiAgICAgICAgQWZ0ZXI8YnI+XG4gICAgICAgIHt7bnVtRGF5c1JvdW5kZWR9fSBkYXlzLFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGUgYm90dG9tXCI+XG4gICAgICAgIEknbGwgYmU8YnI+XG4gICAgICAgIG9rYXkuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hlZWtzLWJveFwiPlxuICAgICAgPGNhbnZhcyBpZD1cIm1vdXRoXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzMDBcIi8+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlZWsgbGVmdFwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvdml0YWxpdHkucG5nXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVlayByaWdodFwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvYWNoaWV2ZW1lbnQucG5nXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IHYtaWY9XCJwcm9tcHRPblwiIGNsYXNzPVwicHJvbXB0LWJveFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWJveFwiPlxuICAgICAgICA8RXhwYW5kaW5nVGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJUb2RheSdzIGhhcHB5IG1vdmVtZW50XCIgY29scz1cIjEyXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IEBjbGljaz1cImhhbmRsZUlucHV0RG9uZVwiIGNsYXNzPVwiaW5wdXQtYnV0dG9uXCI+XG4gICAgICAgIERvbmVcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge1R3ZWVuTWF4LCBQb3dlcjIsIFRpbWVsaW5lTGl0ZX0gZnJvbSBcImdzYXAvVHdlZW5NYXhcIjtcbmltcG9ydCBFeHBhbmRpbmdUZXh0YXJlYSBmcm9tICcuL0V4cGFuZGluZ1RleHRhcmVhLnZ1ZSc7XG5pbXBvcnQgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgRXhwYW5kaW5nVGV4dGFyZWFcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG51bURheXNMZWZ0OiAzMCxcbiAgICAgIGN1cnJlbnREYXk6IDIwLFxuICAgICAgcHJvbXB0T246IGZhbHNlLFxuICAgICAgdG9kYXlzSE1TdWJtaXR0ZWQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlSW5wdXREb25lOiBmdW5jdGlvbigpIHtcblxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBudW1EYXlzUm91bmRlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5udW1EYXlzTGVmdC50b0ZpeGVkKDApO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbW91dGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW91dGgnKTtcbiAgICAvLyBjb25zdCBtb3V0aEhhbW1lciA9IG5ldyBIYW1tZXIobW91dGgpOy8vLCBteU9wdGlvbnMpO1xuICAgIC8vIG1vdXRoSGFtbWVyLm9uKCdwYW5kb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAvLyB9KTtcbiAgICB2YXIgbWMgPSBuZXcgSGFtbWVyLk1hbmFnZXIobW91dGgpO1xuICAgIG1jLmFkZCggbmV3IEhhbW1lci5QYW4oeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMLCB0aHJlc2hvbGQ6IDUwIH0pICk7XG4gICAgbWMub24oXCJwYW5kb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfSk7XG4gICAgLy8gdmFyIG1jID0gbmV3IEhhbW1lci5NYW5hZ2VyKG1vdXRoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhuZXcgSGFtbWVyLlBhbmRvd24oKSk7XG4gICAgLy8gLy8gY3JlYXRlIGEgcmVjb2duaXplclxuICAgIC8vIHZhciBSb3RhdGUgPSBuZXcgSGFtbWVyLlBhbmRvd24oKTtcbiAgICBcbiAgICAvLyAvLyBhZGQgdGhlIHJlY29nbml6ZXJcbiAgICAvLyBtYy5hZGQoUm90YXRlKTtcbiAgICBcbiAgICAvLyAvLyBzdWJzY3JpYmUgdG8gZXZlbnRzXG4gICAgLy8gbWMub24oJ3JvdGF0ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAvLyAgICAgLy8gZG8gc29tZXRoaW5nIGNvb2xcbiAgICAvLyAgICAgdmFyIHJvdGF0aW9uID0gTWF0aC5yb3VuZChlLnJvdGF0aW9uKTsgICAgXG4gICAgLy8gICAgIHN0YWdlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoJytyb3RhdGlvbisnZGVnKSc7XG4gICAgLy8gfSk7XG4gICAgVHdlZW5MaXRlLnRvKHRoaXMuJGRhdGEsIDEsIHtudW1EYXlzTGVmdDogdGhpcy5jdXJyZW50RGF5fSk7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuXG4jYXBwIHtcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLnRpdGxlLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRvcDogMTV2aDtcbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgJi50b3Age1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjdlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIC5jaGVla3MtYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBjYW52YXMge1xuICAgICAgei1pbmRleDogMTE7XG4gICAgICB3aWR0aDogODZ2dztcbiAgICAgIGhlaWdodDogNjV2dztcbiAgICAgIGJvdHRvbTogMTB2aDtcbiAgICAgIGJvcmRlcjoxcHggc29saWQgIzAwMDAwMDtcbiAgICB9XG5cbiAgICAuY2hlZWsge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDY1dnc7XG4gICAgICBoZWlnaHQ6IDY1dnc7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XG4gICAgICBib3R0b206IDEwdmg7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEyNiU7XG4gICAgICAgIGhlaWdodDogMTI2JTtcbiAgICAgICAgdG9wOiAtMTMlO1xuICAgICAgICBsZWZ0OiAtMTMlO1xuICAgICAgfVxuXG4gICAgICBhbmltYXRpb246IHJvdGF0aW9uIDRzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgIEBrZXlmcmFtZXMgcm90YXRpb24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxuICAgIH1cblxuICAgICAgJi5sZWZ0IHtcbiAgICAgICAgbGVmdDogLTE3LjV2aDtcbiAgICAgIH1cbiAgICAgICYucmlnaHQge1xuICAgICAgICByaWdodDogLTE3LjV2aDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC5wcm9tcHQtYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAxMHZoO1xuICAgIC5pbnB1dC1ib3gge1xuICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICBoZWlnaHQ6IDkwdnc7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgXG4gICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICBcbiAgICB9XG4gICAgLmlucHV0LWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMjR2dztcbiAgICAgIGhlaWdodDogMjR2dztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDExNiwgMTE2KTtcbiAgICAgIG1hcmdpbjogLTEydncgYXV0byAwOyBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbiAgXG59XG5cblxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwiYXBwXCIgfSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZS1ib3hcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHRvcFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgQWZ0ZXJcIiksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5udW1EYXlzUm91bmRlZCkgKyBcIiBkYXlzLFxcbiAgICBcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgwKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDEpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnByb21wdE9uXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvbXB0LWJveFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWJveFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiRXhwYW5kaW5nVGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIlRvZGF5J3MgaGFwcHkgbW92ZW1lbnRcIiwgY29sczogXCIxMlwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtYnV0dG9uXCIsIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlSW5wdXREb25lIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBEb25lXFxuICAgIFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIGJvdHRvbVwiIH0sIFtcbiAgICAgIF92bS5fdihcIlxcbiAgICAgIEknbGwgYmVcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX3ZtLl92KFwiXFxuICAgICAgb2theS5cXG4gICAgXCIpXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjaGVla3MtYm94XCIgfSwgW1xuICAgICAgX2MoXCJjYW52YXNcIiwgeyBhdHRyczogeyBpZDogXCJtb3V0aFwiLCB3aWR0aDogXCI0MDBcIiwgaGVpZ2h0OiBcIjMwMFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjaGVlayBsZWZ0XCIgfSwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvYXNzZXRzL3ZpdGFsaXR5LnBuZ1wiIH0gfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2hlZWsgcmlnaHRcIiB9LCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9hc3NldHMvYWNoaWV2ZW1lbnQucG5nXCIgfSB9KVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=