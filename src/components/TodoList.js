import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const TodoList = ({task, completeTodo, deleteTodo, editTodo}) => {

  return (
    <>
        <ListGroup>
            <ListGroup.Item variant="success" className="shadow mb-1">
            <Container fluid="md">
                <Row>
                <Col xs={6}>
                     <p onDoubleClick={() => editTodo(task.id)} style={{textDecoration: task.completed ? "line-through" : ""}}>
                       {task.title} 
                    </p> 
                </Col>
                <Col xs={6} md={4}>
                {task.completed === true ? (
                    <p>Status: Completed</p>
                        ) : (
                    <p>Status: Pending</p>
                    )}
                </Col>
                <Col xs={10} md={2}>
                        <div className='d-flex justify-content-end'>
                             <FontAwesomeIcon className="px-2" icon={faPenToSquare} onClick={() => editTodo(task.id)} style={{ color: '#FFC10B' }} />
                             <FontAwesomeIcon className="px-2" icon={faCheckCircle} onClick={() => completeTodo(task.id)} style={{ color: '#198754' }} />
                             <FontAwesomeIcon className="px-2" icon={faTrash} onClick={() => deleteTodo(task.id)} style={{ color: '#DC3546' }} />
                        </div>
                       
                </Col>
            </Row>
            </Container>
            
            </ListGroup.Item>
        </ListGroup>
    </>    
  )     
}
