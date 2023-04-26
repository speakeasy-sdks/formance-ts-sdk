# stats

## Overview

Everything related to Stats

### Available Operations

* [readStats](#readstats) - Get statistics from a ledger

## readStats

Get statistics from a ledger. (aggregate metrics on accounts and transactions)


### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ReadStatsRequest, ReadStatsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ReadStatsRequest = {
  ledger: "ledger001",
};

sdk.stats.readStats(req).then((res: ReadStatsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
