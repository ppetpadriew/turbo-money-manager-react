/// <reference path="../config/types/react-router5.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
const { AppContainer } = require("react-hot-loader");
import {Provider} from "react-redux";
import App from "./App";
import {configureStore} from "./redux/configureStore";
import {configureRouter} from "./routes/configureRouter";
import { RouterProvider } from 'react-router5';

const router = configureRouter();
const store = configureStore(router);

ReactDOM.render(
    <Provider store={store}>
        <RouterProvider router={ router }>
            <AppContainer>
                <App />
            </AppContainer>
        </RouterProvider>
    </Provider>,
    document.getElementById("root")
);



// Handle hot reloading requests from Webpack
if (module.hot) {
    module.hot.accept("./App", () => {

        // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
        const NextApp = require("./App").default;

        // And render it into the root element again
        ReactDOM.render(
            <Provider store={store}>
                <RouterProvider router={ router }>
                    <AppContainer>
                        <NextApp />
                    </AppContainer>
                </RouterProvider>
            </Provider>
                ,
            document.getElementById("root")
        );
    })
}

