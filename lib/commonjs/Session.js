"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.withSession = withSession;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _SessionContext = require("./SessionContext");
var _common = require("./common");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const RNSession = (0, _common.getNativeComponent)('RNSession');
const {
  RNSessionModule
} = _reactNative.NativeModules;
class Session extends _react.default.Component {
  // const onSessionCreated = async () => {
  //   await SessionNativeModule.createSession(setSessionHandle);
  // };

  constructor(props) {
    super(props);
    _defineProperty(this, "nativeComponentRef", void 0);
    _defineProperty(this, "injectJavaScript", async jsCallback => {
      const isString = typeof jsCallback === 'string' || jsCallback instanceof String;
      const callbackStringified = isString ? jsCallback : `(${jsCallback.toString()})()`;
      return RNSessionModule.injectJavaScript(this.state.sessionHandle, callbackStringified);
    });
    _defineProperty(this, "getNativeComponentHandleId", () => {
      const sessionHandle = (0, _reactNative.findNodeHandle)(this.nativeComponentRef.current);
      this.setState({
        sessionHandle: sessionHandle || null
      });
    });
    _defineProperty(this, "onMessage", _ref => {
      let {
        nativeEvent: {
          message
        }
      } = _ref;
      if (this.props.onMessage) {
        this.props.onMessage(message);
      }
    });
    this.state = {
      sessionHandle: null
    };
    this.nativeComponentRef = /*#__PURE__*/_react.default.createRef();
  }

  /**
   * Evaluates Javascript code on webview, mind that this function run in the context
   * of webview runtime and doesn't have access to other js functions.
   */

  componentDidMount() {
    this.getNativeComponentHandleId();
  }
  render() {
    const {
      sessionHandle
    } = this.state;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(RNSession, {
      ref: this.nativeComponentRef,
      onMessage: this.onMessage
    }), /*#__PURE__*/_react.default.createElement(_SessionContext.SessionContext.Provider, {
      value: {
        sessionHandle
      }
    }, this.props.children));
  }
}
exports.default = Session;
function withSession(Component) {
  return props => /*#__PURE__*/_react.default.createElement(Session, null, /*#__PURE__*/_react.default.createElement(Component, props));
}
//# sourceMappingURL=Session.js.map