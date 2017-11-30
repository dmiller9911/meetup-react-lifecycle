import React, { Fragment } from 'react';
import { bool, func } from 'prop-types';

const propTypes = {
  isMounted: bool.isRequired,
  onUpdate: func.isRequired,
  onUnmount: func.isRequired,
  onMount: func.isRequired,
};

export function ActionHeader({ isMounted, onMount, onUpdate, onUnmount }) {
  return (
    <header style={styles.header}>
      {!isMounted ? (
        <div style={styles.action} onClick={onMount}>
          Trigger Mount
        </div>
      ): (
        <Fragment>
          <div style={styles.action} onClick={onUpdate}>
            Trigger Update
          </div>
          <div style={styles.action} onClick={onUnmount}>
            Trigger Unmount
          </div>
        </Fragment>
      )}
    </header>
  );
}

ActionHeader.propTypes = propTypes;

const styles = {
  header: {
    flexShrink: 0,
    height: 60,
    backgroundColor: '#20232a',
    zIndex: 10,
    boxShadow: '0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  action: {
    color: '#61dafb',
    cursor: 'pointer',
    padding: '5px 15px',
  },
};
