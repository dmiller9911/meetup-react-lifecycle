import React, { Component, Fragment } from 'react';
import { array, shape, string } from 'prop-types';
import { createLogger } from '../logger';

const propTypes = {
  node: shape({
    label: string.isRequired,
    children: array,
  }),
};

export class TreeNode extends Component {
  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.log = createLogger(this.props.node.label);
    this.log('constructor');
  }

  componentWillMount() {
    this.log('componentWillMount');
  }

  componentDidMount() {
    this.log('componentDidMount');
  }

  componentWillReceiveProps() {
    this.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    this.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    this.log('componentWillUpdate');
  }

  componentDidUpdate() {
    this.log('componentDidUpdate');
  }

  componentWillUnmount() {
    this.log('componentWillUnmount');
  }

  render() {
    this.log('render');
    const { label, children } = this.props.node;
    const hasChildren = !!children && children.length;
    return (
      <code style={styles.child}>
        <div style={styles.tag}>
          {'<'}{label}{hasChildren ? '>' : ' />'}
        </div>
        {hasChildren && (
          <Fragment>
            <div style={styles.children}>
              {children.map((c, i) => <TreeNode key={i} node={c} />)}
            </div>
            <div style={styles.tag}>{'<'}{label} {'/>'}</div>
          </Fragment>
        )}
      </code>
    );
  }
}

const styles = {
  child: {
    fontSize: 18,
    cursor: 'pointer',
  },
  tag: {
    color: '#6c9ef8',
  },
  children: {
    paddingLeft: 25,
  },
};
