import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export const EditTodoForm = ({editTask, task}) => {
const [input,setInput] = useState(task.title)

const handleSubmit = (e) => {
    e.preventDefault()
    editTask(task.id,input)
}

  return (
    <>
        <Form onSubmit={handleSubmit} className='mb-3 mt-3'>
            <Row className='align-items-center'>
                <Col sm={12} md={8} lg={10}>
                    <FormControl
                    className='shadow mb-2'
                    type="text"
                    placeholder="Update your task"
                    value={input} 
                    onChange={e => setInput(e.target.value) }>
                    </FormControl>
                </Col>
                <Col sm={12} md={4} lg={2}>
                    <Button variant="outline-warning mb-2" className='shadow' type="submit">Update Task</Button>
                </Col>
            </Row>
        </Form>
    </> 
  )
}
