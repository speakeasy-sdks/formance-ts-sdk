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
import { GetBalancesRequest, GetBalancesResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetBalancesRequest = {
  address: "users:001",
  after: "users:003",
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  ledger: "ledger001",
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
};

sdk.balances.getBalances(req).then((res: GetBalancesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getBalancesAggregated

Get the aggregated balances from selected accounts

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetBalancesAggregatedRequest, GetBalancesAggregatedResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetBalancesAggregatedRequest = {
  address: "users:001",
  ledger: "ledger001",
};

sdk.balances.getBalancesAggregated(req).then((res: GetBalancesAggregatedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
