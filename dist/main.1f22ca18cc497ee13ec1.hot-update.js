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
        done: false,
        id: 0
      }, {
        content: 'Take a 10-minute walk.',
        doneBy: 0,
        done: false,
        id: 1
      }, {
        content: 'Get a cup of latte at a cafe.',
        doneBy: 0,
        done: false,
        id: 2
      }, {
        content: 'Call mom to have a chat.',
        doneBy: 0,
        done: false,
        id: 3
      }, {
        content: 'Take a shower with a new body wash.',
        doneBy: 0,
        done: false,
        id: 4
      }],
      zoomedLeft: false,
      zoomedRight: false // slideActiveA: 0

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
    },
    handlePass: function handlePass() {
      this.$refs.mySwiperA.swiper.slideNext();
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
    }); // this.$refs.mySwiperA.swiper.on('slideChange', ()=> {
    //   console.log(this.$refs.mySwiperA.swiper.activeIndex);
    //   this.slideActiveA = this.$refs.mySwiperA.swiper.activeIndex;
    // });
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLHFGQURBO0FBRUEscUVBRkE7QUFHQTtBQUhBLEdBREE7QUFNQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxvQkFGQTtBQUdBLHFCQUhBO0FBSUEsOEJBSkE7QUFLQSwyQkFMQTtBQU1BLGtCQU5BO0FBT0EsbUJBQ0E7QUFDQSw4Q0FEQTtBQUVBLGlCQUZBO0FBR0EsbUJBSEE7QUFJQTtBQUpBLE9BREEsRUFPQTtBQUNBLHlDQURBO0FBRUEsaUJBRkE7QUFHQSxtQkFIQTtBQUlBO0FBSkEsT0FQQSxFQVlBO0FBQ0EsZ0RBREE7QUFFQSxpQkFGQTtBQUdBLG1CQUhBO0FBSUE7QUFKQSxPQVpBLEVBa0JBO0FBQ0EsMkNBREE7QUFFQSxpQkFGQTtBQUdBLG1CQUhBO0FBSUE7QUFKQSxPQWxCQSxFQXdCQTtBQUNBLHNEQURBO0FBRUEsaUJBRkE7QUFHQSxtQkFIQTtBQUlBO0FBSkEsT0F4QkEsQ0FQQTtBQXNDQSx1QkF0Q0E7QUF1Q0Esd0JBdkNBLENBd0NBOztBQXhDQTtBQTBDQSxHQWpEQTtBQWtEQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsS0FQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBLEtBWEE7QUFZQTtBQUNBO0FBQ0E7QUFDQSxLQWZBO0FBZ0JBO0FBQ0E7QUFDQTtBQWxCQSxHQWxEQTtBQXNFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBLEdBdEVBO0FBMkVBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBO0FBQUE7QUFBQSxPQVJBLENBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpGQSxHIiwiZmlsZSI6Im1haW4uMWYyMmNhMThjYzQ5N2VlMTNlYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjs8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIj5cbiAgICB7e3NsaWRlQWN0aXZlQX19XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlLWJveFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlIHRvcFwiPlxuICAgICAgICBBZnRlcjxicj5cbiAgICAgICAge3tudW1EYXlzUm91bmRlZH19IGRheXMsXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSBib3R0b21cIj5cbiAgICAgICAgSSdsbCBiZTxicj5cbiAgICAgICAgb2theS5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgdi1zaG93PVwiem9vbWVkTGVmdFwiIGNsYXNzPVwic3dpcGVyLWJveFwiPlxuICAgICAgPHN3aXBlciByZWY9XCJteVN3aXBlckFcIj5cbiAgICAgICAgPCEtLSBzbGlkZXMgLS0+XG4gICAgICAgIDxzd2lwZXItc2xpZGUgdi1mb3I9XCJ2aXRhbGl0eSBpbiB2aXRhbGl0aWVzXCIgOmtleT1cInZpdGFsaXR5LmlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlLWJveFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAge3t2aXRhbGl0eS5jb250ZW50fX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgRG9uZSBieSB7e3ZpdGFsaXR5LmRvbmVCeX19IHBlb3BsZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJ2aXRhbGl0eS5kb25lXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zd2lwZXItc2xpZGU+XG4gICAgICAgIDwhLS0gT3B0aW9uYWwgY29udHJvbHMgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzd2lwZXItcGFnaW5hdGlvblwiIHNsb3Q9XCJwYWdpbmF0aW9uXCI+PC9kaXY+XG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cInN3aXBlci1idXR0b24tcHJldlwiIHNsb3Q9XCJidXR0b24tcHJldlwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLWJ1dHRvbi1uZXh0XCIgc2xvdD1cImJ1dHRvbi1uZXh0XCI+PC9kaXY+IC0tPlxuICAgICAgPC9zd2lwZXI+XG4gICAgICA8ZGl2IEBjbGljaz1cImhhbmRsZVBhc3NcIiBjbGFzcz1cInBhc3MtYnV0dG9uXCI+XG4gICAgICAgIFBhc3NcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cblxuXG4gICAgPGRpdiBjbGFzcz1cImZhY2UtYm94XCI+XG4gICAgICA8Y2FudmFzIGlkPVwibW91dGhcIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjMwMFwiLz5cbiAgICAgIDxkaXYgaWQ9XCJtb3V0aC1oaXRib3hcIj48L2Rpdj5cbiAgICAgIFxuICAgICAgXG4gICAgICA8ZGl2IDpjbGFzcz1cImBjaGVlayBsZWZ0ICR7cHJvbXB0T24/J2RpbSc6Jyd9ICR7em9vbWVkTGVmdD8nem9vbWVkJzonJ31gXCI+XG4gICAgICAgIDxkaXYgQGNsaWNrPVwiaGFuZGxlTGVmdFwiIGNsYXNzPVwiY2hlZWstaGl0Ym94XCI+PC9kaXY+XG4gICAgICAgIDxpbWcgOmNsYXNzPVwiYCR7KHpvb21lZExlZnR8fHpvb21lZFJpZ2h0KT8ndHJhbnNwYXJlbnQnOicnfWBcIiBzcmM9XCIvYXNzZXRzL3ZpdGFsaXR5LnBuZ1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IDpjbGFzcz1cImBjaGVlayByaWdodCAke3Byb21wdE9uPydkaW0nOicnfSAke3pvb21lZFJpZ2h0Pyd6b29tZWQnOicnfWBcIj5cbiAgICAgICAgPGRpdiBAY2xpY2s9XCJoYW5kbGVSaWdodFwiIGNsYXNzPVwiY2hlZWstaGl0Ym94XCI+PC9kaXY+XG4gICAgICAgIDxpbWcgOmNsYXNzPVwiYCR7KHpvb21lZExlZnR8fHpvb21lZFJpZ2h0KT8ndHJhbnNwYXJlbnQnOicnfWBcIiBzcmM9XCIvYXNzZXRzL2FjaGlldmVtZW50LnBuZ1wiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiB2LWlmPVwicHJvbXB0T25cIiBjbGFzcz1cInByb21wdC1ib3hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgPEV4cGFuZGluZ1RleHRhcmVhIHBsYWNlaG9sZGVyPVwiVG9kYXkncyBoYXBweSBtb3ZlbWVudFwiIHYtbW9kZWw9XCJ0b2RheXNITVwiIGNvbHM9XCIxMlwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2LWlmPVwiIXRvZGF5c0hNU3VibWl0dGVkXCIgQGNsaWNrPVwiaGFuZGxlRG9uZVwiIGNsYXNzPVwiaW5wdXQtYnV0dG9uXCI+XG4gICAgICAgIERvbmVcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2LWVsc2UtaWY9XCJ0b2RheXNITVN1Ym1pdHRlZCAmJiAhdG9kYXlzSE1TaGFyZWRcIiBAY2xpY2s9XCJoYW5kbGVTaGFyZVwiIGNsYXNzPVwiaW5wdXQtYnV0dG9uXCI+XG4gICAgICAgIFNoYXJlXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtUd2Vlbk1heCwgUG93ZXIyLCBUaW1lbGluZUxpdGV9IGZyb20gXCJnc2FwL1R3ZWVuTWF4XCI7XG5pbXBvcnQgRXhwYW5kaW5nVGV4dGFyZWEgZnJvbSAnLi9FeHBhbmRpbmdUZXh0YXJlYS52dWUnO1xuaW1wb3J0IEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQgeyBzd2lwZXIsIHN3aXBlclNsaWRlIH0gZnJvbSAndnVlLWF3ZXNvbWUtc3dpcGVyJztcbmltcG9ydCAnc3dpcGVyL2Rpc3QvY3NzL3N3aXBlci5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBFeHBhbmRpbmdUZXh0YXJlYSxcbiAgICBzd2lwZXIsXG4gICAgc3dpcGVyU2xpZGVcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG51bURheXNMZWZ0OiAzMCxcbiAgICAgIGN1cnJlbnREYXk6IDIwLFxuICAgICAgcHJvbXB0T246IGZhbHNlLFxuICAgICAgdG9kYXlzSE1TdWJtaXR0ZWQ6IGZhbHNlLFxuICAgICAgdG9kYXlzSE1TaGFyZWQ6IGZhbHNlLFxuICAgICAgdG9kYXlzSE06ICcnLFxuICAgICAgdml0YWxpdGllczogW1xuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogJ0dvIG91dCBhbmQgbG9vayB1cCB0aGUgc2t5LicsXG4gICAgICAgICAgZG9uZUJ5OiAwLFxuICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgIGlkOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OiAnVGFrZSBhIDEwLW1pbnV0ZSB3YWxrLicsXG4gICAgICAgICAgZG9uZUJ5OiAwLFxuICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgIGlkOiAxXG4gICAgICAgIH0se1xuICAgICAgICAgIGNvbnRlbnQ6ICdHZXQgYSBjdXAgb2YgbGF0dGUgYXQgYSBjYWZlLicsXG4gICAgICAgICAgZG9uZUJ5OiAwLFxuICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgIGlkOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OiAnQ2FsbCBtb20gdG8gaGF2ZSBhIGNoYXQuJyxcbiAgICAgICAgICBkb25lQnk6IDAsXG4gICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgaWQ6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6ICdUYWtlIGEgc2hvd2VyIHdpdGggYSBuZXcgYm9keSB3YXNoLicsXG4gICAgICAgICAgZG9uZUJ5OiAwLFxuICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgIGlkOiA0XG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgem9vbWVkTGVmdDogZmFsc2UsXG4gICAgICB6b29tZWRSaWdodDogZmFsc2UsXG4gICAgICAvLyBzbGlkZUFjdGl2ZUE6IDBcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVEb25lOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudG9kYXlzSE1TdWJtaXR0ZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgaGFuZGxlU2hhcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50b2RheXNITVNoYXJlZCA9IHRydWU7XG4gICAgICB0aGlzLnByb21wdE9uID0gZmFsc2U7XG4gICAgfSxcbiAgICBoYW5kbGVMZWZ0OiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdsZWZ0IScpO1xuICAgICAgdGhpcy56b29tZWRMZWZ0ID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhhbmRsZVJpZ2h0OiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyaWdodCEnKTtcbiAgICAgIHRoaXMuem9vbWVkUmlnaHQgPSB0cnVlO1xuICAgIH0sXG4gICAgaGFuZGxlUGFzczogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLiRyZWZzLm15U3dpcGVyQS5zd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIG51bURheXNSb3VuZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm51bURheXNMZWZ0LnRvRml4ZWQoMCk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtb3V0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3V0aC1oaXRib3gnKTtcbiAgICB2YXIgbWMgPSBuZXcgSGFtbWVyLk1hbmFnZXIobW91dGgpO1xuICAgIG1jLmFkZCggbmV3IEhhbW1lci5QYW4oeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMLCB0aHJlc2hvbGQ6IDUwIH0pICk7XG4gICAgbWMub24oXCJwYW5kb3duXCIsICgpPT4ge1xuICAgICAgaWYgKHRoaXMucHJvbXB0T24pIHJldHVybjtcbiAgICAgIHRoaXMucHJvbXB0T24gPSB0cnVlO1xuICAgIH0pO1xuICAgIFR3ZWVuTGl0ZS50byh0aGlzLiRkYXRhLCAxLCB7bnVtRGF5c0xlZnQ6IHRoaXMuY3VycmVudERheX0pO1xuXG4gICAgLy8gdGhpcy4kcmVmcy5teVN3aXBlckEuc3dpcGVyLm9uKCdzbGlkZUNoYW5nZScsICgpPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2codGhpcy4kcmVmcy5teVN3aXBlckEuc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAvLyAgIHRoaXMuc2xpZGVBY3RpdmVBID0gdGhpcy4kcmVmcy5teVN3aXBlckEuc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIC8vIH0pO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblxuI2FwcCB7XG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC50aXRsZS1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0b3A6IDE1dmg7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICYudG9wIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43ZW07XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cblxuICAuc3dpcGVyLWJveCB7XG4gICAgei1pbmRleDogMjA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA1NXZoO1xuICAgIHRvcDogMjB2aDtcblxuICAgIC5zbGlkZS1ib3gge1xuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLnNsaWRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgICAgICBoZWlnaHQ6IDU1dmg7XG4gICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5wYXNzLWJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IC0xNXZoO1xuICAgICAgcmlnaHQ6IDEwdnc7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICB3aWR0aDogMmVtO1xuICAgIH1cbiAgfVxuXG4gIC5mYWNlLWJveCB7XG4gICAgei1pbmRleDogMTA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XG5cblxuICAgICNtb3V0aC1oaXRib3gge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDM1dnc7XG4gICAgICBoZWlnaHQ6IDY1dnc7XG4gICAgICB0b3A6IC0zMi41dnc7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3MHZoKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB9XG5cbiAgICBjYW52YXMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTE7XG4gICAgICB3aWR0aDogODZ2dztcbiAgICAgIGhlaWdodDogNjV2dztcbiAgICAgIHRvcDogLTMyLjV2dztcbiAgICAgIGJvcmRlcjoxcHggc29saWQgIzAwMDAwMDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNzB2aCk7XG4gICAgfVxuXG4gICAgLmNoZWVrIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiA2NXZ3O1xuICAgICAgaGVpZ2h0OiA2NXZ3O1xuICAgICAgdG9wOiAtMzIuNXZ3O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICYuZGltIHtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY2hlZWstaGl0Ym94IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgei1pbmRleDogLTEwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMjYlO1xuICAgICAgICBoZWlnaHQ6IDEyNiU7XG4gICAgICAgIHRvcDogLTEzJTtcbiAgICAgICAgbGVmdDogLTEzJTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gNHMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICBAa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0byB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLnRyYW5zcGFyZW50IHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcblxuICAgICAgJi5sZWZ0IHtcbiAgICAgICAgLy8gbGVmdDogLTMyLjV2dztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwdncsIDcwdmgpO1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgICYucmlnaHQge1xuICAgICAgICAvLyByaWdodDogLTMyLjV2dztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTB2dywgNzB2aCk7XG4gICAgICB9XG4gICAgICAmLnpvb21lZCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwdmgpIHNjYWxlKDIuMyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAucHJvbXB0LWJveCB7XG4gICAgei1pbmRleDogMjA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMTB2aDtcbiAgICAuaW5wdXQtYm94IHtcbiAgICAgIHotaW5kZXg6IDIxO1xuICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICBoZWlnaHQ6IDkwdnc7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgXG4gICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICBcbiAgICB9XG4gICAgLmlucHV0LWJ1dHRvbiB7XG4gICAgICB6LWluZGV4OiAyMjtcbiAgICAgIHdpZHRoOiAyNHZ3O1xuICAgICAgaGVpZ2h0OiAyNHZ3O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTE2LCAxMTYpO1xuICAgICAgbWFyZ2luOiAtMTJ2dyBhdXRvIDA7IFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuICBcbn1cblxuXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=