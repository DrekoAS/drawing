import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Application = () => (
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

ReactDOM.render(<Application/>, document.getElementById('root'));