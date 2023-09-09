/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WorkflowInstance } from "./workflowinstance";
import { Expose, Type } from "class-transformer";

export class RunWorkflowResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => WorkflowInstance)
    data: WorkflowInstance;
}
