import React from 'react'
import { Comment, Form, Button } from 'semantic-ui-react'
import userApi from '../../Data/user-api';
import CommentBox from '../CommentBox'

export default class WishComment extends React.Component {
  state = {
    name: "",
    isClicked: false
  }

  handleClick = () => {
    let temp = !this.state.isClicked;
    console.log(temp);
    this.setState({
      isClicked: temp
    })
  }

  conditionalRender = (props) => {
    if (props) {
      return (
        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      )
    }
  }


  userLookup = (id) => {
    return userApi.getById(id).then((name) => {
      this.setState({ name: name.firstName })
    })
  }

  componentDidMount() {
    this.userLookup(this.props.accountID)
  }

  render() {
    return (
      <div>
        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>{this.state.name}</Comment.Author>
            <Comment.Metadata>
              <div></div>
            </Comment.Metadata>
            <Comment.Text>{this.props.text}!</Comment.Text>
            <Comment.Action onClick={this.handleClick}>Reply</Comment.Action>
          </Comment.Content>
        </Comment>
      </div>
    )
  }
}