import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>Welcome to team-management dashboard</h1>
            <div>
                <h3>User management</h3>
                <p>view and manange all your team members in one place</p>
                <Link to="/users">View Users</Link>
            </div>

        </div>
    )
}
export default Home;