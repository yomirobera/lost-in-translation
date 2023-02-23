import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../utils/storage"
import './Profile.css'

const ProfileActions = () => {

    const { setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Are you sure?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    return (
            <p className="logout">
                <button onClick={ handleLogoutClick } className="logoutBtn">Logout</button>
            </p> 
    )
}

export default ProfileActions