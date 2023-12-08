const express = require("express");
const db = require("./config/db");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extends: true }));
app.use(express.json());

const route = require("./routes");

db.connect();

// Init route
route(app);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
