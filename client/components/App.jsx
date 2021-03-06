import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Login";
import Register from "./Register";
import Nav from "./Nav";
import Meeting from "./Meeting";
import History from "./History";
import Help from "./Help";

const App = ({ auth }) => (
  <Router>
    <div id="App_firstcontainer" className="container has-text-centered">
      <section id="App_video" class="hero is-fullheight video">
        <div class="hero-video">
          <video id="bgvid" playsInline autoPlay muted loop>
            <source src="./video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <div id="App_Hero" className="hero is-small is-primary">
        <div className="hero-body has-text-centered">
          <Link to="/" className="">
            <h1 id="App_title" className="title is-1">
              Dress Me Up
            </h1>
          </Link>
          <Nav />
        </div>
      </div>

      <div className="">
        {!auth.isAuthenticated && <Route exact path="/" component={Login} />}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/meeting" component={Meeting} />
        <Route path="/history" component={History} />
        <Route path="/help" component={Help} />
      </div>
    </div>
  </Router>
);

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
