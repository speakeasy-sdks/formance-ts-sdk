# balances

## Overview

Everything related to Balances

### Available Operations

* [getBalances](#getbalances) - Get the balances from a ledger's account
* [getBalancesAggregated](#getbalancesaggregated) - Get the aggregated balances from selected accounts

## getBalances

Get the balances from a ledger's account

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetBalancesResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.balances.getBalances({
  address: "users:001",
  after: "users:003",
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  ledger: "ledger001",
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
}).then((res: GetBalancesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getBalancesAggregated

Get the aggregated balances from selected accounts

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetBalancesAggregatedResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.balances.getBalancesAggregated({
  address: "users:001",
  ledger: "ledger001",
}).then((res: GetBalancesAggregatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
