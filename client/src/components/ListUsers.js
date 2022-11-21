import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

const ListUsers = ({ usernames }) => {
  return (
    <>
      <Card  className="mt-3" >
        <Card.Header>Active users</Card.Header>
        <ListGroup variant="flush">
          {usernames.map((username, index) => (
            <ListGroup.Item key={index}>{username}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </>
  );
};

export default ListUsers;
