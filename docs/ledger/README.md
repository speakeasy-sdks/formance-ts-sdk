# ledger

## Overview

Everything related to Ledger

### Available Operations

* [getLedgerInfo](#getledgerinfo) - Get information about a ledger

## getLedgerInfo

Get information about a ledger

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetLedgerInfoRequest, GetLedgerInfoResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum, MigrationInfoStateEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetLedgerInfoRequest = {
  ledger: "ledger001",
};

sdk.ledger.getLedgerInfo(req).then((res: GetLedgerInfoResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
