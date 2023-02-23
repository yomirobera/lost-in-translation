import ProfileTranslation from "./ProfileTranslation"
import { useUser } from "../../context/UserContext"


const ProfileHeader = ({username }) => {
    const {user} = useUser()

    return (
        <>
            <header>
                <h4>Hello, Welcome back {username}</h4>
            </header>
            <p>{user.translations}</p>
            
        </>
    )
}

export default ProfileHeader