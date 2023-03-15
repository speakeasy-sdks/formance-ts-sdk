import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WorkflowOccurrence } from "./workflowoccurrence";
import { Expose, Type } from "class-transformer";

export class RunWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => WorkflowOccurrence)
  data: WorkflowOccurrence;
}
