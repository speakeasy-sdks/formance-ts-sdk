# script

## Overview

Everything related to Script

### Available Operations

* [~~runScript~~](#runscript) - Execute a Numscript :warning: **Deprecated**

## ~~runScript~~

This route is deprecated, and has been merged into `POST /{ledger}/transactions`.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { RunScriptResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.script.runScript({
  script: {
    metadata: {
      "corporis": "dolore",
    },
    plain: "vars {
  account $user
  }
  send [COIN 10] (
  	source = @world
  	destination = $user
  )
  ",
    reference: "order_1234",
    vars: {},
  },
  ledger: "ledger001",
  preview: true,
}).then((res: RunScriptResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.RunScriptRequest](../../models/operations/runscriptrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.RunScriptResponse](../../models/operations/runscriptresponse.md)>**

