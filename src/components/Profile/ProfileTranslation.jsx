import ProfileTranslationItem from "./ProfileTranslationItem"

const ProfileTranslation = ({translationList}) => {

    /*const translationList = translations.map(
        translation => <ProfileTranslationItem key={ translation} translation={translation} />)
        */
   
    return (
       <section>
            <h4>Your translation history</h4>
            <h5>{translationList}</h5>
       </section>
       
    )
}

export default ProfileTranslation