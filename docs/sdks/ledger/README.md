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

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetLedgerInfoRequest](../../models/operations/getledgerinforequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetLedgerInfoResponse](../../models/operations/getledgerinforesponse.md)>**

