import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";
import MapWapper from "./components/MapWapper";

import UserContainer from "./components/UserContainer";
const socket = io.connect("http://localhost:3001");

function App() {
  const [coord, setCoord] = useState({});
  useEffect(() => {
    socket.on("coord", (coord) => {
      if(coord !== null){
        setCoord(coord);
      }
    });
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={4}>
          <UserContainer socket={socket} />
        </Col>
        <Col sm={8}>
          <MapWapper coord={coord} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
