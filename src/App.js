import React, { Component } from "react";
import Main from "./Components/Main.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configStore } from "./redux/configReducer.js";

const store = configStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
