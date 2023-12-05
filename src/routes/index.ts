const testRouter = require("./test");
const siteRoute = require("./site");

const route = (app: any) => {
    app.use("/test", testRouter);
    app.use("/", siteRoute)
};

module.exports = route;
