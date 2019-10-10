import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";
import { observer } from "mobx-react";
import useStores from "../stores/storeHook";

const ListAdd = observer(() => {
  const { toDoStore } = useStores();
  return (
    <>
      <h1>Add New Todo</h1>
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <div className="shadow" style={styles.formContainer}>
              <Form>
                <FormGroup>
                  <Label for="todo">New To Do</Label>
                  <Input
                    type="textarea"
                    name="todo"
                    id="newtodo"
                    onChange={e => {
                      toDoStore.handleNewTask(e.target.value);
                    }}
                    value={toDoStore.newTask}
                  />
                </FormGroup>
                <Button
                  onClick={() => toDoStore.addTodo(toDoStore.newTask)}
                  color="primary"
                  className="d-block mx-auto"
                >
                  Submit
                </Button>
              </Form>
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

export default ListAdd;

const styles = {
  formContainer: {
    backgroundColor: "white",
    border: "solid 1px black",
    padding: "15px",
    borderRadius: "10px"
  }
};
