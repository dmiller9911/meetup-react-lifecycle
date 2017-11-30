import React, { Component } from 'react';
import { array } from 'prop-types';

const propTypes = {
  logs: array.isRequired,
};

export class LogList extends Component {
  static propTypes = propTypes;

  handleListRef = (node) => this.listElement = node;

  componentDidUpdate() {
    if (this.listElement) {
      this.listElement.scrollTo(0, this.listElement.scrollHeight);
    }
  }

  render() {
    return (
      <div style={styles.logList} ref={this.handleListRef}>
        {this.props.logs.map(({ label, message }, i) => (
          <code key={i} style={styles.logEntry}>
            <span style={styles.logNumber}>{i + 1} </span>
            <span style={styles.label}>[{label}]: </span>
            <span style={styles.message}>{message}</span>
          </code>
        ))}
      </div>
    );
  }
}

const styles = {
  logList: {
    flex: 1,
    overflowY: 'auto',
    padding: '0 10px 10px',
  },
  logEntry: {
    display: 'block',
    padding: 2,
    fontSize: 16,
  },
  logNumber: {
    width: 25,
    display: 'inline-block',
    color: '#93a1a1',
  },
  label: {
    color: '#859900',
  },
  message: {
    color: '#fdf6e3',
  },
};
