import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaymentStatusEnum } from "./paymentstatusenum";
import { Expose, Transform, Type } from "class-transformer";


export class TaskStripeDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "account" })
  account: string;

  @SpeakeasyMetadata()
  @Expose({ name: "main" })
  main?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

export class TaskStripe extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "connectorId" })
  connectorId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "descriptor" })
  @Type(() => TaskStripeDescriptor)
  descriptor: TaskStripeDescriptor;

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