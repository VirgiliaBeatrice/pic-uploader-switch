import { GoogleConfigurable } from "googleapis-common";
import { photos_lib_v1 } from "./PhotosLibrary";

export function photos(version: "v1"): photos_lib_v1.PhotosLib;
export function photos(
    this: GoogleConfigurable,
    versionOrOptions: "v1" | photos_lib_v1.Options,
    ): photos_lib_v1.PhotosLib {
    let photosOptions;
    if (versionOrOptions === "v1") {
        photosOptions = { };
    } else {
        photosOptions = versionOrOptions;
    }

    return new photos_lib_v1.PhotosLib(photosOptions, this);
}