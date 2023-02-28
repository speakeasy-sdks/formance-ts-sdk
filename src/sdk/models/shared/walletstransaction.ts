import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Posting } from "./posting";
import { WalletsVolume } from "./walletsvolume";
import { Expose, Transform, Type } from "class-transformer";


export class WalletsTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ elemType: WalletsVolume, elemDepth: 2 })
  @Expose({ name: "postCommitVolumes" })
  postCommitVolumes?: Record<string, Record<string, WalletsVolume>>;

  @SpeakeasyMetadata({ elemType: Posting })
  @Expose({ name: "postings" })
  @Type(() => Posting)
  postings: Posting[];

  @SpeakeasyMetadata({ elemType: WalletsVolume, elemDepth: 2 })
  @Expose({ name: "preCommitVolumes" })
  preCommitVolumes?: Record<string, Record<string, WalletsVolume>>;

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