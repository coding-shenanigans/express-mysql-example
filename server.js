const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();
const port = process.env.APP_PORT || 9000;

// connect to database
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// define routes
app.get("/todos", async (req, res) => {
  try {
    const sql = "SELECT * FROM todos";
    const [results, fields] = await pool.query(sql);
    res.status(200).json({ todos: results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
