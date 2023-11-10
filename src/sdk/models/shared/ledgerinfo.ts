/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MigrationInfo } from "./migrationinfo";
import { Expose, Type } from "class-transformer";

export class Storage extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: MigrationInfo })
    @Expose({ name: "migrations" })
    @Type(() => MigrationInfo)
    migrations?: MigrationInfo[];
}

export class LedgerInfo extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "storage" })
    @Type(() => Storage)
    storage?: Storage;
}
