import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectorEnum } from "./connectorenum";
import { Expose, Transform } from "class-transformer";

export enum PaymentsAccountTypeEnum {
  Target = "TARGET",
  Source = "SOURCE",
}

export class PaymentsAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider: ConnectorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: PaymentsAccountTypeEnum;
}
