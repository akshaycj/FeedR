import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import registerServiceWorker from "./registerServiceWorker";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { store } from "./store";
import { Provider } from "react-redux";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjht90wxj33vk0152qwrjgqer"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
