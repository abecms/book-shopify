# Alertstock

## Introduction
This module offers the possibility to users to subscribe to an email alert when a product is back in stock.
The alertstock information is persisted in dynamoDB.

## Routes (/alertstock)
### /add-alertStock
Add an alert for a product variant and a customer ID.

### /get-alertStock-variant
Returns subscribers to an alert for the product variant

### /get-alertStock-customer
Returns the products variants subscribed by the customer

### /delete-alertStock
Deletes a specific alert (product variant and customer)

### /mail-subscribers
Sends a mail to subscribers when a product is back in stock.

## Services
### addAlert
Adds an alert for a product variant and customer

### deleteAlert
Deletes an alert (product variant + customer)

### mailSubscribers
Sens a mail to all subscribers of a product alert

### getSubscribers
Get the list of all subscribzrs to a product alert

### getProducts
Get the list of product alerts subscribed by a customer

