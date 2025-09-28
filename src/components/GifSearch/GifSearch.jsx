import { Component } from "react";
import { Form, Input, Button } from "./GifSearch"

export class GifSearch extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Enter text"
        />
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}