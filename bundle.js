/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/constants/exception.js":
/*!************************************!*\
  !*** ./src/constants/exception.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var EXCEPTION = Object.freeze({
  EMPTY_ERROR_MESSAGE: '입력된 검색어가 없습니다. 검색어를 입력해주세요.',
  NOT_FOUND_ERROR_MESSAGE: '검색된 결과가 없습니다. 다른 검색어를 입력해주세요.',
  EXCEED_LIMIT_ERROR_MESSAGE: '저장된 영상의 개수가 100개를 초과하여 저장되지 않았습니다. 100개 이하의 영상만 저장해주세요.',
  INSUFFICIENT_ERROR_MESSAGE: '가져온 영상의 데이터가 불충분합니다.'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EXCEPTION);

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
  LIMIT_SAVE_VIDEO_COUNT: 100,
  MINIMUM_FETCHED_VIDEO_COUNT: 10
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VIDEO);

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_AppView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/AppView.js */ "./src/js/views/AppView.js");
/* harmony import */ var _views_SearchInputView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/SearchInputView.js */ "./src/js/views/SearchInputView.js");
/* harmony import */ var _views_SearchResultView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/SearchResultView.js */ "./src/js/views/SearchResultView.js");
/* harmony import */ var _dummy_dummyObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dummy/dummyObject.js */ "./src/js/dummy/dummyObject.js");
/* harmony import */ var _models_Video_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/Video.js */ "./src/js/models/Video.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/event.js */ "./src/js/utils/event.js");
/* harmony import */ var _constants_video_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants/video.js */ "./src/constants/video.js");
/* harmony import */ var _utils_validator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/validator.js */ "./src/js/utils/validator.js");
/* harmony import */ var _utils_fetch_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/fetch.js */ "./src/js/utils/fetch.js");





function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }











var _subscribeViewEvents = /*#__PURE__*/new WeakSet();

var _searchVideo = /*#__PURE__*/new WeakSet();

var _scrollNextVideos = /*#__PURE__*/new WeakSet();

var _saveVideo = /*#__PURE__*/new WeakSet();

var Controller = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function Controller() {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Controller);

  _classPrivateMethodInitSpec(this, _saveVideo);

  _classPrivateMethodInitSpec(this, _scrollNextVideos);

  _classPrivateMethodInitSpec(this, _searchVideo);

  _classPrivateMethodInitSpec(this, _subscribeViewEvents);

  this.video = new _models_Video_js__WEBPACK_IMPORTED_MODULE_8__["default"](_dummy_dummyObject_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
  this.video.savedVideoItems = this.video.getItemsLocalStorage();
  this.appView = new _views_AppView_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  this.searchInputView = new _views_SearchInputView_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
  this.searchResultView = new _views_SearchResultView_js__WEBPACK_IMPORTED_MODULE_6__["default"]();

  _classPrivateMethodGet(this, _subscribeViewEvents, _subscribeViewEvents2).call(this);
});

function _subscribeViewEvents2() {
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_9__.on)(this.searchInputView.$searchButton, '@search', _classPrivateMethodGet(this, _searchVideo, _searchVideo2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_9__.on)(this.searchResultView.$searchTarget, '@scroll-bottom', _classPrivateMethodGet(this, _scrollNextVideos, _scrollNextVideos2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_9__.on)(this.searchResultView.$searchTarget, '@save-video', _classPrivateMethodGet(this, _saveVideo, _saveVideo2).bind(this));
}

function _searchVideo2(_x) {
  return _searchVideo3.apply(this, arguments);
}

function _searchVideo3() {
  _searchVideo3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(event) {
    var keyword, fetchedVideos;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
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
            alert(_context.t0.message);
            return _context.abrupt("return");

          case 10:
            this.searchResultView.showSkeleton();
            _context.next = 13;
            return (0,_utils_fetch_js__WEBPACK_IMPORTED_MODULE_12__.fetchYoutubeApi)(keyword);

          case 13:
            fetchedVideos = _context.sent;
            _context.prev = 14;
            this.video.setVideoInfo(fetchedVideos);
            _context.next = 23;
            break;

          case 18:
            _context.prev = 18;
            _context.t1 = _context["catch"](14);
            this.searchResultView.removeVideo();
            this.searchResultView.showNotFound();
            return _context.abrupt("return");

          case 23:
            this.video.accumulateVideoItems();
            this.video.updateNewVideoItems();
            this.searchResultView.hideNotFound();
            this.searchResultView.renderVideo(this.video.newVideoItems);
            this.searchResultView.startObserve();

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 6], [14, 18]]);
  }));
  return _searchVideo3.apply(this, arguments);
}

