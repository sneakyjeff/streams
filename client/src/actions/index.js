import { SIGN_IN, SIGN_OUT, CREATE_STREAM, GET_STREAMS, GET_STREAM, EDIT_STREAM, DELETE_STREAM } from './types';
import history from '../history';
import streams from '../api/streams';

export const attemptGoogleSignIn = (userId) => {
    return({
        type: SIGN_IN,
        payload: userId
    });
}

export const attemptGoogleSignOut = () => {
    return({
        type: SIGN_OUT
    });
}

export const createStream = (formValues) => {
    return( async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const response = await streams.post('/streams', {...formValues, userId});

        dispatch({
            type: CREATE_STREAM,
            payload: response.data
        });

        history.push('/');
    })
}

export const getStreams = () => {
    return( async (dispatch, getState) => {
        const response = await streams.get('/streams');
        console.log(response.data);

        dispatch({
            type: GET_STREAMS,
            payload: response.data
        })
    });
};

export const getStream = (id) => {
    return( async (dispatch, getState) => {
        const response = await streams.get(`/streams/${id}`);

        dispatch({
            type: GET_STREAM,
            payload: response.data 
        })
    })
}

export const editStream = (id, formValues) => {
    return(async (dispatch, getState) => {
        const response = await streams.patch(`/streams/${id}`, formValues);
        
        dispatch({
            type: EDIT_STREAM,
            payload: response.data
        })

        history.push('/');
    })
}

export const deleteStream = (id) => {
    return(async (dispatch, getState) => {
        await streams.delete(`/streams/${id}`);

        dispatch({
            type: DELETE_STREAM,
            payload: id
        })

        history.push('/');
    })
}