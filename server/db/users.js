var hash = require("../auth/hash");

const db = require("./connection");

function createUser(user_name, first_name, last_name, hourly_wage, password) {
  return new Promise((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err);
      // console.log(hourlyrate);

      db("users")
        .insert({ user_name, first_name, last_name, hourly_wage, hash })
        .then(user_id => resolve(user_id))
        .catch(err => reject(err));
    });
  });
}
function userExists(user_name) {
  return db("users")
    .where("user_name", user_name)
    .first();
}

function getUserByName(user_name) {
  return db("users")
    .where("user_name", user_name)
    .first();
}

module.exports = {
  createUser,
  userExists,
  getUserByName
};
