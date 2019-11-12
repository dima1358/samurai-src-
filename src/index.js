import React from 'react'
import ReactDOM from "react-dom"
import App from "./App"
import './index.css'
import store from "./redux/reduxStore"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"

let rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'))
}

rerenderTree()