import { Component } from "react";
import { Box, Image } from "./GifList"

export class GifList extends Component {
  state = {
    gifs: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.fetchGifs(this.props.keyword);
    }
  }

  fetchGifs = async (keyword) => {
    if (!keyword) return;

    const apiKey = "1xSTw4KC9z3bq5PstDP7qOuaRM0rObUN";
    const url = `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apiKey}&limit=50`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ gifs: data.data });
    } catch (error) {
      console.error("Помилка завантаження:", error);
    }
  };

  render() {
    return (
      <Box>
        {this.state.gifs.map((gif) => (
          <Image key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))}
      </Box>
    );
  }
}
