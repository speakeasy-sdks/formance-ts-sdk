import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Log } from "./log";
import { Expose, Type } from "class-transformer";

export class LogsCursorResponseCursor extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Log })
  @Expose({ name: "data" })
  @Type(() => Log)
  data: Log[];

  @SpeakeasyMetadata()
  @Expose({ name: "hasMore" })
  hasMore: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;
}

export class LogsCursorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cursor" })
  @Type(() => LogsCursorResponseCursor)
  cursor: LogsCursorResponseCursor;
}
