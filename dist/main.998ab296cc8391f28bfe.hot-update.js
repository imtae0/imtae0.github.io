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
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/dist/css/swiper.css */ "./node_modules/swiper/dist/css/swiper.css");
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_4__);
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
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ExpandingTextarea: _ExpandingTextarea_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__["swiperSlide"]
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
        content: 'Go out and look up the sky.',
        doneBy: 0,
        id: 0
      }, {
        content: 'Take a 10-minute walk.',
        doneBy: 0,
        id: 1
      }, {
        content: 'Get a cup of latte at a cafe.',
        doneBy: 0,
        id: 2
      }, {
        content: 'Call mom to have a chat.',
        doneBy: 0,
        id: 3
      }, {
        content: 'Take a shower with a new body wash.',
        doneBy: 0,
        id: 4
      }],
      zoomedLeft: false,
      zoomedRight: false
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
      this.zoomedLeft = true;
    },
    handleRight: function handleRight() {
      console.log('right!');
      this.zoomedRight = true;
    }
  },
  computed: {
    numDaysRounded: function numDaysRounded() {
      return this.numDaysLeft.toFixed(0);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var mouth = document.getElementById('mouth-hitbox');
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
    _vm.zoomedLeft
      ? _c(
          "div",
          { staticClass: "swiper-box" },
          [
            _c(
              "swiper",
              { ref: "awesomeSwiperA" },
              [
                _vm._l(_vm.vitalities, function(vitality) {
                  return _c("swiper-slide", { key: vitality.id }, [
                    _c("div", { staticClass: "slide-box" }, [
                      _c("div", { staticClass: "slide" }, [
                        _c("div", { staticClass: "content" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(vitality.content) +
                              "\n            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "footer" }, [
                          _c("div", [
                            _vm._v(
                              "\n                Done by " +
                                _vm._s(vitality.doneBy) +
                                " people\n              "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v("\n                ㅁ\n              ")
                          ])
                        ])
                      ])
                    ])
                  ])
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass: "swiper-pagination",
                  attrs: { slot: "pagination" },
                  slot: "pagination"
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("div", [_vm._v("\n            Pass\n          ")])
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "face-box" }, [
      _c("canvas", { attrs: { id: "mouth", width: "400", height: "300" } }),
      _vm._v(" "),
      _c("div", { attrs: { id: "mouth-hitbox" } }),
      _vm._v(" "),
      _c(
        "div",
        {
          class:
            "cheek left " +
            (_vm.promptOn ? "dim" : "") +
            " " +
            (_vm.zoomedLeft ? "zoomed" : "")
        },
        [
          _c("div", {
            staticClass: "cheek-hitbox",
            on: { click: _vm.handleLeft }
          }),
          _vm._v(" "),
          _c("img", { attrs: { src: "/assets/vitality.png" } })
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          class:
            "cheek right " +
            (_vm.promptOn ? "dim" : "") +
            " " +
            (_vm.zoomedRight ? "zoomed" : "")
        },
        [
          _vm.zoomedRight ? _c("div") : _vm._e(),
          _vm._v(" "),
          _c("div", {
            staticClass: "cheek-hitbox",
            on: { click: _vm.handleRight }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/MWE5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EscUZBREE7QUFFQSxxRUFGQTtBQUdBO0FBSEEsR0FEQTtBQU1BO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLG9CQUZBO0FBR0EscUJBSEE7QUFJQSw4QkFKQTtBQUtBLDJCQUxBO0FBTUEsa0JBTkE7QUFPQSxtQkFDQTtBQUNBLDhDQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBLE9BREEsRUFNQTtBQUNBLHlDQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBLE9BTkEsRUFVQTtBQUNBLGdEQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBLE9BVkEsRUFlQTtBQUNBLDJDQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBLE9BZkEsRUFvQkE7QUFDQSxzREFEQTtBQUVBLGlCQUZBO0FBR0E7QUFIQSxPQXBCQSxDQVBBO0FBaUNBLHVCQWpDQTtBQWtDQTtBQWxDQTtBQW9DQSxHQTNDQTtBQTRDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsS0FQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBLEtBWEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQWZBLEdBNUNBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBSEEsR0E3REE7QUFrRUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUEzRUEsRzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVMsWUFBWSxFQUFFO0FBQzNDLGVBQWUsMkJBQTJCO0FBQzFDLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0JBQXdCO0FBQ3ZDO0FBQ0E7QUFDQSw2Q0FBNkMsbUJBQW1CO0FBQ2hFLCtCQUErQiwyQkFBMkI7QUFDMUQsaUNBQWlDLHVCQUF1QjtBQUN4RCxtQ0FBbUMseUJBQXlCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHdCQUF3QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFCQUFxQjtBQUMvQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMEJBQTBCO0FBQ3pDLG9CQUFvQixTQUFTLDJDQUEyQyxFQUFFO0FBQzFFO0FBQ0EsaUJBQWlCLFNBQVMscUJBQXFCLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1g7QUFDQSxxQkFBcUIsU0FBUyw4QkFBOEIsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0EscUJBQXFCLFNBQVMsaUNBQWlDLEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBLGFBQWEsMkJBQTJCO0FBQ3hDO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQW9EO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DLHdCQUF3QixFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DLHlCQUF5QixFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4QkFBOEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi45OThhYjI5NmNjODM5MWYyOGJmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiOzx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1ib3hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSB0b3BcIj5cbiAgICAgICAgQWZ0ZXI8YnI+XG4gICAgICAgIHt7bnVtRGF5c1JvdW5kZWR9fSBkYXlzLFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGUgYm90dG9tXCI+XG4gICAgICAgIEknbGwgYmU8YnI+XG4gICAgICAgIG9rYXkuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdi1pZj1cInpvb21lZExlZnRcIiBjbGFzcz1cInN3aXBlci1ib3hcIj5cbiAgICAgIDxzd2lwZXIgcmVmPVwiYXdlc29tZVN3aXBlckFcIj5cbiAgICAgICAgPCEtLSBzbGlkZXMgLS0+XG4gICAgICAgIDxzd2lwZXItc2xpZGUgdi1mb3I9XCJ2aXRhbGl0eSBpbiB2aXRhbGl0aWVzXCIgOmtleT1cInZpdGFsaXR5LmlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlLWJveFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAge3t2aXRhbGl0eS5jb250ZW50fX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgRG9uZSBieSB7e3ZpdGFsaXR5LmRvbmVCeX19IHBlb3BsZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICDjhYFcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3N3aXBlci1zbGlkZT5cbiAgICAgICAgPCEtLSBPcHRpb25hbCBjb250cm9scyAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN3aXBlci1wYWdpbmF0aW9uXCIgIHNsb3Q9XCJwYWdpbmF0aW9uXCI+PC9kaXY+XG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cInN3aXBlci1idXR0b24tcHJldlwiIHNsb3Q9XCJidXR0b24tcHJldlwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLWJ1dHRvbi1uZXh0XCIgc2xvdD1cImJ1dHRvbi1uZXh0XCI+PC9kaXY+IC0tPlxuICAgICAgPC9zd2lwZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICAgICAgICBQYXNzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJmYWNlLWJveFwiPlxuICAgICAgPGNhbnZhcyBpZD1cIm1vdXRoXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzMDBcIi8+XG4gICAgICA8ZGl2IGlkPVwibW91dGgtaGl0Ym94XCI+PC9kaXY+XG4gICAgICBcbiAgICAgIFxuICAgICAgPGRpdiA6Y2xhc3M9XCJgY2hlZWsgbGVmdCAke3Byb21wdE9uPydkaW0nOicnfSAke3pvb21lZExlZnQ/J3pvb21lZCc6Jyd9YFwiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBAY2xpY2s9XCJoYW5kbGVMZWZ0XCIgY2xhc3M9XCJjaGVlay1oaXRib3hcIj48L2Rpdj5cbiAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL3ZpdGFsaXR5LnBuZ1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IDpjbGFzcz1cImBjaGVlayByaWdodCAke3Byb21wdE9uPydkaW0nOicnfSAke3pvb21lZFJpZ2h0Pyd6b29tZWQnOicnfWBcIj5cbiAgICAgICAgPGRpdiB2LWlmPVwiem9vbWVkUmlnaHRcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBAY2xpY2s9XCJoYW5kbGVSaWdodFwiIGNsYXNzPVwiY2hlZWstaGl0Ym94XCI+PC9kaXY+XG4gICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9hY2hpZXZlbWVudC5wbmdcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgdi1pZj1cInByb21wdE9uXCIgY2xhc3M9XCJwcm9tcHQtYm94XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYm94XCI+XG4gICAgICAgIDxFeHBhbmRpbmdUZXh0YXJlYSBwbGFjZWhvbGRlcj1cIlRvZGF5J3MgaGFwcHkgbW92ZW1lbnRcIiB2LW1vZGVsPVwidG9kYXlzSE1cIiBjb2xzPVwiMTJcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1pZj1cIiF0b2RheXNITVN1Ym1pdHRlZFwiIEBjbGljaz1cImhhbmRsZURvbmVcIiBjbGFzcz1cImlucHV0LWJ1dHRvblwiPlxuICAgICAgICBEb25lXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1lbHNlLWlmPVwidG9kYXlzSE1TdWJtaXR0ZWQgJiYgIXRvZGF5c0hNU2hhcmVkXCIgQGNsaWNrPVwiaGFuZGxlU2hhcmVcIiBjbGFzcz1cImlucHV0LWJ1dHRvblwiPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7VHdlZW5NYXgsIFBvd2VyMiwgVGltZWxpbmVMaXRlfSBmcm9tIFwiZ3NhcC9Ud2Vlbk1heFwiO1xuaW1wb3J0IEV4cGFuZGluZ1RleHRhcmVhIGZyb20gJy4vRXhwYW5kaW5nVGV4dGFyZWEudnVlJztcbmltcG9ydCBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuaW1wb3J0IHsgc3dpcGVyLCBzd2lwZXJTbGlkZSB9IGZyb20gJ3Z1ZS1hd2Vzb21lLXN3aXBlcic7XG5pbXBvcnQgJ3N3aXBlci9kaXN0L2Nzcy9zd2lwZXIuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgRXhwYW5kaW5nVGV4dGFyZWEsXG4gICAgc3dpcGVyLFxuICAgIHN3aXBlclNsaWRlXG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBudW1EYXlzTGVmdDogMzAsXG4gICAgICBjdXJyZW50RGF5OiAyMCxcbiAgICAgIHByb21wdE9uOiBmYWxzZSxcbiAgICAgIHRvZGF5c0hNU3VibWl0dGVkOiBmYWxzZSxcbiAgICAgIHRvZGF5c0hNU2hhcmVkOiBmYWxzZSxcbiAgICAgIHRvZGF5c0hNOiAnJyxcbiAgICAgIHZpdGFsaXRpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6ICdHbyBvdXQgYW5kIGxvb2sgdXAgdGhlIHNreS4nLFxuICAgICAgICAgIGRvbmVCeTogMCxcbiAgICAgICAgICBpZDogMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogJ1Rha2UgYSAxMC1taW51dGUgd2Fsay4nLFxuICAgICAgICAgIGRvbmVCeTogMCxcbiAgICAgICAgICBpZDogMVxuICAgICAgICB9LHtcbiAgICAgICAgICBjb250ZW50OiAnR2V0IGEgY3VwIG9mIGxhdHRlIGF0IGEgY2FmZS4nLFxuICAgICAgICAgIGRvbmVCeTogMCxcbiAgICAgICAgICBpZDogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogJ0NhbGwgbW9tIHRvIGhhdmUgYSBjaGF0LicsXG4gICAgICAgICAgZG9uZUJ5OiAwLFxuICAgICAgICAgIGlkOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OiAnVGFrZSBhIHNob3dlciB3aXRoIGEgbmV3IGJvZHkgd2FzaC4nLFxuICAgICAgICAgIGRvbmVCeTogMCxcbiAgICAgICAgICBpZDogNFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHpvb21lZExlZnQ6IGZhbHNlLFxuICAgICAgem9vbWVkUmlnaHQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlRG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRvZGF5c0hNU3VibWl0dGVkID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhhbmRsZVNoYXJlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudG9kYXlzSE1TaGFyZWQgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9tcHRPbiA9IGZhbHNlO1xuICAgIH0sXG4gICAgaGFuZGxlTGVmdDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnbGVmdCEnKTtcbiAgICAgIHRoaXMuem9vbWVkTGVmdCA9IHRydWU7XG4gICAgfSxcbiAgICBoYW5kbGVSaWdodDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygncmlnaHQhJyk7XG4gICAgICB0aGlzLnpvb21lZFJpZ2h0ID0gdHJ1ZTtcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIG51bURheXNSb3VuZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm51bURheXNMZWZ0LnRvRml4ZWQoMCk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtb3V0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3V0aC1oaXRib3gnKTtcbiAgICB2YXIgbWMgPSBuZXcgSGFtbWVyLk1hbmFnZXIobW91dGgpO1xuICAgIG1jLmFkZCggbmV3IEhhbW1lci5QYW4oeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMLCB0aHJlc2hvbGQ6IDUwIH0pICk7XG4gICAgbWMub24oXCJwYW5kb3duXCIsICgpPT4ge1xuICAgICAgaWYgKHRoaXMucHJvbXB0T24pIHJldHVybjtcbiAgICAgIHRoaXMucHJvbXB0T24gPSB0cnVlO1xuICAgIH0pO1xuICAgIFR3ZWVuTGl0ZS50byh0aGlzLiRkYXRhLCAxLCB7bnVtRGF5c0xlZnQ6IHRoaXMuY3VycmVudERheX0pO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblxuI2FwcCB7XG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC50aXRsZS1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0b3A6IDE1dmg7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICYudG9wIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43ZW07XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cblxuICAuc3dpcGVyLWJveCB7XG4gICAgei1pbmRleDogMjA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIHRvcDogMjB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuc2xpZGUtYm94IHtcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5zbGlkZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mYWNlLWJveCB7XG4gICAgei1pbmRleDogMTA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XG5cblxuICAgICNtb3V0aC1oaXRib3gge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDM1dnc7XG4gICAgICBoZWlnaHQ6IDY1dnc7XG4gICAgICB0b3A6IC0zMi41dnc7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3MHZoKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB9XG5cbiAgICBjYW52YXMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTE7XG4gICAgICB3aWR0aDogODZ2dztcbiAgICAgIGhlaWdodDogNjV2dztcbiAgICAgIHRvcDogLTMyLjV2dztcbiAgICAgIGJvcmRlcjoxcHggc29saWQgIzAwMDAwMDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNzB2aCk7XG4gICAgfVxuXG4gICAgLmNoZWVrIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiA2NXZ3O1xuICAgICAgaGVpZ2h0OiA2NXZ3O1xuICAgICAgdG9wOiAtMzIuNXZ3O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICYuZGltIHtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY2hlZWstaGl0Ym94IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgei1pbmRleDogLTEwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMjYlO1xuICAgICAgICBoZWlnaHQ6IDEyNiU7XG4gICAgICAgIHRvcDogLTEzJTtcbiAgICAgICAgbGVmdDogLTEzJTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gNHMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICBAa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0byB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG5cbiAgICAgICYubGVmdCB7XG4gICAgICAgIC8vIGxlZnQ6IC0zMi41dnc7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MHZ3LCA3MHZoKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICAmLnJpZ2h0IHtcbiAgICAgICAgLy8gcmlnaHQ6IC0zMi41dnc7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwdncsIDcwdmgpO1xuICAgICAgfVxuICAgICAgJi56b29tZWQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MHZoKSBzY2FsZSgyLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLnByb21wdC1ib3gge1xuICAgIHotaW5kZXg6IDIwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDEwdmg7XG4gICAgLmlucHV0LWJveCB7XG4gICAgICB6LWluZGV4OiAyMTtcbiAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgaGVpZ2h0OiA5MHZ3O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBtYXJnaW46IDAgYXV0bzsgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIFxuICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgXG4gICAgfVxuICAgIC5pbnB1dC1idXR0b24ge1xuICAgICAgei1pbmRleDogMjI7XG4gICAgICB3aWR0aDogMjR2dztcbiAgICAgIGhlaWdodDogMjR2dztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDExNiwgMTE2KTtcbiAgICAgIG1hcmdpbjogLTEydncgYXV0byAwOyBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbiAgXG59XG5cblxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwiYXBwXCIgfSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZS1ib3hcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHRvcFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgQWZ0ZXJcIiksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5udW1EYXlzUm91bmRlZCkgKyBcIiBkYXlzLFxcbiAgICBcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgwKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnpvb21lZExlZnRcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInN3aXBlci1ib3hcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInN3aXBlclwiLFxuICAgICAgICAgICAgICB7IHJlZjogXCJhd2Vzb21lU3dpcGVyQVwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnZpdGFsaXRpZXMsIGZ1bmN0aW9uKHZpdGFsaXR5KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJzd2lwZXItc2xpZGVcIiwgeyBrZXk6IHZpdGFsaXR5LmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzbGlkZS1ib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzbGlkZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Modml0YWxpdHkuY29udGVudCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvb3RlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIERvbmUgYnkgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Modml0YWxpdHkuZG9uZUJ5KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHBlb3BsZVxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOOFgVxcbiAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwicGFnaW5hdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICBzbG90OiBcInBhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFBhc3NcXG4gICAgICAgICAgXCIpXSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFjZS1ib3hcIiB9LCBbXG4gICAgICBfYyhcImNhbnZhc1wiLCB7IGF0dHJzOiB7IGlkOiBcIm1vdXRoXCIsIHdpZHRoOiBcIjQwMFwiLCBoZWlnaHQ6IFwiMzAwXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcIm1vdXRoLWhpdGJveFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgIFwiY2hlZWsgbGVmdCBcIiArXG4gICAgICAgICAgICAoX3ZtLnByb21wdE9uID8gXCJkaW1cIiA6IFwiXCIpICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIChfdm0uem9vbWVkTGVmdCA/IFwiem9vbWVkXCIgOiBcIlwiKVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hlZWstaGl0Ym94XCIsXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmhhbmRsZUxlZnQgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2Fzc2V0cy92aXRhbGl0eS5wbmdcIiB9IH0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgIFwiY2hlZWsgcmlnaHQgXCIgK1xuICAgICAgICAgICAgKF92bS5wcm9tcHRPbiA/IFwiZGltXCIgOiBcIlwiKSArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAoX3ZtLnpvb21lZFJpZ2h0ID8gXCJ6b29tZWRcIiA6IFwiXCIpXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uem9vbWVkUmlnaHQgPyBfYyhcImRpdlwiKSA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hlZWstaGl0Ym94XCIsXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmhhbmRsZVJpZ2h0IH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9hc3NldHMvYWNoaWV2ZW1lbnQucG5nXCIgfSB9KVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ucHJvbXB0T25cbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9tcHQtYm94XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtYm94XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJFeHBhbmRpbmdUZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwiVG9kYXkncyBoYXBweSBtb3ZlbWVudFwiLCBjb2xzOiBcIjEyXCIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50b2RheXNITSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZGF5c0hNID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0b2RheXNITVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS50b2RheXNITVN1Ym1pdHRlZFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtYnV0dG9uXCIsIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlRG9uZSB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIERvbmVcXG4gICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS50b2RheXNITVN1Ym1pdHRlZCAmJiAhX3ZtLnRvZGF5c0hNU2hhcmVkXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1idXR0b25cIiwgb246IHsgY2xpY2s6IF92bS5oYW5kbGVTaGFyZSB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFNoYXJlXFxuICAgIFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBib3R0b21cIiB9LCBbXG4gICAgICBfdm0uX3YoXCJcXG4gICAgICBJJ2xsIGJlXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIlxcbiAgICAgIG9rYXkuXFxuICAgIFwiKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==