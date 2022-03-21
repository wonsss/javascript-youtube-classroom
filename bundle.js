/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/constants/errorMessages.js":
/*!****************************************!*\
  !*** ./src/constants/errorMessages.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ERROR_MESSAGES = Object.freeze({
  EMPTY: '입력된 검색어가 없습니다. 검색어를 입력해주세요.',
  NOT_FOUND: '검색된 결과가 없습니다. 다른 검색어를 입력해주세요.',
  EXCEED_LIMIT: '영상을 100개 이상 저장할 수 없습니다. 100개 미만의 영상만 저장해주세요.'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ERROR_MESSAGES);

/***/ }),

/***/ "./src/constants/successMessages.js":
/*!******************************************!*\
  !*** ./src/constants/successMessages.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SUCCESS_MESSAGE = Object.freeze({
  SAVED: '선택한 영상을 저장하였습니다',
  MOVED_TO_WATCHED: '선택한 영상을 본 영상 목록으로 이동하였습니다',
  MOVED_TO_UNWATCHED: '선택한 영상을 볼 영상 목록으로 이동하였습니다',
  DELETED: '선택한 영상을 삭제하였습니다'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SUCCESS_MESSAGE);

/***/ }),

/***/ "./src/constants/video.js":
/*!********************************!*\
  !*** ./src/constants/video.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var VIDEO = Object.freeze({
  LIMIT_SAVE_VIDEO_COUNT: 99,
  MINIMUM_FETCHED_VIDEO_COUNT: 10
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VIDEO);

/***/ }),

/***/ "./src/constants/youtubeApi.js":
/*!*************************************!*\
  !*** ./src/constants/youtubeApi.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REDIRECT_SERVER_HOST": () => (/* binding */ REDIRECT_SERVER_HOST),
/* harmony export */   "YOUTUBE_SEARCH_PATH": () => (/* binding */ YOUTUBE_SEARCH_PATH)
/* harmony export */ });
var REDIRECT_SERVER_HOST = 'https://priceless-euclid-bf53ed.netlify.app/';
var YOUTUBE_SEARCH_PATH = 'youtube/v3/search';

/***/ }),

/***/ "./src/js/Controller.js":
/*!******************************!*\
  !*** ./src/js/Controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_MainView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/MainView.js */ "./src/js/views/MainView.js");
/* harmony import */ var _views_TabView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/TabView.js */ "./src/js/views/TabView.js");
/* harmony import */ var _views_SearchModalView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/SearchModalView.js */ "./src/js/views/SearchModalView.js");
/* harmony import */ var _views_SearchInputView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/SearchInputView.js */ "./src/js/views/SearchInputView.js");
/* harmony import */ var _views_SearchResultView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/SearchResultView.js */ "./src/js/views/SearchResultView.js");
/* harmony import */ var _models_Video_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/Video.js */ "./src/js/models/Video.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/event.js */ "./src/js/utils/event.js");
/* harmony import */ var _constants_video_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants/video.js */ "./src/constants/video.js");
/* harmony import */ var _utils_validator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/validator.js */ "./src/js/utils/validator.js");
/* harmony import */ var _utils_fetch_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/fetch.js */ "./src/js/utils/fetch.js");
/* harmony import */ var _constants_successMessages_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constants/successMessages.js */ "./src/constants/successMessages.js");






function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }













var _subscribeViewEvents = /*#__PURE__*/new WeakSet();

var _searchVideo = /*#__PURE__*/new WeakSet();

var _saveKeyword = /*#__PURE__*/new WeakSet();

var _scrollNextVideos = /*#__PURE__*/new WeakSet();

var _saveVideo = /*#__PURE__*/new WeakSet();

var _renderUnwatchedTab = /*#__PURE__*/new WeakSet();

var _renderWatchedTab = /*#__PURE__*/new WeakSet();

var _checkWatchedVideo = /*#__PURE__*/new WeakMap();

var _checkUnwatchedVideo = /*#__PURE__*/new WeakSet();

var _checkDeleteVideo = /*#__PURE__*/new WeakSet();

var _deleteVideo = /*#__PURE__*/new WeakMap();

var _showEmpty = /*#__PURE__*/new WeakSet();

var Controller = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function Controller() {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Controller);

  _classPrivateMethodInitSpec(this, _showEmpty);

  _classPrivateMethodInitSpec(this, _checkDeleteVideo);

  _classPrivateMethodInitSpec(this, _checkUnwatchedVideo);

  _classPrivateMethodInitSpec(this, _renderWatchedTab);

  _classPrivateMethodInitSpec(this, _renderUnwatchedTab);

  _classPrivateMethodInitSpec(this, _saveVideo);

  _classPrivateMethodInitSpec(this, _scrollNextVideos);

  _classPrivateMethodInitSpec(this, _saveKeyword);

  _classPrivateMethodInitSpec(this, _searchVideo);

  _classPrivateMethodInitSpec(this, _subscribeViewEvents);

  _classPrivateFieldInitSpec(this, _checkWatchedVideo, {
    writable: true,
    value: function value(event) {
      var watchedVideoId = event.detail.videoId;

      _this.video.setWatchedVideoItem(watchedVideoId);

      _this.tabView.removeVideo(watchedVideoId);

      _this.mainView.toastNotification('success', _constants_successMessages_js__WEBPACK_IMPORTED_MODULE_15__["default"].MOVED_TO_WATCHED);

      _classPrivateMethodGet(_this, _showEmpty, _showEmpty2).call(_this);
    }
  });

  _classPrivateFieldInitSpec(this, _deleteVideo, {
    writable: true,
    value: function value(event) {
      var deletedVideoId = event.detail.videoId;

      _this.video.setDeletedVideoItem(deletedVideoId);

      _this.tabView.removeVideo(deletedVideoId);

      _this.tabView.hideConfirmModal();

      _this.mainView.toastNotification('success', _constants_successMessages_js__WEBPACK_IMPORTED_MODULE_15__["default"].DELETED);

      _classPrivateMethodGet(_this, _showEmpty, _showEmpty2).call(_this);
    }
  });

  this.video = new _models_Video_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
  this.mainView = new _views_MainView_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
  this.tabView = new _views_TabView_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
  this.searchModalView = new _views_SearchModalView_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
  this.searchInputView = new _views_SearchInputView_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
  this.searchResultView = new _views_SearchResultView_js__WEBPACK_IMPORTED_MODULE_9__["default"]();

  _classPrivateMethodGet(this, _subscribeViewEvents, _subscribeViewEvents2).call(this);

  _classPrivateMethodGet(this, _renderUnwatchedTab, _renderUnwatchedTab2).call(this);
});

function _subscribeViewEvents2() {
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_11__.on)(this.searchInputView.$searchButton, '@search', _classPrivateMethodGet(this, _searchVideo, _searchVideo2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_11__.on)(this.searchResultView.$searchTarget, '@scroll-bottom', _classPrivateMethodGet(this, _scrollNextVideos, _scrollNextVideos2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_11__.on)(this.searchResultView.$searchTarget, '@save-video', _classPrivateMethodGet(this, _saveVideo, _saveVideo2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_11__.on)(this.tabView.$unwatchedButton, '@show-unwatched-tab', _classPrivateMethodGet(this, _renderUnwatchedTab, _renderUnwatchedTab2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_11__.on)(this.tabView.$watchedButton, '@show-watched-tab', _classPrivateMethodGet(this, _renderWatchedTab, _renderWatchedTab2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_11__.on)(this.tabView.$unwatchedTab, '@check-watched', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _checkWatchedVideo));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_11__.on)(this.tabView.$watchedTab, '@check-unwatched', _classPrivateMethodGet(this, _checkUnwatchedVideo, _checkUnwatchedVideo2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_11__.on)(this.tabView.$unwatchedTab, '@check-delete', _classPrivateMethodGet(this, _checkDeleteVideo, _checkDeleteVideo2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_11__.on)(this.tabView.$watchedTab, '@check-delete', _classPrivateMethodGet(this, _checkDeleteVideo, _checkDeleteVideo2).bind(this));
}

function _searchVideo2(_x) {
  return _searchVideo3.apply(this, arguments);
}

function _searchVideo3() {
  _searchVideo3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(event) {
    var keyword, fetchedVideos;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            this.searchResultView.removeVideo();
            keyword = event.detail.keyword;
            _context.prev = 2;
            this.video.keyword = keyword;
            _context.next = 10;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](2);
            this.mainView.toastNotification('error', _context.t0.message);
            return _context.abrupt("return");

          case 10:
            this.searchResultView.showSkeleton();
            _context.next = 13;
            return (0,_utils_fetch_js__WEBPACK_IMPORTED_MODULE_14__.fetchYoutubeApi)(keyword);

          case 13:
            fetchedVideos = _context.sent;
            _context.prev = 14;
            this.video.setVideoInfo(fetchedVideos);
            _context.next = 24;
            break;

          case 18:
            _context.prev = 18;
            _context.t1 = _context["catch"](14);
            this.searchResultView.removeVideo();
            this.searchResultView.showNotFound();
            this.mainView.toastNotification('error', _context.t1.message);
            return _context.abrupt("return");

          case 24:
            this.video.accumulateVideoItems();
            this.video.updateNewVideoItems();
            this.searchResultView.hideNotFound();

            try {
              this.searchResultView.renderVideo(this.video.newVideoItems);
            } catch (error) {
              this.searchResultView.hideSkeleton();
            }

            this.searchResultView.startObserve();

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 6], [14, 18]]);
  }));
  return _searchVideo3.apply(this, arguments);
}

function _saveKeyword2(keyword) {
  try {
    this.video.keyword = keyword;
  } catch (error) {
    this.mainView.toastNotification('error', error.message);
  }
}

function _scrollNextVideos2() {
  return _scrollNextVideos3.apply(this, arguments);
}

