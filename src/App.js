import React, { Component } from 'react';
import './App.css';
import SiteHeader from "./components/siteHeader/SiteHeader.js";

export default class App extends Component {
  render() {
      return (
          <div className="App">
              <SiteHeader/>
          </div>
      );
  }
}