function _scrollNextVideos2() {
  return _scrollNextVideos3.apply(this, arguments);
}

function _scrollNextVideos3() {
  _scrollNextVideos3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
    var fetchedVideos;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            this.searchResultView.stopObserve();
            this.searchResultView.showSkeleton();
            _context2.next = 4;
            return (0,_utils_fetch_js__WEBPACK_IMPORTED_MODULE_12__.fetchYoutubeApi)(this.video.keyword, this.video.nextPageToken);

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
            alert(_context2.t0.message);
            return _context2.abrupt("return");

          case 14:
            this.video.accumulateVideoItems();
            this.video.updateNewVideoItems();

            if (!(this.video.newVideoItems.length < _constants_video_js__WEBPACK_IMPORTED_MODULE_10__["default"].MINIMUM_FETCHED_VIDEO_COUNT)) {
              _context2.next = 18;
              break;
            }

            return _context2.abrupt("return");

          case 18:
            this.searchResultView.renderVideo(this.video.newVideoItems);
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
    (0,_utils_validator_js__WEBPACK_IMPORTED_MODULE_11__.checkExceedLimit)(this.video.savedVideoItems);
  } catch (error) {
    alert(error.message);
    return;
  }

  this.searchResultView.changeSaveButtonStyle(event.detail.buttonElement);
  var savedId = event.detail.savedId;
  this.video.setItemsLocalStorage(savedId);
}



/***/ }),

