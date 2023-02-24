import ProfileTranslationItem from "./ProfileTranslationItem"
import './Profile.css';
import { deleteHistory } from "../../api/translation";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

const ProfileTranslation = () => {
    const {user, setUser} = useUser()

    /*const translationList = translations.map(
        translation => <ProfileTranslationItem key={ translation} translation={translation} />)
        */

    const handleDeleteHistory = async () => {
        if (window.confirm('Are you sure? This cannot be undone')) {
            const [error, updatedUser] = await deleteHistory(user)
            storageSave(STORAGE_KEY_USER, updatedUser)
            setUser(updatedUser);
        }
    }
    let translationList;

    if (user.translations.length > 0) {
        translationList = user.translations.map((translation, index) => <ProfileTranslationItem key={index + '-' + translation} translation={translation} />)

        if (translationList.length > 10) {
            const lastTen = translationList.filter((_val, index, arr) => index > arr.length - 11);
            translationList = lastTen;
        }
    }


   
    return (
       <section className="translationHistory">
            <h4>Your translation history</h4>
            <ol className="translationList">
                <div className="translationListDiv">
                {translationList}
                </div>
            </ol>

            <button type="submit" className="profilePageButton" onClick={handleDeleteHistory}>Delete history</button>
       </section>
       
    )
}

export default ProfileTranslation