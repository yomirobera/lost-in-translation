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
             <ProfileHeader username = {user.username} />
             <ProfileTranslation translationList = {user.translation}/>
             <ProfileActions/>
             
             
        </>
       
    )
}
export default withAuth(ProfilePage)