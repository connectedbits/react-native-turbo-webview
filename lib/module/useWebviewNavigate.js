import { NavigationContainerRefContext, getActionFromState, getStateFromPath } from '@react-navigation/core';
import { LinkingContext, StackActions } from '@react-navigation/native';
import extractPathFromURL from '@react-navigation/native/src/extractPathFromURL';
import * as React from 'react';
/*
 * Its like useLinkTo with some custom tweaks
 */
export default function useWebviewNavigate() {
  const navigation = React.useContext(NavigationContainerRefContext);
  const linking = React.useContext(LinkingContext);
  const linkTo = React.useCallback((to, actionType) => {
    if (navigation === undefined) {
      throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
    }
    if (typeof to !== 'string') {
      navigation.navigate(to.screen, to.params);
      return;
    }
    const {
      options
    } = linking;
    const path = to.match(/^https?:\/\//) ? extractPathFromURL(options === null || options === void 0 ? void 0 : options.prefixes, to) : to;
    const state = options !== null && options !== void 0 && options.getStateFromPath ? options.getStateFromPath(path, options.config) : getStateFromPath(`${path}`, options === null || options === void 0 ? void 0 : options.config);
    if (state) {
      const action = getActionFromState(state, options === null || options === void 0 ? void 0 : options.config);
      if (action === undefined) {
        navigation.reset(state);
      } else {
        const stackAction = actionType === 'replace' ? StackActions.replace : StackActions.push;
        navigation.dispatch({
          ...stackAction(action.payload.name, {
            ...action.payload.params,
            path
          })
        });
      }
    } else {
      throw new Error('Failed to parse the path to a navigation state.');
    }
  }, [linking, navigation]);
  return linkTo;
}
//# sourceMappingURL=useWebviewNavigate.js.map