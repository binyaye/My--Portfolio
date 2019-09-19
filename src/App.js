import React, { Component } from "react";
import Navigation from "./components/desktop-components/Navigation/Navigation";
import Footer from "./components/desktop-components/Footer/Footer";
import "./App.css";

const initialState = {
  width: window.innerWidth
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  _isMounted = false;

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    this._isMounted = false;
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    this._isMounted = true;
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    if (isMobile) {
      // return (
      //   <div>
      // 	<MobVersion />
      //   </div>
      // );
      return (
        <div className="App">
          <Navigation />
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navigation />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
