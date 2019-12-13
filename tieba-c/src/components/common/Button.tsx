import React from 'react';
import './Button.scss';

class Button extends React.Component<{},{}> {
  render() {
    return (
      <button className="z-button">
        发表
      </button>
    )
  }
}

export default Button;