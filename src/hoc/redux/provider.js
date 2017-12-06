import { Component } from 'react';
import { contextTypes } from './contextTypes';

export class Provider extends Component {
  static childContextTypes = contextTypes;

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  render() {
    return this.props.children;
  }
}
