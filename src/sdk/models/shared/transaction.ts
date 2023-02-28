import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Posting } from "./posting";
import { Volume } from "./volume";
import { Expose, Transform, Type } from "class-transformer";


export class Transaction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ elemType: Volume, elemDepth: 2 })
  @Expose({ name: "postCommitVolumes" })
  postCommitVolumes?: Record<string, Record<string, Volume>>;

  @SpeakeasyMetadata({ elemType: Posting })
  @Expose({ name: "postings" })
  @Type(() => Posting)
  postings: Posting[];

  @SpeakeasyMetadata({ elemType: Volume, elemDepth: 2 })
  @Expose({ name: "preCommitVolumes" })
  preCommitVolumes?: Record<string, Record<string, Volume>>;

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timestamp: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "txid" })
  txid: number;
}