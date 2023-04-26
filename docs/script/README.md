# script

## Overview

Everything related to Script

### Available Operations

* [runScript](#runscript) - Execute a Numscript

## runScript

This route is deprecated, and has been merged into `POST /{ledger}/transactions`.


### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { RunScriptRequest, RunScriptResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: RunScriptRequest = {
  script: {
    metadata: {
      "explicabo": "deserunt",
      "distinctio": "quibusdam",
      "labore": "modi",
      "qui": "aliquid",
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
    vars: {
      "quos": "perferendis",
      "magni": "assumenda",
      "ipsam": "alias",
    },
  },
  ledger: "ledger001",
  preview: true,
};

sdk.script.runScript(req).then((res: RunScriptResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
