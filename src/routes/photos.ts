import express from "express";
import { photos } from "../googleapis";
import { getClient } from "../routes/clients";
import { photos_lib_v1 } from "../googleapis/PhotosLibrary";
import { Gaxios, GaxiosResponse } from "gaxios";

export const router = express.Router();
const client = getClient();
console.log(client);
const photosLib = photos({ auth: client, version: "v1" });

router.get("/get", async () => {
    await photosLib.albums.get(
        { albumId: "1" },
        {}
    );
    console.log("Got a response from Google.");
})

router.get("/list", async (req, res, next) => {
    const resFromG: GaxiosResponse<photos_lib_v1.Schema$Albums> = await photosLib.albums.list(
        {}, {}
    )

    res.send(resFromG.data);

    console.log("Got a response from Google.");
})
