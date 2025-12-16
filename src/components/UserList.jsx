import { useMemo, useState } from "react";
import { useFetchUsers } from "../hooks/useFetchUsers";

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
                {filteredUser.map((person) => (
                    <div>
                        <div>
                            {person.name}
                            {person.email}
                        </div>
                    </div>
                ))}
        </div>                                                                            
    )
}
export default UserList;