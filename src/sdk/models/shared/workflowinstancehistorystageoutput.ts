/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ActivityCreateTransactionOutput } from "./activitycreatetransactionoutput";
import { ActivityDebitWalletOutput } from "./activitydebitwalletoutput";
import { ActivityGetAccountOutput } from "./activitygetaccountoutput";
import { ActivityGetPaymentOutput } from "./activitygetpaymentoutput";
import { ActivityGetWalletOutput } from "./activitygetwalletoutput";
import { ActivityRevertTransactionOutput } from "./activityreverttransactionoutput";
import { Expose, Type } from "class-transformer";

export class WorkflowInstanceHistoryStageOutput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "CreateTransaction" })
    @Type(() => ActivityCreateTransactionOutput)
    createTransaction?: ActivityCreateTransactionOutput;

    @SpeakeasyMetadata()
    @Expose({ name: "DebitWallet" })
    @Type(() => ActivityDebitWalletOutput)
    debitWallet?: ActivityDebitWalletOutput;

    @SpeakeasyMetadata()
    @Expose({ name: "GetAccount" })
    @Type(() => ActivityGetAccountOutput)
    getAccount?: ActivityGetAccountOutput;

    @SpeakeasyMetadata()
    @Expose({ name: "GetPayment" })
    @Type(() => ActivityGetPaymentOutput)
    getPayment?: ActivityGetPaymentOutput;

    @SpeakeasyMetadata()
    @Expose({ name: "GetWallet" })
    @Type(() => ActivityGetWalletOutput)
    getWallet?: ActivityGetWalletOutput;

    @SpeakeasyMetadata()
    @Expose({ name: "RevertTransaction" })
    @Type(() => ActivityRevertTransactionOutput)
    revertTransaction?: ActivityRevertTransactionOutput;
}
