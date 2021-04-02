import React from "react";
import "./GridRow.css";
import GridItem from "../GridItem/GridItem";

class GridRow extends React.Component {
  render() {
    let gridRow = [<GridItem />, <GridItem />, <GridItem />];
    return (
      <div className="grid-row">
        {this.props.row.map((col, colIndex) => (
          <GridItem
            handlePlayerClick={this.props.handlePlayerClick}
            rowIndex={this.props.rowIndex}
            colText={col}
            colIndex={colIndex}
          />
        ))}
      </div>
    );
  }
}

export default GridRow;
