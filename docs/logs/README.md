# logs

## Overview

Everything related to Logs

### Available Operations

* [listLogs](#listlogs) - List the logs from a ledger

## listLogs

List the logs from a ledger, sorted by ID in descending order.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListLogsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnum, LogType } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.logs.listLogs({
  after: "1234",
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  endTime: new Date("2020-11-28T02:15:07.561Z"),
  endTimeDeprecated: new Date("2022-12-10T00:25:28.749Z"),
  ledger: "ledger001",
  pageSize: 969810,
  pageSizeDeprecated: 666767,
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  startTime: new Date("2021-08-29T10:25:27.700Z"),
  startTimeDeprecated: new Date("2022-10-16T05:02:54.746Z"),
}).then((res: ListLogsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
