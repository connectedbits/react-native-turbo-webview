import React, { RefObject } from 'react';
import { NativeSyntheticEvent } from 'react-native';
interface Message {
    message: object;
}
export interface Props {
    onMessage?: (message: object) => void;
}
interface State {
    sessionHandle?: number | null;
}
export default class Session extends React.Component<Props, State> {
    nativeComponentRef: RefObject<any>;
    constructor(props: Props);
    /**
     * Evaluates Javascript code on webview, mind that this function run in the context
     * of webview runtime and doesn't have access to other js functions.
     */
    injectJavaScript: (jsCallback: Function | string) => Promise<any>;
    getNativeComponentHandleId: () => void;
    componentDidMount(): void;
    onMessage: ({ nativeEvent: { message } }: NativeSyntheticEvent<Message>) => void;
    render(): JSX.Element;
}
export declare function withSession<T>(Component: React.ComponentType<T>): (props: any) => JSX.Element;
export {};
//# sourceMappingURL=Session.d.ts.map