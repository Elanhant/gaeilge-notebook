import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { rootSaga } from './actions';
import { enthusiasm, router } from './reducers';
import { StoreState } from './types';
import Hello from './containers/Hello';
import Header from './components/layout/Header';
import NavigationContainer from './containers/Navigation';
import RootContainer from './containers/Root';
import RouterContainer from './containers/Router';
import Page from './components/layout/Page';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const reducer = combineReducers<StoreState>({
    enthusiasm,
    router
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore<StoreState>(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const history = createHistory();

ReactDOM.render(
    <Provider store={store} >
        <Page>
            <RouterContainer history={history} />
            <Header>
                Gaeilge Notebook
                <NavigationContainer />
            </Header>
            <RootContainer />
            <Hello />
        </Page>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
