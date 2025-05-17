import { NavLink } from 'react-router-dom';
import css from "./Navigation.module.css";
import clsx from 'clsx';

const activeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.linkActive);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navList}>
          <li>
            <NavLink to="/" className={activeLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={activeLinkClass}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}