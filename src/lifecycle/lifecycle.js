import React, { Component } from 'react';
import { clear, createLogger } from './logger';
import { ActionHeader } from './actionHeader';
import { LogPanel } from './logPanel';
import { TreePanel } from './treePanel';
import { styles } from './lifecycle.styles';

export class Lifecycle extends Component {
  log = createLogger('App');
  state = {
    tree: getDefaultTree(),
    isTreeMounted: false,
    hasError: false,
  };

  handleMount = () => {
    this.setState(() => ({ isTreeMounted: true }));
  }

  handleUpdate = () => {
    this.forceUpdate();
  }

  handleUnmount = () => {
    this.setState(() => ({
      isTreeMounted: false,
      tree: getDefaultTree(),
    }));
  }

  componentDidCatch(e, i) {
    this.log(`componentDidCatch({ message: ${JSON.stringify(e.message)} })`);
    this.setState(({ tree }) => {
      const updateTree = (node) => {
        if (node.label === e.message) {
          return { ...node, didCatchError: true };
        }
        return { ...node,
          children: node.children && node.children.map(n => updateTree(n)),
        };
      };
      return {
        tree: updateTree(tree),
      };
    });
  }

  componentWillUnmount() {
    clear();
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
      {
        label: 'DoesNotUpdate',
        children: [
          { label: 'DoesNotUpdateNested' },
        ],
      },
    ],
  };
}
