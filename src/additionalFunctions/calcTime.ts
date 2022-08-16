import { IMovement } from './../types/index';
export function calcTime(array:IMovement[]):string{
    let time = 0;
    array.forEach(element=>{
        time+=(parseInt(element.relax)+1)*parseInt(element.approach)
    })
    let str:string = ''
    Math.floor(time/60) ? str = `${String(Math.floor(time/60))}h : ${String(time%60)}m` : str = `${String(time)} minuts`
    return str
}