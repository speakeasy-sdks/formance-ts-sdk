import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Mapping } from "./mapping";
import { Expose, Type } from "class-transformer";

export class MappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Mapping)
  data?: Mapping;
}
