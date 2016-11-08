import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import App from './components/App';
import reducer from './reducers/textReducer';
import DevTools from './containers/DevTools';

const logger = createLogger();

const initialState = { text: "init value" };

const enhancer = compose(
    applyMiddleware(logger),
    DevTools.instrument()
);

const store = createStore(reducer, initialState, enhancer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'SET_TEXT',
    text: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.'
});

store.dispatch({
    type: 'SET_TEXT',
    text: 'Another value'
});

const rootElement = document.getElementById('root');
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <div>
                <App />
                <DevTools />
            </div>
        </Provider>
    </AppContainer>,
    rootElement
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <div>
                        <NextApp />
                        <DevTools />
                    </div>
                </Provider>
            </AppContainer>,
            rootElement
        );
    });
}