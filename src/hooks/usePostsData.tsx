import { useState, useEffect } from 'react';
import axios from 'axios';

export function usePostData() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://oauth.reddit.com/best.json', {
      headers: { Authorization: 'bearer' }
    })
      .then(({ data }) => {
        const postsData = data.data.children.map((obj: { data: string[]; }) => obj.data);
        
        setData(postsData);
      })
      .catch(console.log);
  }, []);

  return [data];
}
