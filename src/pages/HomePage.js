import React from "react";
import { observer } from "mobx-react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import useStores from "../stores/storeHook";

const HomePage = observer(() => {
  const { toDoStore } = useStores();
  return (
    <>
      <Container style={{ height: "90%" }}>
        <Row style={styles.flexRow}>
          <Col style={styles.columnContainer} md="4">
            <div className="shadow" style={styles.columnBox}>
              <h3 style={styles.optionsHeader}>Options</h3>
              <Button
                outline
                color="dark"
                style={styles.menuButtons}
                tag={Link}
                to="/todo/add"
              >
                Add New
              </Button>
              <Button
                outline
                color="dark"
                style={styles.menuButtons}
                tag={Link}
                to="/todo/edit"
              >
                Edit Item
              </Button>
              <Button
                outline
                color="dark"
                style={styles.menuButtons}
                tag={Link}
                to="/todo/delete"
              >
                Remove Item
              </Button>
              <Button
                outline
                color="dark"
                style={styles.menuButtons}
                tag={Link}
                to="/todo"
              >
                Show All
              </Button>
            </div>
          </Col>
        </Row>
        {toDoStore.todos.map((todo, idx) => {
          return <li key={idx}>{todo.task}</li>;
        })}
      </Container>
    </>
  );
});

export default HomePage;

const styles = {
  mainHeading: {
    textDecoration: "underline",
    textAlign: "center"
  },
  columnBox: {
    padding: "15px",
    border: "solid 1px black",
    borderRadius: "10px",
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "white"
  },
  columnContainer: {
    display: "flex",
    flexDirection: "column"
  },
  flexRow: {
    height: "100%",
    justifyContent: "center",
    marginTop: "20px"
  },
  menuButtons: {
    marginTop: "15px",
    width: "100%"
  },
  optionsHeader: {
    textDecoration: "underline",
    textAlign: "center"
  }
};
