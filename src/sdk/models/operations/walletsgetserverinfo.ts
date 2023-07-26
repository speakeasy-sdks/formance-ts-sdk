/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class WalletsgetServerInfoResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Server information
     */
    @SpeakeasyMetadata()
    serverInfo?: shared.ServerInfo;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Error
     */
    @SpeakeasyMetadata()
    walletsErrorResponse?: shared.WalletsErrorResponse;
}
