import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Posting } from "./posting";
import { Expose, Transform, Type } from "class-transformer";


export class PostTransactionScript extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "plain" })
  plain: string;

  @SpeakeasyMetadata()
  @Expose({ name: "vars" })
  vars?: Record<string, any>;
}

export class PostTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ elemType: Posting })
  @Expose({ name: "postings" })
  @Type(() => Posting)
  postings?: Posting[];

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "script" })
  @Type(() => PostTransactionScript)
  script?: PostTransactionScript;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timestamp?: Date;
}