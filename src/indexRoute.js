import { Link } from 'react-router-dom';
import React from 'react';
import { routesInOrder } from './routes';
import { styles } from './indexRoute.styles';

export function IndexRoute() {
  return (
    <div style={styles.app}>
      <div style={styles.routes}>
        {routesInOrder.map(r => (
          <Route key={r.path} {...r} />
        ))}
      </div>
    </div>
  );
}

function Route({ title, description, path }) {
  return (
    <Link to={path} style={styles.link}>
      <div style={styles.route}>
        <div style={styles.routeName}>
          {title}
        </div>
      </div>
    </Link>
  );
}
