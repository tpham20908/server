import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

const Landing = () => <h2>Landing</h2>
const SurveyNew = () => <h2>Survey New</h2>
const DashBoard = () => <h2>DashBoard</h2>

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={DashBoard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;