const express = require("express");

const Steps = require("../models/steps");

const router = express.Router();

router.get("/steps", async (req, res, next) => {
  try {
    const step = await Steps.find();
    res.json(step);
  } catch (err) {
    next(err);
  }
});

router.get("/Steps/:id", async (req, res, next) => {
  try {
    const steps = await Steps.findById(req.params.id);
    if (!steps) {
      return res.status(404).json({
        message: "Recipe Steps Not Found",
      });
    }
    res.json(steps);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
