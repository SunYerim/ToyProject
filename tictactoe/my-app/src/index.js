import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/*square 컴포넌트 => <button> 렌더링함.*/
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={function () {
          console.log("click");
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

/*board는 사각형 9개를 렌더링함.*/
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

/*game 컴포넌트는 게임판을 렌더링하며 나중에 수정할 자리 표시자 값을 가지고 있음.*/
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
