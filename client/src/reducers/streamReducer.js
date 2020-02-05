import _ from 'lodash';
import { CREATE_STREAM, GET_STREAMS, GET_STREAM, EDIT_STREAM, DELETE_STREAM } from '../actions/types';

const streamReducer = (state={}, action) => {
    switch(action.type) {
        case GET_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};
        // _omit comes from the lodash library. It creates a new object with the current state values and drops the element with the given key values
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case GET_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}

export default streamReducer;