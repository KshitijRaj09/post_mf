import React from "react";
import { Socket } from "socket.io-client";
declare global {
    interface Window {
        socket: Socket;
    }
}
declare const MemorizedPost: React.MemoExoticComponent<() => React.JSX.Element>;
export default MemorizedPost;
