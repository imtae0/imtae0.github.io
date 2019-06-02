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
      todaysSubmitted: false
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
    var mouth = document.getElementById('mouth');
    var mc = new hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.Manager(mouth);
    mc.add(new hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.Pan({
      direction: hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.DIRECTION_ALL,
      threshold: 50
    }));
    mc.on("pandown", function (event) {
      if (this.promptOn) return;
      this.promptOn = true;
    });
    TweenLite.to(this.$data, 1, {
      numDaysLeft: this.currentDay
    });
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQSxHQURBO0FBSUE7QUFDQTtBQUNBLHFCQURBO0FBRUEsb0JBRkE7QUFHQSxxQkFIQTtBQUlBO0FBSkE7QUFNQSxHQVhBO0FBWUE7QUFDQSxpREFFQTtBQUhBLEdBWkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFIQSxHQWpCQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQS9CQSxHIiwiZmlsZSI6Im1haW4uMDJiNTIzMjE1MWM4NGYyYWUyMmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1ib3hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSB0b3BcIj5cbiAgICAgICAgQWZ0ZXI8YnI+XG4gICAgICAgIHt7bnVtRGF5c1JvdW5kZWR9fSBkYXlzLFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGUgYm90dG9tXCI+XG4gICAgICAgIEknbGwgYmU8YnI+XG4gICAgICAgIG9rYXkuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hlZWtzLWJveFwiPlxuICAgICAgPGNhbnZhcyBpZD1cIm1vdXRoXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzMDBcIi8+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlZWsgbGVmdFwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvdml0YWxpdHkucG5nXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVlayByaWdodFwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvYWNoaWV2ZW1lbnQucG5nXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IHYtaWY9XCJwcm9tcHRPblwiIGNsYXNzPVwicHJvbXB0LWJveFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWJveFwiPlxuICAgICAgICA8RXhwYW5kaW5nVGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJUb2RheSdzIGhhcHB5IG1vdmVtZW50XCIgY29scz1cIjEyXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IEBjbGljaz1cImhhbmRsZUlucHV0RG9uZVwiIGNsYXNzPVwiaW5wdXQtYnV0dG9uXCI+XG4gICAgICAgIERvbmVcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge1R3ZWVuTWF4LCBQb3dlcjIsIFRpbWVsaW5lTGl0ZX0gZnJvbSBcImdzYXAvVHdlZW5NYXhcIjtcbmltcG9ydCBFeHBhbmRpbmdUZXh0YXJlYSBmcm9tICcuL0V4cGFuZGluZ1RleHRhcmVhLnZ1ZSc7XG5pbXBvcnQgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgRXhwYW5kaW5nVGV4dGFyZWFcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG51bURheXNMZWZ0OiAzMCxcbiAgICAgIGN1cnJlbnREYXk6IDIwLFxuICAgICAgcHJvbXB0T246IGZhbHNlLFxuICAgICAgdG9kYXlzU3VibWl0dGVkOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZUlucHV0RG9uZTogZnVuY3Rpb24oKSB7XG5cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbnVtRGF5c1JvdW5kZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubnVtRGF5c0xlZnQudG9GaXhlZCgwKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1vdXRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdXRoJyk7XG4gICAgdmFyIG1jID0gbmV3IEhhbW1lci5NYW5hZ2VyKG1vdXRoKTtcbiAgICBtYy5hZGQoIG5ldyBIYW1tZXIuUGFuKHsgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0FMTCwgdGhyZXNob2xkOiA1MCB9KSApO1xuICAgIG1jLm9uKFwicGFuZG93blwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvbXB0T24pIHJldHVybjtcbiAgICAgIHRoaXMucHJvbXB0T24gPSB0cnVlO1xuICAgIH0pO1xuICAgIFR3ZWVuTGl0ZS50byh0aGlzLiRkYXRhLCAxLCB7bnVtRGF5c0xlZnQ6IHRoaXMuY3VycmVudERheX0pO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblxuI2FwcCB7XG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC50aXRsZS1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0b3A6IDE1dmg7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICYudG9wIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43ZW07XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cblxuICAuY2hlZWtzLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgY2FudmFzIHtcbiAgICAgIHotaW5kZXg6IDExO1xuICAgICAgd2lkdGg6IDg2dnc7XG4gICAgICBoZWlnaHQ6IDY1dnc7XG4gICAgICBib3R0b206IDEwdmg7XG4gICAgICBib3JkZXI6MXB4IHNvbGlkICMwMDAwMDA7XG4gICAgfVxuXG4gICAgLmNoZWVrIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiA2NXZ3O1xuICAgICAgaGVpZ2h0OiA2NXZ3O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgYm90dG9tOiAxMHZoO1xuXG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMjYlO1xuICAgICAgICBoZWlnaHQ6IDEyNiU7XG4gICAgICAgIHRvcDogLTEzJTtcbiAgICAgICAgbGVmdDogLTEzJTtcbiAgICAgIH1cblxuICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiA0cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICBAa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbiAgICB9XG5cbiAgICAgICYubGVmdCB7XG4gICAgICAgIGxlZnQ6IC0xNy41dmg7XG4gICAgICB9XG4gICAgICAmLnJpZ2h0IHtcbiAgICAgICAgcmlnaHQ6IC0xNy41dmg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAucHJvbXB0LWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMTB2aDtcbiAgICAuaW5wdXQtYm94IHtcbiAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgaGVpZ2h0OiA5MHZ3O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBtYXJnaW46IDAgYXV0bzsgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgIFxuICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgXG4gICAgfVxuICAgIC5pbnB1dC1idXR0b24ge1xuICAgICAgd2lkdGg6IDI0dnc7XG4gICAgICBoZWlnaHQ6IDI0dnc7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMTYsIDExNik7XG4gICAgICBtYXJnaW46IC0xMnZ3IGF1dG8gMDsgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG4gIFxufVxuXG5cbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==