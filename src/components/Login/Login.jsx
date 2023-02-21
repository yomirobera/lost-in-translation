import { useState, useEffect } from 'react'
import {
    useForm
} from 'react-hook-form'
import {loginUser} from '../../api/user'
import { storageSave } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { STORAGE_KEY_USER } from '../../const/storageKeys'
import './Login.css';

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
        navigate('TranslationPage')
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
            storageSave(STORAGE_KEY_USER, userResponse) //If sucessfuly logged in, store user in local storage
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
            <header className='welcome'>Lost in translation</header>
            
            <section className='loginSection'>
            <img className='logo' alt='logo'></img>
            <h2>Lost in Translation</h2>
            <h4>Get started</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='LoginForm'>
                    <fieldset>
                        <label htmlFor="username"></label>
                        <input type="text"
                            placeholder='Enter your name'
                            {...register("username", usernameConfig)} 
                            />
                            {errorMessage}
                   

                    <button type="submit" disabled={loading} className='submitBtn'>Continue</button>
                    </fieldset>
                    { loading && <p>Logging in...</p>}
                    {apiError && <p> {apiError }</p>}
                </div>
            </form>
            </section>
        </>
    )
}
export default Login