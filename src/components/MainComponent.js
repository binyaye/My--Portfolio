import React, { Component } from "react";
import Header from "./Header";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./FooterComponent";
import background from "./Images/background.png";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: {
        percentage: "",
        html5: "68",
        css3: "48",
        bootStrap: "25",
        javaScript: "47",
        jquery: "23",
        react: "34",
        node: "21",
        java: "30",
        dart: "19"
      }
    };
  }
  render() {
    const Home = () => {
      return (
        <div
          id="homepage"
          className="home br3 pa4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"
          style={{ marginTop: "10vh", paddingTop: "15px" }}
        >
          <img
            alt="background"
            src={background}
            style={{ height: "auto", width: "auto" }}
          ></img>
          <h1
            style={{
              color: "#263238",
              fontSize: "6vw",
              justifyContent: "center",
              paddingTop: "100px",
              fontWeight: "bold",
              display: "flex"
            }}
          >
            Welcome to
          </h1>
          <p
            style={{
              color: "#263238",
              fontSize: "4vw",
              fontStyle: "italic",
              display: "flex",
              flex: "center",
              justifyContent: "center"
            }}
          >
            My portfolio
          </p>
        </div>
      );
    };

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route
            path="/about"
            component={() => <About skills={this.state.skills} />}
          />
          <Route exact path="/projects" component={Projects} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
