import { Platform, requireNativeComponent, UIManager } from 'react-native';

const LINKING_ERROR =
  `The package react-native-turbo-webview doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

export function getNativeComponent<T>(componentName: string) {
  return UIManager.getViewManagerConfig(componentName) != null
    ? requireNativeComponent<T>(componentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
}
