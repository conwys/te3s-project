import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import te3slogo from "../Navbar/te3slogo.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title"><img src={te3slogo} alt="te3s"></img></Link>
            <ul>
                <CustomLink to="/members">members</CustomLink>
                <CustomLink to="/stats">stats</CustomLink>
                <CustomLink to="/about">about</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}