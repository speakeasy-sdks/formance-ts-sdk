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
    "users:002",
  ],
  cursor: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  ledgers: [
    "quickstart",
  ],
  pageSize: 688661,
  policy: "OR",
  sort: "txid:asc",
  target: "enim",
  terms: [
    "destination=central_bank1",
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

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Query](../../models/shared/query.md)                 | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SearchResponse](../../models/operations/searchresponse.md)>**
