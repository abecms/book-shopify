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

# Theme

To build you own theme you should have
* a private app with api key and a password.
* themekit installed on your dev env.

## Themekit

### Install on MacOs
```
brew tap shopify/shopify
brew install themekit
```

## Create private apps

* Got to your Back office store - `https://nameofyourstore.myshopify.com/admin`
* Click `Manage private apps`
* Click on `Create a new private app`
* Setup Api access
*  `theme templates and theme assets`
* Pick `Read and write`
* On Save `Api key` and `Password` will appear. Copy the password


## Dev Env
* clone the project
* run `theme watch`



## Stickers
Depuis juin 2019, Shopify a généralisé le concept de Section (l'équivalent de nos blocs Stickers). La section permet de créer un template par assemblage de sections.
Dans le Back-office, l'utilisateur pourra ajouter/déplacer/configurer des sections.

## Développement du thème
- Installer les snippets vscode : https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets
Shopify utilise par défaut jQuery et les scss qu'il est capable de compiler depuis ses serveurs.

