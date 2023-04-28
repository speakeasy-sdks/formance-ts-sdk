<div align="center">
    <picture>
        <source srcset="https://user-images.githubusercontent.com/6267663/221572723-e77f55a3-5d19-4a13-94f8-e7b0b340d71e.svg" media="(prefers-color-scheme: dark)">
        <img src="https://user-images.githubusercontent.com/6267663/221572726-6982541c-d1cf-4d9f-9bbf-cd774a2713e6.svg">
    </picture>
   <h1>Formance Typescript SDK</h1>
   <p><strong>Open Source Ledger for money-moving platforms</strong></p>
   <p>Build and track custom fit money flows on a scalable financial infrastructure.</p>
   <a href="https://docs.formance.com/api/stack/v1.0#section/Introduction"><img src="https://img.shields.io/static/v1?label=Docs&message=Docs&color=000&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/formance-ts-sdk/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/formance-ts-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://join.slack.com/t/formance-community/shared_invite/zt-1of48xmgy-Jc6RH8gzcWf5D0qD2HBPQA"><img src="https://img.shields.io/static/v1?label=Slack&message=Join&color=7289da&style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @speakeasy-sdks/formance
```

### Yarn

```bash
yarn add @speakeasy-sdks/formance
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [Formance SDK](docs/formance/README.md)

