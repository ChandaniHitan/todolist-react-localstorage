import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export const TodoForm = ({addToDo}) => {
const [input,setInput] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()
    if (!input) return;
    addToDo(input)
    setInput("")
}

  return (
    <div>
        <Form onSubmit={handleSubmit} className='mb-3'>
            <Row className='align-items-center'>
                <Col sm={12} md={8} lg={10}>
                    <FormControl
                    className='shadow mb-2'
                    type="text"
                    placeholder="What task would you like to add?"
                    value={input} 
                    onChange={e => setInput(e.target.value) }>
                    </FormControl>
                </Col>
                <Col sm={12} md={4} lg={2}>
                    <Button variant="outline-success mb-2" className='shadow' type="submit">Add Task</Button>
                </Col>
            </Row>
        </Form>
    </div> 
  )
}
