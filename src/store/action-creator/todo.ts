import axios from 'axios';
import { Dispatch } from 'react';
import { TodoAction, TodoActionType } from '../../types/todo';
import { UserAction, UserActionTypes } from './../../types/users';

export const fetchTodo = (page:number = 1, limit:number = 5) => {
    return async (dispatch:Dispatch<TodoAction>) => {
        try{
            dispatch({type:TodoActionType.FETCH_TODOS})
            const responce = await axios.get('https://jsonplaceholder.typicode.com/users',{
                params:{_page:page, _limit:limit}
            })
            dispatch({type:TodoActionType.FETCH_TODOS_SUCCESS, payload:responce.data})

        } catch(e){
            dispatch({type:TodoActionType.FETCH_TODOS_ERROR, paylaod:String(e)})  
        }
        
    }
}

export function setTodoPage(page:number) : TodoAction {
    console.log(page)
    return {type:TodoActionType.SET_TODO_PAGE, paylaod:page}
}