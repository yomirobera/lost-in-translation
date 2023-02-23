import ProfileHeader from "../components/Profile/ProfileHeader"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import ProfileActions from "../components/Profile/ProfileActions"
import ProfileTranslation from "../components/Profile/ProfileTranslation"

const ProfilePage = () => {

    //Show the user that is logged in
    const {user} = useUser()

    return (
        <>
             <h1>Profile Page</h1>
             <ProfileHeader username = {user.username} />
             <ProfileActions/>
             <ProfileTranslation translationList = {user.translation}/>
             
             
        </>
       
    )
}
export default withAuth(ProfilePage)