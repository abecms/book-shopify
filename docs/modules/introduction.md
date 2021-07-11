# Introduction

The applications used on Izac are based on the official NodeJS repository from Shopify improved with additional features open sourced here :
https://github.com/abecms/shopify-app-starter

In particular we've added these features:
- CRON
- A cache provider (memory based)
- Mail (AWS SES)
- S3
- Database (AWS dynamoDB)
- Shopify API (REST + GraphQL + Batch mode) managed with throttle to respect the API calls limitation

# Architecture
The default features of the server are located in /server
The NextJS and React pages exposed on the Shopify Admin are located in /pages
The additional modules for the store are located in /app

The server is hosted on AWS EC2 and monitored through PM2. The sync is based on Github actions and 2 branches coexist on Github:
- develop for developers and UAT
- master when the code is ready to be deployed