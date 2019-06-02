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
    console.log(this.swiper); // console.log(document.querySelector('awesomeSwiperA').swiper);
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EscUZBREE7QUFFQSxxRUFGQTtBQUdBO0FBSEEsR0FEQTtBQU1BO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLG9CQUZBO0FBR0EscUJBSEE7QUFJQSw4QkFKQTtBQUtBLDJCQUxBO0FBTUEsa0JBTkE7QUFPQSxtQkFDQTtBQUNBLDhDQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBLE9BREEsRUFNQTtBQUNBLHlDQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBLE9BTkEsRUFVQTtBQUNBLGdEQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBLE9BVkEsRUFlQTtBQUNBLDJDQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBLE9BZkEsRUFvQkE7QUFDQSxzREFEQTtBQUVBLGlCQUZBO0FBR0E7QUFIQSxPQXBCQSxDQVBBO0FBaUNBLHVCQWpDQTtBQWtDQTtBQWxDQTtBQW9DQSxHQTNDQTtBQTRDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsS0FQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBLEtBWEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQWZBLEdBNUNBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBSEEsR0E3REE7QUFrRUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFBQTtBQUFBO0FBRUEsNkJBVkEsQ0FXQTtBQUNBO0FBOUVBLEciLCJmaWxlIjoibWFpbi42YzM3NDhkYzEwYWMzNTkyMzNkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiOzx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1ib3hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSB0b3BcIj5cbiAgICAgICAgQWZ0ZXI8YnI+XG4gICAgICAgIHt7bnVtRGF5c1JvdW5kZWR9fSBkYXlzLFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGUgYm90dG9tXCI+XG4gICAgICAgIEknbGwgYmU8YnI+XG4gICAgICAgIG9rYXkuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdi1zaG93PVwiem9vbWVkTGVmdFwiIGNsYXNzPVwic3dpcGVyLWJveFwiPlxuICAgICAgPHN3aXBlciByZWY9XCJhd2Vzb21lU3dpcGVyQVwiPlxuICAgICAgICA8IS0tIHNsaWRlcyAtLT5cbiAgICAgICAgPHN3aXBlci1zbGlkZSB2LWZvcj1cInZpdGFsaXR5IGluIHZpdGFsaXRpZXNcIiA6a2V5PVwidml0YWxpdHkuaWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGUtYm94XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7e3ZpdGFsaXR5LmNvbnRlbnR9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBEb25lIGJ5IHt7dml0YWxpdHkuZG9uZUJ5fX0gcGVvcGxlXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIOOFgVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc3dpcGVyLXNsaWRlPlxuICAgICAgICA8IS0tIE9wdGlvbmFsIGNvbnRyb2xzIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLXBhZ2luYXRpb25cIiAgc2xvdD1cInBhZ2luYXRpb25cIj48L2Rpdj5cbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwic3dpcGVyLWJ1dHRvbi1wcmV2XCIgc2xvdD1cImJ1dHRvbi1wcmV2XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzd2lwZXItYnV0dG9uLW5leHRcIiBzbG90PVwiYnV0dG9uLW5leHRcIj48L2Rpdj4gLS0+XG4gICAgICA8L3N3aXBlcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYXNzLWJ1dHRvblwiPlxuICAgICAgICBQYXNzXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJmYWNlLWJveFwiPlxuICAgICAgPGNhbnZhcyBpZD1cIm1vdXRoXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzMDBcIi8+XG4gICAgICA8ZGl2IGlkPVwibW91dGgtaGl0Ym94XCI+PC9kaXY+XG4gICAgICBcbiAgICAgIFxuICAgICAgPGRpdiA6Y2xhc3M9XCJgY2hlZWsgbGVmdCAke3Byb21wdE9uPydkaW0nOicnfSAke3pvb21lZExlZnQ/J3pvb21lZCc6Jyd9YFwiPlxuICAgICAgICA8ZGl2IEBjbGljaz1cImhhbmRsZUxlZnRcIiBjbGFzcz1cImNoZWVrLWhpdGJveFwiPjwvZGl2PlxuICAgICAgICA8aW1nIDpjbGFzcz1cImAkeyh6b29tZWRMZWZ0fHx6b29tZWRSaWdodCk/J3RyYW5zcGFyZW50JzonJ31gXCIgc3JjPVwiL2Fzc2V0cy92aXRhbGl0eS5wbmdcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiA6Y2xhc3M9XCJgY2hlZWsgcmlnaHQgJHtwcm9tcHRPbj8nZGltJzonJ30gJHt6b29tZWRSaWdodD8nem9vbWVkJzonJ31gXCI+XG4gICAgICAgIDxkaXYgQGNsaWNrPVwiaGFuZGxlUmlnaHRcIiBjbGFzcz1cImNoZWVrLWhpdGJveFwiPjwvZGl2PlxuICAgICAgICA8aW1nIDpjbGFzcz1cImAkeyh6b29tZWRMZWZ0fHx6b29tZWRSaWdodCk/J3RyYW5zcGFyZW50JzonJ31gXCIgc3JjPVwiL2Fzc2V0cy9hY2hpZXZlbWVudC5wbmdcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgdi1pZj1cInByb21wdE9uXCIgY2xhc3M9XCJwcm9tcHQtYm94XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYm94XCI+XG4gICAgICAgIDxFeHBhbmRpbmdUZXh0YXJlYSBwbGFjZWhvbGRlcj1cIlRvZGF5J3MgaGFwcHkgbW92ZW1lbnRcIiB2LW1vZGVsPVwidG9kYXlzSE1cIiBjb2xzPVwiMTJcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1pZj1cIiF0b2RheXNITVN1Ym1pdHRlZFwiIEBjbGljaz1cImhhbmRsZURvbmVcIiBjbGFzcz1cImlucHV0LWJ1dHRvblwiPlxuICAgICAgICBEb25lXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1lbHNlLWlmPVwidG9kYXlzSE1TdWJtaXR0ZWQgJiYgIXRvZGF5c0hNU2hhcmVkXCIgQGNsaWNrPVwiaGFuZGxlU2hhcmVcIiBjbGFzcz1cImlucHV0LWJ1dHRvblwiPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7VHdlZW5NYXgsIFBvd2VyMiwgVGltZWxpbmVMaXRlfSBmcm9tIFwiZ3NhcC9Ud2Vlbk1heFwiO1xuaW1wb3J0IEV4cGFuZGluZ1RleHRhcmVhIGZyb20gJy4vRXhwYW5kaW5nVGV4dGFyZWEudnVlJztcbmltcG9ydCBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuaW1wb3J0IHsgc3dpcGVyLCBzd2lwZXJTbGlkZSB9IGZyb20gJ3Z1ZS1hd2Vzb21lLXN3aXBlcic7XG5pbXBvcnQgJ3N3aXBlci9kaXN0L2Nzcy9zd2lwZXIuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgRXhwYW5kaW5nVGV4dGFyZWEsXG4gICAgc3dpcGVyLFxuICAgIHN3aXBlclNsaWRlXG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBudW1EYXlzTGVmdDogMzAsXG4gICAgICBjdXJyZW50RGF5OiAyMCxcbiAgICAgIHByb21wdE9uOiBmYWxzZSxcbiAgICAgIHRvZGF5c0hNU3VibWl0dGVkOiBmYWxzZSxcbiAgICAgIHRvZGF5c0hNU2hhcmVkOiBmYWxzZSxcbiAgICAgIHRvZGF5c0hNOiAnJyxcbiAgICAgIHZpdGFsaXRpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6ICdHbyBvdXQgYW5kIGxvb2sgdXAgdGhlIHNreS4nLFxuICAgICAgICAgIGRvbmVCeTogMCxcbiAgICAgICAgICBpZDogMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogJ1Rha2UgYSAxMC1taW51dGUgd2Fsay4nLFxuICAgICAgICAgIGRvbmVCeTogMCxcbiAgICAgICAgICBpZDogMVxuICAgICAgICB9LHtcbiAgICAgICAgICBjb250ZW50OiAnR2V0IGEgY3VwIG9mIGxhdHRlIGF0IGEgY2FmZS4nLFxuICAgICAgICAgIGRvbmVCeTogMCxcbiAgICAgICAgICBpZDogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogJ0NhbGwgbW9tIHRvIGhhdmUgYSBjaGF0LicsXG4gICAgICAgICAgZG9uZUJ5OiAwLFxuICAgICAgICAgIGlkOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OiAnVGFrZSBhIHNob3dlciB3aXRoIGEgbmV3IGJvZHkgd2FzaC4nLFxuICAgICAgICAgIGRvbmVCeTogMCxcbiAgICAgICAgICBpZDogNFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHpvb21lZExlZnQ6IGZhbHNlLFxuICAgICAgem9vbWVkUmlnaHQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlRG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRvZGF5c0hNU3VibWl0dGVkID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhhbmRsZVNoYXJlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudG9kYXlzSE1TaGFyZWQgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9tcHRPbiA9IGZhbHNlO1xuICAgIH0sXG4gICAgaGFuZGxlTGVmdDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnbGVmdCEnKTtcbiAgICAgIHRoaXMuem9vbWVkTGVmdCA9IHRydWU7XG4gICAgfSxcbiAgICBoYW5kbGVSaWdodDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygncmlnaHQhJyk7XG4gICAgICB0aGlzLnpvb21lZFJpZ2h0ID0gdHJ1ZTtcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIG51bURheXNSb3VuZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm51bURheXNMZWZ0LnRvRml4ZWQoMCk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtb3V0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3V0aC1oaXRib3gnKTtcbiAgICB2YXIgbWMgPSBuZXcgSGFtbWVyLk1hbmFnZXIobW91dGgpO1xuICAgIG1jLmFkZCggbmV3IEhhbW1lci5QYW4oeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMLCB0aHJlc2hvbGQ6IDUwIH0pICk7XG4gICAgbWMub24oXCJwYW5kb3duXCIsICgpPT4ge1xuICAgICAgaWYgKHRoaXMucHJvbXB0T24pIHJldHVybjtcbiAgICAgIHRoaXMucHJvbXB0T24gPSB0cnVlO1xuICAgIH0pO1xuICAgIFR3ZWVuTGl0ZS50byh0aGlzLiRkYXRhLCAxLCB7bnVtRGF5c0xlZnQ6IHRoaXMuY3VycmVudERheX0pO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zd2lwZXIpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2F3ZXNvbWVTd2lwZXJBJykuc3dpcGVyKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cbiNhcHAge1xuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAudGl0bGUtYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAxNXZoO1xuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAmLnRvcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuN2VtO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG5cbiAgLnN3aXBlci1ib3gge1xuICAgIHotaW5kZXg6IDIwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNTV2aDtcbiAgICB0b3A6IDIwdmg7XG5cbiAgICAuc2xpZGUtYm94IHtcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5zbGlkZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgaGVpZ2h0OiA1NXZoO1xuICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAucGFzcy1idXR0b24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAtMTV2aDtcbiAgICAgIHJpZ2h0OiAxMHZ3O1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgd2lkdGg6IDJlbTtcbiAgICB9XG4gIH1cblxuICAuZmFjZS1ib3gge1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xuXG5cbiAgICAjbW91dGgtaGl0Ym94IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAzNXZ3O1xuICAgICAgaGVpZ2h0OiA2NXZ3O1xuICAgICAgdG9wOiAtMzIuNXZ3O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNzB2aCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgfVxuXG4gICAgY2FudmFzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDExO1xuICAgICAgd2lkdGg6IDg2dnc7XG4gICAgICBoZWlnaHQ6IDY1dnc7XG4gICAgICB0b3A6IC0zMi41dnc7XG4gICAgICBib3JkZXI6MXB4IHNvbGlkICMwMDAwMDA7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcwdmgpO1xuICAgIH1cblxuICAgIC5jaGVlayB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogNjV2dztcbiAgICAgIGhlaWdodDogNjV2dztcbiAgICAgIHRvcDogLTMyLjV2dztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAmLmRpbSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNoZWVrLWhpdGJveCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHotaW5kZXg6IC0xMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTI2JTtcbiAgICAgICAgaGVpZ2h0OiAxMjYlO1xuICAgICAgICB0b3A6IC0xMyU7XG4gICAgICAgIGxlZnQ6IC0xMyU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBhbmltYXRpb246IHJvdGF0aW9uIDRzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG8ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi50cmFuc3BhcmVudCB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG5cbiAgICAgICYubGVmdCB7XG4gICAgICAgIC8vIGxlZnQ6IC0zMi41dnc7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MHZ3LCA3MHZoKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICAmLnJpZ2h0IHtcbiAgICAgICAgLy8gcmlnaHQ6IC0zMi41dnc7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwdncsIDcwdmgpO1xuICAgICAgfVxuICAgICAgJi56b29tZWQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MHZoKSBzY2FsZSgyLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLnByb21wdC1ib3gge1xuICAgIHotaW5kZXg6IDIwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDEwdmg7XG4gICAgLmlucHV0LWJveCB7XG4gICAgICB6LWluZGV4OiAyMTtcbiAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgaGVpZ2h0OiA5MHZ3O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBtYXJnaW46IDAgYXV0bzsgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIFxuICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgXG4gICAgfVxuICAgIC5pbnB1dC1idXR0b24ge1xuICAgICAgei1pbmRleDogMjI7XG4gICAgICB3aWR0aDogMjR2dztcbiAgICAgIGhlaWdodDogMjR2dztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDExNiwgMTE2KTtcbiAgICAgIG1hcmdpbjogLTEydncgYXV0byAwOyBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbiAgXG59XG5cblxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9