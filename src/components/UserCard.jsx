import  { memo } from 'react';


const UserCard = memo (({user,onClick })=>{
    const handleClick = () => onClick(user);
    return(
        <div onClick={handleClick}>
            <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.company?.name || 'N/A'}</p>
            </div>
        </div>
    )
})
export default UserCard;