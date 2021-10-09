import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ArtContainer from "./Api/ArtContainer";
import About from "./Components/About";

class Graybackground extends React.Component {
  render() {
    return (
      <div>
        <About />
        <div className="wrapper">
          <ArtContainer />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Graybackground />, document.getElementById("root"));
