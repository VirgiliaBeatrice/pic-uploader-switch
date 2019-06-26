import express from "express";
import * as path from "path";
import { router as indexRouter } from "./routes/index";
import { router as oauthRouter } from "./routes/oauth";
import { router as photosRouter } from "./routes/photos";

const app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/oauth", oauthRouter);
app.use("/photos", photosRouter);

app.listen(3000, () => {
// tslint:disable-next-line: no-console
    console.log("Server is running in http://localhost:3000");
});

app.get("/welcome", (req, res, next) => {
    console.log("Print some welcome messages.");

    res.json({ message: "welcome" });
})
module.exports = app;
