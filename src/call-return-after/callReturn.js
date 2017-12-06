import React, { Component } from 'react';
import { unstable_createCall, unstable_createReturn } from 'react-call-return';
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

    return (
      <div onClick={this.handleRootClick}>
        {unstable_createCall(
          children,
          (props, returns) => (
            isOpen ? (
                <div style={styles.menu}>
                  {returns.map(objFromCreateReturn => objFromCreateReturn.renderItem({
                    key: objFromCreateReturn.value,
                    onSelect: () => this.handleOptionSelect(objFromCreateReturn.value),
                  }))}
                </div>
            ) : (
              <div style={styles.label}>
                <span>
                  {returns.find(ret => ret.value === value).renderLabel()}
                </span>
                <MenuDown />
              </div>
            )
          ),
          this.props,
        )}
      </div>
    );
  }
}

const Option = ({ children, isSelected, onSelect, value }) => (
  unstable_createReturn({
    value,
    renderLabel: () => children,
    renderItem: ({ onSelect, key }) => (
      <div key={key} onClick={onSelect} style={styles.option}>
        {children}
      </div>
    ),
  })
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
