import express from "express";
import { photos } from "../googleapis";
import { getClient } from "../routes/clients";

export const router = express.Router();
const client = getClient();

const photosLib = photos(this, { auth: client });

router.get("/get", async () => {
    await photosLib.albums.get(
        { albumId: "1" },
        { auth: client },
    );
})
