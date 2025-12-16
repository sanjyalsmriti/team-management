import { useEffect, useState } from "react";
import { userApi } from "../services/api";



export const useFetchUsers = () => {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {

        const fetchUsers = async () => {
            try{
                const { data } = await userApi.getAll();
                setUsers(data);
            }catch(err){
                setError(err)
            }finally{
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);
    
    return { users,loading,error };

};