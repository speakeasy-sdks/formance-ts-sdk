import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaymentStatusEnum } from "./paymentstatusenum";
import { Expose, Transform, Type } from "class-transformer";


export class TaskWiseDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "profileID" })
  profileID?: number;
}

export class TaskWise extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "connectorId" })
  connectorId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "descriptor" })
  @Type(() => TaskWiseDescriptor)
  descriptor: TaskWiseDescriptor;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PaymentStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;
}