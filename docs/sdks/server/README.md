# Server
(*server*)

### Available Operations

* [getInfo](#getinfo) - Show server information

## getInfo

Show server information

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.server.getInfo();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetInfoResponse](../../models/operations/getinforesponse.md)>**

