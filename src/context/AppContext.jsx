//This component is responsible for merging all the context 

import UserProvider from "./UserContext"

const AppContext = ({children}) => {
    return (
        <UserProvider>
            { children }
        </UserProvider>
    )

}
export default AppContext