* [getServerInfo](docs/formance/README.md#getserverinfo) - Get server info
* [paymentsgetServerInfo](docs/formance/README.md#paymentsgetserverinfo) - Get server info
* [searchgetServerInfo](docs/formance/README.md#searchgetserverinfo) - Get server info

### [accounts](docs/accounts/README.md)

* [addMetadataToAccount](docs/accounts/README.md#addmetadatatoaccount) - Add metadata to an account
* [countAccounts](docs/accounts/README.md#countaccounts) - Count the accounts from a ledger
* [getAccount](docs/accounts/README.md#getaccount) - Get account by its address
* [listAccounts](docs/accounts/README.md#listaccounts) - List accounts from a ledger

### [balances](docs/balances/README.md)

* [getBalances](docs/balances/README.md#getbalances) - Get the balances from a ledger's account
* [getBalancesAggregated](docs/balances/README.md#getbalancesaggregated) - Get the aggregated balances from selected accounts

### [clients](docs/clients/README.md)

* [addScopeToClient](docs/clients/README.md#addscopetoclient) - Add scope to client
* [createClient](docs/clients/README.md#createclient) - Create client
* [createSecret](docs/clients/README.md#createsecret) - Add a secret to a client
* [deleteClient](docs/clients/README.md#deleteclient) - Delete client
* [deleteScopeFromClient](docs/clients/README.md#deletescopefromclient) - Delete scope from client
* [deleteSecret](docs/clients/README.md#deletesecret) - Delete a secret from a client
* [listClients](docs/clients/README.md#listclients) - List clients
* [readClient](docs/clients/README.md#readclient) - Read client
* [updateClient](docs/clients/README.md#updateclient) - Update client

### [ledger](docs/ledger/README.md)

* [getLedgerInfo](docs/ledger/README.md#getledgerinfo) - Get information about a ledger

### [logs](docs/logs/README.md)

* [listLogs](docs/logs/README.md#listlogs) - List the logs from a ledger

### [mapping](docs/mapping/README.md)

* [getMapping](docs/mapping/README.md#getmapping) - Get the mapping of a ledger
* [updateMapping](docs/mapping/README.md#updatemapping) - Update the mapping of a ledger

### [orchestration](docs/orchestration/README.md)

* [createWorkflow](docs/orchestration/README.md#createworkflow) - Create workflow
* [getFlow](docs/orchestration/README.md#getflow) - Get a flow by id
* [getWorkflowOccurrence](docs/orchestration/README.md#getworkflowoccurrence) - Get a workflow occurrence by id
* [listFlows](docs/orchestration/README.md#listflows) - List registered flows
* [listRuns](docs/orchestration/README.md#listruns) - List occurrences of a workflow
* [orchestrationgetServerInfo](docs/orchestration/README.md#orchestrationgetserverinfo) - Get server info
* [runWorkflow](docs/orchestration/README.md#runworkflow) - Run workflow

### [payments](docs/payments/README.md)

* [connectorsStripeTransfer](docs/payments/README.md#connectorsstripetransfer) - Transfer funds between Stripe accounts
* [getConnectorTask](docs/payments/README.md#getconnectortask) - Read a specific task of the connector
* [getPayment](docs/payments/README.md#getpayment) - Get a payment
* [installConnector](docs/payments/README.md#installconnector) - Install a connector
* [listAllConnectors](docs/payments/README.md#listallconnectors) - List all installed connectors
* [listConfigsAvailableConnectors](docs/payments/README.md#listconfigsavailableconnectors) - List the configs of each available connector
* [listConnectorTasks](docs/payments/README.md#listconnectortasks) - List tasks from a connector
* [listPayments](docs/payments/README.md#listpayments) - List payments
* [paymentslistAccounts](docs/payments/README.md#paymentslistaccounts) - List accounts
* [readConnectorConfig](docs/payments/README.md#readconnectorconfig) - Read the config of a connector
* [resetConnector](docs/payments/README.md#resetconnector) - Reset a connector
* [uninstallConnector](docs/payments/README.md#uninstallconnector) - Uninstall a connector

### [scopes](docs/scopes/README.md)

* [addTransientScope](docs/scopes/README.md#addtransientscope) - Add a transient scope to a scope
* [createScope](docs/scopes/README.md#createscope) - Create scope
* [deleteScope](docs/scopes/README.md#deletescope) - Delete scope
* [deleteTransientScope](docs/scopes/README.md#deletetransientscope) - Delete a transient scope from a scope
* [listScopes](docs/scopes/README.md#listscopes) - List scopes
* [readScope](docs/scopes/README.md#readscope) - Read scope
* [updateScope](docs/scopes/README.md#updatescope) - Update scope

### [script](docs/script/README.md)

* [runScript](docs/script/README.md#runscript) - Execute a Numscript

### [search](docs/search/README.md)

* [search](docs/search/README.md#search) - Search

### [server](docs/server/README.md)

* [getInfo](docs/server/README.md#getinfo) - Show server information

### [stats](docs/stats/README.md)

* [readStats](docs/stats/README.md#readstats) - Get statistics from a ledger

### [transactions](docs/transactions/README.md)

* [createTransactions](docs/transactions/README.md#createtransactions) - Create a new batch of transactions to a ledger
* [addMetadataOnTransaction](docs/transactions/README.md#addmetadataontransaction) - Set the metadata of a transaction by its ID
* [countTransactions](docs/transactions/README.md#counttransactions) - Count the transactions from a ledger
* [createTransaction](docs/transactions/README.md#createtransaction) - Create a new transaction to a ledger
* [getTransaction](docs/transactions/README.md#gettransaction) - Get transaction from a ledger by its ID
* [listTransactions](docs/transactions/README.md#listtransactions) - List transactions from a ledger
* [revertTransaction](docs/transactions/README.md#reverttransaction) - Revert a ledger transaction by its ID

### [users](docs/users/README.md)

* [listUsers](docs/users/README.md#listusers) - List users
* [readUser](docs/users/README.md#readuser) - Read user

### [wallets](docs/wallets/README.md)

* [confirmHold](docs/wallets/README.md#confirmhold) - Confirm a hold
* [createBalance](docs/wallets/README.md#createbalance) - Create a balance
* [createWallet](docs/wallets/README.md#createwallet) - Create a new wallet
* [creditWallet](docs/wallets/README.md#creditwallet) - Credit a wallet
* [debitWallet](docs/wallets/README.md#debitwallet) - Debit a wallet
* [getBalance](docs/wallets/README.md#getbalance) - Get detailed balance
* [getHold](docs/wallets/README.md#gethold) - Get a hold
* [getHolds](docs/wallets/README.md#getholds) - Get all holds for a wallet
* [getTransactions](docs/wallets/README.md#gettransactions)
* [getWallet](docs/wallets/README.md#getwallet) - Get a wallet
* [listBalances](docs/wallets/README.md#listbalances) - List balances of a wallet
* [listWallets](docs/wallets/README.md#listwallets) - List all wallets
* [updateWallet](docs/wallets/README.md#updatewallet) - Update a wallet
* [voidHold](docs/wallets/README.md#voidhold) - Cancel a hold
* [walletsgetServerInfo](docs/wallets/README.md#walletsgetserverinfo) - Get server info

### [webhooks](docs/webhooks/README.md)

* [activateConfig](docs/webhooks/README.md#activateconfig) - Activate one config
* [changeConfigSecret](docs/webhooks/README.md#changeconfigsecret) - Change the signing secret of a config
* [deactivateConfig](docs/webhooks/README.md#deactivateconfig) - Deactivate one config
* [deleteConfig](docs/webhooks/README.md#deleteconfig) - Delete one config
* [getManyConfigs](docs/webhooks/README.md#getmanyconfigs) - Get many configs
* [insertConfig](docs/webhooks/README.md#insertconfig) - Insert a new config
* [testConfig](docs/webhooks/README.md#testconfig) - Test one config
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
