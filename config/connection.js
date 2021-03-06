var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });
};

connection.connect(function (err) {
  if (err) {
    console.error("error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("connected to database as id " + connection.threadId);
});

module.exports = connection;