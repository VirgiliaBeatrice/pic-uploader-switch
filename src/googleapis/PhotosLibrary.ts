import { GaxiosPromise } from "gaxios";
import { APIRequestContext, GlobalOptions, GoogleConfigurable, MethodOptions, createAPIRequest, APIRequestParams } from "googleapis-common";

// tslint:disable: no-namespace
export namespace photos_lib_v1 {
    export interface Options extends GlobalOptions {
        version: "v1";
    }

    export interface StandardParameters {
        alt?: string;
        access_roken?: string;
        upload_protocol?: string;
        quotaUser?: string;
        prettyPrint?: boolean;
        uploadType?: string;
        fields?: string;
        callback?: string;
    }

    export interface Params$Resource$Albums$Get extends StandardParameters {
        albumId: string;
    }

    export interface Params$Resource$Albums$List extends StandardParameters {
        pageSize?: number;
        pageToken?: string;
        excludeNonAppCreateData?: boolean;
    }

    export class Resource$Albums {
        public context: APIRequestContext;

        constructor(context: APIRequestContext) {
            this.context = context;
        }

        public get(params: Params$Resource$Albums$Get, options: MethodOptions): GaxiosPromise<Schema$Album> {
            // let params = { } as Params$Resource$Albums$Get;

            const rootUrl = options.rootUrl || "https://photoslibrary.googleapis.com/";
            const parameters: APIRequestParams = {
                options: Object.assign(
                    {
                        url: ( rootUrl + "/v1/albums/{albumId}" ).replace(/([^:]\/)\/+/g, "$1"),
                        method: "GET",
                    },
                    options,
                ),
                params,
                requiredParams: ["albumId"],
                pathParams: ["albumId"],
                context: this.context,
            };

            return createAPIRequest<Schema$Album>(parameters);
        }

        public list(params: Params$Resource$Albums$List, options: MethodOptions): GaxiosPromise<Schema$Albums> {
            const rootUrl = options.rootUrl || "https://photoslibrary.googleapis.com/";
            const parameters: APIRequestParams = {
                options: Object.assign(
                    {
                        url: ( rootUrl + "/v1/albums" ).replace(/([^:]\/)\/+/g, "$1"),
                        method: "GET",
                    },
                    options,
                ),
                params,
                requiredParams: [],
                pathParams: [],
                context: this.context,
            };

            return createAPIRequest<Schema$Albums>(parameters);
        }
    }

    export interface Schema$Album {
        id: string;
        title: string;
        productUrl: string;
        isWriteable: boolean;
        shareInfo: Schema$ShareInfo;
        mediaItemsCount: string;
        coverPhotoBaseUrl: string;
        coverPhotoMediaItemId: string;
    }

    export interface Schema$Albums {
        albums: Schema$Album[];
        nextPageToken: string;
    }

    export interface Schema$ShareInfo {
        sharedAlbumOptions: Schema$SharedAlbumOptions;
        shareableUrl: string;
        shareToken: string;
        isJoined: boolean;
    }

    export interface Schema$SharedAlbumOptions {
        isCollaborative: boolean;
        isCommentable: boolean;
    }

    export class PhotosLib {
        public context: APIRequestContext;
        public albums: Resource$Albums;

        constructor(options: GlobalOptions, google?: GoogleConfigurable) {
            this.context = {
                _options: options || {},
                google,
            };

            this.albums = new Resource$Albums(this.context);
        }
    }

}
