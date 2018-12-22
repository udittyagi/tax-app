import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import './App.css';
import { StyleRoot } from 'radium';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <StyleRoot>
            <BrowserRouter>
              <ScrollToTop>
                <Layout />
              </ScrollToTop>
            </BrowserRouter>  
          </StyleRoot> 
       
      </div>
    );
  }
}

export default App;
