/**
 * Required External Modules
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require('body-parser')

const { clientOrigins, serverPort } = require("./config/env.dev");

const { edrvApiRouter } = require("./edrv-api/edrv-api.router");

/**
 * App Variables
 */

const app = express();
const apiRouter = express.Router();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());

app.use("/api", apiRouter);

apiRouter.use("/edrv", edrvApiRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

/**
 * Server Activation
*/

app.listen(serverPort, () =>
  console.log(`API Server listening on port ${serverPort}`)
);
