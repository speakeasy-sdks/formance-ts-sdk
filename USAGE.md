<!-- Start SDK Example Usage [usage] -->
```typescript
import { Formance } from "@speakeasy-sdks/formance";

async function run() {
    const sdk = new Formance({
        authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const res = await sdk.getVersions();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->