import React, { Component } from 'react';
import { contextTypes } from './contextTypes';

export const connect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => {
  return class Connected extends Component {
    static contextTypes = contextTypes;

    handleStateUpdate = () => {
      this.forceUpdate();
    }

    getMappedProps(props) {
      const { store } = this.context;
      return {
        ...mapStateToProps(store.getState(), props),
        ...mapDispatchToProps(store.dispatch),
      };
    }

    componentDidMount() {
      this.unsub = this.context.store.subscribe(this.handleStateUpdate);
    }

    componentWillUnmount() {
      this.unsub();
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.getMappedProps(this.props)}
        />
      );
    }
  };
};
