import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExpandedDebitHold } from "./expandeddebithold";
import { Expose, Type } from "class-transformer";


export class GetHoldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => ExpandedDebitHold)
  data: ExpandedDebitHold;
}