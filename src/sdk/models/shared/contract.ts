import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Contract extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "account" })
  account?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "expr" })
  expr: Record<string, any>;
}