function _scrollNextVideos3() {
  _scrollNextVideos3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
    var fetchedVideos;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            this.searchResultView.stopObserve();
            this.searchResultView.showSkeleton();
            _context2.next = 4;
            return (0,_utils_fetch_js__WEBPACK_IMPORTED_MODULE_14__.fetchYoutubeApi)(this.video.keyword, this.video.nextPageToken);

          case 4:
            fetchedVideos = _context2.sent;
            _context2.prev = 5;
            this.video.setVideoInfo(fetchedVideos);
            _context2.next = 14;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](5);
            this.searchResultView.removeVideo();
            this.mainView.toastNotification('error', _context2.t0.message);
            return _context2.abrupt("return");

          case 14:
            this.video.accumulateVideoItems();
            this.video.updateNewVideoItems();

            if (!(this.video.newVideoItems.length < _constants_video_js__WEBPACK_IMPORTED_MODULE_12__["default"].MINIMUM_FETCHED_VIDEO_COUNT)) {
              _context2.next = 18;
              break;
            }

            return _context2.abrupt("return");

          case 18:
            try {
              this.searchResultView.renderVideo(this.video.newVideoItems);
            } catch (error) {
              this.searchResultView.hideSkeleton();
            }

            this.searchResultView.startObserve();

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[5, 9]]);
  }));
  return _scrollNextVideos3.apply(this, arguments);
}

function _saveVideo2(event) {
  try {
    (0,_utils_validator_js__WEBPACK_IMPORTED_MODULE_13__.checkExceedLimit)(this.video.savedVideoItems);
  } catch (error) {
    this.mainView.toastNotification('error', error.message);
    return;
  }

  this.searchResultView.changeSaveButtonStyle(event.detail.buttonElement);
  var savedId = event.detail.savedId;
  this.video.setItemsLocalStorage(savedId);
  this.mainView.toastNotification('success', _constants_successMessages_js__WEBPACK_IMPORTED_MODULE_15__["default"].SAVED);
}

function _renderUnwatchedTab2() {
  var unwatchedVideoItems = this.video.savedVideoItems.filter(function (item) {
    return !item.watched;
  });
  this.tabView.renderUnwatchedVideoItems(unwatchedVideoItems);
  this.tabView.showUnwatchedTab();

  if (unwatchedVideoItems.length === 0) {
    this.tabView.showEmptyTab();
  } else {
    this.tabView.hideEmptyTab();
  }
}

function _renderWatchedTab2() {
  var watchedVideoItems = this.video.savedVideoItems.filter(function (item) {
    return item.watched;
  });
  this.tabView.renderWatchedVideoItems(watchedVideoItems, this.tabView.$watchedTab);
  this.tabView.showWatchedTab();

  if (watchedVideoItems.length === 0) {
    this.tabView.showEmptyTab();
  } else {
    this.tabView.hideEmptyTab();
  }
}

function _checkUnwatchedVideo2(event) {
  var unwatchedVideoId = event.detail.videoId;
  this.video.setUnwatchedVideoItem(unwatchedVideoId);
  this.tabView.removeVideo(unwatchedVideoId);
  this.mainView.toastNotification('success', _constants_successMessages_js__WEBPACK_IMPORTED_MODULE_15__["default"].MOVED_TO_UNWATCHED);

  _classPrivateMethodGet(this, _showEmpty, _showEmpty2).call(this);
}

function _checkDeleteVideo2(event) {
  var videoId = event.detail.videoId;
  var title = this.video.getVideoTitleBy(videoId);
  this.tabView.confirmDelete(videoId, title);
  this.tabView.$savedListContainer.addEventListener('@delete-video', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _deleteVideo), {
    once: true
  });
}

function _showEmpty2() {
  var unwatchedVideoItems = this.video.savedVideoItems.filter(function (item) {
    return !item.watched;
  });
  var watchedVideoItems = this.video.savedVideoItems.filter(function (item) {
    return item.watched;
  });

  if (unwatchedVideoItems.length !== 0 && watchedVideoItems.length !== 0) {
    this.tabView.hideEmptyTab();
  } else {
    this.tabView.showEmptyTab();
  }
}



/***/ }),

/***/ "./src/js/models/Video.js":
/*!********************************!*\
  !*** ./src/js/models/Video.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/validator */ "./src/js/utils/validator.js");






function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _keyword = /*#__PURE__*/new WeakMap();

var _fetchedVideos = /*#__PURE__*/new WeakMap();

var _newVideoItems = /*#__PURE__*/new WeakMap();

var _allVideoItems = /*#__PURE__*/new WeakMap();

var _nextPageToken = /*#__PURE__*/new WeakMap();

var _savedVideoItems = /*#__PURE__*/new WeakMap();

var _getSavedNewItem = /*#__PURE__*/new WeakSet();

var _saveLocalStorage = /*#__PURE__*/new WeakSet();

var Video = /*#__PURE__*/function () {
  // 검색어
  // length:10, type:array, fetch한 원본(items, nextPageToken)
  //  length:10, type:array, search해서 첫 10개, 스크롤 때마다 10개 추가되는 items (origin: #fetchedVideos), saved 속성이 바뀌면 override가 된다.
  // length:미상, type:array, 스크롤할 때마다 해당 newVideoItems 10개씩 누적되는 items
  // fetch하기 위한 다음 페이지 Token (origin: #fetchedVideos)
  // length:미상(최대100), type:array,저장된 비디오 items, localStorage 상호작용
  function Video() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Video);

    _classPrivateMethodInitSpec(this, _saveLocalStorage);

    _classPrivateMethodInitSpec(this, _getSavedNewItem);

    _classPrivateFieldInitSpec(this, _keyword, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _fetchedVideos, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _newVideoItems, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _allVideoItems, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _nextPageToken, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _savedVideoItems, {
      writable: true,
      value: void 0
    });

    this.savedIdList = [];

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _savedVideoItems, this.getItemsLocalStorage());
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Video, [{
    key: "keyword",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _keyword);
    },
    set: function set(value) {
      (0,_utils_validator__WEBPACK_IMPORTED_MODULE_5__.checkEmpty)(value);

      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _keyword, value);
    }
  }, {
    key: "nextPageToken",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _nextPageToken);
    }
  }, {
    key: "newVideoItems",
    get: function get() {
      (0,_utils_validator__WEBPACK_IMPORTED_MODULE_5__.checkLengthExist)((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _newVideoItems));
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _newVideoItems);
    }
  }, {
    key: "savedVideoItems",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _savedVideoItems);
    },
    set: function set(items) {
      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _savedVideoItems, items);
    }
  }, {
    key: "accumulateVideoItems",
    value: function accumulateVideoItems() {
      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _allVideoItems, [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _allVideoItems)), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _newVideoItems))));
    }
  }, {
    key: "setItemsLocalStorage",
    value: function setItemsLocalStorage(savedId) {
      var _iterator = _createForOfIteratorHelper((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _allVideoItems)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (item.videoId === savedId) {
            item.saved = true;
            var allSavedVideoItems = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _savedVideoItems)), [item]);

            (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _savedVideoItems, allSavedVideoItems);

            localStorage.setItem('saved-video', JSON.stringify(allSavedVideoItems));
            return;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "getItemsLocalStorage",
    value: function getItemsLocalStorage() {
      var _JSON$parse;

      return (_JSON$parse = JSON.parse(localStorage.getItem('saved-video'))) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];
    }
  }, {
    key: "updateNewVideoItems",
    value: function updateNewVideoItems() {
      var updatedNewVideoItems = [];

      var _iterator2 = _createForOfIteratorHelper((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _newVideoItems)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var newItem = _step2.value;

          var savedNewItem = _classPrivateMethodGet(this, _getSavedNewItem, _getSavedNewItem2).call(this, newItem);

          updatedNewVideoItems.push(savedNewItem);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (updatedNewVideoItems.length) {
        (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _newVideoItems, updatedNewVideoItems);
      }
    }
  }, {
    key: "setVideoInfo",
    value: function setVideoInfo(fetchedVideos) {
      (0,_utils_validator__WEBPACK_IMPORTED_MODULE_5__.checkLengthExist)(fetchedVideos.items);

      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _newVideoItems, fetchedVideos.items.map(function (item) {
        return {
          videoId: item.id.videoId,
          description: item.snippet.description,
          channelId: item.snippet.channelId,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          publishTime: item.snippet.publishTime,
          thumbnailUrl: item.snippet.thumbnails.high.url,
          saved: false,
          watched: false
        };
      }));

      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _nextPageToken, fetchedVideos.nextPageToken);
    }
  }, {
    key: "setWatchedVideoItem",
    value: function setWatchedVideoItem(watchedVideoId) {
      this.savedVideoItems = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _savedVideoItems).map(function (item) {
        var newItem = item;

        if (newItem.videoId === watchedVideoId) {
          newItem.watched = true;
        }

        return newItem;
      });

      _classPrivateMethodGet(this, _saveLocalStorage, _saveLocalStorage2).call(this);
    }
  }, {
    key: "setUnwatchedVideoItem",
    value: function setUnwatchedVideoItem(watchedVideoId) {
      this.savedVideoItems = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _savedVideoItems).map(function (item) {
        var newItem = item;

        if (newItem.videoId === watchedVideoId) {
          newItem.watched = false;
        }

        return newItem;
      });

      _classPrivateMethodGet(this, _saveLocalStorage, _saveLocalStorage2).call(this);
    }
  }, {
    key: "setDeletedVideoItem",
    value: function setDeletedVideoItem(deletedVideoId) {
      this.savedVideoItems = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _savedVideoItems).filter(function (item) {
        return item.videoId !== deletedVideoId;
      });

      _classPrivateMethodGet(this, _saveLocalStorage, _saveLocalStorage2).call(this);
    }
  }, {
    key: "getVideoTitleBy",
    value: function getVideoTitleBy(videoId) {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _savedVideoItems).find(function (item) {
        return item.videoId === videoId;
      }).title;
    }
  }]);

  return Video;
}();

