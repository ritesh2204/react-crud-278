import React from "react";
import { connect } from "react-redux";
import { getTweetsActionCreator } from "../redux/actions/tweetAction";
import { searchTweetsActionCreator } from "../redux/actions/searchTweetsAction";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  state = { text: "" };

  componentDidMount() {
    const { page, limit } = this.props.data;
    this.props.getTweets({ page, limit });
  }

  loadMore = () => {
    const { page, limit } = this.props.data;
    this.props.getTweets({ paged: page + 1, limit });
  };

  handleChange = e => {
    const text = e.target.value;
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.props.searchTweets({ text });
    });
  };

  render() {
    if (this.props.data.isFetch) {
      return <h1>Loading.....</h1>;
    }
    if (this.props.data.error != null) {
      return <h1>Error.......{this.props.data.error}</h1>;
    }
    let renderTweets = [];
    const { tweets } = this.props.data;
    const { searchTweets } = this.props.search;
    if (searchTweets.length !== 0) {
      renderTweets = searchTweets;
    } else {
      renderTweets = tweets;
    }
    return (
      <div className='App'>
        <h1>Tweets Page</h1>
        <input
          type='text'
          value={this.state.text}
          name='text'
          onChange={this.handleChange}
        />
        {renderTweets.map((tweet, i) => {
          return (
            <React.Fragment key={i}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>{i + 1}</div>
                <Link to={`/tweet/${tweet.id}`} style={{ flex: 1 }}>
                  {tweet.id}
                </Link>
              </div>
            </React.Fragment>
          );
        })}
        <button onClick={this.loadMore}>More ....</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state.tweetReducer,
    search: state.searchTweetsReducer
  }),
  dispatch => ({
    getTweets: payload => dispatch(getTweetsActionCreator(payload)),
    searchTweets: payload => dispatch(searchTweetsActionCreator(payload))
  })
)(HomePage);
