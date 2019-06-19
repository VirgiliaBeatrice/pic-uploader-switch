import express from "express";
import { google } from "googleapis";
import * as http from "http";
import * as url from "url";
import * as fs from "fs";

const infoFile = fs.readFileSync("info.json");
type ClientInfo = {
    client_id: string;
    client_secret: string;
};

const info: ClientInfo = JSON.parse(infoFile.toString());
console.log(info);

export const router = express.Router();

const oauth2Client = new google.auth.OAuth2(
    info.client_id,
    info.client_secret,
    "http://localhost:3000/oauth/oauth2callback",
);

const photosScopes = [
    "https://www.googleapis.com/auth/photoslibrary.readonly",
];
// const url = oauth2Client.generateAuthUrl(
//     { access_type: "offline", scope: scopes }
// );

google.options({ auth: oauth2Client });

router.get("/", (req, res, next) => {
    const authorizeUrl = oauth2Client.generateAuthUrl(
        { access_type: "offline", scope: photosScopes },
    );

    res.redirect(authorizeUrl);
});

router.get("/oauth2callback", async (req, res, next) => {
        const qs = new url.URL(req.url as string, "http://localhost:3000").searchParams;
        res.end("Authentication sucessful! Please retrun to the console.");

        const { tokens } = await oauth2Client.getToken(qs.get("code") as string);
        oauth2Client.credentials = tokens;
        console.log(tokens);

        res.redirect(301, "/");
})
