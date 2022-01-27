import React, {useState,useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';
import {v4 as uuid} from 'uuid';
import {Link,useHistory} from 'react-router-dom'
import {
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Button
} from 'reactstrap';
export const Add = () =>{
    const [name, setName] = useState('');
    const{addEvent } = useContext(GlobalContext);
    const history =  useHistory();

    const OnSubmit = () =>{
        const newEvent ={
            id: uuid(),
            name
        }
        addEvent(newEvent)
        history.push('/');
    }
    const onChange = (e) =>{
        setName(e.target.value);
    }

    return(
        <div>
           <Form onSubmit={OnSubmit}>
                <FormGroup>
                    <Label><srtong>Add Event</srtong></Label>
                    <Input type="text" value={name} onChange={onChange} placeholder='Enter an event'></Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
                <Link to ='/' className='btn btn-success ms-2'>My Activities</Link>
                <Link to='/' className='btn btn-danger ms-2'>Cancel</Link>
            </Form>
        </div>
    ) 
}
