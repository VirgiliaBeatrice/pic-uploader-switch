import express from "express";

// var express = require('express');
export const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send({ title: "Express", test: "good" });
});
