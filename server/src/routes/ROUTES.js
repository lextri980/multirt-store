const authRouter = require("./auth.route");

function route(app) {
  app.use("/auth", authRouter);
}

module.exports = route;
