import React,{useState,useContext, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState';
import {
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Button
} from 'reactstrap';
export const Edit = (props) =>{
    const [selectedEvent, setSelectedEvent] = useState({
        id: '',
        name: ''
    });
    const{events, editEvent } = useContext(GlobalContext);
    const history =  useHistory();
    const currentEventid = props.match.params.id
    
    useEffect(() =>{
        const eventid = currentEventid;
        const selectedEvent = events.find(event => event.id === eventid)
        setSelectedEvent(selectedEvent)
    },[currentEventid, events])
    
    const onSubmit = () =>{
        editEvent(selectedEvent)   
        history.push('/');
    }
    const onChange = (e) =>{
        setSelectedEvent({...selectedEvent, [e.target.name]: e.target.value})
    }

    return(
        <div>
           <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label><srtong>Change Event</srtong></Label>
                    <Input type="text" name="name" value={selectedEvent.name} onChange={onChange} placeholder='Enter an event'></Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
                <Link to ='/' className='btn btn-success ms-2'>My Activities</Link>
                <Link to='/' className='btn btn-danger ms-2'>Cancel</Link>
            </Form>
        </div>
    ) 
}
