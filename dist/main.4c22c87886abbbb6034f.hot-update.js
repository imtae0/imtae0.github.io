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
                      ]),
                      _vm._v(" "),
                      _c("div", [_vm._v("\n            Pass\n          ")])
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
            )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/MWE5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxxRkFEQTtBQUVBLHFFQUZBO0FBR0E7QUFIQSxHQURBO0FBTUE7QUFDQTtBQUNBLHFCQURBO0FBRUEsb0JBRkE7QUFHQSxxQkFIQTtBQUlBLDhCQUpBO0FBS0EsMkJBTEE7QUFNQSxrQkFOQTtBQU9BLG1CQUNBO0FBQ0EsOENBREE7QUFFQSxpQkFGQTtBQUdBO0FBSEEsT0FEQSxFQU1BO0FBQ0EseUNBREE7QUFFQSxpQkFGQTtBQUdBO0FBSEEsT0FOQSxFQVVBO0FBQ0EsZ0RBREE7QUFFQSxpQkFGQTtBQUdBO0FBSEEsT0FWQSxFQWVBO0FBQ0EsMkNBREE7QUFFQSxpQkFGQTtBQUdBO0FBSEEsT0FmQSxFQW9CQTtBQUNBLHNEQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBLE9BcEJBLENBUEE7QUFpQ0EsdUJBakNBO0FBa0NBO0FBbENBO0FBb0NBLEdBM0NBO0FBNENBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQSxLQVBBO0FBUUE7QUFDQTtBQUNBO0FBQ0EsS0FYQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBZkEsR0E1Q0E7QUE2REE7QUFDQTtBQUNBO0FBQ0E7QUFIQSxHQTdEQTtBQWtFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQTNFQSxHOzs7Ozs7Ozs7Ozs7QUN2RkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUyxZQUFZLEVBQUU7QUFDM0MsZUFBZSwyQkFBMkI7QUFDMUMsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0QkFBNEI7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3QkFBd0I7QUFDdkM7QUFDQTtBQUNBLDZDQUE2QyxtQkFBbUI7QUFDaEUsK0JBQStCLDJCQUEyQjtBQUMxRCxpQ0FBaUMsdUJBQXVCO0FBQ3hELG1DQUFtQyx5QkFBeUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsd0JBQXdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFCQUFxQjtBQUMvQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQkFBMEI7QUFDekMsb0JBQW9CLFNBQVMsMkNBQTJDLEVBQUU7QUFDMUU7QUFDQSxpQkFBaUIsU0FBUyxxQkFBcUIsRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBLHFCQUFxQixTQUFTLDhCQUE4QixFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1g7QUFDQSxxQkFBcUIsU0FBUyxpQ0FBaUMsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0EsYUFBYSwyQkFBMkI7QUFDeEM7QUFDQTtBQUNBLHdCQUF3QixvREFBb0Q7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQ0FBbUMsd0JBQXdCLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQ0FBbUMseUJBQXlCLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLjRjMjJjODc4ODZhYmJiYjYwMzRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7PHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlLWJveFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlIHRvcFwiPlxuICAgICAgICBBZnRlcjxicj5cbiAgICAgICAge3tudW1EYXlzUm91bmRlZH19IGRheXMsXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSBib3R0b21cIj5cbiAgICAgICAgSSdsbCBiZTxicj5cbiAgICAgICAgb2theS5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiB2LWlmPVwiem9vbWVkTGVmdFwiIGNsYXNzPVwic3dpcGVyLWJveFwiPlxuICAgICAgPHN3aXBlciByZWY9XCJhd2Vzb21lU3dpcGVyQVwiPlxuICAgICAgICA8IS0tIHNsaWRlcyAtLT5cbiAgICAgICAgPHN3aXBlci1zbGlkZSB2LWZvcj1cInZpdGFsaXR5IGluIHZpdGFsaXRpZXNcIiA6a2V5PVwidml0YWxpdHkuaWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGUtYm94XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7e3ZpdGFsaXR5LmNvbnRlbnR9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBEb25lIGJ5IHt7dml0YWxpdHkuZG9uZUJ5fX0gcGVvcGxlXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIOOFgVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgUGFzc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc3dpcGVyLXNsaWRlPlxuICAgICAgICA8IS0tIE9wdGlvbmFsIGNvbnRyb2xzIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLXBhZ2luYXRpb25cIiAgc2xvdD1cInBhZ2luYXRpb25cIj48L2Rpdj5cbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwic3dpcGVyLWJ1dHRvbi1wcmV2XCIgc2xvdD1cImJ1dHRvbi1wcmV2XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzd2lwZXItYnV0dG9uLW5leHRcIiBzbG90PVwiYnV0dG9uLW5leHRcIj48L2Rpdj4gLS0+XG4gICAgICA8L3N3aXBlcj5cbiAgICA8L2Rpdj5cblxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJmYWNlLWJveFwiPlxuICAgICAgPGNhbnZhcyBpZD1cIm1vdXRoXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzMDBcIi8+XG4gICAgICA8ZGl2IGlkPVwibW91dGgtaGl0Ym94XCI+PC9kaXY+XG4gICAgICBcbiAgICAgIFxuICAgICAgPGRpdiA6Y2xhc3M9XCJgY2hlZWsgbGVmdCAke3Byb21wdE9uPydkaW0nOicnfSAke3pvb21lZExlZnQ/J3pvb21lZCc6Jyd9YFwiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBAY2xpY2s9XCJoYW5kbGVMZWZ0XCIgY2xhc3M9XCJjaGVlay1oaXRib3hcIj48L2Rpdj5cbiAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL3ZpdGFsaXR5LnBuZ1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IDpjbGFzcz1cImBjaGVlayByaWdodCAke3Byb21wdE9uPydkaW0nOicnfSAke3pvb21lZFJpZ2h0Pyd6b29tZWQnOicnfWBcIj5cbiAgICAgICAgPGRpdiB2LWlmPVwiem9vbWVkUmlnaHRcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBAY2xpY2s9XCJoYW5kbGVSaWdodFwiIGNsYXNzPVwiY2hlZWstaGl0Ym94XCI+PC9kaXY+XG4gICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9hY2hpZXZlbWVudC5wbmdcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgdi1pZj1cInByb21wdE9uXCIgY2xhc3M9XCJwcm9tcHQtYm94XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYm94XCI+XG4gICAgICAgIDxFeHBhbmRpbmdUZXh0YXJlYSBwbGFjZWhvbGRlcj1cIlRvZGF5J3MgaGFwcHkgbW92ZW1lbnRcIiB2LW1vZGVsPVwidG9kYXlzSE1cIiBjb2xzPVwiMTJcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1pZj1cIiF0b2RheXNITVN1Ym1pdHRlZFwiIEBjbGljaz1cImhhbmRsZURvbmVcIiBjbGFzcz1cImlucHV0LWJ1dHRvblwiPlxuICAgICAgICBEb25lXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1lbHNlLWlmPVwidG9kYXlzSE1TdWJtaXR0ZWQgJiYgIXRvZGF5c0hNU2hhcmVkXCIgQGNsaWNrPVwiaGFuZGxlU2hhcmVcIiBjbGFzcz1cImlucHV0LWJ1dHRvblwiPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7VHdlZW5NYXgsIFBvd2VyMiwgVGltZWxpbmVMaXRlfSBmcm9tIFwiZ3NhcC9Ud2Vlbk1heFwiO1xuaW1wb3J0IEV4cGFuZGluZ1RleHRhcmVhIGZyb20gJy4vRXhwYW5kaW5nVGV4dGFyZWEudnVlJztcbmltcG9ydCBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuaW1wb3J0IHsgc3dpcGVyLCBzd2lwZXJTbGlkZSB9IGZyb20gJ3Z1ZS1hd2Vzb21lLXN3aXBlcic7XG5pbXBvcnQgJ3N3aXBlci9kaXN0L2Nzcy9zd2lwZXIuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgRXhwYW5kaW5nVGV4dGFyZWEsXG4gICAgc3dpcGVyLFxuICAgIHN3aXBlclNsaWRlXG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBudW1EYXlzTGVmdDogMzAsXG4gICAgICBjdXJyZW50RGF5OiAyMCxcbiAgICAgIHByb21wdE9uOiBmYWxzZSxcbiAgICAgIHRvZGF5c0hNU3VibWl0dGVkOiBmYWxzZSxcbiAgICAgIHRvZGF5c0hNU2hhcmVkOiBmYWxzZSxcbiAgICAgIHRvZGF5c0hNOiAnJyxcbiAgICAgIHZpdGFsaXRpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6ICdHbyBvdXQgYW5kIGxvb2sgdXAgdGhlIHNreS4nLFxuICAgICAgICAgIGRvbmVCeTogMCxcbiAgICAgICAgICBpZDogMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogJ1Rha2UgYSAxMC1taW51dGUgd2Fsay4nLFxuICAgICAgICAgIGRvbmVCeTogMCxcbiAgICAgICAgICBpZDogMVxuICAgICAgICB9LHtcbiAgICAgICAgICBjb250ZW50OiAnR2V0IGEgY3VwIG9mIGxhdHRlIGF0IGEgY2FmZS4nLFxuICAgICAgICAgIGRvbmVCeTogMCxcbiAgICAgICAgICBpZDogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogJ0NhbGwgbW9tIHRvIGhhdmUgYSBjaGF0LicsXG4gICAgICAgICAgZG9uZUJ5OiAwLFxuICAgICAgICAgIGlkOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OiAnVGFrZSBhIHNob3dlciB3aXRoIGEgbmV3IGJvZHkgd2FzaC4nLFxuICAgICAgICAgIGRvbmVCeTogMCxcbiAgICAgICAgICBpZDogNFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHpvb21lZExlZnQ6IGZhbHNlLFxuICAgICAgem9vbWVkUmlnaHQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlRG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRvZGF5c0hNU3VibWl0dGVkID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhhbmRsZVNoYXJlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudG9kYXlzSE1TaGFyZWQgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9tcHRPbiA9IGZhbHNlO1xuICAgIH0sXG4gICAgaGFuZGxlTGVmdDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnbGVmdCEnKTtcbiAgICAgIHRoaXMuem9vbWVkTGVmdCA9IHRydWU7XG4gICAgfSxcbiAgICBoYW5kbGVSaWdodDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygncmlnaHQhJyk7XG4gICAgICB0aGlzLnpvb21lZFJpZ2h0ID0gdHJ1ZTtcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIG51bURheXNSb3VuZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm51bURheXNMZWZ0LnRvRml4ZWQoMCk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtb3V0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3V0aC1oaXRib3gnKTtcbiAgICB2YXIgbWMgPSBuZXcgSGFtbWVyLk1hbmFnZXIobW91dGgpO1xuICAgIG1jLmFkZCggbmV3IEhhbW1lci5QYW4oeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMLCB0aHJlc2hvbGQ6IDUwIH0pICk7XG4gICAgbWMub24oXCJwYW5kb3duXCIsICgpPT4ge1xuICAgICAgaWYgKHRoaXMucHJvbXB0T24pIHJldHVybjtcbiAgICAgIHRoaXMucHJvbXB0T24gPSB0cnVlO1xuICAgIH0pO1xuICAgIFR3ZWVuTGl0ZS50byh0aGlzLiRkYXRhLCAxLCB7bnVtRGF5c0xlZnQ6IHRoaXMuY3VycmVudERheX0pO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblxuI2FwcCB7XG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC50aXRsZS1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0b3A6IDE1dmg7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICYudG9wIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43ZW07XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cblxuICAuc3dpcGVyLWJveCB7XG4gICAgei1pbmRleDogMjA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIHRvcDogMjB2aDtcblxuICAgIC5zbGlkZS1ib3gge1xuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLnNsaWRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgICAgICBoZWlnaHQ6IDUwdmg7XG4gICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZhY2UtYm94IHtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcblxuXG4gICAgI21vdXRoLWhpdGJveCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMzV2dztcbiAgICAgIGhlaWdodDogNjV2dztcbiAgICAgIHRvcDogLTMyLjV2dztcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcwdmgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIH1cblxuICAgIGNhbnZhcyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxMTtcbiAgICAgIHdpZHRoOiA4NnZ3O1xuICAgICAgaGVpZ2h0OiA2NXZ3O1xuICAgICAgdG9wOiAtMzIuNXZ3O1xuICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3MHZoKTtcbiAgICB9XG5cbiAgICAuY2hlZWsge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDY1dnc7XG4gICAgICBoZWlnaHQ6IDY1dnc7XG4gICAgICB0b3A6IC0zMi41dnc7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgJi5kaW0ge1xuICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jaGVlay1oaXRib3gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICB6LWluZGV4OiAtMTA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEyNiU7XG4gICAgICAgIGhlaWdodDogMTI2JTtcbiAgICAgICAgdG9wOiAtMTMlO1xuICAgICAgICBsZWZ0OiAtMTMlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiA0cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIEBrZXlmcmFtZXMgcm90YXRpb24ge1xuICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcblxuICAgICAgJi5sZWZ0IHtcbiAgICAgICAgLy8gbGVmdDogLTMyLjV2dztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwdncsIDcwdmgpO1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgICYucmlnaHQge1xuICAgICAgICAvLyByaWdodDogLTMyLjV2dztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTB2dywgNzB2aCk7XG4gICAgICB9XG4gICAgICAmLnpvb21lZCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwdmgpIHNjYWxlKDIuMyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAucHJvbXB0LWJveCB7XG4gICAgei1pbmRleDogMjA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMTB2aDtcbiAgICAuaW5wdXQtYm94IHtcbiAgICAgIHotaW5kZXg6IDIxO1xuICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICBoZWlnaHQ6IDkwdnc7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgXG4gICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICBcbiAgICB9XG4gICAgLmlucHV0LWJ1dHRvbiB7XG4gICAgICB6LWluZGV4OiAyMjtcbiAgICAgIHdpZHRoOiAyNHZ3O1xuICAgICAgaGVpZ2h0OiAyNHZ3O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTE2LCAxMTYpO1xuICAgICAgbWFyZ2luOiAtMTJ2dyBhdXRvIDA7IFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuICBcbn1cblxuXG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJhcHBcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlLWJveFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdG9wXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBBZnRlclwiKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLm51bURheXNSb3VuZGVkKSArIFwiIGRheXMsXFxuICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uem9vbWVkTGVmdFxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3dpcGVyLWJveFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3dpcGVyXCIsXG4gICAgICAgICAgICAgIHsgcmVmOiBcImF3ZXNvbWVTd2lwZXJBXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbChfdm0udml0YWxpdGllcywgZnVuY3Rpb24odml0YWxpdHkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInN3aXBlci1zbGlkZVwiLCB7IGtleTogdml0YWxpdHkuaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNsaWRlLWJveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNsaWRlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh2aXRhbGl0eS5jb250ZW50KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9vdGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgRG9uZSBieSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh2aXRhbGl0eS5kb25lQnkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgcGVvcGxlXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg44WBXFxuICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgUGFzc1xcbiAgICAgICAgICBcIildKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcInBhZ2luYXRpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgc2xvdDogXCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZhY2UtYm94XCIgfSwgW1xuICAgICAgX2MoXCJjYW52YXNcIiwgeyBhdHRyczogeyBpZDogXCJtb3V0aFwiLCB3aWR0aDogXCI0MDBcIiwgaGVpZ2h0OiBcIjMwMFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJtb3V0aC1oaXRib3hcIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICBcImNoZWVrIGxlZnQgXCIgK1xuICAgICAgICAgICAgKF92bS5wcm9tcHRPbiA/IFwiZGltXCIgOiBcIlwiKSArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAoX3ZtLnpvb21lZExlZnQgPyBcInpvb21lZFwiIDogXCJcIilcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNoZWVrLWhpdGJveFwiLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5oYW5kbGVMZWZ0IH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9hc3NldHMvdml0YWxpdHkucG5nXCIgfSB9KVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICBcImNoZWVrIHJpZ2h0IFwiICtcbiAgICAgICAgICAgIChfdm0ucHJvbXB0T24gPyBcImRpbVwiIDogXCJcIikgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgKF92bS56b29tZWRSaWdodCA/IFwiem9vbWVkXCIgOiBcIlwiKVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnpvb21lZFJpZ2h0ID8gX2MoXCJkaXZcIikgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNoZWVrLWhpdGJveFwiLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5oYW5kbGVSaWdodCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvYXNzZXRzL2FjaGlldmVtZW50LnBuZ1wiIH0gfSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnByb21wdE9uXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvbXB0LWJveFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWJveFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiRXhwYW5kaW5nVGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIlRvZGF5J3MgaGFwcHkgbW92ZW1lbnRcIiwgY29sczogXCIxMlwiIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udG9kYXlzSE0sXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS50b2RheXNITSA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidG9kYXlzSE1cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0udG9kYXlzSE1TdWJtaXR0ZWRcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWJ1dHRvblwiLCBvbjogeyBjbGljazogX3ZtLmhhbmRsZURvbmUgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBEb25lXFxuICAgIFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0udG9kYXlzSE1TdWJtaXR0ZWQgJiYgIV92bS50b2RheXNITVNoYXJlZFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtYnV0dG9uXCIsIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlU2hhcmUgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBTaGFyZVxcbiAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgYm90dG9tXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiXFxuICAgICAgSSdsbCBiZVwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCJcXG4gICAgICBva2F5LlxcbiAgICBcIilcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=