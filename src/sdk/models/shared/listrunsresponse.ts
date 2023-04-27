/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WorkflowOccurrence } from "./workflowoccurrence";
import { Expose, Type } from "class-transformer";

export class ListRunsResponseCursor extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: WorkflowOccurrence })
  @Expose({ name: "data" })
  @Type(() => WorkflowOccurrence)
  data: WorkflowOccurrence[];

  @SpeakeasyMetadata()
  @Expose({ name: "hasMore" })
  hasMore?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;
}

/**
 * List of workflow occurrences
 */
export class ListRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cursor" })
  @Type(() => ListRunsResponseCursor)
  cursor: ListRunsResponseCursor;
}