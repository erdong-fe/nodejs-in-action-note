import React from 'react';
import './NewPost.scss';
import Button from './common/Button';
import { createPost } from 'src/api/post';
interface State {
  content: string;
  inputWrapperClass: string;
}

interface getAllPosts {
  (): void
}
interface Props {
  onCreatedSuccessfully?: getAllPosts
}
class NewPost extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      content: '',
      inputWrapperClass: 'input-wrapper'
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleInputFoucs = this.handleInputFoucs.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit() {
    const params = {
      content: this.state.content,
      userId: 'czg'
    };
    try {
      await createPost(params);
      this.setState({
        content: ''
      });
      if (this.props.onCreatedSuccessfully) {
        this.props.onCreatedSuccessfully();
      }
    } catch (error) {
      console.error(error);
    }
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
          <Button onClick={this.handleSubmit}>
            发表
          </Button>
        </div>
      </div>
    )
  }
}

export default NewPost;