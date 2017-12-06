import React, { Component } from 'react';
import { array } from 'prop-types';
import { styles } from './logList.styles';

export class LogList extends Component {
  static propTypes = {
    logs: array.isRequired,
  };

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
