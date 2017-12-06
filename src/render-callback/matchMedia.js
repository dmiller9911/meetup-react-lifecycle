import { func, string } from 'prop-types';
import { Component } from 'react';

export class MatchMedia extends Component {
  static propTypes = {
    media: string.isRequired,
    children: func.isRequired,
  };

  mql = window.matchMedia(this.props.media);
  state = {
    matchesMedia: this.mql.matches,
  }

  handleMediaCallback = (mql) => {
    this.setState(() => ({ matchesMedia: mql.matches }));
  }

  componentDidMount() {
    this.mql.addListener(this.handleMediaCallback);
  }

  componentWillUnmount() {
    this.mql.removeListener(this.handleMediaCallback);
  }

  render() {
    return this.props.children(this.state.matchesMedia);
  }
}
