import React from "react";
import { Col } from "react-bootstrap";

const UserList = props => {
  console.log(props);
  const { filteredData } = props;
  return filteredData.map((user, index) => {
    return (
      <Col xs={12} sm={4} className="person-wrapper" key={index}>
        <img src={user.img} className="profile-pic" alt="profile" />
        <h3>{user.name}</h3>
        <p>{user.description} </p>
      </Col>
    );
  });
};
export default UserList;
