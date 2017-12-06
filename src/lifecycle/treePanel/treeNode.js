import React, { Component, Fragment } from 'react';
import { array, bool, shape, string } from 'prop-types';
import { createLogger } from '../logger';
import { styles } from './treeNode.styles';

const propTypes = {
  node: shape({
    label: string.isRequired,
    children: array,
    didCatchError: bool,
  }),
};

export class TreeNode extends Component {
  static propTypes = propTypes;

  constructor(props, context) {
    super(props);
    this.log = createLogger(this.props.node.label);
    this.log('constructor');

    this.state = {
      showError: false,
    };
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
    return this.props.node.label !== 'DoesNotUpdate';
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

  handleClick = (e) => {
    e.stopPropagation();
    this.setState({ showError: true });
  }

  render() {
    this.log('render');
    if(this.state.showError) {
      throw new Error(this.props.node.label);
    }

    const { label, children, didCatchError } = this.props.node;
    const hasChildren = !!children && children.length;

    return (
      <code style={styles.child}>
        <div style={styles.tag} onClick={this.handleClick}>
          <Tag
            name={label}
            closing={hasChildren}
            error={didCatchError}
          />
        </div>
        {hasChildren && (
          <Fragment>
            <div style={styles.children}>
              {children.map((c, i) => <TreeNode key={i} node={c} />)}
            </div>
            <div style={styles.tag}>
              <Tag
                closing
                name={label}
                error={didCatchError}
              />
            </div>
          </Fragment>
        )}
      </code>
    );
  }
}

function Tag({ name, closing = false, error = false }) {
  return (
    <Fragment>
      <span>{ `<${name}${closing ? '/>' : '>'}` }</span>
      {error && (
        <span style={styles.error}>Errored</span>
      )}
    </Fragment>
  );
}
