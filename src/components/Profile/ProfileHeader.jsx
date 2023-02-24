import ProfileTranslation from "./ProfileTranslation"
import { useUser } from "../../context/UserContext"
import './Profile.css';


const ProfileHeader = ({username }) => {
    const {user} = useUser()

    return (
        <>
            <header>
                <h4>Welcome back, {username}</h4>
            </header>
            
        </>
    )
}

export default ProfileHeader