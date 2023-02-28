import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class ResponseCursorTotal extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "relation" })
  relation?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: number;
}

export class ResponseCursor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "hasMore" })
  hasMore?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  @Type(() => ResponseCursorTotal)
  total?: ResponseCursorTotal;
}

export class Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cursor" })
  @Type(() => ResponseCursor)
  cursor?: ResponseCursor;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, any>;
}