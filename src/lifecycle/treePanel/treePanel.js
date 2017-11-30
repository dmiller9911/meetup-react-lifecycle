import { bool, object } from 'prop-types';
import React from 'react';
import { TreeNode } from './treeNode';

const propTypes = {
  tree: object.isRequired,
  isMounted: bool.isRequired,
};

export function TreePanel({ tree, isMounted }) {
  return (
    <div style={styles.childPanel}>
      {isMounted && (
        <TreeNode node={tree} />
      )}
    </div>
  );
}
TreePanel.propTypes = propTypes;

const styles = {
  childPanel: {
    flex: 2,
    zIndex: 1,
    boxShadow: '0 0 4px rgba(0,0,0,.14), 4px 0 8px rgba(0,0,0,.28)',
    padding: 10,
    backgroundColor: '#1d1f21',
  },
};
