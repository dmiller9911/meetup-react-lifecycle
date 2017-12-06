import React, { Component } from 'react';
import { clear, listen } from '../logger';
import { Header } from './header';
import { LogList } from './logList';
import { styles } from './logPanel.styles';

export class LogPanel extends Component {
  state = {
    logs: [],
  };

  componentDidMount() {
    const logs = listen(this.handleLogEvent);
    this.setState(() => ({ logs }));
  }

  handleLogEvent = (logs) => {
    this.setState(() => ({ logs }));
  }

  render() {
    return (
      <div style={styles.logPanel}>
        <Header onClear={clear} />
        <LogList logs={this.state.logs} />
      </div>
    );
  }
}

