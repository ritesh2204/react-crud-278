import React from "react";
import { connect } from "react-redux";
import { getIndividualTweetsActionCreator } from "./TweetPageAction";
import { withRouter } from "react-router-dom";

class TweetPage extends React.Component {
  componentDidMount() {
    const { tweetid } = this.props.match.params;
    this.props.getTweet({ tweetid });
  }

  render() {
    const { isFetch, error, tweet } = this.props.data;
    if (isFetch) {
      return <h1>Loading.....</h1>;
    }
    if (error != null) {
      return <h1>Error.......{this.props.data.error}</h1>;
    }
    if (tweet === null) {
      return <h1>Loading.....</h1>;
    }
    return (
      <div className='App'>
        <h1>My Tweet</h1>
        <p>My Tweet id is {this.props.match.params.tweetid}</p>
        <p>My tweet sis {tweet.text}</p>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state.individualTweetReducer
  }),
  dispatch => ({
    getTweet: payload => dispatch(getIndividualTweetsActionCreator(payload))
  })
)(withRouter(TweetPage));
