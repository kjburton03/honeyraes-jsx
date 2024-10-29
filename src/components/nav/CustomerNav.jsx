import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const CustomerNav = () => {
    const navi = useNavigate

    return (
        <ul className="navbar">
            {localStorage.getItem("honey_user") ? (
        <li className="navbar-item navbar-logout">
                <Link
                className="navbar-link"
                to=""
                onClick={() => {
                    localStorage.removeItem("honey_user")
                    navi("/", { replace: true })
                }}
                >
                Logout
                </Link>
            </li>
            ) : (
            ""
            )}
    </ul>
    )
}