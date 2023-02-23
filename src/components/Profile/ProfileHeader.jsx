import ProfileTranslation from "./ProfileTranslation"
import { useUser } from "../../context/UserContext"
import './Profile.css'


const ProfileHeader = ({username }) => {
    const {user} = useUser()

    return (
        <>
            <section className="welcomeUser">
                <h2>Hello, Welcome back {username}</h2>
            </section>

            <section className="translationHistory">
            <h4>Your translation history</h4>
            <p>{user.translations}</p> 
            <button>Delete translation history</button>
            </section>
        </>
    )
}

export default ProfileHeader