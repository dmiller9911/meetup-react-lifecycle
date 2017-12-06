import { index, routesInOrder } from './routes';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { styles } from './header.styles';

export function Header() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        {[index, ...routesInOrder].map(r => (
          <NavLink
            exact
            key={r.path}
            to={r.path}
            style={styles.link}
            activeStyle={styles.linkActive}
          >
            {r.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
