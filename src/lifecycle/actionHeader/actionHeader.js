import React, { Fragment } from 'react';
import { bool, func } from 'prop-types';
import { styles } from './actionHeader.styles';

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
