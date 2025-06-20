import ReactDOM from 'react-dom/client';  // вот так — сразу client

import { Component } from './component';

let root;

export const mount = (targetNode, runParams, serverState) => {
    root = ReactDOM.createRoot(targetNode);

    root.render(<Component />);
}

export const unmount = () => {
    root?.unmount();
}
