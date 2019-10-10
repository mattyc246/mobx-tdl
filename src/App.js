import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { observer } from "mobx-react";
import HomePage from "./pages/HomePage";
import ListIndex from "./pages/ListIndex";
import ListAdd from "./pages/ListAdd";
import ListEdit from "./pages/ListEdit";
import ListRemove from "./pages/ListRemove";

const App = observer(
  class App extends React.Component {
    render() {
      return (
        <>
          <NavBar />
          <Container fluid style={styles.container}>
            <Switch>
              <Route
                exact
                path="/"
                component={props => {
                  return <HomePage {...props} />;
                }}
              />
              <Route
                path="/todo/add"
                component={props => {
                  return <ListAdd {...props} />;
                }}
              />
              <Route
                path="/todo/edit"
                component={props => {
                  return <ListEdit {...props} />;
                }}
              />
              <Route
                path="/todo/delete"
                component={props => {
                  return <ListRemove {...props} />;
                }}
              />
              <Route
                path="/todo"
                component={props => {
                  return <ListIndex {...props} />;
                }}
              />
            </Switch>
          </Container>
        </>
      );
    }
  }
);

export default App;

const styles = {
  container: {
    backgroundColor: "whitesmoke",
    flex: "1 1 auto"
  }
};
