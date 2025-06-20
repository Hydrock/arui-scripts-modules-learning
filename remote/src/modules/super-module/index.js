import ReactDOM from 'react-dom';

let root;

export const mount = (targetNode, runParams, serverState) => {
    root = ReactDOM.createRoot(targetNode);

    root.render(<div>True</div>);
}

export const unmount = () => {
    root?.unmount();
}
