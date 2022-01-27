import React, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

/*Initial state */
const initialState={
    events:[
        
    ]
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const addEvent = (event) =>{
        dispatch({
            type:'ADD_EVENT',
            payload: event
        })
    }
    
    const editEvent = (event) =>{
        dispatch({
            type:'EDIT_EVENT',
            payload: event
        })
    }
    const removeEvent = (id) =>{
        dispatch({
            type:'REMOVE_EVENT',
            payload: id
        })
    }
   
    return(
        <GlobalContext.Provider value={{
            events:state.events,
            addEvent,
            editEvent,
            removeEvent,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
