import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as LogoSmall } from "../assets/logo-small.svg";
import { ReactComponent as Globe } from "../assets/globe.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import { ReactComponent as Hamburger } from "../assets/hamburger.svg";
import { NavLink } from "react-router-dom";
import "./header.css";

export function Header(props) {
  return (
    <header className="section-padding-wrapper header">
        <div className="header__logo">
          <Logo className="header__logo-large" />
          <LogoSmall className="header__logo-small" />
        </div>

        <div className="tabs__wrapper">
          <NavLink
            to="/experiences"
            className={({ isActive }) =>
              isActive ? "tabs__item tabs__item-active" : "tabs__item"
            }
          >
            Experiences
          </NavLink>
          <NavLink
            to="/stays"
            className={({ isActive }) =>
              isActive ? "tabs__item tabs__item-active" : "tabs__item"
            }
          >
            Stays
          </NavLink>
          <NavLink
            to="/online-experiences"
            className={({ isActive }) =>
              isActive ? "tabs__item tabs__item-active" : "tabs__item"
            }
          >
            Online Experiences
          </NavLink>
        </div>

        <div className="header-right">
          <a href="host" className="become-host-anchor">
            Become a host
          </a>
          <button type="button" className="change-location-btn">
            <Globe />
          </button>
          <button type="button" className="profile">
            <span className="w-16">
              <Hamburger />
            </span>
            <span className="w-30">
              <Profile />
            </span>
          </button>
        </div>
    </header>
  );
}
