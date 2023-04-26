# search

## Overview

Everything related to Search

### Available Operations

* [search](#search) - Search

## search

ElasticSearch query engine

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { Query, SearchResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: shared.Query = {
  after: [
    "users:002",
  ],
  cursor: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  ledgers: [
    "quickstart",
    "quickstart",
    "quickstart",
  ],
  pageSize: 569618,
  policy: "OR",
  sort: "txid:asc",
  target: "tempora",
  terms: [
    "destination=central_bank1",
    "destination=central_bank1",
    "destination=central_bank1",
  ],
};

sdk.search.search(req).then((res: SearchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
