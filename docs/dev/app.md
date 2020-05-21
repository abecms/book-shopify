
# App development

## Install shopify-app-cli (https://shopify.github.io/shopify-app-cli)

eval "$(curl -sS https://raw.githubusercontent.com/Shopify/shopify-app-cli/master/install.sh)"

you now have the cli tool ready to be used :
```
shopify help
```

# Create an app
```
shopify create node
```

Then answer the questions. It will then create a shopify app in your partner dashboard + create a node app.

# start the app
```
shopify serve
```

It will start a nodemon server + ngok and update your shopify app redirection URL with the right ngrok URL.

