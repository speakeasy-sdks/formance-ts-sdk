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
    authorization: "",
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

### [Formance SDK](docs/sdks/formance/README.md)

* [getServerInfo](docs/sdks/formance/README.md#getserverinfo) - Get server info
* [paymentsgetServerInfo](docs/sdks/formance/README.md#paymentsgetserverinfo) - Get server info
* [searchgetServerInfo](docs/sdks/formance/README.md#searchgetserverinfo) - Get server info

### [accounts](docs/sdks/accounts/README.md)

* [addMetadataToAccount](docs/sdks/accounts/README.md#addmetadatatoaccount) - Add metadata to an account
* [countAccounts](docs/sdks/accounts/README.md#countaccounts) - Count the accounts from a ledger
* [getAccount](docs/sdks/accounts/README.md#getaccount) - Get account by its address
* [listAccounts](docs/sdks/accounts/README.md#listaccounts) - List accounts from a ledger

### [balances](docs/sdks/balances/README.md)

* [getBalances](docs/sdks/balances/README.md#getbalances) - Get the balances from a ledger's account
* [getBalancesAggregated](docs/sdks/balances/README.md#getbalancesaggregated) - Get the aggregated balances from selected accounts

### [clients](docs/sdks/clients/README.md)

* [addScopeToClient](docs/sdks/clients/README.md#addscopetoclient) - Add scope to client
* [createClient](docs/sdks/clients/README.md#createclient) - Create client
* [createSecret](docs/sdks/clients/README.md#createsecret) - Add a secret to a client
* [deleteClient](docs/sdks/clients/README.md#deleteclient) - Delete client
* [deleteScopeFromClient](docs/sdks/clients/README.md#deletescopefromclient) - Delete scope from client
* [deleteSecret](docs/sdks/clients/README.md#deletesecret) - Delete a secret from a client
* [listClients](docs/sdks/clients/README.md#listclients) - List clients
* [readClient](docs/sdks/clients/README.md#readclient) - Read client
* [updateClient](docs/sdks/clients/README.md#updateclient) - Update client

### [ledger](docs/sdks/ledger/README.md)

* [getLedgerInfo](docs/sdks/ledger/README.md#getledgerinfo) - Get information about a ledger

### [logs](docs/sdks/logs/README.md)

* [listLogs](docs/sdks/logs/README.md#listlogs) - List the logs from a ledger

### [mapping](docs/sdks/mapping/README.md)

* [getMapping](docs/sdks/mapping/README.md#getmapping) - Get the mapping of a ledger
* [updateMapping](docs/sdks/mapping/README.md#updatemapping) - Update the mapping of a ledger

### [orchestration](docs/sdks/orchestration/README.md)

* [createWorkflow](docs/sdks/orchestration/README.md#createworkflow) - Create workflow
* [getFlow](docs/sdks/orchestration/README.md#getflow) - Get a flow by id
* [getWorkflowOccurrence](docs/sdks/orchestration/README.md#getworkflowoccurrence) - Get a workflow occurrence by id
* [listFlows](docs/sdks/orchestration/README.md#listflows) - List registered flows
* [listRuns](docs/sdks/orchestration/README.md#listruns) - List occurrences of a workflow
* [orchestrationgetServerInfo](docs/sdks/orchestration/README.md#orchestrationgetserverinfo) - Get server info
* [runWorkflow](docs/sdks/orchestration/README.md#runworkflow) - Run workflow

### [payments](docs/sdks/payments/README.md)

* [connectorsStripeTransfer](docs/sdks/payments/README.md#connectorsstripetransfer) - Transfer funds between Stripe accounts
* [getConnectorTask](docs/sdks/payments/README.md#getconnectortask) - Read a specific task of the connector
* [getPayment](docs/sdks/payments/README.md#getpayment) - Get a payment
* [installConnector](docs/sdks/payments/README.md#installconnector) - Install a connector
* [listAllConnectors](docs/sdks/payments/README.md#listallconnectors) - List all installed connectors
* [listConfigsAvailableConnectors](docs/sdks/payments/README.md#listconfigsavailableconnectors) - List the configs of each available connector
* [listConnectorTasks](docs/sdks/payments/README.md#listconnectortasks) - List tasks from a connector
* [listPayments](docs/sdks/payments/README.md#listpayments) - List payments
* [paymentslistAccounts](docs/sdks/payments/README.md#paymentslistaccounts) - List accounts
* [readConnectorConfig](docs/sdks/payments/README.md#readconnectorconfig) - Read the config of a connector
* [resetConnector](docs/sdks/payments/README.md#resetconnector) - Reset a connector
* [uninstallConnector](docs/sdks/payments/README.md#uninstallconnector) - Uninstall a connector

### [scopes](docs/sdks/scopes/README.md)

* [addTransientScope](docs/sdks/scopes/README.md#addtransientscope) - Add a transient scope to a scope
* [createScope](docs/sdks/scopes/README.md#createscope) - Create scope
* [deleteScope](docs/sdks/scopes/README.md#deletescope) - Delete scope
* [deleteTransientScope](docs/sdks/scopes/README.md#deletetransientscope) - Delete a transient scope from a scope
* [listScopes](docs/sdks/scopes/README.md#listscopes) - List scopes
* [readScope](docs/sdks/scopes/README.md#readscope) - Read scope
* [updateScope](docs/sdks/scopes/README.md#updatescope) - Update scope

### [script](docs/sdks/script/README.md)

* [~~runScript~~](docs/sdks/script/README.md#runscript) - Execute a Numscript :warning: **Deprecated**

### [search](docs/sdks/search/README.md)

* [search](docs/sdks/search/README.md#search) - Search

### [server](docs/sdks/server/README.md)

* [getInfo](docs/sdks/server/README.md#getinfo) - Show server information

### [stats](docs/sdks/stats/README.md)

* [readStats](docs/sdks/stats/README.md#readstats) - Get statistics from a ledger

### [transactions](docs/sdks/transactions/README.md)

* [createTransactions](docs/sdks/transactions/README.md#createtransactions) - Create a new batch of transactions to a ledger
* [addMetadataOnTransaction](docs/sdks/transactions/README.md#addmetadataontransaction) - Set the metadata of a transaction by its ID
* [countTransactions](docs/sdks/transactions/README.md#counttransactions) - Count the transactions from a ledger
* [createTransaction](docs/sdks/transactions/README.md#createtransaction) - Create a new transaction to a ledger
* [getTransaction](docs/sdks/transactions/README.md#gettransaction) - Get transaction from a ledger by its ID
* [listTransactions](docs/sdks/transactions/README.md#listtransactions) - List transactions from a ledger
* [revertTransaction](docs/sdks/transactions/README.md#reverttransaction) - Revert a ledger transaction by its ID

### [users](docs/sdks/users/README.md)

* [listUsers](docs/sdks/users/README.md#listusers) - List users
* [readUser](docs/sdks/users/README.md#readuser) - Read user

### [wallets](docs/sdks/wallets/README.md)

* [confirmHold](docs/sdks/wallets/README.md#confirmhold) - Confirm a hold
* [createBalance](docs/sdks/wallets/README.md#createbalance) - Create a balance
* [createWallet](docs/sdks/wallets/README.md#createwallet) - Create a new wallet
* [creditWallet](docs/sdks/wallets/README.md#creditwallet) - Credit a wallet
* [debitWallet](docs/sdks/wallets/README.md#debitwallet) - Debit a wallet
* [getBalance](docs/sdks/wallets/README.md#getbalance) - Get detailed balance
* [getHold](docs/sdks/wallets/README.md#gethold) - Get a hold
* [getHolds](docs/sdks/wallets/README.md#getholds) - Get all holds for a wallet
* [getTransactions](docs/sdks/wallets/README.md#gettransactions)
* [getWallet](docs/sdks/wallets/README.md#getwallet) - Get a wallet
* [listBalances](docs/sdks/wallets/README.md#listbalances) - List balances of a wallet
* [listWallets](docs/sdks/wallets/README.md#listwallets) - List all wallets
* [updateWallet](docs/sdks/wallets/README.md#updatewallet) - Update a wallet
* [voidHold](docs/sdks/wallets/README.md#voidhold) - Cancel a hold
* [walletsgetServerInfo](docs/sdks/wallets/README.md#walletsgetserverinfo) - Get server info

### [webhooks](docs/sdks/webhooks/README.md)

* [activateConfig](docs/sdks/webhooks/README.md#activateconfig) - Activate one config
* [changeConfigSecret](docs/sdks/webhooks/README.md#changeconfigsecret) - Change the signing secret of a config
* [deactivateConfig](docs/sdks/webhooks/README.md#deactivateconfig) - Deactivate one config
* [deleteConfig](docs/sdks/webhooks/README.md#deleteconfig) - Delete one config
* [getManyConfigs](docs/sdks/webhooks/README.md#getmanyconfigs) - Get many configs
* [insertConfig](docs/sdks/webhooks/README.md#insertconfig) - Insert a new config
* [testConfig](docs/sdks/webhooks/README.md#testconfig) - Test one config
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
