<!-- Start SDK Example Usage -->
```typescript
import {
  GetServerInfoResponse
} from "@speakeasy-sdks/formance/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Formance } from "@speakeasy-sdks/formance";
const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.getServerInfo().then((res: GetServerInfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->