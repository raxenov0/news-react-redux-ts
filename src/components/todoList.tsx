import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";


export const TodoList : React.FunctionComponent = () => {
    const {todos, limit, loading, error, page} = useTypedSelector(state => state.todos)
    const {fetchTodo, setTodoPage} = useAction()
    const pagination:number[] = [1,2,3,4,5]

   useEffect(()=> {
    fetchTodo(page, limit)
    
   },[page])



    return(
        <div>
            <div>
                {todos.map(e => <div key={e.id}>{e.id} - {e.name}</div>)}
            </div>
            <div style={{marginTop:'20px'}}>
                {pagination.map(e=><span onClick={()=>setTodoPage(e)} key={e} style={{border:page == e ? '2px solid green' : '1px solid grey', padding:'3px', margin:'5px'}}>{e}</span>)}
            </div>
        </div>
        
    )
}