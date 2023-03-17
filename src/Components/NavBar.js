
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
                <a href="#" class="logo">Portfo<span>lio</span></a>
                <div class="nav-links">
                    < Link to="/">Home</Link>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/resume">Resume</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                  
                </div>
        </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}