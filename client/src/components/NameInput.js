import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const nameInput = ({ username, setUsername, addUsername }) => {
  return (
    <>
      <Form onSubmit={addUsername} >
        <Form.Group className="mb-3" controlId="formGroupUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default nameInput;