/***/ "./src/js/dummy/dummyObject.js":
/*!*************************************!*\
  !*** ./src/js/dummy/dummyObject.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dummyObject = {
  "kind": "youtube#searchListResponse",
  "etag": "CeWgOMvW7YtKhspWGE0SwlO4iPo",
  "nextPageToken": "CBQQAA",
  "prevPageToken": "CAoQAQ",
  "regionCode": "KR",
  "pageInfo": {
    "totalResults": 34794,
    "resultsPerPage": 10
  },
  "items": [{
    "kind": "youtube#searchResult",
    "etag": "LLJCs6OPpwzOwvVdLyzQYGkTJ2A",
    "id": {
      "kind": "youtube#video",
      "videoId": "FMUpVA0Vvjw"
    },
    "snippet": {
      "publishedAt": "2021-10-13T01:33:11Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡] 🤔 조엘의 GC",
      "description": "우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. ‍♂️ '10분 테코톡'이란 우아한테크코스 과정을 진행하며 크루(수강생) ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/FMUpVA0Vvjw/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/FMUpVA0Vvjw/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/FMUpVA0Vvjw/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2021-10-13T01:33:11Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "DGW8RKsCt-5QHqeqtIEDP4doOmQ",
    "id": {
      "kind": "youtube#video",
      "videoId": "ccXMdSM1IRo"
    },
    "snippet": {
      "publishedAt": "2020-06-05T12:55:40Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[우아한테크코스 교육설명회] 1. 개발자에게 교육자로 사는 경험이 왜 중요한가",
      "description": "우아한테크코스 교육설명회 2020년 5월 28월 목요일 온라인으로 우아한테크코스 교육설명회를 진행했습니다. 첫번째 세션은 ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/ccXMdSM1IRo/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/ccXMdSM1IRo/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/ccXMdSM1IRo/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2020-06-05T12:55:40Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "isgdvYY7DOrXn3GALnmyA22khY4",
    "id": {
      "kind": "youtube#video",
      "videoId": "OrKdin6IM8Y"
    },
    "snippet": {
      "publishedAt": "2021-10-25T01:45:30Z",
      "channelId": "UCPTjwgKQkrgx6UP14XRLYRQ",
      "title": "D1_박재성&amp;임동준 우아한테크코스, 우아한형제들_우아한테크코스가 지향하는 교육은?(풀영상)",
      "description": "D1_박재성&임동준 우아한테크코스, 우아한형제들_9/13(월) 13:20~14:30 우아한테크코스가 지향하는 교육은?(풀영상) 우아한테크 ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/OrKdin6IM8Y/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/OrKdin6IM8Y/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/OrKdin6IM8Y/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "9월은 직업능력의 달",
      "liveBroadcastContent": "none",
      "publishTime": "2021-10-25T01:45:30Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "yMZx5KNUThjCwiJN7DvW6GoQHPQ",
    "id": {
      "kind": "youtube#video",
      "videoId": "xcrjamphIp4"
    },
    "snippet": {
      "publishedAt": "2020-09-23T02:34:33Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡] 🧃쿨라임의 HTTP/1.1, HTTP/2, 그리고 QUIC",
      "description": "우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. ‍♂️ '10분 테코톡'이란 우아한테크코스 과정을 진행하며 크루(수강생) ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/xcrjamphIp4/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/xcrjamphIp4/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/xcrjamphIp4/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2020-09-23T02:34:33Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "TC43QSPn3RMBKCVbm1G8REh10Fs",
    "id": {
      "kind": "youtube#video",
      "videoId": "-wNPwne8jJk"
    },
    "snippet": {
      "publishedAt": "2020-09-01T05:23:41Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[우테코 🎬vlog] Ep.2 오렌지의 하루",
      "description": "우테코로그 Ep.2 오렌지의 하루 우테코 vlog의 두 번째 주자는 오렌지입니다. 길어지는 코로나 시기에 우아한테크코스는 어떤 방식 ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/-wNPwne8jJk/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/-wNPwne8jJk/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/-wNPwne8jJk/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2020-09-01T05:23:41Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "bB64tQO8LExICG1MUmwQvXdsNno",
    "id": {
      "kind": "youtube#video",
      "videoId": "wPdH7lJ8jf0"
    },
    "snippet": {
      "publishedAt": "2021-10-19T01:18:13Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡] 🍭 다니의 HTTPS",
      "description": "우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. ‍♂️ '10분 테코톡'이란 우아한테크코스 과정을 진행하며 크루(수강생) ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/wPdH7lJ8jf0/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/wPdH7lJ8jf0/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/wPdH7lJ8jf0/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2021-10-19T01:18:13Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "MgTCXMypeUICimjHgQasrMiz1Ig",
    "id": {
      "kind": "youtube#video",
      "videoId": "nhQRaRgV19o"
    },
    "snippet": {
      "publishedAt": "2021-09-09T04:04:59Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[우테코 인터뷰 챌린지] 🎙 코치에게 묻다! 코테뷰 #4 포비",
      "description": "우아한테크코스의 크루들이 진행하는 인터뷰 챌린지입니다.   이번 우테코 인터뷰 챌린지는 '코치 인터뷰'로 진행되었습니다.",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/nhQRaRgV19o/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/nhQRaRgV19o/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/nhQRaRgV19o/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2021-09-09T04:04:59Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "N3U53wnSa5sGySNL8IFVCql-vZ4",
    "id": {
      "kind": "youtube#video",
      "videoId": "7iGIfcEsc2g"
    },
    "snippet": {
      "publishedAt": "2020-11-12T05:34:03Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡] 🤠럿고의 CORS",
      "description": "녹화 문제로 잡음이 섞여있을 수 있습니다. ‍♀️ 우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. ‍♂️ '10분 테코톡' ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/7iGIfcEsc2g/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/7iGIfcEsc2g/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/7iGIfcEsc2g/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2020-11-12T05:34:03Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "ffuxBOI47WpNg5rgeg1rd_OpYZI",
    "id": {
      "kind": "youtube#video",
      "videoId": "Ppqc3qN75EE"
    },
    "snippet": {
      "publishedAt": "2019-07-29T11:52:46Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡]  🙆‍♂️올레의 JPA와 JDBC",
      "description": "우아한테크코스의 크루들이 진행하는 10분 테코톡입니다. '올레'가 동료 크루들이 지금 가장 활발히 적용하고 공부하고 있는 JPA를 ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/Ppqc3qN75EE/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/Ppqc3qN75EE/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/Ppqc3qN75EE/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2019-07-29T11:52:46Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "h0gGPC9Dzr-wX2AuuFjcXOVVMvg",
    "id": {
      "kind": "youtube#video",
      "videoId": "sJ14cWjrNis"
    },
    "snippet": {
      "publishedAt": "2021-06-02T07:46:52Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡] ☕️ 체프의 브라우저 렌더링",
      "description": "우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. ‍♂️ '10분 테코톡'이란 우아한테크코스 과정을 진행하며 크루(수강생) ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2021-06-02T07:46:52Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "h0gGPC9Dzr-wX2AuuFjcXOVVMvg",
    "id": {
      "kind": "youtube#video",
      "videoId": "sJ14cWjrNis"
    },
    "snippet": {
      "publishedAt": "2021-06-02T07:46:52Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡] ☕️ 체프의 브라우저 렌더링",
      "description": "우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. ‍♂️ '10분 테코톡'이란 우아한테크코스 과정을 진행하며 크루(수강생) ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2021-06-02T07:46:52Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "h0gGPC9Dzr-wX2AuuFjcXOVVMvg",
    "id": {
      "kind": "youtube#video",
      "videoId": "sJ14cWjrNis"
    },
    "snippet": {
      "publishedAt": "2021-06-02T07:46:52Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡] ☕️ 체프의 브라우저 렌더링",
      "description": "우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. ‍♂️ '10분 테코톡'이란 우아한테크코스 과정을 진행하며 크루(수강생) ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2021-06-02T07:46:52Z"
    }
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dummyObject);

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
/* harmony import */ var _constants_exception__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/exception */ "./src/constants/exception.js");
/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/validator */ "./src/js/utils/validator.js");






