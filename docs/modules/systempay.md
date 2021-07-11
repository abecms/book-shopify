# SystemPay

## Introduction
This module will call SystemPay after every payment to get The SystemPay ID (not available in the Shopify order)

## Routes (/systempay)
### /payment-mean/:uuid
get the UID of the order and returns the payment mean used to pay.

## Services
### getTransaction
Get the systempay transaction linked to the order paid in Shopify.

### getPaymentMean
Returns the payment mean used to pay
