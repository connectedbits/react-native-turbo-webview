function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet } from 'react-native';
import { getNativeComponent } from './common';
import { SessionContext } from './SessionContext';
const RNVisitableView = getNativeComponent('RNVisitableView');
const NO_SESSION_ERROR = "[Webview] Couldn't find Session, make sure that the your webview is wrapped with Session component.";
const VisitableView = props => {
  return /*#__PURE__*/React.createElement(SessionContext.Consumer, null, _ref => {
    let {
      sessionHandle
    } = _ref;
    if (sessionHandle === undefined) {
      throw new Error(NO_SESSION_ERROR);
    }
    if (sessionHandle) {
      return /*#__PURE__*/React.createElement(RNVisitableView, _extends({}, props, {
        sessionHandle: sessionHandle,
        style: styles.container
      }));
    }
    return null;
  });
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default VisitableView;
//# sourceMappingURL=VisitableView.js.map