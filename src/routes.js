import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./component/Home/home";
import About from "./component/AboutUs/about";
import Services from "./component/Services/services";
import Contact_us from "./component/Contact_us/contact_us";
import Layout from "./HOCs/layout";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <BrowserRouter>
            <Route path="/services" component={Services} />
            <Route path="/contact_us" component={Contact_us} />
            <Route path="/aboutus" component={About} />
            <Route exact path="/" component={Home} />
          </BrowserRouter>
        </Switch>
      </Layout>
    );
  }
}
export default Routes;
