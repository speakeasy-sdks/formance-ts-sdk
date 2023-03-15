import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Query extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "after" })
  after?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "cursor" })
  cursor?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ledgers" })
  ledgers?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "policy" })
  policy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sort" })
  sort?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "target" })
  target?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "terms" })
  terms?: string[];
}
