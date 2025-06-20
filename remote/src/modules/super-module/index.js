import ReactDOM from 'react-dom/client';  // вот так — сразу client

let root;

export const mount = (targetNode, runParams, serverState) => {
    root = ReactDOM.createRoot(targetNode);

    root.render(<div>True</div>);
}

export const unmount = () => {
    root?.unmount();
}
