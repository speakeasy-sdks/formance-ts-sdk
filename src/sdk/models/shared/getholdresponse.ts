/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExpandedDebitHold } from "./expandeddebithold";
import { Expose, Type } from "class-transformer";

/**
 * Holds
 */
export class GetHoldResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => ExpandedDebitHold)
    data: ExpandedDebitHold;
}
