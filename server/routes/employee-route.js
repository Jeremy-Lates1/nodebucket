"use strict";

const express = require("express");
const { mongo } = require("../utils/mongo");
const createError = require("http-errors");

const router = express.Router();

router.get("/:empId", (req, res, next) => {
  try {
    let { empId } = req.params;
    empId = parseInt(empId, 10);

    //Early return - design pattern
    if (isNaN(empId)) {
      console.error("Input must be a number");
      return next(createError(400, "Input was not a number"));
    }

    //Database query is handled
    mongo(async (db) => {
      const employee = await db.collection("employees").findOne({ empId });

      if (!employee) {
        console.error("Employee not found:", empId);
        return next(createError(404, "Employee not found"));
      }

      res.send(employee);
    }, next);
  } catch (err) {
    console.error("Error: ", err);
    next(err);
  }
});

module.exports = router;
