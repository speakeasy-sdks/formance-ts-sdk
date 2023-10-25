/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class ConnectorsConfigsResponseDataConnectorKey extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType: string;

    @SpeakeasyMetadata()
    @Expose({ name: "required" })
    required: boolean;
}

export class ConnectorsConfigsResponseDataConnector extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "key" })
    @Type(() => ConnectorsConfigsResponseDataConnectorKey)
    key: ConnectorsConfigsResponseDataConnectorKey;
}

export class ConnectorsConfigsResponseData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connector" })
    @Type(() => ConnectorsConfigsResponseDataConnector)
    connector: ConnectorsConfigsResponseDataConnector;
}

export class ConnectorsConfigsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => ConnectorsConfigsResponseData)
    data: ConnectorsConfigsResponseData;
}
