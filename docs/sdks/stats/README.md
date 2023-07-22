# stats

### Available Operations

* [readStats](#readstats) - Get statistics from a ledger

## readStats

Get statistics from a ledger. (aggregate metrics on accounts and transactions)


### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ReadStatsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.stats.readStats({
  ledger: "ledger001",
}).then((res: ReadStatsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ReadStatsRequest](../../models/operations/readstatsrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ReadStatsResponse](../../models/operations/readstatsresponse.md)>**

