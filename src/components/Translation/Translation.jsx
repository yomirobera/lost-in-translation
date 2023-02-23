import { useState } from 'react';
import './Translation.css';
const Translation = () => {
    const [inputText, setInputText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const handleTranslation = () => {

        const translatedImages = inputText.split('').filter(name => name.toLowerCase() !== name.toUpperCase()).map((letter, index) => (
            <img key={index} src={`images/${letter.toLowerCase()}.png`} alt={letter} width="60px" height="60px"/>
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
