import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const APP_NAME = 'Orders';

window[`render${APP_NAME}`] = (containerId) => {
  ReactDOM.render(<App />, document.getElementById(containerId));
};

window[`unmount${APP_NAME}`] = (containerId) => {
  const container = document.getElementById(containerId);
  ReactDOM.unmountComponentAtNode(container);
};

if (!document.getElementById(`${APP_NAME}-container`)) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
