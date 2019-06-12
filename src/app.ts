import express from "express";
import * as path from "path";
import { router as indexRouter } from "./routes/index";

// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});

app.get("/welcome", (req, res, next) => {
    console.log("Print some welcome messages.");

    res.json({ message: "welcome" });
})
module.exports = app;
