import Translation from "../components/Translation/Translation"
import withAuth from "../hoc/withAuth"

const TranslationPage = () => {
    return (
        <>
            <Translation></Translation>
        </>
        
    )
}
export default withAuth(TranslationPage)