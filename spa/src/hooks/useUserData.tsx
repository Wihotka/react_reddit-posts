import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from '../store/reducer';
import { useDispatch } from 'react-redux';
import { IUserData, meRequestAsync } from '../store/me/actions';

export function useUserData() {
  const data = useSelector<TRootState, IUserData>(state => state.me.data);
  const loading = useSelector<TRootState, boolean>(state => state.me.loading);
  const token = useSelector<TRootState, string>(state => state.token.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(meRequestAsync());
  }, [token]);

  return {
    data,
    loading,
  };
}
