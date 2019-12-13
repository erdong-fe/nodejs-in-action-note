import React from 'react';
import './NewPost.scss';
import Button from './common/Button';

interface State {
  content: string;
  inputWrapperClass: string;
}

class NewPost extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      content: '',
      inputWrapperClass: 'input-wrapper'
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleInputFoucs = this.handleInputFoucs.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  handleInput(e: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({
      content: e.currentTarget.value
    })
  }
  handleInputFoucs() {
    const classArr = 
      this.state.inputWrapperClass.split(' ');
    classArr.push('active');
    this.setState({
      inputWrapperClass: classArr.join(' ')
    })
  }
  handleInputBlur() {
    const classArr = 
      this.state.inputWrapperClass.split(' ');
    const activeIndex = classArr.findIndex(item => {
      return item === 'active';
    });
    if (activeIndex >= 0) {
      classArr.splice(activeIndex, 1);
    }
    this.setState({
      inputWrapperClass: classArr.join(' ')
    })
  }
  render() {
    return (
      <div className="new-post card-panel">
        <div className={this.state.inputWrapperClass}>
          <textarea
            value={this.state.content}
            onChange={this.handleInput}
            onFocus={this.handleInputFoucs}
            onBlur={this.handleInputBlur}/>
        </div>
        <div className="operate-wrapper">
          <Button/>
        </div>
      </div>
    )
  }
}

export default NewPost;