"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _common = require("./common");
var _SessionContext = require("./SessionContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const RNVisitableView = (0, _common.getNativeComponent)('RNVisitableView');
const NO_SESSION_ERROR = "[Webview] Couldn't find Session, make sure that the your webview is wrapped with Session component.";
const VisitableView = props => {
  return /*#__PURE__*/_react.default.createElement(_SessionContext.SessionContext.Consumer, null, _ref => {
    let {
      sessionHandle
    } = _ref;
    if (sessionHandle === undefined) {
      throw new Error(NO_SESSION_ERROR);
    }
    if (sessionHandle) {
      return /*#__PURE__*/_react.default.createElement(RNVisitableView, _extends({}, props, {
        sessionHandle: sessionHandle,
        style: styles.container
      }));
    }
    return null;
  });
};
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});
var _default = VisitableView;
exports.default = _default;
//# sourceMappingURL=VisitableView.js.map