import React from "react";
import { connect } from "react-redux";
import { getTweetsActionCreator } from "./redux/actions/tweetAction";

class App extends React.Component {
  componentDidMount() {
    const { page, limit } = this.props.data;
    this.props.getTweets({ page, limit });
  }

  loadMore = () => {
    const { page, limit } = this.props.data;
    this.props.getTweets({ page: page + 1, limit });
  };

  render() {
    if (this.props.data.isFetch) {
      return <h1>Loading.....</h1>;
    }
    if (this.props.data.error != null) {
      return <h1>Error.......{this.props.data.error}</h1>;
    }
    return (
      <div className='App'>
        <h1>hello world</h1>
        {this.props.data.tweets.map((tweet, i) => {
          return (
            <div key={i} style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>{i + 1}</div>
              <div style={{ flex: 1 }}>{tweet.id}</div>
            </div>
          );
        })}
        <button onClick={this.loadMore}>More ....</button>
      </div>
    );
  }
}

export default connect(
  state => ({ data: state.tweetReducer }),
  dispatch => ({
    getTweets: payload => dispatch(getTweetsActionCreator(payload))
  })
)(App);
