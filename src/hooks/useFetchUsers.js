import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, setLoading, setError } from '../store/usersSlice';
import { userApi } from '../services/api';

/**
 * Custom hook to fetch users from API
 * Uses the API service layer for better code organization
 */
export const useFetchUsers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    // Only fetch if users array is empty (avoid unnecessary refetches)
    if (users.length > 0) return;

    const fetchUsers = async () => {
      dispatch(setLoading(true));
      const { data, error } = await userApi.getAll();
      
      if (error) {
        dispatch(setError(error));
      } else {
        dispatch(setUsers(data));
      }
    };

    fetchUsers();
  }, [dispatch, users.length]);
};

