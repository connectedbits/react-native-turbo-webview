function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import React from 'react';
import { findNodeHandle } from 'react-native';
import { SessionContext } from './SessionContext';
import { NativeModules } from 'react-native';
import { getNativeComponent } from './common';
const RNSession = getNativeComponent('RNSession');
const {
  RNSessionModule
} = NativeModules;
export default class Session extends React.Component {
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
      const sessionHandle = findNodeHandle(this.nativeComponentRef.current);
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
    this.nativeComponentRef = /*#__PURE__*/React.createRef();
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RNSession, {
      ref: this.nativeComponentRef,
      onMessage: this.onMessage
    }), /*#__PURE__*/React.createElement(SessionContext.Provider, {
      value: {
        sessionHandle
      }
    }, this.props.children));
  }
}
export function withSession(Component) {
  return props => /*#__PURE__*/React.createElement(Session, null, /*#__PURE__*/React.createElement(Component, props));
}
//# sourceMappingURL=Session.js.map