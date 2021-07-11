# Chronopost

## Introduction
This module tracks a Chronopost shipment and updates the Shopify order accordingly. It also exposes the relais points of Chronopost to the front.

## Routes (/chronopost)
### /track/:trackingId
tracks a trackingId on Chronopost

### /get-relais/:cp
returns all relais points associated with a specific postal code

## Services
### track
tracks a shipment through the Chronpost API

### getRelais
returns a list of chronopost "points relais" based on a postal code
