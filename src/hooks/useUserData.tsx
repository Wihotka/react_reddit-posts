import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { tokenContext } from '../context/tokenContext';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const [data, setData] = useState<IUserData>({});
  const token = useContext(tokenContext);

  useEffect(() => {
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: { Authorization: `bearer ${token}` }
    })
      .then((resp) => {
        const userData = resp.data;
        const cleanIconImg = userData.icon_img.replace(/#.*$/, '').replace(/\?.*$/, '');

        setData({ name: userData.name, iconImg: cleanIconImg });
      })
      .catch(console.log);
  }, [token]);

  return [data];
}
