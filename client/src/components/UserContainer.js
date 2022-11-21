import React, { useEffect,useState } from "react";
import NameInput from "./NameInput";
import Card from "react-bootstrap/Card";
import ListUsers from "./ListUsers";

const UserContainer = ({ socket }) => {
  const [username, setUsername] = useState("");
  const [usernames, setUsernames] = useState([]);
  const [isUsernameSet, setIsUsenameSet] = useState(false);
  useEffect(() => {
    socket.on("recive_usernames", (usernames) => {
      setUsernames(usernames);
    });
  }, [socket]);
  const addUsername = (event) => {
    event.preventDefault();

    setIsUsenameSet(true);
    socket.emit("add_username", username);
  };
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          {!isUsernameSet ? (
            <NameInput
              username={username}
              setUsername={setUsername}
              addUsername={addUsername}
            />
          ) : (
            <h2>{username}</h2>
          )}
          {usernames && <ListUsers usernames={usernames} />}
        </Card.Body>
      </Card>
    </>
  );
};

export default UserContainer;
