import React, { Component } from 'react';
import { ActionHeader } from './actionHeader';
import { LogPanel } from './logPanel';
import { TreePanel } from './treePanel';
import { createLogger } from './logger';

export class Lifecycle extends Component {
  log = createLogger('App');
  state = {
    tree: getDefaultTree(),
    isTreeMounted: false,
  };

  handleMount = () => {
    this.setState(() => ({ isTreeMounted: true }));
  }

  handleUpdate = () => {
    this.forceUpdate();
  }

  handleUnmount = () => {
    this.setState(() => ({ isTreeMounted: false }));
  }

  render() {
    this.log('render');
    return (
      <div style={styles.lifecycle}>
        <ActionHeader
          isMounted={this.state.isTreeMounted}
          onMount={this.handleMount}
          onUpdate={this.handleUpdate}
          onUnmount={this.handleUnmount}
        />
        <main style={styles.content}>
          <TreePanel
            tree={this.state.tree}
            isMounted={this.state.isTreeMounted}
          />
          <LogPanel />
        </main>
      </div>
    );
  }
}

function getDefaultTree() {
  return {
    label: 'Root',
    children: [
      {
        label: 'Child1',
        children: [
          { label: 'NestedChild1' },
          { label: 'NestedChild2' },
        ],
      },
      { label: 'Child2' },
      { label: 'Child3' },
    ],
  };
}

const styles = {
  lifecycle: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
};
