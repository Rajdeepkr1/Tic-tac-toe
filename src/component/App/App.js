import React from "react";
import "./App.css";

import GridRow from "../GridRow/GridRow";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      playerTurn: "x",
    };
  }
  handlePlayerClick = (rowIndex, colIndex) => {
    const copidGameState = [...this.state.gameState];
    copidGameState[rowIndex][colIndex] = this.state.playerTurn;
    this.setState({
      gameState: copidGameState,
      playerTurn: this.state.playerTurn === "x" ? "o" : "x",
    });
  };
  render() {
    return (
      <div className="container">
        <Header />
        <div id="board">
          {this.state.gameState.map((row, rowIndex) => (
            <GridRow
              row={row}
              rowIndex={rowIndex}
              handlePlayerClick={this.handlePlayerClick}
            />
          ))}
        </div>
        <Footer turn={this.state.playerTurn} />
      </div>
    );
  }
}

export default App;
