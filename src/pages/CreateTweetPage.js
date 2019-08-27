import React from "react";

class CreateTweetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", text: "", name: "" };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { name, text, id } = this.state;
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.id}
            name='id'
            onChange={this.handleChange}
          />
          <input
            type='text'
            value={this.state.text}
            name='text'
            onChange={this.handleChange}
          />
          <input
            type='text'
            value={this.state.name}
            name='name'
            onChange={this.handleChange}
          />
          <input type='submit' value='submit' />
        </form>
      </React.Fragment>
    );
  }
}

export default CreateTweetPage;
