var connection = require("./connection.js");

// Helper function for generating MySQL syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

// Helper function for generating My SQL syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb) {
		// Construct the query string that returns all rows from the target table
		var queryString = "SELECT * FROM " + tableInput + ";";

		// Perform the database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});
	},

  insertOne: function (tableInput, cols, vals, cb) { //burgers values <burger_name> <devoured>
    		// Construct the query string that inserts a single row into the target table
		var queryString = "INSERT INTO " + tableInput;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

    console.log(queryString);

    var query = connection.query(queryString, vals, function (err, result) 
    {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },       
  updateOne: function (tableInput, objColVals, condition, cb) {
    var queryString = "UPDATE " + tableInput;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;