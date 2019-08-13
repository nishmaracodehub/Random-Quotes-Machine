import React, { Component } from "react";
import "typeface-roboto";
import { random } from "lodash";
import QuoteMachine from "./components/QuoteMachine";
import { Grid } from "@material-ui/core";

const grid = {
  display: "flex",
  height: "100vh",
  alignItems: "center"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
      bgColor: "#f0f0f0"
    };
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then(data => data.json())
      .then(quotes =>
        this.setState({ quotes }, () => {
          return this.assignNewQuoteIndex();
        })
      )
      .catch(err => {
        console.log("Error", err);
      });
  }

  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedQuoteIndex)
    ) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1);
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
    this.setState({ bgColor: this.getRandomColor() });
  }

  getRandomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
  }

  render() {
    const bgColor = this.state.bgColor;
    return (
      <div style={{ backgroundColor: bgColor }}>
        <Grid style={grid} id="quote-box" justify="center" container>
          <Grid xs={10} lg={6} item>
            {this.selectedQuote ? (
              <QuoteMachine
                selectedQuote={this.selectedQuote}
                assignNewQuoteIndex={this.assignNewQuoteIndex}
              />
            ) : null}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
