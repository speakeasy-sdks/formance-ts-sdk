<!-- Start SDK Example Usage -->


```typescript
import { Formance } from "@speakeasy-sdks/formance";

(async () => {
    const sdk = new Formance({
        authorization: "",
    });

    const res = await sdk.getVersions();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->