/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Posting } from "./posting";
import { Expose, Transform, Type } from "class-transformer";

export class PostTransactionScriptVars extends SpeakeasyBase {}

export class PostTransactionScript extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "plain" })
    plain: string;

    @SpeakeasyMetadata()
    @Expose({ name: "vars" })
    @Type(() => PostTransactionScriptVars)
    vars?: PostTransactionScriptVars;
}

/**
 * The request body must contain at least one of the following objects:
 *
 * @remarks
 *   - `postings`: suitable for simple transactions
 *   - `script`: enabling more complex transactions with Numscript
 *
 */
export class PostTransaction extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata: Record<string, string>;

    @SpeakeasyMetadata({ elemType: Posting })
    @Expose({ name: "postings" })
    @Type(() => Posting)
    postings?: Posting[];

    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "script" })
    @Type(() => PostTransactionScript)
    script?: PostTransactionScript;

    @SpeakeasyMetadata()
    @Expose({ name: "timestamp" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    timestamp?: Date;
}
