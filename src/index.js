import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import rootSaga from './sagas';
import Root from './container/Root';
import routers from './routers';
import { browserHistory } from 'react-router'

const store = configureStore({});
store.runSaga(rootSaga);

ReactDOM.render(<Root
    store={store}
    history={browserHistory}
    routes={routers} />, document.getElementById('root'));
registerServiceWorker();
