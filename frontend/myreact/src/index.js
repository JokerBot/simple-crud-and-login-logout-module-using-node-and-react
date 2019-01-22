import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Houses from './components/houses';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.css'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
