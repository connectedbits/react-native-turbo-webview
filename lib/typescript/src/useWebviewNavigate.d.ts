import type { Action } from '@react-native-turbo-webview/core';
declare type To<ParamList extends ReactNavigation.RootParamList = ReactNavigation.RootParamList, RouteName extends keyof ParamList = keyof ParamList> = string | (undefined extends ParamList[RouteName] ? {
    screen: Extract<RouteName, string>;
    params?: ParamList[RouteName];
} : {
    screen: Extract<RouteName, string>;
    params: ParamList[RouteName];
});
export default function useWebviewNavigate<ParamList extends ReactNavigation.RootParamList>(): (to: To<ParamList>, actionType?: Action) => void;
export {};
//# sourceMappingURL=useWebviewNavigate.d.ts.map