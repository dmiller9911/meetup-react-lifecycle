import React, { Component } from 'react';
import { MenuDown } from './icons';
import { string } from 'prop-types';
import { styles } from './callReturn.styles';

class Select extends Component {
  static propTypes = {
    defaultValue: string.isRequired,
  };

  state = {
    isOpen: false,
    value: this.props.defaultValue,
  };

  handleRootClick = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  }

  handleOptionSelect(value) {
    this.setState(() => ({ value }));
  }

  render() {
    const { children } = this.props;
    const { value, isOpen } = this.state;

    let label = null;
    const optionClones = [];
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.props.value === value) {
        label = child.props.children;
      }
      optionClones.push(React.cloneElement(child, {
        key: child.props.value,
        onSelect: () => this.handleOptionSelect(child.props.value),
      }));
    });

    return (
      <div onClick={this.handleRootClick}>
        {isOpen ? (
          <div style={styles.menu}>
            {optionClones}
          </div>
        ) : (
          <div style={styles.label}>
            <span>{label}</span>
            <MenuDown />
          </div>
        )}
      </div>
    );
  }
}

const Option = ({ children, onSelect }) => (
  <div onClick={onSelect} style={styles.option}>
    {children}
  </div>
);

export const CallReturn = () => {
  return (
    <div style={styles.app}>
      <Select defaultValue="greatSmokeyMountains">
        <Option value="greatSmokeyMountains">
          Great Smokey Mountains
        </Option>
        <Option value="yosemite">
          Yosemite
        </Option>
        <Option value="glacier">
          Glacier
        </Option>
        <Option value="grandTeton">
          Grand Teton
        </Option>
        <Option value="yellowstone">
          Yellowstone
        </Option>
      </Select>
    </div>
  );
};
