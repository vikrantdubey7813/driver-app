const express = require("express");
const { getChargeStations, getTransactions, startCharging, stopCharging } = require("./edrv-api.service");
const { checkJwt } = require("../authz/check-jwt");

const edrvApiRouter = express.Router();

edrvApiRouter.get("/charge-stations", checkJwt, async (req, res) => {
  const data = await getChargeStations();
  res.status(200).send(data);
});

edrvApiRouter.get("/transactions", checkJwt, async (req, res) => {
    const data = await getTransactions();
    res.status(200).send(data);
});

edrvApiRouter.post("/start-charging", checkJwt, async (req, res) => {
    const data = await startCharging();
    res.status(200).send(data);
});

edrvApiRouter.post("/stop-charging", checkJwt, async (req, res) => {
    const data = await stopCharging(req.body.transactionId);
    res.status(200).send(data);
});

module.exports = {
    edrvApiRouter,
};
