import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AssetHolder } from "./assetholder";
import { Expose, Transform, Type } from "class-transformer";


export class WalletWithBalancesBalances extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "main" })
  @Type(() => AssetHolder)
  main: AssetHolder;
}

export class WalletWithBalances extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "balances" })
  @Type(() => WalletWithBalancesBalances)
  balances: WalletWithBalancesBalances;

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ledger" })
  ledger: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}