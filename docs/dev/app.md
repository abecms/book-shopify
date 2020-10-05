
# App development
## Install shopify-app-cli (https://shopify.github.io/shopify-app-cli)
### Install
eval "$(curl -sS https://raw.githubusercontent.com/Shopify/shopify-app-cli/master/install.sh)"

you now have the cli tool ready to be used :
```
shopify help
```

### Create an app
```
shopify create node
```

Then answer the questions. It will then create a shopify app in your partner dashboard + create a node app.

### start the app
```
shopify serve
```

It will start a nodemon server + ngrok and update your shopify app redirection URL with the right ngrok URL.

## Install the shopify-app-starter from livingcolor
https://github.com/abecms/shopify-app-starter
The starter is far richer and you'll be ready to code :
- CRON
- Mail (AWS SES)
- S3
- Database (AWS dynamoDB)
- Shopify API (REST + GraphQL)

### Install
Follow the README
