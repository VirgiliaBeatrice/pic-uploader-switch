import { photos_lib_v1 } from "./PhotosLibrary";
import { getAPI, GoogleConfigurable } from "googleapis-common";

export function photos(version: "v1"): photos_lib_v1.PhotosLib;
export function photos(this: GoogleConfigurable) {
    return getAPI("photos", "v1", { v1: photos_lib_v1.PhotosLib }, this);
}