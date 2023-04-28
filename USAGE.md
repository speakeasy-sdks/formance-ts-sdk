<!-- Start SDK Example Usage -->
```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetServerInfoResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.getServerInfo().then((res: GetServerInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->