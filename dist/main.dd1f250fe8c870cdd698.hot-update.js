webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#app[data-v-7ba5bd90] {\n  font-family: 'Ubuntu', sans-serif;\n}\n#app .title-box[data-v-7ba5bd90] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 15vh;\n}\n#app .title-box .title[data-v-7ba5bd90] {\n      font-size: 50px;\n      font-weight: 700;\n      text-align: center;\n}\n#app .title-box .title.top[data-v-7ba5bd90] {\n        margin-bottom: 1em;\n}\n#app .cheeks-box[data-v-7ba5bd90] {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    padding-bottom: 8vh;\n}\n#app .cheeks-box .cheek[data-v-7ba5bd90] {\n      width: 35vh;\n      height: 35vh;\n      border-radius: 50%;\n      background-color: rgba(0, 0, 0, 0.2);\n      position: absolute;\n}\n#app .cheeks-box .cheek img[data-v-7ba5bd90] {\n        position: absolute;\n        width: 120%;\n        height: 120%;\n        top: 10%;\n        left: 10%;\n}\n#app .cheeks-box .cheek.left[data-v-7ba5bd90] {\n        bottom: 10vh;\n        left: -17.5vh;\n}\n#app .cheeks-box .cheek.left h1 .char1[data-v-7ba5bd90] {\n          transform: rotate(6deg);\n}\n#app .cheeks-box .cheek.left h1 .char2[data-v-7ba5bd90] {\n          transform: rotate(12deg);\n}\n#app .cheeks-box .cheek.left h1 .char3[data-v-7ba5bd90] {\n          transform: rotate(18deg);\n}\n#app .cheeks-box .cheek.left h1 .char4[data-v-7ba5bd90] {\n          transform: rotate(24deg);\n}\n#app .cheeks-box .cheek.left h1 .char5[data-v-7ba5bd90] {\n          transform: rotate(30deg);\n}\n#app .cheeks-box .cheek.left h1 .char6[data-v-7ba5bd90] {\n          transform: rotate(36deg);\n}\n#app .cheeks-box .cheek.left h1 .char7[data-v-7ba5bd90] {\n          transform: rotate(42deg);\n}\n#app .cheeks-box .cheek.left h1 .char8[data-v-7ba5bd90] {\n          transform: rotate(48deg);\n}\n#app .cheeks-box .cheek.right[data-v-7ba5bd90] {\n        bottom: 10vh;\n        right: -17.5vh;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT84MGNlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMscUdBQWdEO0FBQ25GO0FBQ0EsY0FBYyxRQUFTLDBCQUEwQixzQ0FBc0MsR0FBRyxvQ0FBb0Msa0JBQWtCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHVCQUF1QixHQUFHLDJDQUEyQyx3QkFBd0IseUJBQXlCLDJCQUEyQixHQUFHLCtDQUErQyw2QkFBNkIsR0FBRyxxQ0FBcUMseUJBQXlCLGtCQUFrQixnQkFBZ0IsMEJBQTBCLEdBQUcsNENBQTRDLG9CQUFvQixxQkFBcUIsMkJBQTJCLDZDQUE2QywyQkFBMkIsR0FBRyxnREFBZ0QsNkJBQTZCLHNCQUFzQix1QkFBdUIsbUJBQW1CLG9CQUFvQixHQUFHLGlEQUFpRCx1QkFBdUIsd0JBQXdCLEdBQUcsMkRBQTJELG9DQUFvQyxHQUFHLDJEQUEyRCxxQ0FBcUMsR0FBRywyREFBMkQscUNBQXFDLEdBQUcsMkRBQTJELHFDQUFxQyxHQUFHLDJEQUEyRCxxQ0FBcUMsR0FBRywyREFBMkQscUNBQXFDLEdBQUcsMkRBQTJELHFDQUFxQyxHQUFHLDJEQUEyRCxxQ0FBcUMsR0FBRyxrREFBa0QsdUJBQXVCLHlCQUF5QixHQUFHOzs7Ozs7Ozs7Ozs7OztBQ0Y1MkQ7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsZ0JBQWdCO0FBQ3ZELE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxvQkFBb0I7QUFDbkMsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQyIsImZpbGUiOiJtYWluLmRkMWYyNTBmZThjODcwY2RkNjk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNhcHBbZGF0YS12LTdiYTViZDkwXSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxufVxcbiNhcHAgLnRpdGxlLWJveFtkYXRhLXYtN2JhNWJkOTBdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1dmg7XFxufVxcbiNhcHAgLnRpdGxlLWJveCAudGl0bGVbZGF0YS12LTdiYTViZDkwXSB7XFxuICAgICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jYXBwIC50aXRsZS1ib3ggLnRpdGxlLnRvcFtkYXRhLXYtN2JhNWJkOTBdIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuI2FwcCAuY2hlZWtzLWJveFtkYXRhLXYtN2JhNWJkOTBdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHZoO1xcbn1cXG4jYXBwIC5jaGVla3MtYm94IC5jaGVla1tkYXRhLXYtN2JhNWJkOTBdIHtcXG4gICAgICB3aWR0aDogMzV2aDtcXG4gICAgICBoZWlnaHQ6IDM1dmg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbiNhcHAgLmNoZWVrcy1ib3ggLmNoZWVrIGltZ1tkYXRhLXYtN2JhNWJkOTBdIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAxMjAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMjAlO1xcbiAgICAgICAgdG9wOiAxMCU7XFxuICAgICAgICBsZWZ0OiAxMCU7XFxufVxcbiNhcHAgLmNoZWVrcy1ib3ggLmNoZWVrLmxlZnRbZGF0YS12LTdiYTViZDkwXSB7XFxuICAgICAgICBib3R0b206IDEwdmg7XFxuICAgICAgICBsZWZ0OiAtMTcuNXZoO1xcbn1cXG4jYXBwIC5jaGVla3MtYm94IC5jaGVlay5sZWZ0IGgxIC5jaGFyMVtkYXRhLXYtN2JhNWJkOTBdIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNmRlZyk7XFxufVxcbiNhcHAgLmNoZWVrcy1ib3ggLmNoZWVrLmxlZnQgaDEgLmNoYXIyW2RhdGEtdi03YmE1YmQ5MF0ge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XFxufVxcbiNhcHAgLmNoZWVrcy1ib3ggLmNoZWVrLmxlZnQgaDEgLmNoYXIzW2RhdGEtdi03YmE1YmQ5MF0ge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XFxufVxcbiNhcHAgLmNoZWVrcy1ib3ggLmNoZWVrLmxlZnQgaDEgLmNoYXI0W2RhdGEtdi03YmE1YmQ5MF0ge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNGRlZyk7XFxufVxcbiNhcHAgLmNoZWVrcy1ib3ggLmNoZWVrLmxlZnQgaDEgLmNoYXI1W2RhdGEtdi03YmE1YmQ5MF0ge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XFxufVxcbiNhcHAgLmNoZWVrcy1ib3ggLmNoZWVrLmxlZnQgaDEgLmNoYXI2W2RhdGEtdi03YmE1YmQ5MF0ge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XFxufVxcbiNhcHAgLmNoZWVrcy1ib3ggLmNoZWVrLmxlZnQgaDEgLmNoYXI3W2RhdGEtdi03YmE1YmQ5MF0ge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MmRlZyk7XFxufVxcbiNhcHAgLmNoZWVrcy1ib3ggLmNoZWVrLmxlZnQgaDEgLmNoYXI4W2RhdGEtdi03YmE1YmQ5MF0ge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0OGRlZyk7XFxufVxcbiNhcHAgLmNoZWVrcy1ib3ggLmNoZWVrLnJpZ2h0W2RhdGEtdi03YmE1YmQ5MF0ge1xcbiAgICAgICAgYm90dG9tOiAxMHZoO1xcbiAgICAgICAgcmlnaHQ6IC0xNy41dmg7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iXSwic291cmNlUm9vdCI6IiJ9