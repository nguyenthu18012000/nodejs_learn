const testRouter = require("./test");

const route = (app: any) => {
    app.use("/", testRouter);
};

module.exports = route;
