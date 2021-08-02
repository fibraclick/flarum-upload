module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/components/UploadButton.js":
/*!**********************************************!*\
  !*** ./src/forum/components/UploadButton.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadButton; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/components/DiscussionPage */ "flarum/forum/components/DiscussionPage");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__);








var UploadButton = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UploadButton, _Component);

  function UploadButton() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UploadButton.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.isLoading = false;
    this.isSuccess = false;
    this.isPasteListenerAttached = false;
  };

  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);
  };

  _proto.onupdate = function onupdate(vnode) {
    _Component.prototype.onupdate.call(this, vnode);

    if (!this.isPasteListenerAttached) {
      this.isPasteListenerAttached = true;
      this.attrs.textArea.addEventListener('paste', this.paste.bind(this));
    }
  };

  _proto.view = function view() {
    var buttonIcon;
    if (this.isSuccess) buttonIcon = 'fas fa-check green';else if (this.isError) buttonIcon = 'fas fa-times red';else if (!this.isLoading) buttonIcon = 'far fa-image';
    var label = '';
    if (this.isLoading) label = app.translator.trans('fibraclick-upload.forum.loading');else if (this.isSuccess) label = app.translator.trans('fibraclick-upload.forum.done');
    return m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
      text: app.translator.trans('fibraclick-upload.forum.upload')
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4___default()(['Button', 'hasIcon', 'fibraclick-upload-button', label === '' && 'Button--icon']),
      icon: buttonIcon,
      onclick: this.buttonClicked.bind(this)
    }, this.isLoading && m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default.a, {
      size: "small",
      display: "inline"
    }), m("span", {
      className: "Button-label"
    }, label), m("form", null, m("input", {
      type: "file",
      accept: "image/*",
      onchange: this.formUpload.bind(this),
      disabled: this.isLoading || this.isSuccess || this.isError
    }))));
  };

  _proto.paste = function paste(e) {
    if (this.isLoading) return;

    if (e.clipboardData && e.clipboardData.items) {
      var item = e.clipboardData.items[0];

      if (!item.type.startsWith('image')) {
        return;
      }

      var file = item.getAsFile();
      this.upload(file);
    }
  };

  _proto.buttonClicked = function buttonClicked(e) {
    this.$('input').click();
  };

  _proto.formUpload = function formUpload(e) {
    var files = this.$('input').prop('files');

    if (files.length === 0) {
      return;
    }

    this.upload(files[0]);
  };

  _proto.upload = function upload(file) {
    var _this = this;

    this.isLoading = true;
    m.redraw();
    var did = 0;

    if (app.current.matches(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_5___default.a)) {
      did = app.current.data.discussion.id();
    }

    var formData = new FormData();
    formData.append('image', file);
    formData.append('d', did);
    app.request({
      method: 'POST',
      url: app.forum.attribute('apiUrl') + '/upload',
      serialize: function serialize(raw) {
        return raw;
      },
      body: formData,
      errorHandler: function errorHandler(err) {
        return _this.error(err);
      }
    }).then(this.success.bind(this));
  };

  _proto.success = function success(response) {
    var _this2 = this;

    // Clear the upload form
    this.$('input').val('');
    this.isLoading = false;
    this.isSuccess = true;
    m.redraw();
    var fileName = response.fileName;
    var bbcode = "[IMMAGINE]" + fileName + "[/IMMAGINE]";
    var cursorPosition = this.attrs.editor.getSelectionRange()[0];

    if (cursorPosition === 0) {
      bbcode += '\n\n';
    } else {
      bbcode = "\n\n" + bbcode + "\n\n";
    } // Insert the bbcode


    this.attrs.editor.insertAtCursor(bbcode); // After a bit, re-enable upload

    setTimeout(function () {
      _this2.isSuccess = false;
      m.redraw();
    }, 2000);
  };

  _proto.error = function error(err) {
    // Output the error to the console, for debugging purposes
    console.error(err); // Clear the upload form

    this.$('input').val('');
    this.isLoading = false;
    m.redraw();
    app.alerts.show({
      type: "error"
    }, this.errorToMessage(err));
  };

  _proto.errorToMessage = function errorToMessage(err) {
    var key;

    if (err.status === 415) {
      key = 'fibraclick-upload.forum.error.unsupported';
    } else if (err.status === 400 || err.status === 413) {
      key = 'fibraclick-upload.forum.error.too-big';
    } else {
      key = 'core.lib.error.generic_message';
    }

    return app.translator.trans(key);
  };

  return UploadButton;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UploadButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/UploadButton */ "./src/forum/components/UploadButton.js");




flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('fibraclick-upload', function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'controlItems', function (items) {
    items.add('imgur-upload', m(_components_UploadButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      textArea: this.$().parents('.Composer')[0],
      editor: this.attrs.composer.editor
    }));
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'toolbarItems', function (items) {
    if (items.items.markdown) {
      var index = items.items.markdown.content.children.findIndex(function (x) {
        return x.attrs.icon == 'fas fa-image';
      });
      items.items.markdown.content.children.splice(index, 1);
    }
  });
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/TextEditor":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/forum/components/DiscussionPage":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionPage']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionPage'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map