function _getSavedNewItem2(newItem) {
  var _iterator3 = _createForOfIteratorHelper((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _savedVideoItems)),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var savedItem = _step3.value;

      if (newItem.videoId === savedItem.videoId) {
        return savedItem;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return newItem;
}

function _saveLocalStorage2() {
  localStorage.setItem('saved-video', JSON.stringify(this.savedVideoItems));
}



/***/ }),

/***/ "./src/js/utils/date.js":
/*!******************************!*\
  !*** ./src/js/utils/date.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var getRelativeDate = function getRelativeDate(date) {
  var time = date.indexOf('Z') ? new Date(date.replace('Z', '')) : new Date(date);
  var timeFormats = [[60, '초', 1], // 60
  [3600, '분', 60], // 60*60, 60
  [86400, '시간', 3600], // 60*60*24, 60*60
  [604800, '일', 86400], // 60*60*24*7, 60*60*24
  [2419200, '주', 604800], // 60*60*24*7*4, 60*60*24*7
  [29030400, '개월', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
  [2903040000, '년', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
  [58060800000, '백년', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  var seconds = (new Date() - time) / 1000;
  var token = '전';
  var i = 0;

  while (true) {
    var format = timeFormats[i += 1];

    if (Math.floor(seconds / format[2]) === 0) {
      return '방금';
    }

    if (seconds < format[0]) {
      return "".concat(Math.floor(seconds / format[2])).concat(format[1], " ").concat(token);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRelativeDate);

/***/ }),

/***/ "./src/js/utils/debounce.js":
/*!**********************************!*\
  !*** ./src/js/utils/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var debounce = function debounce(callback, delay) {
  var timerId;
  return function (event) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, event);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);

/***/ }),

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$)
/* harmony export */ });
var $ = function $(selector) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return scope.querySelector(selector);
};
var $$ = function $$(selector) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return Array.from(scope.querySelectorAll(selector));
};

/***/ }),

/***/ "./src/js/utils/event.js":
/*!*******************************!*\
  !*** ./src/js/utils/event.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emit": () => (/* binding */ emit),
/* harmony export */   "on": () => (/* binding */ on)
/* harmony export */ });
// emit은 view에서 쓴다. element 커스텀이벤트를 붙여준다.
var emit = function emit(target, eventName, detail) {
  var event = new CustomEvent(eventName, {
    detail: detail
  });
  target.dispatchEvent(event);
};
var on = function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
};

/***/ }),

/***/ "./src/js/utils/fetch.js":
/*!*******************************!*\
  !*** ./src/js/utils/fetch.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchYoutubeApi": () => (/* binding */ fetchYoutubeApi)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_youtubeApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/youtubeApi */ "./src/constants/youtubeApi.js");


 // eslint-disable-next-line import/prefer-default-export

var fetchYoutubeApi = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(query, nextPageToken) {
    var url, parameters, response, body;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            url = new URL(_constants_youtubeApi__WEBPACK_IMPORTED_MODULE_2__.YOUTUBE_SEARCH_PATH, _constants_youtubeApi__WEBPACK_IMPORTED_MODULE_2__.REDIRECT_SERVER_HOST);
            parameters = new URLSearchParams({
              part: 'snippet',
              type: 'video',
              maxResults: 10,
              regionCode: 'kr',
              safeSearch: 'strict',
              pageToken: nextPageToken || '',
              q: query
            });
            url.search = parameters.toString();
            _context.next = 6;
            return fetch(url, {
              method: 'GET'
            });

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            body = _context.sent;

            if (response.ok) {
              _context.next = 12;
              break;
            }

            throw new Error(body.error.message);

          case 12:
            return _context.abrupt("return", body);

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function fetchYoutubeApi(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/js/utils/validator.js":
/*!***********************************!*\
  !*** ./src/js/utils/validator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkEmpty": () => (/* binding */ checkEmpty),
/* harmony export */   "checkExceedLimit": () => (/* binding */ checkExceedLimit),
/* harmony export */   "checkLengthExist": () => (/* binding */ checkLengthExist)
/* harmony export */ });
/* harmony import */ var _constants_errorMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/errorMessages */ "./src/constants/errorMessages.js");
/* harmony import */ var _constants_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/video */ "./src/constants/video.js");



var isEmpty = function isEmpty(target) {
  return target === '';
};

var isLengthZero = function isLengthZero(target) {
  return target.length === 0;
};

var isUndefined = function isUndefined(target) {
  return typeof target === 'undefined';
};

var checkEmpty = function checkEmpty(value) {
  if (isEmpty(value)) {
    throw new Error(_constants_errorMessages__WEBPACK_IMPORTED_MODULE_0__["default"].EMPTY);
  }
};
var checkLengthExist = function checkLengthExist(value) {
  if (isUndefined(value)) {
    throw new Error(_constants_errorMessages__WEBPACK_IMPORTED_MODULE_0__["default"].NOT_FOUND);
  }

  if (isLengthZero(value)) {
    throw new Error(_constants_errorMessages__WEBPACK_IMPORTED_MODULE_0__["default"].NOT_FOUND);
  }
};
var checkExceedLimit = function checkExceedLimit(items) {
  if (items.length >= _constants_video__WEBPACK_IMPORTED_MODULE_1__["default"].LIMIT_SAVE_VIDEO_COUNT) {
    throw new Error(_constants_errorMessages__WEBPACK_IMPORTED_MODULE_0__["default"].EXCEED_LIMIT);
  }
};

/***/ }),

/***/ "./src/js/views/MainView.js":
/*!**********************************!*\
  !*** ./src/js/views/MainView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");




function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




var _bindEvents = /*#__PURE__*/new WeakSet();

var _openSearchModal = /*#__PURE__*/new WeakSet();

var _watchDarkMode = /*#__PURE__*/new WeakSet();

var _switchTheme = /*#__PURE__*/new WeakSet();

var MainView = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function MainView() {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MainView);

  _classPrivateMethodInitSpec(this, _switchTheme);

  _classPrivateMethodInitSpec(this, _watchDarkMode);

  _classPrivateMethodInitSpec(this, _openSearchModal);

  _classPrivateMethodInitSpec(this, _bindEvents);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "toastNotification", function (state, message) {
    var hideTimeout = null;
    var $toastModal = "\n      <div class=\"toast toast--visible toast--".concat(state, "\">").concat(message, "</div>\n    ");

    _this.$toastWrapper.insertAdjacentHTML('beforeEnd', $toastModal);

    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(function () {
      (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)(".toast--".concat(state)).classList.remove("toast--visible");
      (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)(".toast--".concat(state)).remove();
    }, 3000);
  });

  this.$searchModalButton = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.nav-right__button');
  this.$modalContainer = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.modal-container');
  this.$toastWrapper = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.toast-wrapper');
  this.$toggleSwitch = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.classroom__toggle');

  _classPrivateMethodGet(this, _bindEvents, _bindEvents2).call(this);

  _classPrivateMethodGet(this, _watchDarkMode, _watchDarkMode2).call(this);
});

function _bindEvents2() {
  var _this2 = this;

  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.on)(this.$searchModalButton, 'click', _classPrivateMethodGet(this, _openSearchModal, _openSearchModal2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.on)(this.$toggleSwitch, 'change', function (event) {
    return _classPrivateMethodGet(_this2, _switchTheme, _switchTheme2).call(_this2, event);
  });
}

function _openSearchModal2() {
  this.$modalContainer.classList.remove('hide');
}

function _watchDarkMode2() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('user-theme', 'dark');
    this.$toggleSwitch.checked = true;
  } else {
    document.documentElement.setAttribute('user-theme', 'light');
    this.$toggleSwitch.checked = false;
  }
}

function _switchTheme2(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('user-theme', 'dark');
    this.$toggleSwitch.checked = true;
  } else {
    document.documentElement.setAttribute('user-theme', 'light');
    this.$toggleSwitch.checked = false;
  }
}



/***/ }),

/***/ "./src/js/views/SearchInputView.js":
/*!*****************************************!*\
  !*** ./src/js/views/SearchInputView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchInputView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/debounce.js */ "./src/js/utils/debounce.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");



function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _bindEvents = /*#__PURE__*/new WeakSet();

var _handleKeypress = /*#__PURE__*/new WeakSet();

var _handleClick = /*#__PURE__*/new WeakSet();

var SearchInputView = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function SearchInputView() {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SearchInputView);

  _classPrivateMethodInitSpec(this, _handleClick);

  _classPrivateMethodInitSpec(this, _handleKeypress);

  _classPrivateMethodInitSpec(this, _bindEvents);

  this.$searchInputKeyword = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.search-input__keyword');
  this.$searchButton = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.search-input__search-button');

  _classPrivateMethodGet(this, _bindEvents, _bindEvents2).call(this);
});

function _bindEvents2() {
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.on)(this.$searchButton, 'click', (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_classPrivateMethodGet(this, _handleClick, _handleClick2).bind(this), 500));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.on)(this.$searchInputKeyword, 'keypress', (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_classPrivateMethodGet(this, _handleKeypress, _handleKeypress2).bind(this), 500));
}

function _handleKeypress2(event) {
  if (event.key === 'Enter') {
    _classPrivateMethodGet(this, _handleClick, _handleClick2).call(this);
  }
}

function _handleClick2() {
  var keyword = this.$searchInputKeyword.value;
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(this.$searchButton, '@search', {
    keyword: keyword
  });
}



/***/ }),

/***/ "./src/js/views/SearchModalView.js":
/*!*****************************************!*\
  !*** ./src/js/views/SearchModalView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchModalView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");



function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




var _bindEvents = /*#__PURE__*/new WeakSet();

var _closeSearchModal = /*#__PURE__*/new WeakSet();

var SearchModalView = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function SearchModalView() {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SearchModalView);

  _classPrivateMethodInitSpec(this, _closeSearchModal);

  _classPrivateMethodInitSpec(this, _bindEvents);

  this.$modalContainer = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('.modal-container');
  this.$dimmer = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('.dimmer');
  this.$closeButton = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('.x-shape');
  this.$unwatchedButton = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('.nav-left__button--unwatched');

  _classPrivateMethodGet(this, _bindEvents, _bindEvents2).call(this);
});

