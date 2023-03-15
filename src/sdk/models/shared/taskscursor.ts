import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class TasksCursorCursor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data: any[];

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

export class TasksCursor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cursor" })
  @Type(() => TasksCursorCursor)
  cursor: TasksCursorCursor;
}
