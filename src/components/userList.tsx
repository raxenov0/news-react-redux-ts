import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creator/user";
import { UserAction } from "../types/users";


export const UserList : React.FunctionComponent = () => {
    const {users,error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useAction()

    useEffect(()=>{
        fetchUsers()
    }, [])
    
    return(
        <div>
           {loading?
           <div>Loading...</div>
            :
            users.map(e=> <div key={e.name}>{e.name}</div>)
        }
        </div>
    )
}