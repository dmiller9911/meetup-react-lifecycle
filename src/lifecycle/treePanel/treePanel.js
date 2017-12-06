import React, { Fragment } from 'react';
import { bool, object } from 'prop-types';
import { TreeNode } from './treeNode';
import { styles } from './treePanel.styles';

const propTypes = {
  tree: object.isRequired,
  isMounted: bool.isRequired,
};

export function TreePanel({ tree, isMounted }) {
  return (
    <div style={styles.childPanel}>
      {isMounted && (
        <Fragment>
          <TreeNode node={tree} />
          <div style={styles.tip}>
            Click a node to trigger an error
          </div>
        </Fragment>
      )}
    </div>
  );
}

TreePanel.propTypes = propTypes;
