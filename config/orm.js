var connection = require("./connection.js");

var orm = {
  selectAll: function (whatToSelect, tableInput, cb) { // * burgers
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (tableInput, cols, vals, cb) { //burgers values <burger_name> <devoured>
    var queryString = "INSERT INTO ?? SET ?";

    console.log(queryString);

    connection.query(queryString, [tableInput, cols, vals], function (
      err,
      result
    ) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function (tableInput, objColVals, condition, cb) { // * burgers burger_name string
    var queryString = "UPDATE ?? SET ?? WHERE ??";

    console.log(queryString);

    connection.query(queryString, [whatToSelect, tableInput, colToSearch, valOfCol], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;