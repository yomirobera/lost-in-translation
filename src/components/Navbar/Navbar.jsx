import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import './Navbar.css';

const Navbar = () => {

    //Hide the navigation if user is not logged in
    const { user } = useUser()

    return (
        <nav className="Navigation">
         
            { user !== null &&
            <ul>
                <li>
                    <NavLink to="/TranslationPage">Translation</NavLink>
                </li>
                <li>
                    <NavLink to="/ProfilePage">Profile</NavLink>
                </li>
            </ul>
            }
        </nav>
    )
}

export default Navbar