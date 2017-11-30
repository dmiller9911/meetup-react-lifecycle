import React from 'react';
import { func } from 'prop-types';

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

const styles = {
  header: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: '#fdf6e3',
    display: 'flex',
    flexShrink: 0,
    padding: 10,
  },
  clear: {
    cursor: 'pointer',
    display: 'inline-block',
    padding: 2,
  },
};
