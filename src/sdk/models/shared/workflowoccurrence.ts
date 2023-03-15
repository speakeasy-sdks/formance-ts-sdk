import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { StageStatus } from "./stagestatus";
import { Expose, Transform, Type } from "class-transformer";

export class WorkflowOccurrence extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata({ elemType: StageStatus })
  @Expose({ name: "statuses" })
  @Type(() => StageStatus)
  statuses: StageStatus[];

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "workflowID" })
  workflowID: string;
}
