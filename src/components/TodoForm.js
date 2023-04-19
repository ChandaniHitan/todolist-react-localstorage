import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

export const TodoForm = ({ addToDo }) => {
  const [input, setInput] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    addToDo(input);

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    
    setInput("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="mb-3">
        <Row className="align-items-center">
          <Col sm={12} md={8} lg={10}>
            <FormControl
              className="shadow mb-2"
              type="text"
              placeholder="What task would you like to add?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></FormControl>
          </Col>
          <Col sm={12} md={4} lg={2}>
            <Button
              variant="outline-success mb-2"
              className="shadow"
              type="submit"
            >
              Add Task
            </Button>
          </Col>
        </Row>
        {showAlert && ( // render the alert only when showAlert is true
          <Alert variant="info" className="mt-3">
            Task added successfully!
          </Alert>
        )}
      </Form>
    </>
  );
};
