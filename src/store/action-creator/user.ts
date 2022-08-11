import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction, UserActionTypes } from './../../types/users';

export const fetchUsers = () => {
    return async (dispatch:Dispatch<UserAction>) => {
        try{
            dispatch({type:UserActionTypes.FETCH_USERS})
            const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS, payload:responce.data})
                // .then(response => response.json())
                // .then(json => dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS, payload:json}))

        } catch(e){
            dispatch({type:UserActionTypes.FETCH_USERS_ERROR, payload: "Errors :("})  
        }
        
    }
}