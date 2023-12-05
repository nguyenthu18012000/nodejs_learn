const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

app.use(morgan("combined"));

app.use(express.urlencoded({ extends: true }));
app.use(express.json());

const route = require("./routes");

// Init route
route(app);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
