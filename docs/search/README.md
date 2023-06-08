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
import { SearchResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.search.search({
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
}).then((res: SearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
