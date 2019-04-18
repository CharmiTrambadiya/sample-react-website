import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import './home.css';
// import Avtar2 from './../images/avatar2.jpg';
// import Avtar1 from './../images/avtar1.png';
// import Avtar3 from './../images/avtar3.jpg'
import ControlledCarousel from './ControlledCarousel';
import UserList from './userlist';
import {UserData} from './userdata';

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      UserData: UserData,
      dummy: UserData,
      real: UserData,
    }
  }
  render() {
    const {real} = this.state;
    return (
      <div className="intro-section">
        <ControlledCarousel />
        <div className="container">
          {/* <Jumbotron>
          <h1>Welcome to Website</h1>
          <p>
            This is how to build a website with React, React-Router & React-Bootst.
          </p>
          <p>
            <Button variant="primary" href="#Home">Learn more</Button>
          </p>
          </Jumbotron> */}
          <Row>
            <UserList filteredData={real}/>
          </Row>
        </div>
      </div>
    )
  }
}