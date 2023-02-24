import { useState } from 'react';
import { addTranslation } from '../../api/translation';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { useUser } from '../../context/UserContext';
import { storageSave } from '../../utils/storage';
import './Translation.css';
const Translation = () => {
    const {user, setUser} = useUser()
    const [inputText, setInputText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const handleTranslation = async () => {
        const [error, updatedUser] = await addTranslation(user, inputText)
        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
        const translatedImages = inputText.split('').filter(name => name.toLowerCase() !== name.toUpperCase()).map((letter, index) => (
            <img key={index} src={`images/${letter.toLowerCase()}.png`} alt={letter} width="47px" height="47px"/>
        ));
        
        setTranslatedText(translatedImages);
    };
    return (
    <>  
        <section className="sentenceArea">
            <input type="text" placeholder='Translate ...' maxLength={40} 
                value={inputText} onChange={(e) => setInputText(e.target.value)} className='textToTranslate'/>
            <button type="submit" onClick={handleTranslation} className='translateBtn'></button>
        </section>
        <div className='translation'>{translatedText}</div>
    </>
    );
}
export default Translation
