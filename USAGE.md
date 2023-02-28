<!-- Start SDK Example Usage -->
```typescript
import {
  GetServerInfoResponse 
} from "/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "";

const sdk = new SDK({
  security: {
    authorization: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
});

sdk.getServerInfo().then((res: GetServerInfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->