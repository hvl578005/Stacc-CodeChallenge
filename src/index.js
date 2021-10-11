import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ArtContainer from "./Api/ArtContainer";
import About from "./Components/About";
import Navbar from "./Components/Navbar"

//Functional component!!!!!! hissssss hyaaah
class Graybackground extends React.Component {
  // const [sortData, setSortData] = useState('desc');
  constructor(props) {
    super(props);
    this.state = { sortData: 'desc', orderBy: '' };
  };


  setSortData = (props) => {
    this.setState({
      sortData: props
    });
  }

  setOrderBy = (props) => {
    this.setState({
      orderBy: props
    });
  }

    // function myFunction() {
    //   myVar = setTimeout(showPage, 3000);
    // }

    // function showPage() {
    //   document.getElementById("loader").style.display = "none";
    //   document.getElementById("myDiv").style.display = "block";
    // }

  render() {
    return (
      <div>
        <About />
        <Navbar sortData={this.state.sortData} setSortData={this.setSortData} orderBy = {this.state.orderBy} setOrderBy={this.setOrderBy} />
        <div className="wrapper" >
          <ArtContainer sortData={this.state.sortData} orderBy={this.state.orderBy}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Graybackground />, document.getElementById("root"));
