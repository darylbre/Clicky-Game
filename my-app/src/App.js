import React from "react";
import "./App.css";
import drummers from "./drummers.json";
import DrummerCard from "./Components/DrummerCard";

class App extends React.Component {
  state = {
    drummers: drummers,
    score: 0,
    highScore: 0,
    checkClick: []
  };

  componentDidMount = () => {
    const drummerImg = document.getElementsByClassName("dummerImg");
    document.addEventListener("click", drummerImg, this.handleClick);
  };

  handleClick = id => {
    console.log(id);
    this.setState(
      {
        score: this.state.score + 1
      },
      this.checkHighScore
    );
    this.checkClick(id);
  };
  //if id is clicked again then it set a high score and restarts the game reset checkclicked array to empty
  checkClick = drummerClickedId => {
    //if this.state.checkClick is empty then push this.state.drummerClickedId to the array
    console.log(this.state.checkClick);
    if (this.state.checkClick) {
      this.state.checkClick.push(drummerClickedId);
    }

    this.state.checkClick.forEach(checkClickId => {
      // checkClickId = id
      // if checkClickId exists in the array then do nothing, else if checkClickId exists set high score, restart game and shuffle array, and set the state of checkclicked to an empty array
      if (checkClickId === drummerClickedId) {
      } else {
        // then add the drummerClickedId to the checkClick array to be checked
        this.state.checkClick.push(drummerClickedId);
      }
      console.log(this.state.checkClick);
    });
  };

  checkHighScore() {
    if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      });
    }
  }

  render() {
    return (
      <div className="card">
        <h2>Score: {this.state.score}</h2>
        <h2>High Score: {this.state.highScore}</h2>
        <div className="img-container" />
        {this.state.drummers.map(drummer => (
          <DrummerCard
            handleClick={this.handleClick}
            id={drummer.id}
            key={drummer.id}
            image={drummer.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
