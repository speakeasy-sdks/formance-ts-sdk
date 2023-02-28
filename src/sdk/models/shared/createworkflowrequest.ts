import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CreateWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "stages" })
  stages: Record<string, any>[];
}