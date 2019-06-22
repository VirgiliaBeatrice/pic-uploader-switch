import * as fs from "fs";
import { Credentials, OAuth2Client } from "google-auth-library";
import { google } from "googleapis";

interface ClientInfo {
    client_id: string;
    client_secret: string;
    credentials?: Credentials;
}

export function getInfo(): ClientInfo {
    const infoFile = fs.readFileSync("info.json");
    return JSON.parse(infoFile.toString());
}

export function saveInfo(info: ClientInfo): void {
    fs.writeFileSync("info.json", JSON.stringify(info));
}

const clientInfo: ClientInfo = getInfo();

export function getClient(): OAuth2Client {
    const client = new google.auth.OAuth2(
        clientInfo.client_id,
        clientInfo.client_secret,
        "http://localhost:3000/oauth/oauth2callback",
    );

    if (clientInfo.credentials) {
        client.credentials = clientInfo.credentials;
    }

    return client;
}
