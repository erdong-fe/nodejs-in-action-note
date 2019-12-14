import React from 'react';
import './Button.scss';

interface Props {
  onClick?: any;
}
class Button extends React.Component<Props,{}> {
  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
  render() {
    return (
      <button className="z-button" 
        onClick={this.onClick.bind(this)}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;