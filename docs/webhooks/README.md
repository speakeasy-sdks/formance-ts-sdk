# webhooks

## Overview

Everything related to Webhooks

### Available Operations

* [activateConfig](#activateconfig) - Activate one config
* [changeConfigSecret](#changeconfigsecret) - Change the signing secret of a config
* [deactivateConfig](#deactivateconfig) - Deactivate one config
* [deleteConfig](#deleteconfig) - Delete one config
* [getManyConfigs](#getmanyconfigs) - Get many configs
* [insertConfig](#insertconfig) - Insert a new config
* [testConfig](#testconfig) - Test one config

## activateConfig

Activate a webhooks config by ID, to start receiving webhooks to its endpoint.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ActivateConfigRequest, ActivateConfigResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ActivateConfigRequest = {
  id: "4997257d-dfb6-445b-929c-cbe2ab182818",
};

sdk.webhooks.activateConfig(req).then((res: ActivateConfigResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## changeConfigSecret

Change the signing secret of the endpoint of a webhooks config.

If not passed or empty, a secret is automatically generated.
The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)


### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ChangeConfigSecretRequest, ChangeConfigSecretResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ChangeConfigSecretRequest = {
  configChangeSecret: {
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
  },
  id: "4997257d-dfb6-445b-929c-cbe2ab182818",
};

sdk.webhooks.changeConfigSecret(req).then((res: ChangeConfigSecretResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deactivateConfig

Deactivate a webhooks config by ID, to stop receiving webhooks to its endpoint.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeactivateConfigRequest, DeactivateConfigResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: DeactivateConfigRequest = {
  id: "4997257d-dfb6-445b-929c-cbe2ab182818",
};

sdk.webhooks.deactivateConfig(req).then((res: DeactivateConfigResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteConfig

Delete a webhooks config by ID.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeleteConfigRequest, DeleteConfigResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: DeleteConfigRequest = {
  id: "4997257d-dfb6-445b-929c-cbe2ab182818",
};

sdk.webhooks.deleteConfig(req).then((res: DeleteConfigResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getManyConfigs

Sorted by updated date descending

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetManyConfigsRequest, GetManyConfigsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetManyConfigsRequest = {
  endpoint: "https://example.com",
  id: "4997257d-dfb6-445b-929c-cbe2ab182818",
};

sdk.webhooks.getManyConfigs(req).then((res: GetManyConfigsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## insertConfig

Insert a new webhooks config.

The endpoint should be a valid https URL and be unique.

The secret is the endpoint's verification secret.
If not passed or empty, a secret is automatically generated.
The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)

All eventTypes are converted to lower-case when inserted.


### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ConfigUser, InsertConfigResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: shared.ConfigUser = {
  endpoint: "https://example.com",
  eventTypes: [
    "TYPE1",
    "TYPE1",
    "TYPE1",
    "TYPE1",
  ],
  secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
};

sdk.webhooks.insertConfig(req).then((res: InsertConfigResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## testConfig

Test a config by sending a webhook to its endpoint.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { TestConfigRequest, TestConfigResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: TestConfigRequest = {
  id: "4997257d-dfb6-445b-929c-cbe2ab182818",
};

sdk.webhooks.testConfig(req).then((res: TestConfigResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
