const express = require("express");

const Ingr = require("../models/ingredients");

const router = express.Router();

router.get("/ingredients", async (req, res, next) => {
  try {
    const ingr = await Ingr.find();
    res.json(ingr);
  } catch (err) {
    next(err);
  }
});

router.get("/ingredients/:id", async (req, res, next) => {
  try {
    const ingr = await Ingr.findById(req.params.id);
    if (!ingr) {
      return res.status(404).json({
        message: "Ingredient Not Found",
      });
    }
    res.json(ingr);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
