import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Workflow } from "./workflow";
import { Expose, Type } from "class-transformer";


export class ListWorkflowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Workflow })
  @Expose({ name: "data" })
  @Type(() => Workflow)
  data: Workflow[];
}