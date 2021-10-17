import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ArtContainer from "./Api/ArtContainer";
import About from "./Components/About";
import Navbar from "./Components/Navbar"

class Mainpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortData: 'asc', orderBy: 'order_by=sale_price&', limit: '20', collection: ''};
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

  setLimit = (props) => {
    this.setState({limit: props})
  }

  setCollection = (props) => {
    this.setState({collection: props})
  }

  render() {
    return (
      <div>
        <About />
        <Navbar sortData={this.state.sortData} setSortData={this.setSortData} orderBy = {this.state.orderBy} setOrderBy={this.setOrderBy} limit = {this.state.limit} setLimit={this.setLimit} collection = {this.state.collection} setCollection = {this.setCollection} />
        <div className="wrapper" >
          <ArtContainer sortData={this.state.sortData} orderBy={this.state.orderBy} setOrderBy={this.setOrderBy} limit={this.state.limit} collection={this.state.collection} setCollection = {this.setCollection}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Mainpage />, document.getElementById("root"));

