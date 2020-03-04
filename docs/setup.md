# How to create a store

 Login to your partner shopify account.

## Add Store

* click on Add store
* pick development Store
* name of the store rule (clientnamestore)
* Store Url - Automaticaly filled by shopify
* define a password for the shop admin login
* client adress
* Store purpose - `build a new store for a client`

# How to add staff to your store

* Login to the store with the previous credentials defined
* Go to `Settings`
* Click on `Account`
* In `Accounts and permissions` - click on `Add staff account`
* Fill `firstname / last name and Email` and click on `invite`

# Change the default language of your store

* For your published theme, tap the Actions drop-down menu and select Edit languages.
* Tap Change theme language:
* Tap Language:
* Tap Other languages....
* Choose from the second and third drop-down menus as follows: ...
* Tap Save.
* Using the language editor, enter translations for your theme text.

## Add additional language to your store

* Go to your site setting
* languages
* Translated languages

# Theme

To build you own theme you should have
* a private app with api key and a password.
* themekit installed on your dev env.

## Create private apps

* Got to your Back office store - `https://nameofyourstore.myshopify.com/admin`
* Click `Manage private apps`
* Click on `Create a new private app`
* Setup Api access
*  `theme templates and theme assets`
* Pick `Read and write`
* On Save `Api key` and `Password` will appear. Copy the password


# Development Environment
- Shopify uses jQuery and scss shopify is able to compile them from his servers.

1. Install Themekit on MacOs
```
brew tap shopify/shopify
brew install themekit
```
2. clone the project
3. run ```theme watch```

# VSCode plugin
- Vscode Snippets : `https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets`