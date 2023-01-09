import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
import "regenerator-runtime/runtime.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import global from 'global';
import { addons } from '@storybook/addons';
import { EVENTS } from './constants';
var document = global.document,
    globalWindow = global.window;

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

var channel = addons.getChannel(); // Holds axe core running state

var active = false; // Holds latest story we requested a run

var activeStoryId;
/**
 * Handle A11yContext events.
 * Because the event are sent without manual check, we split calls
 */

var handleRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(storyId) {
    var _yield$getParams, manual;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getParams(storyId);

          case 2:
            _yield$getParams = _context.sent;
            manual = _yield$getParams.manual;

            if (manual) {
              _context.next = 7;
              break;
            }

            _context.next = 7;
            return run(storyId);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();

var run = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(storyId) {
    var input, axe, _input$element, element, config, _input$options, options, htmlElement, result;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            activeStoryId = storyId;
            _context2.prev = 1;
            _context2.next = 4;
            return getParams(storyId);

          case 4:
            input = _context2.sent;

            if (active) {
              _context2.next = 19;
              break;
            }

            active = true;
            channel.emit(EVENTS.RUNNING);
            _context2.next = 10;
            return import('axe-core');

          case 10:
            axe = _context2.sent.default;
            _input$element = input.element, element = _input$element === void 0 ? '#root' : _input$element, config = input.config, _input$options = input.options, options = _input$options === void 0 ? {} : _input$options;
            htmlElement = document.querySelector(element);
            axe.reset();

            if (config) {
              axe.configure(config);
            }

            _context2.next = 17;
            return axe.run(htmlElement, options);

          case 17:
            result = _context2.sent;

            // It's possible that we requested a new run on a different story.
            // Unfortunately, axe doesn't support a cancel method to abort current run.
            // We check if the story we run against is still the current one,
            // if not, trigger a new run using the current story
            if (activeStoryId === storyId) {
              channel.emit(EVENTS.RESULT, result);
            } else {
              active = false;
              run(activeStoryId);
            }

          case 19:
            _context2.next = 24;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](1);
            channel.emit(EVENTS.ERROR, _context2.t0);

          case 24:
            _context2.prev = 24;
            active = false;
            return _context2.finish(24);

          case 27:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 21, 24, 27]]);
  }));

  return function run(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
/** Returns story parameters or default ones. */


var getParams = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(storyId) {
    var _ref4, parameters;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return globalWindow.__STORYBOOK_STORY_STORE__.loadStory({
              storyId: storyId
            });

          case 2:
            _context3.t0 = _context3.sent;

            if (_context3.t0) {
              _context3.next = 5;
              break;
            }

            _context3.t0 = {};

          case 5:
            _ref4 = _context3.t0;
            parameters = _ref4.parameters;
            return _context3.abrupt("return", parameters.a11y || {
              config: {},
              options: {
                restoreScroll: true
              }
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getParams(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

channel.on(EVENTS.REQUEST, handleRequest);
channel.on(EVENTS.MANUAL, run);