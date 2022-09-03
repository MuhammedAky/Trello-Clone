const app = require("./app");
const port = app.get("port");
const server = app.listen(port);
const logger = require("winston");

process.on("unhandledRejection", (reason, p) => {
    logger.error("Ungandled Rejection at: Promise", p, reason)
});

server.on("listening", () => {
    logger.info("Feathers application started on http://%s:%d", app.get("host"), port)
});