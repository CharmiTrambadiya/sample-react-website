import React from "react";
import Card from "./card";

const CardList = (props) => {
  console.log(props)
  const {filteredData} = props;
        return filteredData.map((user, index) => {
          return(
          <Card
              key={index}
              id={user.id}
              name={user.name}
              email={user.email} />
          );
        })
}
export default CardList;