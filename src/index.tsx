import * as React from "react";
import * as ReactDOM from "react-dom";
const { AppContainer } = require("react-hot-loader");
import {Provider} from "react-redux";
import App from "./App";
import {configureStore} from "./redux/configureStore";

ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById("root"));

const store = configureStore();

// Handle hot reloading requests from Webpack
if (module.hot) {
    module.hot.accept("./App", () => {

        // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
        const NextApp = require("./App").default;

        // And render it into the root element again
        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    <NextApp />
                </AppContainer>
            </Provider>
                ,
            document.getElementById("root")
        );
    })
}

