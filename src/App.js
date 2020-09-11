import React from "react";
import "./App.css";
import Homepage from "./component/Homepage";
import Landing from "./component/qr-code";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          exact={true}
          render={(props) => <Landing {...props} />}
        />
        <Route
          path="/machine"
          exact={true}
          render={(props) => <Homepage {...props} payment={false} />}
        />
        <Route
          path="/payment_success"
          exact={true}
          render={(props) => <Homepage {...props} payment={true} />}
        />
      </Switch>
    </div>
  );
}

export default App;
