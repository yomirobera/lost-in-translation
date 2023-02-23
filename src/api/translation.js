const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
export const addTranslation = async (user, translation) => {
    const response = await fetch (`${apiUrl}/${user.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': apiKey
        },
        body: JSON.stringify({
            translations: [...user.translations, translation]
        }),
    });
    if (response.ok) {
        const result = await response.json();
        return [null, result];
    }else {
        throw new Error ("Translations couldn't be updated")    
    }
};