function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }




var _keyword = /*#__PURE__*/new WeakMap();

var _fetchedVideos = /*#__PURE__*/new WeakMap();

var _newVideoItems = /*#__PURE__*/new WeakMap();

var _allVideoItems = /*#__PURE__*/new WeakMap();

var _nextPageToken = /*#__PURE__*/new WeakMap();

var _savedVideoItems = /*#__PURE__*/new WeakMap();

var Video = /*#__PURE__*/function () {
  // 검색어
  // length:10, type:array, fetch한 원본(items, nextPageToken)
  //  length:10, type:array, search해서 첫 10개, 스크롤 때마다 10개 추가되는 items (origin: #fetchedVideos), saved 속성이 바뀌면 override가 된다.
  // length:미상, type:array, 스크롤할 때마다 해당 newVideoItems 10개씩 누적되는 items
  // fetch하기 위한 다음 페이지 Token (origin: #fetchedVideos)
  // length:미상(최대100), type:array,저장된 비디오 items, localStorage 상호작용
  function Video() {
    var dummyObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Video);

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

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _fetchedVideos, dummyObject); // API 사용량 초과될 경우, 데모 확인을 위해 dummyObject가 기본으로 할당된다.


    this.savedIdList = [];

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _savedVideoItems, []);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Video, [{
    key: "keyword",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _keyword);
    },
    set: function set(value) {
      (0,_utils_validator__WEBPACK_IMPORTED_MODULE_6__.checkEmpty)(value);

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
      (0,_utils_validator__WEBPACK_IMPORTED_MODULE_6__.checkLengthExist)((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _newVideoItems));
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
          var isFindSavedItem = false;

          var _iterator3 = _createForOfIteratorHelper((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _savedVideoItems)),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var savedItem = _step3.value;

              if (newItem.videoId === savedItem.videoId) {
                isFindSavedItem = true;
                updatedNewVideoItems.push(savedItem);
                break;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          if (isFindSavedItem === false) {
            updatedNewVideoItems.push(newItem);
          }
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
      (0,_utils_validator__WEBPACK_IMPORTED_MODULE_6__.checkLengthExist)(fetchedVideos.items);

      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _newVideoItems, fetchedVideos.items.map(function (item) {
        return {
          videoId: item.id.videoId,
          description: item.snippet.description,
          channelId: item.snippet.channelId,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          publishTime: item.snippet.publishTime,
          thumbnailUrl: item.snippet.thumbnails.high.url,
          saved: false
        };
      }));

      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _nextPageToken, fetchedVideos.nextPageToken);
    }
  }]);

  return Video;
}();



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


// eslint-disable-next-line import/prefer-default-export
var fetchYoutubeApi = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(query, nextPageToken) {
    var REDIRECT_SERVER_HOST, url, parameters, response, body;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            REDIRECT_SERVER_HOST = 'https://zealous-swartz-f699df.netlify.app/';
            url = new URL('youtube/v3/search', REDIRECT_SERVER_HOST);
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
            _context.next = 7;
            return fetch(url, {
              method: 'GET'
            });

          case 7:
            response = _context.sent;
            _context.next = 10;
            return response.json();

          case 10:
            body = _context.sent;

            if (response.ok) {
              _context.next = 13;
              break;
            }

            throw new Error(body.error.message);

          case 13:
            return _context.abrupt("return", body);

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
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
/* harmony import */ var _constants_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/exception */ "./src/constants/exception.js");
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
    throw new Error(_constants_exception__WEBPACK_IMPORTED_MODULE_0__["default"].EMPTY_ERROR_MESSAGE);
  }
};
var checkLengthExist = function checkLengthExist(value) {
  if (isUndefined(value)) {
    throw new Error(_constants_exception__WEBPACK_IMPORTED_MODULE_0__["default"].NOT_FOUND_ERROR_MESSAGE);
  }

  if (isLengthZero(value)) {
    throw new Error(_constants_exception__WEBPACK_IMPORTED_MODULE_0__["default"].NOT_FOUND_ERROR_MESSAGE);
  }
};
var checkExceedLimit = function checkExceedLimit(items) {
  if (items.length >= _constants_video__WEBPACK_IMPORTED_MODULE_1__["default"].LIMIT_SAVE_VIDEO_COUNT) {
    throw new Error(_constants_exception__WEBPACK_IMPORTED_MODULE_0__["default"].EXCEED_LIMIT_ERROR_MESSAGE);
  }
};