function _bindEvents2() {
  var _this = this;

  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_3__.on)(this.$closeButton, 'click', _classPrivateMethodGet(this, _closeSearchModal, _closeSearchModal2).bind(this));
  window.addEventListener('click', function (event) {
    return event.target === _this.$dimmer ? _classPrivateMethodGet(_this, _closeSearchModal, _closeSearchModal2).call(_this) : false;
  });
}

function _closeSearchModal2() {
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_3__.emit)(this.$unwatchedButton, '@show-unwatched-tab');
  this.$modalContainer.classList.add('hide');
}



/***/ }),

/***/ "./src/js/views/SearchResultView.js":
/*!******************************************!*\
  !*** ./src/js/views/SearchResultView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchResultView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Template.js */ "./src/js/views/Template.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");
/* harmony import */ var _utils_date_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/date.js */ "./src/js/utils/date.js");








var SearchResultView = /*#__PURE__*/function () {
  function SearchResultView() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SearchResultView);

    this.template = new _Template_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.$videoList = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$)('.video-list');
    this.$searchTarget = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$)('.search-target');
    this.$searchNoResult = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$)('.search-result--no-result');
    this.observer = new IntersectionObserver(function (_ref) {
      var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
          lastEntry = _ref2[0];

      if (lastEntry.isIntersecting) {
        (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_5__.emit)(_this.$searchTarget, '@scroll-bottom');
      }
    }, {
      root: this.$videoList,
      threshold: 1.0
    });
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SearchResultView, [{
    key: "renderVideo",
    value: function renderVideo(newVideoItems) {
      var _this2 = this;

      this.$videoItems = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$$)('.skeleton');
      this.$videoItems.forEach(function ($item, idx) {
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$)('.video-item__thumbnail', $item).setAttribute('srcdoc', _this2.template.getThumbnail(newVideoItems[idx].thumbnailUrl, newVideoItems[idx].videoId));
        $item.classList.remove('skeleton');
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$)('.video-item__title', $item).innerText = newVideoItems[idx].title;
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$)('.video-item__channel-name', $item).innerText = newVideoItems[idx].channelTitle;
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$)('.video-item__published-date', $item).innerText = (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_6__["default"])(newVideoItems[idx].publishTime);
        var $savedButton = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$)('.video-item__save-button', $item);
        $savedButton.innerText = newVideoItems[idx].saved ? '저장됨' : '⬇ 저장';
        $savedButton.classList.add(newVideoItems[idx].saved ? 'saved-button' : 'button');
        $savedButton.disabled = newVideoItems[idx].saved;
        $savedButton.addEventListener('click', _this2.handleSaveButton.bind(_this2));
        $savedButton.dataset.id = newVideoItems[idx].videoId;
      });
    }
  }, {
    key: "hideSkeleton",
    value: function hideSkeleton() {
      (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_4__.$$)('.skeleton').forEach(function (element) {
        element.classList.add('hide');
      });
    }
  }, {
    key: "handleSaveButton",
    value: function handleSaveButton(event) {
      var savedId = event.target.dataset.id;
      var buttonElement = event.target;
      (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_5__.emit)(this.$searchTarget, '@save-video', {
        savedId: savedId,
        buttonElement: buttonElement
      });
    }
  }, {
    key: "changeSaveButtonStyle",
    value: function changeSaveButtonStyle($savedButton) {
      $savedButton.disabled = true;
      $savedButton.textContent = '저장됨';
      $savedButton.classList.add('saved-button');
    }
  }, {
    key: "removeVideo",
    value: function removeVideo() {
      this.$videoList.replaceChildren();
    }
  }, {
    key: "showSkeleton",
    value: function showSkeleton() {
      this.$videoList.insertAdjacentHTML('beforeend', this.template.getSkeleton());
    }
  }, {
    key: "startObserve",
    value: function startObserve() {
      this.observer.observe(this.$videoList.lastElementChild);
    }
  }, {
    key: "stopObserve",
    value: function stopObserve() {
      this.observer.unobserve(this.$videoList.lastElementChild);
    }
  }, {
    key: "showNotFound",
    value: function showNotFound() {
      this.$searchTarget.classList.add('hide');
      this.$searchNoResult.classList.remove('hide');
    }
  }, {
    key: "hideNotFound",
    value: function hideNotFound() {
      this.$searchTarget.classList.remove('hide');
      this.$searchNoResult.classList.add('hide');
    }
  }]);

  return SearchResultView;
}();



/***/ }),

/***/ "./src/js/views/TabView.js":
/*!*********************************!*\
  !*** ./src/js/views/TabView.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Template.js */ "./src/js/views/Template.js");




function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _bindEvents = /*#__PURE__*/new WeakSet();

var _handleUnwatchedButton = /*#__PURE__*/new WeakSet();

var _handleWatchedButton = /*#__PURE__*/new WeakSet();

var _watchVideoButton = /*#__PURE__*/new WeakMap();

var _unwatchVideoButton = /*#__PURE__*/new WeakMap();

var _deleteVideoButton = /*#__PURE__*/new WeakMap();

var _handleCancelButton = /*#__PURE__*/new WeakSet();

var _handleDeleteButton = /*#__PURE__*/new WeakSet();

var _showConfirmModal = /*#__PURE__*/new WeakSet();

var TabView = /*#__PURE__*/function () {
  function TabView() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TabView);

    _classPrivateMethodInitSpec(this, _showConfirmModal);

    _classPrivateMethodInitSpec(this, _handleDeleteButton);

    _classPrivateMethodInitSpec(this, _handleCancelButton);

    _classPrivateMethodInitSpec(this, _handleWatchedButton);

    _classPrivateMethodInitSpec(this, _handleUnwatchedButton);

    _classPrivateMethodInitSpec(this, _bindEvents);

    _classPrivateFieldInitSpec(this, _watchVideoButton, {
      writable: true,
      value: function value(event) {
        if (event.target.classList.contains('video-item__button--watched')) {
          var videoId = event.target.id;
          (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(event.currentTarget, '@check-watched', {
            videoId: videoId
          });
        }
      }
    });

    _classPrivateFieldInitSpec(this, _unwatchVideoButton, {
      writable: true,
      value: function value(event) {
        if (event.target.classList.contains('video-item__button--watched')) {
          var videoId = event.target.id;
          (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(event.currentTarget, '@check-unwatched', {
            videoId: videoId
          });
        }
      }
    });

    _classPrivateFieldInitSpec(this, _deleteVideoButton, {
      writable: true,
      value: function value(event) {
        if (event.target.classList.contains('video-item__button--delete')) {
          var videoId = event.target.id;
          (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(event.currentTarget, '@check-delete', {
            videoId: videoId
          });
        }
      }
    });

    this.template = new _Template_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.$savedListContainer = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.saved-list-container');
    this.$unwatchedButton = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.nav-left__button--unwatched');
    this.$watchedButton = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.nav-left__button--watched');
    this.$unwatchedTab = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.unwatched-tab');
    this.$watchedTab = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.watched-tab');
    this.$confirmModalContainer = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.confirm-modal-container');
    this.$noResult = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.no-result');

    _classPrivateMethodGet(this, _bindEvents, _bindEvents2).call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TabView, [{
    key: "renderUnwatchedVideoItems",
    value: function renderUnwatchedVideoItems(videoItems) {
      var _this = this;

      this.$unwatchedTab.replaceChildren();
      videoItems.forEach(function (item) {
        var $videoItem = _this.template.getVideoItem(item);

        _this.$unwatchedTab.insertAdjacentHTML('beforeend', $videoItem);
      });
      this.$watchedTab.removeEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _unwatchVideoButton));
      this.$unwatchedTab.addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _watchVideoButton));
      this.$watchedTab.removeEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _deleteVideoButton));
      this.$unwatchedTab.addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _deleteVideoButton));
    }
  }, {
    key: "renderWatchedVideoItems",
    value: function renderWatchedVideoItems(videoItems) {
      var _this2 = this;

      this.$watchedTab.replaceChildren();
      videoItems.forEach(function (item) {
        var $videoItem = _this2.template.getVideoItem(item);

        _this2.$watchedTab.insertAdjacentHTML('beforeend', $videoItem);
      });
      (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$$)('.video-item__button--watched').forEach(function (button) {
        return button.classList.add('active');
      });
      this.$unwatchedTab.removeEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _watchVideoButton));
      this.$watchedTab.addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _unwatchVideoButton));
      this.$watchedTab.addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _deleteVideoButton));
      this.$unwatchedTab.removeEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _deleteVideoButton));
    }
  }, {
    key: "showUnwatchedTab",
    value: function showUnwatchedTab() {
      this.$unwatchedButton.classList.add('clicked');
      this.$watchedButton.classList.remove('clicked');
      this.$unwatchedTab.classList.remove('hide');
      this.$watchedTab.classList.add('hide');
    }
  }, {
    key: "showWatchedTab",
    value: function showWatchedTab() {
      this.$unwatchedButton.classList.remove('clicked');
      this.$watchedButton.classList.add('clicked');
      this.$watchedTab.classList.remove('hide');
      this.$unwatchedTab.classList.add('hide');
    }
  }, {
    key: "removeVideo",
    value: function removeVideo(videoId) {
      document.getElementById(videoId).remove();
    }
  }, {
    key: "confirmDelete",
    value: function confirmDelete(videoId, title) {
      var _this3 = this;

      this.$confirmModalContainer.replaceChildren();
      this.$confirmModalContainer.insertAdjacentHTML('beforeend', this.template.getConfirmModal(title));
      (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.confirm-modal__cancel-button').addEventListener('click', function () {
        return _classPrivateMethodGet(_this3, _handleCancelButton, _handleCancelButton2).call(_this3);
      }, {
        once: true
      });
      (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.confirm-modal__delete-button').addEventListener('click', function () {
        return _classPrivateMethodGet(_this3, _handleDeleteButton, _handleDeleteButton2).call(_this3, videoId);
      }, {
        once: true
      });

      _classPrivateMethodGet(this, _showConfirmModal, _showConfirmModal2).call(this);
    }
  }, {
    key: "hideConfirmModal",
    value: function hideConfirmModal() {
      this.$confirmModalContainer.classList.add('hide');
    }
  }, {
    key: "showEmptyTab",
    value: function showEmptyTab() {
      this.$noResult.classList.remove('hide');
    }
  }, {
    key: "hideEmptyTab",
    value: function hideEmptyTab() {
      this.$noResult.classList.add('hide');
    }
  }]);

  return TabView;
}();

