import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducer";
import {tokenRequestAsync} from "../store/token/actions";
import {useHistory} from "react-router-dom";

export function useToken() {
    const token = useSelector<RootState, string>(state => state.token.token);
    const loading = useSelector<RootState, boolean>(state => state.token.loading);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!token){
            dispatch(tokenRequestAsync());
        }else{
            history.push('/posts')
        }
    }, [token]);

    return {token, loading};
}
