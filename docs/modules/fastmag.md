# Fastmag

## Introduction
This module is a complete module synchronizing Fastmag with Shopify.

## Routes (/fastmag)
### /ping
returns a success JSON

### /settings
returns the fastmag config
### POST /settings
Updates the fastmag config

### /promo
Will create promo (percentage tag) for a specific list of products or collections

### /promo/:tag
Will remove promo tags from specific products or collections

### /check-giftcard
Will check if a Fastmag giftcard exists and is activated and will synchronize it with Shopify if ok.

### /sync-order-statuses
Synchronizes the order statuses by getting all unshipped orders from Shopify and looking at the statuses in Fastmag. If the status has changed, the order in Shopify is updated + get the tracking id when status is 300 or 305.

Async call : I don't wait for an answer to send the browser's response

### /update-tracking/:orderId
Will check on TNT if a specific order's tracking number has evolved and updates SHopify

### /sync-order-deliveries
Synchronizes the order delivery status by getting all shipped orders from Shopify and looking at the statuses in Chronopost. If the status has changed, the order
in Shopify is updated.
Async call : I don't wait for an answer to send the browser's response

### /fetch_tracking_numbers.json
This route is called by Shopify (almost hourly).
Sync specific orders with tracking numbers from Fastmag

### /fetch_stock.json
Fulfillment service endpoint called by Shopify every hour for a full stock update and called at every variant update for a single variant's stock update

### /sync-stock
Synchronizes asynchronously the stock from Fastmag to Shopify. The stock is calculated based on 2 different stocks in Fastmag. We use the bulk inventory update to speed things up

### /sync-prices
Synchronizes asynchronously the prices from Fastmag to Shopify. It requests the tables products and prixremisetc to calculate the final price and the original price (taking into account datedebut and datefin)

### /sync-differential-stock
Synchronize stocks updated in Fastmag since the last synchronization. We use the last_modified date from fastmag and keep the last call in dynamodb

### /products-by-season
Returns Fastmag products for a specific season

### /fastmag-to-shopify
* DEPRECATED* Asynchronously creates or updates products of a specific season from Fastmag to Shopify

### /sync-products-by-season
Asynchronously creates or updates products of a specific season from Fastmag to Shopify

### /get-inventory-prices
Returns the list of stock and prices from Fastmag

### /sync-inventory-fastmagid
Checks that the FastmagID exists on Shopify products and updates them if necessary (used during the first import)

### /post-order
Creates an order in Fastmag from Shopify.

### /get-orders
*DEPRECATED*

### /get-all-orders
Returns all orders from fastmag

### /mail-giftcard
Searches a giftcard in DynamoDB and if found, plans a repost of the mail (in case the customer has not received the first one)

### /post-customer
*DEPRECATED*

### /get-products
Returns all products from Fastmag

### /get-productsBySeason
Returns all products of a particular season from Fastmag.

### /get-order
Returns a specific order from fastmag

### /get-orderByShopifyIds
Returns a specific order from fastmag based on a shopify order's iD

### /get-customer
Searches a customer in Fastmag from its email

### /get-giftcard
Searches a Giftcard in Fastmag based on its fastmag ID

### /get-giftcards
Returns all giftcards from Fastmag

### /get-pme
Returns a "porte-monnaie-électronique" (PME) from Fastmag based on its code

### /get-pmes
returns a list of PME's from fastmag

### /get-pmes-mag
returns a list of PME's delivered in physical stores from fastmag

### /get-pmes-web
returns a list of PME's delivered in WEB stores from fastmag

### /get-fullinventory
Returns the full stock of Fastmag

### /get-inventory
Returns a specific stock for a SKU

### /get-product
Returns a product from Fastmag based on its SKU

### /get-product-by-gencod/:gencod
Returns a product from Fastmag based on its GENCOD

### /post-transfer-stock
Transfers stocks of an order beetween web and general stock in Fastmag

### /post-giftcard
Post a mail to inform the consignee's of a giftcard

### /get-product-by-tag
*DEPRECATED*
get a list of products from Shopify with a specific tag

### /sync-sftp-images
Sync Images on a SFTP to a S3 repository then syncs with Shopify products.

### /get-avoirs
Returns avoirs from Fastmag

### /publish-products-ready-to-sell
Publishes products on Shopify fulfilling specific conditions.

### /get-solde-pme/:id
Returns the remaining amount of a PME from Fastmag

### POST /job-application
Will send an email with attachments uploaded by an applicant to a job offer

## Services
### avoir
This package contains all calls associated with avoirs

### catalog
This package contains all calls associated with catalog

### customer
This package contains all calls associated with customer

### giftcard
This package contains all calls associated with giftcard

### inventory
This package contains all calls associated with inventory

### order
This package contains all calls associated with order

### pme
This package contains all calls associated with PME

### query
This services formats and encapsulates calls to Fastmag

## CRON
### services.syncDifferentialStocks()
Checks the stock movements from Fastmag every 2 minutes

### services.syncOrderStatuses()
Sync order statuses every hour at xh35 minutes (shipment preparation)

### services.syncOrderDeliveries()
Sync order statuses every hour at xh50 minutes (Chronopost)

### services.sendGiftcards(SHOP)
Sends the giftcards emails every 45'

### services.syncStocks()
Sync the stocks every hour at h:10, from 0:10 to 2:10 and 5:10 to 23:10

### services.syncPrices()
Sync the prices every hour at h:40, from 0:40 to 2:40 and 5:40 to 23:40

### services.syncSftpImages()
Check the Izac SFTP, transfer the new images to S3 and sync Shopify with the new images every 2 hours

### services.publishProductsReadyToSell()
Check products in DRAFT mode ready to be published on the store every day @21:45