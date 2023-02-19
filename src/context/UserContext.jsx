import {createContext, useContext, useState } from "react";



//Context, responsible for exposing
const UserContext  = createContext()

export const useUser = () => {
    return useContext(UserContext) //{User, setUser]
}

//Provider, responisble for managing state
const UserProvider = ({Children}) => {

    const [user, setUser] = useState(null)
    const state = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={ state }>
            {Children}
        </UserContext.Provider>
    )
}
export default UserProvider