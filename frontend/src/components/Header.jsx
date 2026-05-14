import { NavLink } from "react-router-dom";
import { useAuth } from "../store/authStore";
import {
  navbarClass,
  navContainerClass,
  navBrandClass,
  navLinksClass,
  navLinkClass,
  navLinkActiveClass,
} from "../styles/common";

function Header() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const user = useAuth((state) => state.currentUser);

  const getProfilePath = () => {
    if (!user) return "/";
    if (user.role === "AUTHOR") return "/author-profile";
    if (user.role === "ADMIN") return "/admin-profile";
    return "/user-profile";
  };

  return (
    <nav className={navbarClass}>
      <div className={navContainerClass}>
        <NavLink to="/" className={`${navBrandClass} flex items-center gap-2`}>
          <div className="w-8 h-8 bg-[#0066cc] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          MyBlog
        </NavLink>

        <ul className={navLinksClass}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${isActive ? navLinkActiveClass : navLinkClass} transition-all duration-200 hover:scale-105`
              }
            >
              Home
            </NavLink>
          </li>

          {!isAuthenticated ? (
            <>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `${isActive ? navLinkActiveClass : navLinkClass} transition-all duration-200 hover:scale-105`
                  }
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `${isActive ? navLinkActiveClass : navLinkClass} transition-all duration-200 hover:scale-105 bg-[#0066cc] text-white px-4 py-2 rounded-full hover:bg-[#004499]`
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to={getProfilePath()}
                className={({ isActive }) =>
                  `${isActive ? navLinkActiveClass : navLinkClass} transition-all duration-200 hover:scale-105 flex items-center gap-2`
                }
              >
                <div className="w-6 h-6 bg-[#0066cc] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
