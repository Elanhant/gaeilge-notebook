import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { enthusiasm, router } from './reducers';
import { StoreState } from './types';
import Hello from './containers/Hello';
import Header from './components/layout/Header';
import NavigationContainer from './containers/Navigation';
import Page from './components/layout/Page';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const reducer = combineReducers<StoreState>({
    enthusiasm,
    router
});

const store = createStore<StoreState>(reducer);

ReactDOM.render(
    <Provider store={store} >
        <Page>
            <Header>
                Gaeilge Notebook
                <NavigationContainer />
            </Header>
            <Hello />
        </Page>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
