// In-memory user storage
let users = [];

class User {
  constructor(id, username, password, role) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
  }

  static findById(id) {
    return users.find(user => user.id === id);
  }

  static findByUsername(username) {
    return users.find(user => user.username === username);
  }

  static addUser(user) {
    users.push(user);
    return user;
  }

  static updateUser(id, updatedData) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedData };
      return users[index];
    }
    return null;
  }

  static deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = User; 