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
import { GetLedgerInfoResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnum, MigrationInfoState } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.getLedgerInfo({
  ledger: "ledger001",
}).then((res: GetLedgerInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
