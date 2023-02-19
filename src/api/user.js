//Link to our user
import { createHeaders} from './index'

const apiUrl = process.env.REACT_APP_API_URL

//cheack if user exist
const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok) {
            throw new Error('Could not complete request.')
        }
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }
}

//Create user
const createUser =async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST', //Create a user
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not create user with username ' + username)
        }
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }

}

export const loginUser = async (username) => {
    const [checkError, user] = await checkForUser(username)

    if(checkError !==null) {
        return [checkError, null ]
    }

    if (user.length > 0) {
        //User exists.
        return [null, user.pop() ]
    }
    //Create new user if user doesnt exist
    return await createUser(username)

}
