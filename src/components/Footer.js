import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";

export const Footer = ({ todos }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const countCompleted = todos.reduce((total, item) => {
      if (item.completed) {
        return total + 1;
      } else {
        return total;
      }
    }, 0);
    setCounter(countCompleted);
  }, [todos]);

  return (
    <div
      className="mt-3 p-4 d-flex fst-italic fs-6"
      style={{ backgroundColor: "#98D8AA", color: "White" }}
    >
      <Row>
        <span>Remaining tasks: {todos.length - counter}</span>
        <span>Completed tasks: {counter}</span>
      </Row>
    </div>
  );
};
