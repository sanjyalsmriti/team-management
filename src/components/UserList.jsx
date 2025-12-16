import { useMemo, useState } from "react";
import { useFetchUsers } from "../hooks/useFetchUsers";
import UserCard from "./UserCard";

const UserList = ()=>{

    const {users} = useFetchUsers();
    const [searchTerm,setSearchTerm] = useState("")
    const filteredUser  = useMemo(()=>{
        if(!searchTerm.trim()){
            return users;
        }
        return users.filter((user) =>{
           return user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        });
    })
    return(
        <div>
            <h1>UserList</h1>
            <input type="text" id="search" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
               {filteredUser.length === 0 ? (
                <div>
                    <p>No users found</p>
                </div>
               ): (
                filteredUser.map((user) =>(
                    <UserCard
                    key={(user.id || `added-${user.tempId}`)}
                    user={user}
                    onClick={()=> console.log(user)}
                    />
                ))
               )}
        </div>                                                                            
    )
}
export default UserList;