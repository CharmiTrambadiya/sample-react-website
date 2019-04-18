import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/CustomNavbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact'
import {Avtar} from './components/avtar';
import UserTable from './components/usertable';
import CardList from './components/cardlist';
import Footer from './components/footer';



class App extends Component {
  constructor(){
    super()
    this.state = {
      Avtar: Avtar,
      dummy: Avtar,
      real: Avtar,
    }
  }
  removeItem (index) {
    Avtar.splice(index, 1);
    this.setState({todoItems: Avtar});
  }
  render() {
    const {real} = this.state;
    return (
      <Router>
        <Navbar />
        <div className="container-fluid main-section">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" render={(props) => <CardList {...props} filteredData={real} onClick={this.removeItem}/>} />
          <Route path="/usertable" component={UserTable} />
        </div>
        <Footer />
    </Router>
    );
  }
}

export default App;
