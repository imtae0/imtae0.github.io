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
      promptOn: false
    };
  },
  methods: {},
  computed: {
    numDaysRounded: function numDaysRounded() {
      return this.numDaysLeft.toFixed(0);
    }
  },
  mounted: function mounted() {
    var mouth = document.getElementById('mouth');
    var mouthHammer = new hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a(mouth); //, myOptions);

    mouthHammer.on('pandown', function (event) {
      console.log(event);
    });
    var mc = new hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.Manager(mouth);
    mc.add(new hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.Pan({
      direction: hammerjs__WEBPACK_IMPORTED_MODULE_2___default.a.DIRECTION_ALL,
      threshold: 0
    })); // var mc = new Hammer.Manager(mouth);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQSxHQURBO0FBSUE7QUFDQTtBQUNBLHFCQURBO0FBRUEsb0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FWQTtBQVdBLGFBWEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUhBLEdBZEE7QUFtQkE7QUFDQTtBQUNBLGlGQUZBLENBRUE7O0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUFBLFFBUkEsQ0FTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUEzQ0EsRyIsImZpbGUiOiJtYWluLmU3NTBjMzhjMDk1MzA1NDg1NzUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGUtYm94XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGUgdG9wXCI+XG4gICAgICAgIEFmdGVyPGJyPlxuICAgICAgICB7e251bURheXNSb3VuZGVkfX0gZGF5cyxcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlIGJvdHRvbVwiPlxuICAgICAgICBJJ2xsIGJlPGJyPlxuICAgICAgICBva2F5LlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNoZWVrcy1ib3hcIj5cbiAgICAgIDxjYW52YXMgaWQ9XCJtb3V0aFwiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiMzAwXCIvPlxuICAgICAgPGRpdiBjbGFzcz1cImNoZWVrIGxlZnRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL3ZpdGFsaXR5LnBuZ1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlZWsgcmlnaHRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2FjaGlldmVtZW50LnBuZ1wiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiB2LWlmPVwicHJvbXB0T25cIiBjbGFzcz1cInByb21wdC1ib3hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgPEV4cGFuZGluZ1RleHRhcmVhIHBsYWNlaG9sZGVyPVwiVG9kYXkncyBoYXBweSBtb3ZlbWVudFwiIGNvbHM9XCIxMlwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWJ1dHRvblwiPlxuICAgICAgICBEb25lXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtUd2Vlbk1heCwgUG93ZXIyLCBUaW1lbGluZUxpdGV9IGZyb20gXCJnc2FwL1R3ZWVuTWF4XCI7XG5pbXBvcnQgRXhwYW5kaW5nVGV4dGFyZWEgZnJvbSAnLi9FeHBhbmRpbmdUZXh0YXJlYS52dWUnO1xuaW1wb3J0IEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIEV4cGFuZGluZ1RleHRhcmVhXG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBudW1EYXlzTGVmdDogMzAsXG4gICAgICBjdXJyZW50RGF5OiAyMCxcbiAgICAgIHByb21wdE9uOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbnVtRGF5c1JvdW5kZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubnVtRGF5c0xlZnQudG9GaXhlZCgwKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1vdXRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdXRoJyk7XG4gICAgY29uc3QgbW91dGhIYW1tZXIgPSBuZXcgSGFtbWVyKG1vdXRoKTsvLywgbXlPcHRpb25zKTtcbiAgICBtb3V0aEhhbW1lci5vbigncGFuZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfSk7XG4gICAgdmFyIG1jID0gbmV3IEhhbW1lci5NYW5hZ2VyKG1vdXRoKTtcblxuICAgIG1jLmFkZCggbmV3IEhhbW1lci5QYW4oeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMLCB0aHJlc2hvbGQ6IDAgfSkgKTtcbiAgICAvLyB2YXIgbWMgPSBuZXcgSGFtbWVyLk1hbmFnZXIobW91dGgpO1xuICAgIC8vIGNvbnNvbGUubG9nKG5ldyBIYW1tZXIuUGFuZG93bigpKTtcbiAgICAvLyAvLyBjcmVhdGUgYSByZWNvZ25pemVyXG4gICAgLy8gdmFyIFJvdGF0ZSA9IG5ldyBIYW1tZXIuUGFuZG93bigpO1xuICAgIFxuICAgIC8vIC8vIGFkZCB0aGUgcmVjb2duaXplclxuICAgIC8vIG1jLmFkZChSb3RhdGUpO1xuICAgIFxuICAgIC8vIC8vIHN1YnNjcmliZSB0byBldmVudHNcbiAgICAvLyBtYy5vbigncm90YXRlJywgZnVuY3Rpb24oZSkge1xuICAgIC8vICAgICAvLyBkbyBzb21ldGhpbmcgY29vbFxuICAgIC8vICAgICB2YXIgcm90YXRpb24gPSBNYXRoLnJvdW5kKGUucm90YXRpb24pOyAgICBcbiAgICAvLyAgICAgc3RhZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgnK3JvdGF0aW9uKydkZWcpJztcbiAgICAvLyB9KTtcbiAgICBUd2VlbkxpdGUudG8odGhpcy4kZGF0YSwgMSwge251bURheXNMZWZ0OiB0aGlzLmN1cnJlbnREYXl9KTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cbiNhcHAge1xuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAudGl0bGUtYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAxNXZoO1xuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAmLnRvcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuN2VtO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG5cbiAgLmNoZWVrcy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGNhbnZhcyB7XG4gICAgICB6LWluZGV4OiAxMTtcbiAgICAgIHdpZHRoOiA4NnZ3O1xuICAgICAgaGVpZ2h0OiA2NXZ3O1xuICAgICAgYm90dG9tOiAxMHZoO1xuICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMDAwMDAwO1xuICAgIH1cblxuICAgIC5jaGVlayB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogNjV2dztcbiAgICAgIGhlaWdodDogNjV2dztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgIGJvdHRvbTogMTB2aDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTI2JTtcbiAgICAgICAgaGVpZ2h0OiAxMjYlO1xuICAgICAgICB0b3A6IC0xMyU7XG4gICAgICAgIGxlZnQ6IC0xMyU7XG4gICAgICB9XG5cbiAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gNHMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG4gICAgfVxuXG4gICAgICAmLmxlZnQge1xuICAgICAgICBsZWZ0OiAtMTcuNXZoO1xuICAgICAgfVxuICAgICAgJi5yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAtMTcuNXZoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLnByb21wdC1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDEwdmg7XG4gICAgLmlucHV0LWJveCB7XG4gICAgICB3aWR0aDogOTB2dztcbiAgICAgIGhlaWdodDogOTB2dztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgbWFyZ2luOiAwIGF1dG87IFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICBcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgIFxuICAgIH1cbiAgICAuaW5wdXQtYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAyNHZ3O1xuICAgICAgaGVpZ2h0OiAyNHZ3O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTE2LCAxMTYpO1xuICAgICAgbWFyZ2luOiAtMTJ2dyBhdXRvIDA7IFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuICBcbn1cblxuXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=