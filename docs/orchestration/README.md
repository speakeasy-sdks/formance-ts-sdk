# orchestration

## Overview

Everything related to Orchestration

### Available Operations

* [createWorkflow](#createworkflow) - Create workflow
* [getFlow](#getflow) - Get a flow by id
* [getWorkflowOccurrence](#getworkflowoccurrence) - Get a workflow occurrence by id
* [listFlows](#listflows) - List registered flows
* [listRuns](#listruns) - List occurrences of a workflow
* [orchestrationgetServerInfo](#orchestrationgetserverinfo) - Get server info
* [runWorkflow](#runworkflow) - Run workflow

## createWorkflow

Create a workflow

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateWorkflowResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.orchestration.createWorkflow({
  stages: [
    {
      "architecto": "mollitia",
      "dolorem": "culpa",
      "consequuntur": "repellat",
      "mollitia": "occaecati",
    },
    {
      "commodi": "quam",
      "molestiae": "velit",
    },
    {
      "quia": "quis",
      "vitae": "laborum",
      "animi": "enim",
    },
    {
      "quo": "sequi",
    },
  ],
}).then((res: CreateWorkflowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getFlow

Get a flow by id

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetFlowResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.orchestration.getFlow({
  flowId: "tenetur",
}).then((res: GetFlowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getWorkflowOccurrence

Get a workflow occurrence by id

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetWorkflowOccurrenceResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.orchestration.getWorkflowOccurrence({
  flowId: "ipsam",
  runId: "id",
}).then((res: GetWorkflowOccurrenceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listFlows

List registered flows

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListFlowsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.orchestration.listFlows().then((res: ListFlowsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listRuns

List occurrences of a workflow

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListRunsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.orchestration.listRuns({
  flowId: "possimus",
}).then((res: ListRunsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## orchestrationgetServerInfo

Get server info

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { OrchestrationgetServerInfoResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.orchestration.orchestrationgetServerInfo().then((res: OrchestrationgetServerInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## runWorkflow

Run workflow

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { RunWorkflowResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.orchestration.runWorkflow({
  requestBody: {
    "quasi": "error",
  },
  flowId: "temporibus",
  wait: false,
}).then((res: RunWorkflowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