/***/ }),

/***/ "./src/js/views/AppView.js":
/*!*********************************!*\
  !*** ./src/js/views/AppView.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");



function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _bindEvents = /*#__PURE__*/new WeakSet();

var _handleClickButton = /*#__PURE__*/new WeakSet();

var AppView = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppView() {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppView);

  _classPrivateMethodInitSpec(this, _handleClickButton);

  _classPrivateMethodInitSpec(this, _bindEvents);

  this.$searchModalButton = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('#search-modal-button');
  this.$modalContainer = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('.modal-container');

  _classPrivateMethodGet(this, _bindEvents, _bindEvents2).call(this);
});

function _bindEvents2() {
  this.$searchModalButton.addEventListener('click', _classPrivateMethodGet(this, _handleClickButton, _handleClickButton2).bind(this));
}

function _handleClickButton2() {
  this.$modalContainer.classList.remove('hide');
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
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");



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

  this.$searchInputKeyword = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('#search-input-keyword');
  this.$searchButton = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('#search-button');

  _classPrivateMethodGet(this, _bindEvents, _bindEvents2).call(this);
});

function _bindEvents2() {
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_3__.on)(this.$searchButton, 'click', _classPrivateMethodGet(this, _handleClick, _handleClick2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_3__.on)(this.$searchInputKeyword, 'keypress', _classPrivateMethodGet(this, _handleKeypress, _handleKeypress2).bind(this));
}

function _handleKeypress2() {
  if (window.event.keyCode === 13) {
    _classPrivateMethodGet(this, _handleClick, _handleClick2).call(this);
  }
}

function _handleClick2() {
  var keyword = this.$searchInputKeyword.value;
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_3__.emit)(this.$searchButton, '@search', {
    keyword: keyword
  });
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Template.js */ "./src/js/views/Template.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");