function _bindEvents2() {
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.on)(this.$unwatchedButton, 'click', _classPrivateMethodGet(this, _handleUnwatchedButton, _handleUnwatchedButton2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.on)(this.$watchedButton, 'click', _classPrivateMethodGet(this, _handleWatchedButton, _handleWatchedButton2).bind(this));
}

function _handleUnwatchedButton2() {
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(this.$unwatchedButton, '@show-unwatched-tab');
}

function _handleWatchedButton2() {
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(this.$watchedButton, '@show-watched-tab');
}

function _handleCancelButton2() {
  this.hideConfirmModal();
}

function _handleDeleteButton2(videoId) {
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(this.$savedListContainer, '@delete-video', {
    videoId: videoId
  });
}

function _showConfirmModal2() {
  this.$confirmModalContainer.classList.remove('hide');
}



/***/ }),

/***/ "./src/js/views/Template.js":
/*!**********************************!*\
  !*** ./src/js/views/Template.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/date */ "./src/js/utils/date.js");




var Template = /*#__PURE__*/function () {
  function Template() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Template);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Template, [{
    key: "getThumbnail",
    value: function getThumbnail(imgUrl, videoId) {
      return "\n      <style>\n        * {\n          margin: 0;\n          padding: 0;\n          overflow: hidden;\n        }\n\n        body {\n          position: relative; \n        }\n\n        img {\n          object-fit: cover;\n          width: 100%;\n          height: 135px;\n        }\n\n        .play { \n          position: absolute; \n          top: 30%;\n          left: 37%;\n          background: gray;\n          border-radius: 50% / 10%;\n          color: #FFFFFF;\n          font-size: 1em;\n          height: 3em;\n          padding: 0;\n          text-align: center;\n          text-indent: 0.1em;\n          transition: all 150ms ease-out;\n          width: 4em;\n        }\n\n        .play:hover {\n          background: red;\n        }\n\n        .play::before { \n          background: inherit;\n          border-radius: 5% / 50%;\n          bottom: 9%;\n          content: '';\n          left: -5%;\n          position: absolute;\n          right: -5%;\n          top: 9%;\n        }\n\n        .play::after {\n          border-style: solid;\n          border-width: 1em 0 1em 1.732em;\n          border-color: transparent transparent transparent rgba(255, 255, 255, 0.75);\n          content: ' ';\n          font-size: 0.75em;\n          height: 0;\n          margin: -1em 0 0 -0.75em;\n          top: 50%;\n          position: absolute;\n          width: 0;\n        }\n\n      </style>\n      <a href='https://www.youtube.com/embed/".concat(videoId, "?autoplay=1&mute=1'>\n      <img src=").concat(imgUrl, " loading='lazy'>\n        <div class='play'></div>\n      </a>\n    ");
    }
  }, {
    key: "getSkeleton",
    value: function getSkeleton() {
      return "\n      <li class=\"video-item skeleton\">\n        <iframe \n          class=\"video-item__thumbnail\" \n          srcdoc=\"\" \n          frameborder=\"0\"\n          allow=\"autoplay\"\n          loading=\"lazy\"\n          allowfullscreen>\n        </iframe>\n        <h4 class=\"video-item__title\"></h4>\n        <p class=\"video-item__channel-name\"></p>\n        <p class=\"video-item__published-date\"></p>\n        <button data-id=\"\" class=\"video-item__save-button button\"></button>\n      </li>\n    ".repeat(10);
    }
  }, {
    key: "getVideoItem",
    value: function getVideoItem(_ref) {
      var title = _ref.title,
          channelTitle = _ref.channelTitle,
          publishTime = _ref.publishTime,
          videoId = _ref.videoId,
          thumbnailUrl = _ref.thumbnailUrl;
      return "\n      <div id=\"".concat(videoId, "\" class=\"video-item\">\n        <iframe \n          class=\"video-item__thumbnail\" \n          srcdoc=\"").concat(this.getThumbnail(thumbnailUrl, videoId), "\" \n          frameborder=\"0\"\n          allow=\"autoplay\"\n          loading=\"lazy\"\n          allowfullscreen>\n        </iframe>\n        <h4 class=\"video-item__title\">").concat(title, "</h4>\n        <p class=\"video-item__channel-name\">").concat(channelTitle, "</p>\n        <p class=\"video-item__published-date\">").concat((0,_utils_date__WEBPACK_IMPORTED_MODULE_2__["default"])(publishTime), "</p>\n        <button id=\"").concat(videoId, "\" class=\"button video-item__button  video-item__button--watched\">\u2705</button>\n        <button id=\"").concat(videoId, "\" class=\"button video-item__button video-item__button--delete\">\uD83D\uDDD1\uFE0F</button>\n      </div>\n    ");
    }
  }, {
    key: "getConfirmModal",
    value: function getConfirmModal(title) {
      return "\n      <div class=\"confirm-modal\">\n        <form class=\"confirm-modal__form\">\n          <div class=\"confirm-modal__content\">\n            <span class=\"confirm-modal__span\">[".concat(title, "]\n            <br/>\uD574\uB2F9 \uC601\uC0C1\uC744 \uC800\uC7A5 \uBAA9\uB85D\uC5D0\uC11C<br />\uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?</span>\n          \n            <div class=\"confirm-modal__clear-fix\">\n              <button type=\"button\" class=\"button confirm-modal__cancel-button\">\uCDE8\uC18C\uD558\uAE30</button>\n              <button type=\"button\" class=\"button confirm-modal__delete-button\">\uC0AD\uC81C\uD558\uAE30</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    ");
    }
  }]);

  return Template;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  padding: 64px 0;\r\n  font-size: 16px;\r\n  background-color: var(--background);\r\n}\r\n\r\n.classroom-container {\r\n  max-width: 1020px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.classroom-container__title {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 34px;\r\n  line-height: 36px;\r\n  margin-bottom: 64px;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.button {\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  border: none;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n}\r\n\r\n.bottom-target {\r\n  margin-top: 100px;\r\n  height: 100px;\r\n}\r\n\r\n.nav-left {\r\n  float: left;\r\n}\r\n\r\n.nav-right {\r\n  float: right;\r\n}\r\n\r\n.nav-left__button {\r\n  height: 36px;\r\n  padding: 10px;\r\n  background: var(--secondary-lighten);\r\n  border: 1px solid var(--secondary);\r\n}\r\n\r\n.nav-left__button--unwatched {\r\n  margin-right: -3px;\r\n  border-radius: 5px 0 0 5px;\r\n}\r\n\r\n.nav-left__button--watched {\r\n  margin-left: -3px;\r\n  border-radius: 0 5px 5px 0;\r\n}\r\n\r\n.nav-left__button:hover {\r\n  background: var(--active);\r\n}\r\n\r\n.nav-right__button {\r\n  height: 36px;\r\n  padding: 10px;\r\n  background: var(--primary);\r\n  color: var(--white);\r\n}\r\n\r\n.nav-right__button:hover {\r\n  background: var(--primary-darken);\r\n}\r\n\r\n.video-item__button {\r\n  width: 36px;\r\n  height: 36px;\r\n  position: absolute;\r\n  right: 40px;\r\n}\r\n\r\n.video-item__button:hover {\r\n  background: var(--active);\r\n}\r\n\r\n.video-item__button--delete {\r\n  right: 0;\r\n}\r\n\r\n.video-grid {\r\n  max-width: 1020px;\r\n  padding: 0;\r\n  margin: 40px 0;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 30px 36px;\r\n}\r\n\r\n.clicked {\r\n  background: var(--active);\r\n}\r\n\r\n@media screen and (max-width: 1280px) {\r\n  .classroom-container {\r\n    width: 720px;\r\n  }\r\n  .saved-list-container {\r\n    width: 720px;\r\n  }\r\n  .video-grid {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 30px 20px;\r\n  }\r\n\r\n  .video-item {\r\n    width: 100%;\r\n  }\r\n  .classroom-container__title {\r\n    font-size: 32px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n  .classroom-container {\r\n    width: 480px;\r\n  }\r\n  .saved-list-container {\r\n    width: 480px;\r\n  }\r\n  .video-grid {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  .classroom-container__title {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .classroom-container {\r\n    width: 340px;\r\n  }\r\n  .saved-list-container {\r\n    width: 340px;\r\n  }\r\n  .video-item {\r\n    width: 340px !important;\r\n    margin: 0 0 30px;\r\n  }\r\n  .video-grid {\r\n    grid-template-columns: 1fr;\r\n    gap: 0;\r\n  }\r\n  .nav {\r\n    flex-direction: column;\r\n  }\r\n  .nav-left__button {\r\n    width: 50%;\r\n  }\r\n  .nav-right__button {\r\n    margin: 7px 0 0;\r\n    width: 100%;\r\n  }\r\n  .classroom-container__title {\r\n    font-size: 22px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,eAAe;EACf,mCAAmC;AACrC;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,cAAc;EACd,aAAa;EACb,qCAAqC;EACrC,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,qCAAqC;IACrC,cAAc;EAChB;;EAEA;IACE,WAAW;EACb;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,qCAAqC;EACvC;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,uBAAuB;IACvB,gBAAgB;EAClB;EACA;IACE,0BAA0B;IAC1B,MAAM;EACR;EACA;IACE,sBAAsB;EACxB;EACA;IACE,UAAU;EACZ;EACA;IACE,eAAe;IACf,WAAW;EACb;EACA;IACE,eAAe;EACjB;AACF","sourcesContent":["body {\r\n  padding: 64px 0;\r\n  font-size: 16px;\r\n  background-color: var(--background);\r\n}\r\n\r\n.classroom-container {\r\n  max-width: 1020px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.classroom-container__title {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 34px;\r\n  line-height: 36px;\r\n  margin-bottom: 64px;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.button {\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  border: none;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n}\r\n\r\n.bottom-target {\r\n  margin-top: 100px;\r\n  height: 100px;\r\n}\r\n\r\n.nav-left {\r\n  float: left;\r\n}\r\n\r\n.nav-right {\r\n  float: right;\r\n}\r\n\r\n.nav-left__button {\r\n  height: 36px;\r\n  padding: 10px;\r\n  background: var(--secondary-lighten);\r\n  border: 1px solid var(--secondary);\r\n}\r\n\r\n.nav-left__button--unwatched {\r\n  margin-right: -3px;\r\n  border-radius: 5px 0 0 5px;\r\n}\r\n\r\n.nav-left__button--watched {\r\n  margin-left: -3px;\r\n  border-radius: 0 5px 5px 0;\r\n}\r\n\r\n.nav-left__button:hover {\r\n  background: var(--active);\r\n}\r\n\r\n.nav-right__button {\r\n  height: 36px;\r\n  padding: 10px;\r\n  background: var(--primary);\r\n  color: var(--white);\r\n}\r\n\r\n.nav-right__button:hover {\r\n  background: var(--primary-darken);\r\n}\r\n\r\n.video-item__button {\r\n  width: 36px;\r\n  height: 36px;\r\n  position: absolute;\r\n  right: 40px;\r\n}\r\n\r\n.video-item__button:hover {\r\n  background: var(--active);\r\n}\r\n\r\n.video-item__button--delete {\r\n  right: 0;\r\n}\r\n\r\n.video-grid {\r\n  max-width: 1020px;\r\n  padding: 0;\r\n  margin: 40px 0;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 30px 36px;\r\n}\r\n\r\n.clicked {\r\n  background: var(--active);\r\n}\r\n\r\n@media screen and (max-width: 1280px) {\r\n  .classroom-container {\r\n    width: 720px;\r\n  }\r\n  .saved-list-container {\r\n    width: 720px;\r\n  }\r\n  .video-grid {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 30px 20px;\r\n  }\r\n\r\n  .video-item {\r\n    width: 100%;\r\n  }\r\n  .classroom-container__title {\r\n    font-size: 32px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n  .classroom-container {\r\n    width: 480px;\r\n  }\r\n  .saved-list-container {\r\n    width: 480px;\r\n  }\r\n  .video-grid {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  .classroom-container__title {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .classroom-container {\r\n    width: 340px;\r\n  }\r\n  .saved-list-container {\r\n    width: 340px;\r\n  }\r\n  .video-item {\r\n    width: 340px !important;\r\n    margin: 0 0 30px;\r\n  }\r\n  .video-grid {\r\n    grid-template-columns: 1fr;\r\n    gap: 0;\r\n  }\r\n  .nav {\r\n    flex-direction: column;\r\n  }\r\n  .nav-left__button {\r\n    width: 50%;\r\n  }\r\n  .nav-right__button {\r\n    margin: 7px 0 0;\r\n    width: 100%;\r\n  }\r\n  .classroom-container__title {\r\n    font-size: 22px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/confirmModal.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/confirmModal.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".confirm-modal {\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--dimmer);\r\n  padding-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.confirm-modal__form {\r\n  margin-top: 150px;\r\n  display: inline-block;\r\n  background-color: var(--secondary-lighten);\r\n  border: 1px solid var(--secondary-darken);\r\n  border-radius: 10px;\r\n  width: 400px;\r\n}\r\n\r\n.confirm-modal__content {\r\n  padding: 16px;\r\n  text-align: center;\r\n}\r\n\r\n.confirm-modal__span {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.confirm-modal__clear-fix::after {\r\n  content: '';\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n.confirm-modal__cancel-button,\r\n.confirm-modal__delete-button {\r\n  float: left;\r\n  width: 48%;\r\n  color: var(--white);\r\n  font-size: 16px;\r\n  height: 30px;\r\n  margin: 20px 3px 0;\r\n}\r\n\r\n.confirm-modal__cancel-button {\r\n  background-color: var(--secondary);\r\n}\r\n\r\n.confirm-modal__cancel-button:hover {\r\n  background-color: var(--secondary-darkest);\r\n}\r\n\r\n.confirm-modal__delete-button {\r\n  background-color: var(--primary);\r\n}\r\n\r\n.confirm-modal__delete-button:hover {\r\n  background-color: var(--primary-darken);\r\n}\r\n\r\n@media screen and (max-width: 1280px) {\r\n  .confirm-modal__form {\r\n    width: 350px;\r\n  }\r\n  .confirm-modal__cancel-button,\r\n  .confirm-modal__delete-button {\r\n    width: 100%;\r\n    margin: 3px 0;\r\n  }\r\n  .confirm-modal__span {\r\n    font-size: 19px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n  .confirm-modal__form {\r\n    width: 300px;\r\n  }\r\n\r\n  .confirm-modal__span {\r\n    font-size: 17px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .confirm-modal__form {\r\n    width: 250px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/confirmModal.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,UAAU;EACV,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,+BAA+B;EAC/B,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,0CAA0C;EAC1C,yCAAyC;EACzC,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,cAAc;AAChB;;AAEA;;EAEE,WAAW;EACX,UAAU;EACV,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE;IACE,YAAY;EACd;EACA;;IAEE,WAAW;IACX,aAAa;EACf;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF","sourcesContent":[".confirm-modal {\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--dimmer);\r\n  padding-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.confirm-modal__form {\r\n  margin-top: 150px;\r\n  display: inline-block;\r\n  background-color: var(--secondary-lighten);\r\n  border: 1px solid var(--secondary-darken);\r\n  border-radius: 10px;\r\n  width: 400px;\r\n}\r\n\r\n.confirm-modal__content {\r\n  padding: 16px;\r\n  text-align: center;\r\n}\r\n\r\n.confirm-modal__span {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.confirm-modal__clear-fix::after {\r\n  content: '';\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n.confirm-modal__cancel-button,\r\n.confirm-modal__delete-button {\r\n  float: left;\r\n  width: 48%;\r\n  color: var(--white);\r\n  font-size: 16px;\r\n  height: 30px;\r\n  margin: 20px 3px 0;\r\n}\r\n\r\n.confirm-modal__cancel-button {\r\n  background-color: var(--secondary);\r\n}\r\n\r\n.confirm-modal__cancel-button:hover {\r\n  background-color: var(--secondary-darkest);\r\n}\r\n\r\n.confirm-modal__delete-button {\r\n  background-color: var(--primary);\r\n}\r\n\r\n.confirm-modal__delete-button:hover {\r\n  background-color: var(--primary-darken);\r\n}\r\n\r\n@media screen and (max-width: 1280px) {\r\n  .confirm-modal__form {\r\n    width: 350px;\r\n  }\r\n  .confirm-modal__cancel-button,\r\n  .confirm-modal__delete-button {\r\n    width: 100%;\r\n    margin: 3px 0;\r\n  }\r\n  .confirm-modal__span {\r\n    font-size: 19px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n  .confirm-modal__form {\r\n    width: 300px;\r\n  }\r\n\r\n  .confirm-modal__span {\r\n    font-size: 17px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .confirm-modal__form {\r\n    width: 250px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./root.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/root.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_confirmModal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./confirmModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/confirmModal.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_toast_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./toast.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/toast.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_toggle_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./toggle.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/toggle.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_scrollBar_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./scrollBar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/scrollBar.css");
// Imports










var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_confirmModal_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_toast_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_toggle_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_scrollBar_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  -webkit-font-smoothing: antialiased;\r\n  color: var(--font);\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n  background-color: var(--secondary-lighten);\r\n  color: var(--font);\r\n}\r\n\r\nbutton:hover {\r\n  background-color: var(--secondary-darken);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AASA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,mCAAmC;EACnC,kBAAkB;AACpB;;AAEA;;;;EAIE,aAAa;EACb,0CAA0C;EAC1C,kBAAkB;AACpB;;AAEA;EACE,yCAAyC;AAC3C","sourcesContent":["@import './root.css';\r\n@import './app.css';\r\n@import './modal.css';\r\n@import './skeleton.css';\r\n@import './confirmModal.css';\r\n@import './toast.css';\r\n@import './toggle.css';\r\n@import './scrollBar.css';\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  -webkit-font-smoothing: antialiased;\r\n  color: var(--font);\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n  background-color: var(--secondary-lighten);\r\n  color: var(--font);\r\n}\r\n\r\nbutton:hover {\r\n  background-color: var(--secondary-darken);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.hide {\r\n  display: none !important;\r\n}\r\n\r\n.dimmer {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--dimmer);\r\n}\r\n\r\n.search-modal {\r\n  position: relative;\r\n  width: 1080px;\r\n  height: 727px;\r\n  background: var(--background);\r\n  border: 1px solid var(--secondary);\r\n  border-radius: 4px;\r\n  padding: 20px 30px;\r\n}\r\n\r\n.search-modal__title {\r\n  font-weight: bold;\r\n  font-size: 34px;\r\n  line-height: 36px;\r\n  text-align: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input__keyword {\r\n  width: 400px;\r\n  height: 36px;\r\n  margin: 0 5px 0 0;\r\n  padding: 4px 8px;\r\n  border: 1px solid var(--secondary);\r\n  border-radius: 4px;\r\n}\r\n\r\n.search-input__keyword::placeholder {\r\n  color: var(--secondary);\r\n  font-size: 16px;\r\n}\r\n\r\n.search-input__search-button {\r\n  width: 72px;\r\n  height: 36px;\r\n  background: var(--primary);\r\n  color: var(--white);\r\n}\r\n\r\n.search-input__search-button:hover {\r\n  background-color: var(--primary-darken);\r\n}\r\n\r\n.search-result.search-result--no-result {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 493px;\r\n}\r\n\r\n.no-result {\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.no-result__image {\r\n  width: 190px;\r\n  height: 140px;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.no-result__description {\r\n  font-size: 16px;\r\n  line-height: 150%;\r\n  text-align: center;\r\n}\r\n\r\n.search-target {\r\n  width: 100%;\r\n}\r\n\r\n.video-list {\r\n  width: 100%;\r\n  max-width: 1040px;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 32px 15px;\r\n  height: 493px;\r\n  overflow: hidden;\r\n}\r\n\r\n.scroll {\r\n  overflow-y: scroll;\r\n}\r\n\r\n.video-item {\r\n  position: relative;\r\n  width: 225px;\r\n  height: 255px;\r\n}\r\n\r\n.video-item__thumbnail {\r\n  width: 100%;\r\n  height: 135px;\r\n}\r\n\r\n.video-item__title {\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  margin: 4px 0;\r\n}\r\n\r\n.video-item__channel-name {\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.video-item__published-date {\r\n  font-size: 12px;\r\n  line-height: 24px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.video-item__save-button {\r\n  position: absolute;\r\n  right: 0;\r\n  width: 80px;\r\n  height: 36px;\r\n  background-color: var(--secondary-lighten);\r\n  margin-top: 4px;\r\n}\r\n\r\n.video-item__save-button:hover {\r\n  background-color: var(--primary);\r\n}\r\n\r\n.saved-button {\r\n  color: white;\r\n  cursor: default;\r\n  background-color: var(--primary);\r\n}\r\n\r\n.saved-button:hover {\r\n  color: white;\r\n  background-color: var(--primary);\r\n}\r\n\r\n.x-shape {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: flex-end;\r\n  cursor: pointer;\r\n}\r\n\r\n.x-shape::after {\r\n  content: '\\00d7';\r\n  font-size: 20pt;\r\n  font-weight: bolder;\r\n}\r\n\r\n@media screen and (max-width: 1280px) {\r\n  .search-modal {\r\n    width: 840px;\r\n  }\r\n\r\n  .video-list {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .search-modal__title {\r\n    font-size: 32px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n  .search-modal {\r\n    width: 570px;\r\n  }\r\n\r\n  .video-list {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .search-modal__title {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .search-modal {\r\n    margin: 0;\r\n    width: 430px;\r\n  }\r\n\r\n  .video-list {\r\n    grid-template-columns: 1fr;\r\n    gap: 0;\r\n  }\r\n\r\n  .search-modal__title {\r\n    font-size: 22px;\r\n    margin-bottom: 20px;\r\n  }\r\n  .search-input__keyword {\r\n    width: 85%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;AACT;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,kCAAkC;EAClC,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,qCAAqC;EACrC,cAAc;EACd,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,0CAA0C;EAC1C,eAAe;AACjB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,WAAW;EACX,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,qCAAqC;EACvC;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,qCAAqC;EACvC;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,SAAS;IACT,YAAY;EACd;;EAEA;IACE,0BAA0B;IAC1B,MAAM;EACR;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB;EACA;IACE,UAAU;EACZ;AACF","sourcesContent":[".modal-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.hide {\r\n  display: none !important;\r\n}\r\n\r\n.dimmer {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--dimmer);\r\n}\r\n\r\n.search-modal {\r\n  position: relative;\r\n  width: 1080px;\r\n  height: 727px;\r\n  background: var(--background);\r\n  border: 1px solid var(--secondary);\r\n  border-radius: 4px;\r\n  padding: 20px 30px;\r\n}\r\n\r\n.search-modal__title {\r\n  font-weight: bold;\r\n  font-size: 34px;\r\n  line-height: 36px;\r\n  text-align: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input__keyword {\r\n  width: 400px;\r\n  height: 36px;\r\n  margin: 0 5px 0 0;\r\n  padding: 4px 8px;\r\n  border: 1px solid var(--secondary);\r\n  border-radius: 4px;\r\n}\r\n\r\n.search-input__keyword::placeholder {\r\n  color: var(--secondary);\r\n  font-size: 16px;\r\n}\r\n\r\n.search-input__search-button {\r\n  width: 72px;\r\n  height: 36px;\r\n  background: var(--primary);\r\n  color: var(--white);\r\n}\r\n\r\n.search-input__search-button:hover {\r\n  background-color: var(--primary-darken);\r\n}\r\n\r\n.search-result.search-result--no-result {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 493px;\r\n}\r\n\r\n.no-result {\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.no-result__image {\r\n  width: 190px;\r\n  height: 140px;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.no-result__description {\r\n  font-size: 16px;\r\n  line-height: 150%;\r\n  text-align: center;\r\n}\r\n\r\n.search-target {\r\n  width: 100%;\r\n}\r\n\r\n.video-list {\r\n  width: 100%;\r\n  max-width: 1040px;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 32px 15px;\r\n  height: 493px;\r\n  overflow: hidden;\r\n}\r\n\r\n.scroll {\r\n  overflow-y: scroll;\r\n}\r\n\r\n.video-item {\r\n  position: relative;\r\n  width: 225px;\r\n  height: 255px;\r\n}\r\n\r\n.video-item__thumbnail {\r\n  width: 100%;\r\n  height: 135px;\r\n}\r\n\r\n.video-item__title {\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  margin: 4px 0;\r\n}\r\n\r\n.video-item__channel-name {\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.video-item__published-date {\r\n  font-size: 12px;\r\n  line-height: 24px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.video-item__save-button {\r\n  position: absolute;\r\n  right: 0;\r\n  width: 80px;\r\n  height: 36px;\r\n  background-color: var(--secondary-lighten);\r\n  margin-top: 4px;\r\n}\r\n\r\n.video-item__save-button:hover {\r\n  background-color: var(--primary);\r\n}\r\n\r\n.saved-button {\r\n  color: white;\r\n  cursor: default;\r\n  background-color: var(--primary);\r\n}\r\n\r\n.saved-button:hover {\r\n  color: white;\r\n  background-color: var(--primary);\r\n}\r\n\r\n.x-shape {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: flex-end;\r\n  cursor: pointer;\r\n}\r\n\r\n.x-shape::after {\r\n  content: '\\00d7';\r\n  font-size: 20pt;\r\n  font-weight: bolder;\r\n}\r\n\r\n@media screen and (max-width: 1280px) {\r\n  .search-modal {\r\n    width: 840px;\r\n  }\r\n\r\n  .video-list {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .search-modal__title {\r\n    font-size: 32px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n  .search-modal {\r\n    width: 570px;\r\n  }\r\n\r\n  .video-list {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .search-modal__title {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .search-modal {\r\n    margin: 0;\r\n    width: 430px;\r\n  }\r\n\r\n  .video-list {\r\n    grid-template-columns: 1fr;\r\n    gap: 0;\r\n  }\r\n\r\n  .search-modal__title {\r\n    font-size: 22px;\r\n    margin-bottom: 20px;\r\n  }\r\n  .search-input__keyword {\r\n    width: 85%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/root.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/root.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --font: #000000;\r\n  --buttonInput: #b4b4b4;\r\n  --background: #ffffff;\r\n  --primary: #00bcd4;\r\n  --primary-lighten: #80deea;\r\n  --primary-darken: #009eb3;\r\n  --primary-darkest: #008c9e;\r\n  --active: #00bbd446;\r\n  --secondary: #b4b4b4;\r\n  --secondary-lighten: #ededed;\r\n  --secondary-darken: #999999;\r\n  --secondary-darkest: #999999;\r\n  --surface: #212121;\r\n  --dimmer: rgba(0, 0, 0, 0.5);\r\n  --white: #ffffff;\r\n  --success: #61d688;\r\n  --error: #f08383;\r\n  --box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);\r\n  --skeleton-default: linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f7f8f8 20%, #f6f7f8 100%);\r\n}\r\n\r\n:root[user-theme='dark'] {\r\n  --font: #ffffff;\r\n  --buttonInput: #141414;\r\n  --background: #212121;\r\n  --primary: #00bcd4;\r\n  --primary-lighten: #80deea;\r\n  --primary-darken: #009eb3;\r\n  --primary-darkest: #008c9e;\r\n  --active: #00bbd446;\r\n  --secondary-lighten: rgb(17, 17, 17);\r\n  --secondary-darken: #030303;\r\n  --secondary-darken: #8b8b8b;\r\n  --skeleton-default: linear-gradient(to right, #242424 0%, #1b1b1b 10%, #2a2a2a 20%, #242424 100%);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/root.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;EAClB,0BAA0B;EAC1B,yBAAyB;EACzB,0BAA0B;EAC1B,mBAAmB;EACnB,oBAAoB;EACpB,4BAA4B;EAC5B,2BAA2B;EAC3B,4BAA4B;EAC5B,kBAAkB;EAClB,4BAA4B;EAC5B,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,8GAA8G;EAC9G,iGAAiG;AACnG;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;EAClB,0BAA0B;EAC1B,yBAAyB;EACzB,0BAA0B;EAC1B,mBAAmB;EACnB,oCAAoC;EACpC,2BAA2B;EAC3B,2BAA2B;EAC3B,iGAAiG;AACnG","sourcesContent":[":root {\r\n  --font: #000000;\r\n  --buttonInput: #b4b4b4;\r\n  --background: #ffffff;\r\n  --primary: #00bcd4;\r\n  --primary-lighten: #80deea;\r\n  --primary-darken: #009eb3;\r\n  --primary-darkest: #008c9e;\r\n  --active: #00bbd446;\r\n  --secondary: #b4b4b4;\r\n  --secondary-lighten: #ededed;\r\n  --secondary-darken: #999999;\r\n  --secondary-darkest: #999999;\r\n  --surface: #212121;\r\n  --dimmer: rgba(0, 0, 0, 0.5);\r\n  --white: #ffffff;\r\n  --success: #61d688;\r\n  --error: #f08383;\r\n  --box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);\r\n  --skeleton-default: linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f7f8f8 20%, #f6f7f8 100%);\r\n}\r\n\r\n:root[user-theme='dark'] {\r\n  --font: #ffffff;\r\n  --buttonInput: #141414;\r\n  --background: #212121;\r\n  --primary: #00bcd4;\r\n  --primary-lighten: #80deea;\r\n  --primary-darken: #009eb3;\r\n  --primary-darkest: #008c9e;\r\n  --active: #00bbd446;\r\n  --secondary-lighten: rgb(17, 17, 17);\r\n  --secondary-darken: #030303;\r\n  --secondary-darken: #8b8b8b;\r\n  --skeleton-default: linear-gradient(to right, #242424 0%, #1b1b1b 10%, #2a2a2a 20%, #242424 100%);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/scrollBar.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/scrollBar.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\r\n  background-color: var(--dimmer);\r\n}\r\n::-webkit-scrollbar-button {\r\n  display: none;\r\n}\r\n::-webkit-scrollbar-track {\r\n  background-color: var(--background);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background-color: var(--dimmer);\r\n  border-radius: 5px;\r\n}\r\n::-webkit-scrollbar-button:start:decrement,\r\n::-webkit-scrollbar-button:end:increment {\r\n  width: 16px;\r\n  height: 16px;\r\n  background: var(--background);\r\n}\r\n\r\n.search-modal ::-webkit-scrollbar {\r\n  width: 16px;\r\n}\r\n.search-modal ::-webkit-scrollbar-button {\r\n  display: none;\r\n}\r\n.search-modal ::-webkit-scrollbar-track {\r\n  background-color: var(--background);\r\n}\r\n.search-modal ::-webkit-scrollbar-thumb {\r\n  background-color: var(--dimmer);\r\n  border-radius: 5px;\r\n}\r\n.search-modal ::-webkit-scrollbar-button:start:decrement,\r\n.search-modal ::-webkit-scrollbar-button:end:increment {\r\n  width: 16px;\r\n  height: 16px;\r\n  background: var(--background);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/scrollBar.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;AACjC;AACA;EACE,aAAa;AACf;AACA;EACE,mCAAmC;AACrC;AACA;EACE,+BAA+B;EAC/B,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,WAAW;AACb;AACA;EACE,aAAa;AACf;AACA;EACE,mCAAmC;AACrC;AACA;EACE,+BAA+B;EAC/B,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,6BAA6B;AAC/B","sourcesContent":["::-webkit-scrollbar {\r\n  background-color: var(--dimmer);\r\n}\r\n::-webkit-scrollbar-button {\r\n  display: none;\r\n}\r\n::-webkit-scrollbar-track {\r\n  background-color: var(--background);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background-color: var(--dimmer);\r\n  border-radius: 5px;\r\n}\r\n::-webkit-scrollbar-button:start:decrement,\r\n::-webkit-scrollbar-button:end:increment {\r\n  width: 16px;\r\n  height: 16px;\r\n  background: var(--background);\r\n}\r\n\r\n.search-modal ::-webkit-scrollbar {\r\n  width: 16px;\r\n}\r\n.search-modal ::-webkit-scrollbar-button {\r\n  display: none;\r\n}\r\n.search-modal ::-webkit-scrollbar-track {\r\n  background-color: var(--background);\r\n}\r\n.search-modal ::-webkit-scrollbar-thumb {\r\n  background-color: var(--dimmer);\r\n  border-radius: 5px;\r\n}\r\n.search-modal ::-webkit-scrollbar-button:start:decrement,\r\n.search-modal ::-webkit-scrollbar-button:end:increment {\r\n  width: 16px;\r\n  height: 16px;\r\n  background: var(--background);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".skeleton {\r\n  width: 220px;\r\n  margin: 8px;\r\n}\r\n\r\n.skeleton .video-item__thumbnail,\r\n.skeleton .video-item__title,\r\n.skeleton .video-item__channel-name,\r\n.skeleton .video-item__published-date,\r\n.skeleton .video-item__save-button {\r\n  background-image: var(--skeleton-default);\r\n  background-size: 200% 100%;\r\n  animation: bgPos 1s linear infinite;\r\n}\r\n\r\n.skeleton .video-item__title,\r\n.skeleton .video-item__channel-name,\r\n.skeleton .video-item__published-date {\r\n  height: 16px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n@keyframes bgPos {\r\n  0% {\r\n    background-position: 50% 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: -150% 0;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/skeleton.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;;;;;EAKE,yCAAyC;EACzC,0BAA0B;EAC1B,mCAAmC;AACrC;;AAEA;;;EAGE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE;IACE,0BAA0B;EAC5B;;EAEA;IACE,4BAA4B;EAC9B;AACF","sourcesContent":[".skeleton {\r\n  width: 220px;\r\n  margin: 8px;\r\n}\r\n\r\n.skeleton .video-item__thumbnail,\r\n.skeleton .video-item__title,\r\n.skeleton .video-item__channel-name,\r\n.skeleton .video-item__published-date,\r\n.skeleton .video-item__save-button {\r\n  background-image: var(--skeleton-default);\r\n  background-size: 200% 100%;\r\n  animation: bgPos 1s linear infinite;\r\n}\r\n\r\n.skeleton .video-item__title,\r\n.skeleton .video-item__channel-name,\r\n.skeleton .video-item__published-date {\r\n  height: 16px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n@keyframes bgPos {\r\n  0% {\r\n    background-position: 50% 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: -150% 0;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/toast.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/toast.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".toast {\r\n  visibility: hidden;\r\n  min-width: 250px;\r\n  margin: 0;\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  bottom: 30px;\r\n  font-size: 17px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.toast--visible {\r\n  visibility: visible;\r\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n.toast--success {\r\n  background-color: var(--success);\r\n}\r\n\r\n.toast--error {\r\n  background-color: var(--error);\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n  from {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    bottom: 30px;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadein {\r\n  from {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    bottom: 30px;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n  from {\r\n    bottom: 30px;\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes fadeout {\r\n  from {\r\n    bottom: 30px;\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/toast.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,2BAA2B;EAC3B,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,iDAAiD;EACjD,yCAAyC;AAC3C;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,YAAY;IACZ,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,YAAY;IACZ,UAAU;EACZ;AACF;;AAEA;EACE;IACE,YAAY;IACZ,UAAU;EACZ;EACA;IACE,SAAS;IACT,UAAU;EACZ;AACF;;AAEA;EACE;IACE,YAAY;IACZ,UAAU;EACZ;EACA;IACE,SAAS;IACT,UAAU;EACZ;AACF","sourcesContent":[".toast {\r\n  visibility: hidden;\r\n  min-width: 250px;\r\n  margin: 0;\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  bottom: 30px;\r\n  font-size: 17px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.toast--visible {\r\n  visibility: visible;\r\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n.toast--success {\r\n  background-color: var(--success);\r\n}\r\n\r\n.toast--error {\r\n  background-color: var(--error);\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n  from {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    bottom: 30px;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadein {\r\n  from {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    bottom: 30px;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n  from {\r\n    bottom: 30px;\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes fadeout {\r\n  from {\r\n    bottom: 30px;\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    bottom: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/toggle.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/toggle.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".switch-wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.switch {\r\n  top: 11px;\r\n  position: relative;\r\n  width: 34px;\r\n  height: 14px;\r\n}\r\n\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: var(--secondary);\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n}\r\n\r\n.slider::before {\r\n  position: absolute;\r\n  content: '';\r\n  height: 20px;\r\n  width: 20px;\r\n  left: 0;\r\n  bottom: -3px;\r\n  background-color: var(--secondary-darken);\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: var(--primary-lighten);\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px var(--primary);\r\n}\r\n\r\ninput:checked + .slider::before {\r\n  -webkit-transform: translateX(16px);\r\n  -ms-transform: translateX(16px);\r\n  transform: translateX(16px);\r\n  background-color: var(--primary);\r\n}\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round::before {\r\n  border-radius: 50%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/toggle.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,kCAAkC;EAClC,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,OAAO;EACP,YAAY;EACZ,yCAAyC;EACzC,wBAAwB;EACxB,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,2BAA2B;EAC3B,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":[".switch-wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.switch {\r\n  top: 11px;\r\n  position: relative;\r\n  width: 34px;\r\n  height: 14px;\r\n}\r\n\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: var(--secondary);\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n}\r\n\r\n.slider::before {\r\n  position: absolute;\r\n  content: '';\r\n  height: 20px;\r\n  width: 20px;\r\n  left: 0;\r\n  bottom: -3px;\r\n  background-color: var(--secondary-darken);\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: var(--primary-lighten);\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px var(--primary);\r\n}\r\n\r\ninput:checked + .slider::before {\r\n  -webkit-transform: translateX(16px);\r\n  -ms-transform: translateX(16px);\r\n  transform: translateX(16px);\r\n  background-color: var(--primary);\r\n}\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round::before {\r\n  border-radius: 50%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/images/not_found.png":
/*!*****************************************!*\
  !*** ./src/assets/images/not_found.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "not_found.png");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorGet)
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorSet)
/* harmony export */ });
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classExtractFieldDescriptor)
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldGet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldSet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorSet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "set");
  (0,_classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor, value);
  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/not_found.png */ "./src/assets/images/not_found.png");
/* harmony import */ var _Controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller.js */ "./src/js/Controller.js");



window.addEventListener('DOMContentLoaded', new _Controller_js__WEBPACK_IMPORTED_MODULE_2__["default"]());
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map