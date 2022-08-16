import { getMyGroups } from './../firebase/config';
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"


export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators({getMyGroups},dispatch)
}