import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Workflow } from "./workflow";
import { Expose, Type } from "class-transformer";


export class GetWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Workflow)
  data: Workflow;
}