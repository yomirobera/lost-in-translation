import { useState, useEffect } from 'react'
import {
    useForm
} from 'react-hook-form'
import {loginUser} from '../../api/user'
import { storageSave } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

const usernameConfig = {
    required: true,
    minLength: 3,
};

const Login = () => {
    //Hooks
    const { register, handleSubmit, formState: { errors }} = useForm()

    const {user, setUser} = useUser()

    const navigate = useNavigate()

    //Local State for Login button loading 
    const [loading, setLoading ] = useState(false)

    //Local State If something went wrong when loging in
    const [apiError, setApiError] = useState(null)

    //Side Effects
    useEffect(() => {
       if (user !== null) {
        navigate('/Translation')
    }
    }, [user, navigate])//Empty dependency means only run once

    //Event Handlers
    const onSubmit = async ({username}) => {
        setLoading(true)
        const [ error, userResponse ] = await loginUser(username)
        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            storageSave('Translator-user', userResponse) //If sucessfuly logged in, store user in local storage
            setUser(userResponse)
        }
        setLoading(false)

    };
 

    //Render function
    const errorMessage =(() => {
        if (!errors.username) {
            return null
        }
        if (errors.username.type==='required') {
            return <span>Username is required</span>
        }
        if (errors.username.type ==='minLength') {
            return <span>Minimum three letters is required</span>
        }
    })()

    return (
        <>
            <h2>Whats your name?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        placeholder='Enter your name'
                        {...register("username", usernameConfig)} 
                        />
                        {errorMessage}
                </fieldset>

                <button type="submit" disabled={loading}>Continue</button>
                { loading && <p>Logging in...</p>}
                {apiError && <p> {apiError }</p>}
            </form>
        </>
    )
}
export default Login