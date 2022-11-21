const users = [];

function addUser(username, socketId) {
  users.push({
    socketId,
    username,
  });
}

function getUsernames() {
  names = users.map((user) => user.username);
  return names;
}

function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

function userLeave(id) {
  const index = users.findIndex((user) => user.socketId === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

module.exports = {
  addUser,
  getCurrentUser,
  userLeave,
  getUsernames,
};
