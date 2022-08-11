import { TodoState, TodoAction, TodoActionType } from './../../types/todo';

const initialState :TodoState = {
    todos:[],
    page:1,
    loading:false,
    limit:2,
    error:null
}


export const todoReducer = (state:TodoState = initialState, action:TodoAction) : TodoState => {
    switch(action.type){
        case TodoActionType.FETCH_TODOS:
            return {...state, loading: true}

        case TodoActionType.FETCH_TODOS_SUCCESS:
            return {...state, todos : action.payload, loading:false}

        case TodoActionType.FETCH_TODOS_ERROR:
            return {...state, error:action.paylaod, loading:false}

        case TodoActionType.SET_TODO_PAGE:
            return {...state, page: action.paylaod}

        default:
            return state
    }
}