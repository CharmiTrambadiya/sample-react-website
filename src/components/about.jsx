import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import './about.css';
import Background from './../images/natural.jpg';
import Avtar2 from './../images/avatar2.jpg';

export default class About extends Component {
  render() {
    return (
      <div className="about-section">
          <img className="about-back" src={Background} alt="sample"/>
        <Row className="container">
          <Col xs={12} sm={8} className="about-content">
          <img src={Avtar2} className="profile" alt="profile" />
            <h3 className="about-title">Charmi</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
          </Col>
        </Row>
      </div>
    )
  }
}
