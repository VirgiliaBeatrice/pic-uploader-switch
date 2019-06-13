import { GaxiosPromise } from "gaxios";
import { APIRequestContext, GlobalOptions, GoogleConfigurable, MethodOptions, createAPIRequest, APIRequestParams } from "googleapis-common";

// tslint:disable: no-namespace
export namespace photos_lib {
    export interface IOptions extends GlobalOptions {
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

    export class Resource$Albums {
        public context: APIRequestContext;
        constructor(context: APIRequestContext) {
            this.context = context;
        }

        get(params: Params$Resource$Albums$Get, options: MethodOptions): GaxiosPromise<Schema$Albums> {
            // let params = { } as Params$Resource$Albums$Get;

            const rootUrl = options.rootUrl || "https://photoslibrary.googleapis.com/";
            const parameters: APIRequestParams = {
                options: Object.assign(
                    {
                        url: ( rootUrl + "/v1/albums/{albumId}" ),
                        method: "GET",
                    },
                    options
                ),
                params,
                requiredParams: ["albumId"],
                pathParams: ["albumId"],
                context: this.context,
            };

            return createAPIRequest<Schema$Albums>(parameters);
        }
    }

    export interface Schema$Albums {
        id: string;
        title: string;
        productUrl: string;
        isWriteable: boolean;
        shareInfo: Schema$ShareInfo;
        mediaItemsCount: string;
        coverPhotoBaseUrl: string;
        coverPhotoMediaItemId: string;
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
