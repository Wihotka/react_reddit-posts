import {useEffect, useState, useContext} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer";
import axios from 'axios';

interface IResponseDataItem{
    data: object,
    kind: string,
}

export function usePostsData(){
    const token = useSelector<RootState, string>(state => state.token.token);

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://oauth.reddit.com/best', {
            headers: {
                Authorization: `bearer ${token}`,
            }
        })
        .then((response) => {
            const postsData = response.data.data.children.map((item: IResponseDataItem) => item.data);
            console.log(response.data.data.children);
            setData(postsData);
        })
        .catch(console.log);

    }, [token]);

    return [data];
}
