"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNativeComponent = getNativeComponent;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package react-native-turbo-webview doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
function getNativeComponent(componentName) {
  return _reactNative.UIManager.getViewManagerConfig(componentName) != null ? (0, _reactNative.requireNativeComponent)(componentName) : () => {
    throw new Error(LINKING_ERROR);
  };
}
//# sourceMappingURL=common.js.map