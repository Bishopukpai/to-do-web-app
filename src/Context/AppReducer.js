export default (state, action) =>{
    switch(action.type){
	case 'ADD_EVENT':
            return{
                events: [action.payload, ...state.events]
            }
    case 'EDIT_EVENT':
                const updatedEvent = action.payload
                const updateEvents = state.events.map(event =>{
                    if(event.id === updatedEvent.id){
                        return updatedEvent;
                    }
                    else {
                        return event;
                    }
                })
                return{
                    events:updateEvents
                }
    case 'REMOVE_EVENT':
                    return{
                     events: state.events.filter(event =>{
                         return event.id !== action.payload
                     })
                }         
	default:
            return state
    }
}
