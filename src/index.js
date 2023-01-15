import React from "react";
import ReactDOM  from "react-dom/client";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { Main } from './components/main/main';
import thunk from "redux-thunk";
import {rootReducer} from './redux/rootReducer'

const store = createStore (rootReducer, compose(
    applyMiddleware(thunk)
));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <Main />
    </Provider>
);
