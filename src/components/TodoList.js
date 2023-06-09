import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export const TodoList = ({ task, completeTodo, deleteTodo, editTask }) => {
  return (
    <>
      <ListGroup>
        <ListGroup.Item variant="success" className="list-item shadow mb-1">
          <Container fluid="md">
            <Row>
              <Col xs={12} md={6}>
                <p
                  onDoubleClick={() => editTask(task.id)}
                  style={{
                    textDecoration: task.completed ? "line-through" : "",
                  }}
                >
                  {task.title}
                </p>
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center">
                {task.completed === true ? (
                  <p>Status: Completed</p>
                ) : (
                  <p>Status: Pending</p>
                )}
              </Col>
              <Col xs={12} md={2}>
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon
                    className="my-btn px-2"
                    icon={faPenToSquare}
                    onClick={() => editTask(task.id)}
                    style={{ color: "#FFC10B" }}
                  />
                  <FontAwesomeIcon
                    className="my-btn px-2"
                    icon={faCheckCircle}
                    onClick={() => completeTodo(task.id)}
                    style={{ color: "#198754" }}
                  />
                  <FontAwesomeIcon
                    className="delete-btn px-2"
                    icon={faTrash}
                    onClick={() => deleteTodo(task.id)}
                    style={{ color: "#DC3546" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};
