import React from 'react';
import { func } from 'prop-types';
import { styles } from './header.styles';

const propTypes = {
  onClear: func.isRequired,
};

export function Header({ onClear }) {
  return (
    <div style={styles.header}>
      <span onClick={onClear} style={styles.clear}>
        Clear Logs
      </span>
    </div>
  );
}

Header.propTypes = propTypes;
