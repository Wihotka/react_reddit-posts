import React, {useEffect, useRef, useState} from 'react';
import styles from './cardslist.css';
import {Card, IPostData} from "./Card";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer";


interface IPostsItemData {
    data: {
        id: number,
        author_fullname?: string,
        created_utc?: number,
        thumbnail?: string,
        title?: string,
        url?: string,
    }
}

export function CardsList() {
    const token = useSelector<RootState>(state => state.token.token);
    const [posts, setPosts] = useState<IPostsItemData[]>([]);
    const [nextAfter, setNextAfter] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState('');
    const [countOfLoading, setCountOfLoading] = useState(0);
    const bottomOfList = useRef<HTMLDivElement>(null);

    async function load() {
        if (!token) return;

        if (!nextAfter && countOfLoading > 0) return;

        try {
            setLoading(true);
            setErrorLoading('');

            const {data: {data: {after, children}}} = await axios.get('https://oauth.reddit.com/rising/', {
                headers: {
                    Authorization: `bearer ${token}`,
                },
                params: {
                    limit: 10,
                    after: nextAfter
                }
            });

            setPosts(prevChildren => prevChildren.concat(...children));
            setNextAfter(after);
            setCountOfLoading(prevCountOfLoading => prevCountOfLoading + 1);
        } catch (error) {
            setErrorLoading(String(error));
        }

        setLoading(false);
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                load();
            }
        }, {rootMargin: '10px'});

        if (bottomOfList.current && (countOfLoading % 3 || countOfLoading === 0)) {
            observer.observe(bottomOfList.current);
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        }
    }, [bottomOfList.current, nextAfter, countOfLoading]);


    const cardsListData = posts.map((postItemData: IPostsItemData) => {
        return {
            id: postItemData.data.id,
            postUrl: postItemData.data.author_fullname ?? '',
            postDate: postItemData.data.created_utc ? new Date(postItemData.data.created_utc * 1000).toLocaleDateString("ru-RU") : '',
            postPreviewUrl: postItemData.data.thumbnail ?? '',
            postDescription: postItemData.data.title ?? '',
            user: {
                name: postItemData.data.author_fullname ?? '',
                avatar: 'http://via.placeholder.com/150/000/fff/?text=ДГ',
                url: postItemData.data.url ?? ''
            }
        }
    });

    return (
        <>
            <ul className={styles.cardsList}>
                {cardsListData.map((post: IPostData) => (
                    <Card postData={post} key={post.id}/>
                ))}
            </ul>

            <div ref={bottomOfList}/>

            {cardsListData.length === 0 && !loading && !errorLoading && (<div style={{textAlign: 'center'}}>нет постов...</div>)}
            {loading && (<div style={{textAlign: 'center'}}>загрузка...</div>)}
            {errorLoading && (<div style={{textAlign: 'center'}}>{errorLoading}</div>)}

            {!(countOfLoading % 3) && !loading && (<button className={styles.loadMoreButton} onClick={load}>Загрузить ещё</button>)}
        </>

    );
}

