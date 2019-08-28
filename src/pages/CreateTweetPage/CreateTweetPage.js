import React from "react";
import { connect } from "react-redux";
import { withAlert } from "react-alert";
import {
  createTweetsActionCreator,
  updateFieldActionCreator
} from "./CreateTweetPageActions";

class CreateTweetPage extends React.Component {
  handleChange = e => {
    let key = e.target.name;
    let value = e.target.value;
    if (key === "user") {
      value = {
        name: e.target.value
      };
    }
    console.log(value);
    this.props.updateField({ key: key, value: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { user, text, id } = this.props.data;
    console.log();
    if (id === "") {
      this.props.alert.show("enter id");
      return;
    }
    if (text === "") {
      this.props.alert.show("enter text");
      return;
    }
    if (user.name === "") {
      this.props.alert.show("enter name");
      return;
    }
    this.props.createTweet(this.props.data);
  };
  render() {
    const { id, text, user } = this.props.data;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={id}
            name='id'
            onChange={this.handleChange}
            placeholder='id'
          />
          <input
            type='text'
            value={text}
            name='text'
            onChange={this.handleChange}
            placeholder='text'
          />
          <input
            type='text'
            value={user.name}
            name='user'
            onChange={this.handleChange}
            placeholder='user name'
          />
          <input type='submit' value='submit' />
        </form>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    data: state.createTweetReducer
  }),
  dispatch => ({
    updateField: payload => dispatch(updateFieldActionCreator(payload)),
    createTweet: payload => dispatch(createTweetsActionCreator(payload))
  })
)(withAlert()(CreateTweetPage));
