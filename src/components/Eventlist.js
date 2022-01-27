import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import {Link} from 'react-router-dom'
import {
ListGroup,ListGroupItem, Button
} from 'reactstrap'

export const Eventlist = () =>{
    const{ events, removeEvent } = useContext(GlobalContext);      
    return(
        <ListGroup className='mt-4'>
            {events.map(event =>(
                <ListGroupItem className='mt-4'>
                <strong>{event.name}</strong>
            <div className='ms-auto mt-4'>
                 <Link className='btn btn-secondary mr-1' to={`/edit/${event.id}`}>Edit</Link>
                <Button onClick={()=>removeEvent(event.id)} color='danger'>Delete</Button>
            </div>
            </ListGroupItem>
            ))}
        </ListGroup>
    )
}
