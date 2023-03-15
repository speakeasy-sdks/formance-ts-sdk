import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Volume extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "input" })
  input: number;

  @SpeakeasyMetadata()
  @Expose({ name: "output" })
  output: number;
}
