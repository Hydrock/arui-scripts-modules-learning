import ReactDOM from 'react-dom/client';  // вот так — сразу client

import { Component } from './component';

let root;

export const mount = (targetNode, runParams, serverState) => {
    root = ReactDOM.createRoot(targetNode);

    root.render(<Component runParams={runParams} />);
}

export const unmount = () => {
    root?.unmount();
}
