import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

export const Header = () => {
  return (
    <Navbar bg="warning" variant="light" expand="lg" className="mb-3 shadow">
        <Container>
            <Navbar.Brand href="#home">
                <Image rounded src="/images/todo-logo.png" alt="" width="50" height="50"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="nav-heading" />
             <Navbar.Collapse id="nav-heading">
              <h1 className='text-white'>Welcome to todo app</h1>
             </Navbar.Collapse>    
        </Container>
    </Navbar>
  )
}
