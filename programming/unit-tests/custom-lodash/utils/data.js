let users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
  ];
  
  let people = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true },
    { user: "fred", active: true },
    { user: "mia", active: true },
  ];
  
  function square(num) {
    return num * num;
  }

  module.exports = {users, people, square}