var SearchResultView = /*#__PURE__*/function () {
  function SearchResultView() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchResultView);

    this.$videoList = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.video-list');
    this.template = new _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.$searchTarget = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('#search-target');
    this.$searchNoResult = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('#search-no-result');
    this.observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(_this.$searchTarget, '@scroll-bottom');
      }
    }, {
      root: this.$videoList,
      threshold: 1.0
    });
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchResultView, [{
    key: "renderVideo",
    value: function renderVideo(newVideoItems) {
      var _this2 = this;

      this.$videoItems = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$$)('.skeleton');
      this.$videoItems.forEach(function ($item, idx) {
        $item.classList.remove('skeleton');
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.video-item__thumbnail', $item).setAttribute('srcdoc', _this2.template.getThumbnail(newVideoItems[idx].thumbnailUrl, newVideoItems[idx].videoId));
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.video-item__title', $item).innerText = newVideoItems[idx].title;
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.video-item__channel-name', $item).innerText = newVideoItems[idx].channelTitle;
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.video-item__published-date', $item).innerText = newVideoItems[idx].publishTime;
        var $savedButton = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_3__.$)('.video-item__save-button', $item);
        $savedButton.innerText = newVideoItems[idx].saved ? '저장됨' : '⬇ 저장';
        $savedButton.classList.add(newVideoItems[idx].saved ? 'saved-button' : 'button');
        $savedButton.disabled = newVideoItems[idx].saved;
        $savedButton.addEventListener('click', _this2.handleSaveButton.bind(_this2));
        $savedButton.dataset.id = newVideoItems[idx].videoId;
      });
    }
  }, {
    key: "handleSaveButton",
    value: function handleSaveButton(event) {
      var savedId = event.target.dataset.id;
      var buttonElement = event.target;
      (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_4__.emit)(this.$searchTarget, '@save-video', {
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



var Template = /*#__PURE__*/function () {
  function Template() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Template);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Template, [{
    key: "getThumbnail",
    value: function getThumbnail(imgUrl, videoId) {
      return "\n      <style>\n        * {\n          margin: 0;\n          padding: 0;\n          overflow: hidden;\n        }\n\n        body {\n          position: relative; \n        }\n\n        img {\n          object-fit: cover;\n          width: 100%;\n          height: 135px;\n        }\n\n        .play { \n          position: absolute; \n          top: 30%;\n          left: 37%;\n          background: gray;\n          border-radius: 50% / 10%;\n          color: #FFFFFF;\n          font-size: 1em; /* change this to change size */\n          height: 3em;\n          padding: 0;\n          text-align: center;\n          text-indent: 0.1em;\n          transition: all 150ms ease-out;\n          width: 4em;\n        }\n\n        .play:hover {\n          background: red;\n        }\n\n        .play::before { \n          background: inherit;\n          border-radius: 5% / 50%;\n          bottom: 9%;\n          content: '';\n          left: -5%;\n          position: absolute;\n          right: -5%;\n          top: 9%;\n        }\n\n        .play::after {\n          border-style: solid;\n          border-width: 1em 0 1em 1.732em;\n          border-color: transparent transparent transparent rgba(255, 255, 255, 0.75);\n          content: ' ';\n          font-size: 0.75em;\n          height: 0;\n          margin: -1em 0 0 -0.75em;\n          top: 50%;\n          position: absolute;\n          width: 0;\n        }\n\n      </style>\n      <a href='https://www.youtube.com/embed/".concat(videoId, "?autoplay=1&mute=1'>\n      <img src=").concat(imgUrl, ">\n        <div class='play'></div>\n      </a>\n    ");
    }
  }, {
    key: "getSkeleton",
    value: function getSkeleton() {
      return "\n      <li class=\"video-item skeleton\" data-video-id=\"\">\n        <iframe \n          class=\"video-item__thumbnail\" \n          srcdoc=\"\" \n          frameborder=\"0\"\n          allow=\"autoplay\"\n          allowfullscreen>\n        </iframe>\n        <h4 class=\"video-item__title\"></h4>\n        <p class=\"video-item__channel-name\"></p>\n        <p class=\"video-item__published-date\"></p>\n        <button data-id=\"\" class=\"video-item__save-button button\"></button>\n      </li>\n    ".repeat(10);
    }
  }, {
    key: "getNotFound",
    value: function getNotFound() {
      return "\n    <section class=\"search-result search-result--no-result\">\n        <h3 hidden>\uAC80\uC0C9 \uACB0\uACFC \uC5C6\uC74C</h3>\n        <div class=\"no-result\">\n          <img src=\"./src/assets/images/not_found.png\" alt=\"no result image\" class=\"no-result__image\">\n          <p class=\"no-result__description\">\n            \uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4<br />\n            \uB2E4\uB978 \uD0A4\uC6CC\uB4DC\uB85C \uAC80\uC0C9\uD574\uBCF4\uC138\uC694\n          </p>\n        </div>\n      </section>\n    ";
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  padding: 64px 0;\r\n  font-size: 16px;\r\n}\r\n\r\n#app {\r\n  max-width: 1020px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.classroom-container__title {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 34px;\r\n  line-height: 36px;\r\n  margin-bottom: 64px;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.button {\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  border: none;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  letter-spacing: 1.25px;\r\n}\r\n\r\n.nav__button {\r\n  width: 80px;\r\n  height: 36px;\r\n  background: var(--secondary-lighten);\r\n}\r\n\r\n.nav__button:hover {\r\n  background: var(--secondary);\r\n}\r\n\r\n.bottom-target {\r\n  margin-top: 100px;\r\n  height: 100px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,aAAa;AACf","sourcesContent":["body {\r\n  padding: 64px 0;\r\n  font-size: 16px;\r\n}\r\n\r\n#app {\r\n  max-width: 1020px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.classroom-container__title {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 34px;\r\n  line-height: 36px;\r\n  margin-bottom: 64px;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.button {\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  border: none;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  letter-spacing: 1.25px;\r\n}\r\n\r\n.nav__button {\r\n  width: 80px;\r\n  height: 36px;\r\n  background: var(--secondary-lighten);\r\n}\r\n\r\n.nav__button:hover {\r\n  background: var(--secondary);\r\n}\r\n\r\n.bottom-target {\r\n  margin-top: 100px;\r\n  height: 100px;\r\n}\r\n"],"sourceRoot":""}]);
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
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAKA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,mCAAmC;AACrC;;AAEA;;;;EAIE,aAAa;AACf","sourcesContent":["@import './root.css';\r\n@import './app.css';\r\n@import './modal.css';\r\n@import './skeleton.css';\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".modal-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.hide {\r\n  display: none !important;\r\n}\r\n\r\n.dimmer {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--dimmer);\r\n}\r\n\r\n.search-modal {\r\n  position: relative;\r\n  width: 1080px;\r\n  height: 727px;\r\n  background: #ffffff;\r\n  border: 1px solid var(--secondary);\r\n  border-radius: 4px;\r\n  padding: 50px 30px 32px 30px;\r\n}\r\n\r\n.search-modal__title {\r\n  font-weight: bold;\r\n  font-size: 34px;\r\n  line-height: 36px;\r\n  text-align: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input__keyword {\r\n  width: 400px;\r\n  height: 36px;\r\n  margin-right: 20px;\r\n  padding: 4px 8px;\r\n  border: 1px solid var(--secondary);\r\n  border-radius: 4px;\r\n}\r\n\r\n.search-input__keyword::placeholder {\r\n  color: var(--secondary);\r\n  font-size: 16px;\r\n}\r\n\r\n.search-input__search-button {\r\n  width: 72px;\r\n  height: 36px;\r\n  background: var(--primary);\r\n  color: var(--white);\r\n}\r\n\r\n.search-result.search-result--no-result {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 493px;\r\n}\r\n\r\n.no-result {\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.no-result__image {\r\n  width: 190px;\r\n  height: 140px;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.no-result__description {\r\n  font-size: 16px;\r\n  line-height: 150%;\r\n  text-align: center;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.video-list {\r\n  width: 1040px;\r\n  height: 493px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 32px 20px;\r\n  overflow: hidden;\r\n}\r\n\r\n.scroll {\r\n  overflow-y: scroll;\r\n}\r\n\r\n.video-item {\r\n  position: relative;\r\n  width: 240px;\r\n  height: 255px;\r\n}\r\n\r\n.video-item__thumbnail {\r\n  width: 100%;\r\n  height: 135px;\r\n}\r\n\r\n.video-item__title {\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  margin: 4px 0;\r\n}\r\n\r\n.video-item__channel-name {\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.video-item__published-date {\r\n  font-size: 12px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.video-item__save-button {\r\n  position: absolute;\r\n  right: 0;\r\n  width: 80px;\r\n  height: 36px;\r\n  background-color: var(--secondary-lighten);\r\n  margin-top: 4px;\r\n}\r\n\r\n.video-item__save-button:hover {\r\n  background-color: var(--secondary);\r\n}\r\n\r\n.saved-button {\r\n  color: white;\r\n  cursor: default;\r\n  background-color: var(--primary);\r\n}\r\n\r\n.saved-button:hover {\r\n  color: white;\r\n  background-color: var(--primary);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;AACT;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,kCAAkC;EAClC,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,0CAA0C;EAC1C,eAAe;AACjB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,gCAAgC;AAClC","sourcesContent":[".modal-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.hide {\r\n  display: none !important;\r\n}\r\n\r\n.dimmer {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--dimmer);\r\n}\r\n\r\n.search-modal {\r\n  position: relative;\r\n  width: 1080px;\r\n  height: 727px;\r\n  background: #ffffff;\r\n  border: 1px solid var(--secondary);\r\n  border-radius: 4px;\r\n  padding: 50px 30px 32px 30px;\r\n}\r\n\r\n.search-modal__title {\r\n  font-weight: bold;\r\n  font-size: 34px;\r\n  line-height: 36px;\r\n  text-align: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.search-input__keyword {\r\n  width: 400px;\r\n  height: 36px;\r\n  margin-right: 20px;\r\n  padding: 4px 8px;\r\n  border: 1px solid var(--secondary);\r\n  border-radius: 4px;\r\n}\r\n\r\n.search-input__keyword::placeholder {\r\n  color: var(--secondary);\r\n  font-size: 16px;\r\n}\r\n\r\n.search-input__search-button {\r\n  width: 72px;\r\n  height: 36px;\r\n  background: var(--primary);\r\n  color: var(--white);\r\n}\r\n\r\n.search-result.search-result--no-result {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 493px;\r\n}\r\n\r\n.no-result {\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.no-result__image {\r\n  width: 190px;\r\n  height: 140px;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.no-result__description {\r\n  font-size: 16px;\r\n  line-height: 150%;\r\n  text-align: center;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.video-list {\r\n  width: 1040px;\r\n  height: 493px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 32px 20px;\r\n  overflow: hidden;\r\n}\r\n\r\n.scroll {\r\n  overflow-y: scroll;\r\n}\r\n\r\n.video-item {\r\n  position: relative;\r\n  width: 240px;\r\n  height: 255px;\r\n}\r\n\r\n.video-item__thumbnail {\r\n  width: 100%;\r\n  height: 135px;\r\n}\r\n\r\n.video-item__title {\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  margin: 4px 0;\r\n}\r\n\r\n.video-item__channel-name {\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.video-item__published-date {\r\n  font-size: 12px;\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.video-item__save-button {\r\n  position: absolute;\r\n  right: 0;\r\n  width: 80px;\r\n  height: 36px;\r\n  background-color: var(--secondary-lighten);\r\n  margin-top: 4px;\r\n}\r\n\r\n.video-item__save-button:hover {\r\n  background-color: var(--secondary);\r\n}\r\n\r\n.saved-button {\r\n  color: white;\r\n  cursor: default;\r\n  background-color: var(--primary);\r\n}\r\n\r\n.saved-button:hover {\r\n  color: white;\r\n  background-color: var(--primary);\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --primary: #00bcd4;\r\n  --primary-lighten: #80deea;\r\n  --secondary: #b4b4b4;\r\n  --secondary-lighten: #ededed;\r\n  --surface: #212121;\r\n  --dimmer: rgba(0, 0, 0, 0.5);\r\n  --white: #ffffff;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/root.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,oBAAoB;EACpB,4BAA4B;EAC5B,kBAAkB;EAClB,4BAA4B;EAC5B,gBAAgB;AAClB","sourcesContent":[":root {\r\n  --primary: #00bcd4;\r\n  --primary-lighten: #80deea;\r\n  --secondary: #b4b4b4;\r\n  --secondary-lighten: #ededed;\r\n  --surface: #212121;\r\n  --dimmer: rgba(0, 0, 0, 0.5);\r\n  --white: #ffffff;\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".skeleton {\r\n  width: 220px;\r\n  margin: 8px;\r\n}\r\n\r\n.skeleton .video-item__thumbnail,\r\n.skeleton .video-item__title,\r\n.skeleton .video-item__channel-name,\r\n.skeleton .video-item__published-date, \r\n.skeleton .video-item__save-button {\r\n  background-image: linear-gradient(\r\n    90deg,\r\n    #e0e0e0 0px,\r\n    #ededed 30px,\r\n    #e0e0e0 60px\r\n  );\r\n  animation: refresh 2s infinite ease-out;\r\n}\r\n\r\n.skeleton .video-item__title,\r\n.skeleton .video-item__channel-name,\r\n.skeleton .video-item__published-date {\r\n  height: 16px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n@keyframes refresh {\r\n  0% {\r\n    background-position: calc(-100px);\r\n  }\r\n  40%,\r\n  100% {\r\n    background-position: 320px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/skeleton.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;;;;;EAKE;;;;;GAKC;EACD,uCAAuC;AACzC;;AAEA;;;EAGE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE;IACE,iCAAiC;EACnC;EACA;;IAEE,0BAA0B;EAC5B;AACF","sourcesContent":[".skeleton {\r\n  width: 220px;\r\n  margin: 8px;\r\n}\r\n\r\n.skeleton .video-item__thumbnail,\r\n.skeleton .video-item__title,\r\n.skeleton .video-item__channel-name,\r\n.skeleton .video-item__published-date, \r\n.skeleton .video-item__save-button {\r\n  background-image: linear-gradient(\r\n    90deg,\r\n    #e0e0e0 0px,\r\n    #ededed 30px,\r\n    #e0e0e0 60px\r\n  );\r\n  animation: refresh 2s infinite ease-out;\r\n}\r\n\r\n.skeleton .video-item__title,\r\n.skeleton .video-item__channel-name,\r\n.skeleton .video-item__published-date {\r\n  height: 16px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n@keyframes refresh {\r\n  0% {\r\n    background-position: calc(-100px);\r\n  }\r\n  40%,\r\n  100% {\r\n    background-position: 320px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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