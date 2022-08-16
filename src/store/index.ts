import { IState, TypeState, TypeStateAction, IMovement } from './../types/index';
import { applyMiddleware, legacy_createStore as createStore} from "redux"
import thunk from "redux-thunk"


const initialState:IState = {
    movements:[],
    currentMv:[], 
    timeTraining:0,
    loading:false,
    error:null
}


export const reducer = (state :IState= initialState, action:TypeStateAction):IState => {
    switch (action.type){
        case TypeState.StateLoad:
            return {...state, loading:true}
        //point
        case TypeState.StateSuccess:
            return {...state, loading:false, movements:action.payload}

        case TypeState.StateError:
            return {...state, loading:false, error:action.payload}

        case TypeState.StateAdd:
            return {...state, currentMv:[...state.currentMv, action.payload]}

        case TypeState.StatePoint:
            state.movements.forEach(element=>{
                if(element.name == action.payload.name) element.currentList = !element.currentList
            })
            return {...state}

        case TypeState.StateResetCurrMV:
            return {...state, currentMv:[...action.payload]}

        case TypeState.StatePopCurrMV:
            state.currentMv.shift()
            return {...state}
            
        case TypeState.StateDeleteArrCurMV:
            return {...state, currentMv:[]}

        case TypeState.StateEdit:
            state.currentMv.forEach(element=>{
                if(element.name == action.payload.name) {
                    element.relax = action.payload.relax
                    element.approach = action.payload.approach
                }
            })
            return {...state}

        case TypeState.StateRemove:
            return{...state, currentMv:state.currentMv.filter(e=>e.name !== action.payload.name)}    

        case TypeState.StateAddTime:
                return{...state, timeTraining:action.payload}    

        default:
            return state
    }
}
export type RootState = ReturnType<typeof reducer>

export const store = createStore(reducer, applyMiddleware(thunk))