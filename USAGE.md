<!-- Start SDK Example Usage -->


```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetVersionsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.getVersions().then((res: GetVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->