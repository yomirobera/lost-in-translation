import Translation from "../components/Translation/Translation"
import withAuth from "../hoc/withAuth"

const TranslationPage = () => {
    return (
        <>
            <h1>Translation Page</h1>
            <Translation></Translation>
        </>
        
    )
}
export default withAuth(TranslationPage)