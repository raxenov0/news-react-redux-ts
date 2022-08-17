export interface IMovement{
    name:string,
    lvl:number,
    relax:string,
    approach:string,
    url:string,
    currentList?:boolean,
    info?:string
}

export interface IState{
    movements:IMovement[],
    currentMv:IMovement[],
    timeTraining:number,
    loading:boolean,
    error:string|null
}

export enum TypeState {
    StateSuccess = "STATESUCCESS",
    StateError = "STATEERROR",
    StateLoad = "STATELOAD",
    StateAdd = "STATEADD",
    StateRemove = "STATEREMOVE",
    StatePoint = "STATEPOINT",
    StateEdit = "STATEEDIT",
    StateAddTime = "STATEADDTIME",
    StateResetCurrMV = "STATERESETCURRMV",
    StatePopCurrMV = "STATEPOPCURRMV",
    StateDeleteArrCurMV = "STATEDELETEARRCURMV",
}

interface IReduceLoad{
    type:TypeState.StateLoad,
}

interface IReduceSuccess{
    type:TypeState.StateSuccess,
    payload:IMovement[]
}

interface IReduceAdd{
    type:TypeState.StateAdd,
    payload:IMovement
}

interface IReduceRemove{
    type:TypeState.StateRemove,
    payload:IMovement
}

interface IReducePoint{
    type:TypeState.StatePoint,
    payload:IMovement
}

interface IReduceEdit{
    type:TypeState.StateEdit,
    payload:IMovement
}
interface IReduceAddTime{
    type:TypeState.StateAddTime,
    payload:number
}
interface IReduceResetCurrMV{
    type:TypeState.StateResetCurrMV,
    payload:IMovement[]
}

interface IReducePopCurrMV{
    type:TypeState.StatePopCurrMV
}

interface IReduceError{
    type:TypeState.StateError,
    payload:string,
}

interface IReduceDeleteCurrMV{
    type:TypeState.StateDeleteArrCurMV
}


export type TypeStateAction = IReduceError | IReduceLoad 
| IReduceSuccess | IReduceAdd | IReduceRemove | IReducePoint 
| IReduceEdit | IReduceAddTime | IReduceResetCurrMV | IReducePopCurrMV
| IReduceDeleteCurrMV 