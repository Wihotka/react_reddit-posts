import { useEffect, useState } from 'react';
import queryString from 'query-string';

export function useToken() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const url = new URL(window.location.href);
    const urlParams = queryString.parse(url.hash);

    if (urlParams.access_token) {
      const urlToken: string = urlParams.access_token as string;
      setToken(urlToken);
    }
  }, []);

  return [token];
}
