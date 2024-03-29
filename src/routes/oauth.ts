import express from "express";
import * as fs from "fs";
import { google } from "googleapis";
import * as url from "url";

import { photos } from "../googleapis";
import { getClient, getInfo, saveInfo } from "./clients";

// const infoFile = fs.readFileSync("info.json");
// const photosLib = photos({ auth: getClient(), version: "v1" });

// photosLib.albums.get()
// interface ClientInfo {
//     client_id: string;
//     client_secret: string;
//     credentials?: Credentials;
// }

// const info: ClientInfo = JSON.parse(infoFile.toString());
// console.log(info);

export const router = express.Router();

// const oauth2Client = new google.auth.OAuth2(
//     info.client_id,
//     info.client_secret,
//     "http://localhost:3000/oauth/oauth2callback",
// );

const photosScopes = [
    "https://www.googleapis.com/auth/photoslibrary.readonly",
];
// const url = oauth2Client.generateAuthUrl(
//     { access_type: "offline", scope: scopes }
// );

const client = getClient();
const info = getInfo();
google.options({ auth: client });

router.get("/", (req, res, next) => {
    if (info.credentials) {
        res.send("Authentication is finished.");
    } else {
        const authorizeUrl = client.generateAuthUrl(
            { access_type: "offline", scope: photosScopes },
        );

        res.redirect(authorizeUrl);
    }
});

router.get("/oauth2callback", async (req, res, next) => {
        const qs = new url.URL(req.url as string, "http://localhost:3000").searchParams;
        res.end("Authentication sucessful! Please retrun to the console.");

        const { tokens } = await client.getToken(qs.get("code") as string);
        client.credentials = tokens;
        console.log(tokens);

        info.credentials = tokens;

        fs.writeFileSync("info.json", JSON.stringify(info));

        // res.redirect(301, "/");
})
