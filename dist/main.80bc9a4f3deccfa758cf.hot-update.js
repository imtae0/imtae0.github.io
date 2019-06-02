webpackHotUpdate("main",{

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
          _vm.zoomedLeft
            ? _c(
                "div",
                { staticClass: "swiper-box" },
                [
                  _c(
                    "swiper",
                    { ref: "awesomeSwiperA" },
                    [
                      _c("swiper-slide", [
                        _c("div", { staticClass: "slide" }, [
                          _vm._v("\n              I'm Slide 1\n            ")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("swiper-slide", [
                        _c("div", { staticClass: "slide" }, [
                          _vm._v("\n              I'm Slide 2\n            ")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "swiper-pagination",
                        attrs: { slot: "pagination" },
                        slot: "pagination"
                      })
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT8xYTk5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLFlBQVksRUFBRTtBQUMzQyxlQUFlLDJCQUEyQjtBQUMxQyxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBCQUEwQjtBQUN6QyxvQkFBb0IsU0FBUywyQ0FBMkMsRUFBRTtBQUMxRTtBQUNBLGlCQUFpQixTQUFTLHFCQUFxQixFQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0EsbUNBQW1DLHVCQUF1QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHVCQUF1QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JEO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBLHFCQUFxQixTQUFTLDhCQUE4QixFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1g7QUFDQSxxQkFBcUIsU0FBUyxpQ0FBaUMsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0EsYUFBYSwyQkFBMkI7QUFDeEM7QUFDQTtBQUNBLHdCQUF3QixvREFBb0Q7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQ0FBbUMsd0JBQXdCLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQ0FBbUMseUJBQXlCLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLjgwYmM5YTRmM2RlY2NmYTc1OGNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwiYXBwXCIgfSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZS1ib3hcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHRvcFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgQWZ0ZXJcIiksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5udW1EYXlzUm91bmRlZCkgKyBcIiBkYXlzLFxcbiAgICBcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgwKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmYWNlLWJveFwiIH0sIFtcbiAgICAgIF9jKFwiY2FudmFzXCIsIHsgYXR0cnM6IHsgaWQ6IFwibW91dGhcIiwgd2lkdGg6IFwiNDAwXCIsIGhlaWdodDogXCIzMDBcIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwibW91dGgtaGl0Ym94XCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgXCJjaGVlayBsZWZ0IFwiICtcbiAgICAgICAgICAgIChfdm0ucHJvbXB0T24gPyBcImRpbVwiIDogXCJcIikgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgKF92bS56b29tZWRMZWZ0ID8gXCJ6b29tZWRcIiA6IFwiXCIpXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uem9vbWVkTGVmdFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3dpcGVyLWJveFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3dpcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgcmVmOiBcImF3ZXNvbWVTd2lwZXJBXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3dpcGVyLXNsaWRlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2xpZGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgSSdtIFNsaWRlIDFcXG4gICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInN3aXBlci1zbGlkZVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNsaWRlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIEknbSBTbGlkZSAyXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwicGFnaW5hdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcInBhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNoZWVrLWhpdGJveFwiLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5oYW5kbGVMZWZ0IH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9hc3NldHMvdml0YWxpdHkucG5nXCIgfSB9KVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICBcImNoZWVrIHJpZ2h0IFwiICtcbiAgICAgICAgICAgIChfdm0ucHJvbXB0T24gPyBcImRpbVwiIDogXCJcIikgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgKF92bS56b29tZWRSaWdodCA/IFwiem9vbWVkXCIgOiBcIlwiKVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnpvb21lZFJpZ2h0ID8gX2MoXCJkaXZcIikgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNoZWVrLWhpdGJveFwiLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5oYW5kbGVSaWdodCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvYXNzZXRzL2FjaGlldmVtZW50LnBuZ1wiIH0gfSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnByb21wdE9uXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvbXB0LWJveFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWJveFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiRXhwYW5kaW5nVGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIlRvZGF5J3MgaGFwcHkgbW92ZW1lbnRcIiwgY29sczogXCIxMlwiIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udG9kYXlzSE0sXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS50b2RheXNITSA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidG9kYXlzSE1cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0udG9kYXlzSE1TdWJtaXR0ZWRcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWJ1dHRvblwiLCBvbjogeyBjbGljazogX3ZtLmhhbmRsZURvbmUgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBEb25lXFxuICAgIFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0udG9kYXlzSE1TdWJtaXR0ZWQgJiYgIV92bS50b2RheXNITVNoYXJlZFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtYnV0dG9uXCIsIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlU2hhcmUgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBTaGFyZVxcbiAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgYm90dG9tXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiXFxuICAgICAgSSdsbCBiZVwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCJcXG4gICAgICBva2F5LlxcbiAgICBcIilcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=