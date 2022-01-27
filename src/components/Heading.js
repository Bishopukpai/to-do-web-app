import React from 'react'
import { Link } from 'react-router-dom';
import {
    Navbar, Nav, NavItem, Container
} from 'reactstrap'
export const Heading = () =>{
    return(
        <Navbar color='primary' dark>
            <Container className='d-flex'>
                <Nav>
                    <NavItem className='add'>
                        <Link to='/Add' className='btn btn-success'>Add Event</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}
