import { Component } from "react";
import { GifSearch } from "./components/GifSearch/GifSearch.jsx";
import { GifList } from "./components/GifList/GifList.jsx";
import { Box, Title } from "./App.js"

class App extends Component {
  state = {
    keyword: "",
  };

  handleSearch = (query) => {
    this.setState({ keyword: query });
  };

  render() {
    return (
      <Box>
        <Title>Search your GIF</Title>
        <GifSearch onSearch={this.handleSearch} />
        <GifList keyword={this.state.keyword} />
      </Box>
    );
  }
}

export default App;
