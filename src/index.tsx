import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { enthusiasm } from './reducers';
import { StoreState } from './types';
import Hello from './containers/Hello';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
});

ReactDOM.render(
    <Provider store={store} >
        <Hello />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
