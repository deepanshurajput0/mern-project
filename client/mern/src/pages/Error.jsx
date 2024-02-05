import { Link } from"react-router-dom"
export const Error=()=>{
    return(
        <>
        <h1>404 page not found</h1>
        <Link to={'/'} >
        <button>Go back to Home Page</button>
        </Link>
        </>
    )
}