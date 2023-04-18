import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const Filters = ({ activeTab, handleTabChange }) => {
  return (
    <>
      <Container>
        <Nav defaultActiveKey="all" variant="tabs" className="">
          <Nav.Item>
            <Nav.Link
              eventKey="all"
              active={activeTab === "all"}
              onClick={() => handleTabChange("all")}
              style={{ color: activeTab === "all" ? "#198754" : "#CCD5AE" }}
            >
              All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="completed"
              active={activeTab === "completed"}
              onClick={() => handleTabChange("completed")}
              style={{
                color: activeTab === "completed" ? "#198754" : "#CCD5AE",
              }}
            >
              Completed
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="pending"
              active={activeTab === "pending"}
              onClick={() => handleTabChange("pending")}
              style={{ color: activeTab === "pending" ? "#198754" : "#CCD5AE" }}
            >
              Pending
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  );
};
