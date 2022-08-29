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
* shopify cli installed on your dev env.

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

1. Install shopify-cli on MacOs
```
brew tap shopify/shopify
brew install shopify-cli
```
2. Initialize a new theme
```
shopify theme init
```
3. Auth with shopify-cli
```
shopify login --store my-store.myshopify.com
```
4. Develop my theme
- You have to be authorized to manage the theme from the store (add your as collborator) : https://my-store.myshopify.com/admin/settings/account
```
shopify theme serve
```
5. init git into the project


# VSCode plugin
- Vscode Snippets : `https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets`


# Add custom domain

## Configure your DNS

1. Log in to the account that you have with your domain provider.
1. Find your DNS settings. Look for your domain management area, DNS configuration, or similar.
1. Your `A` record should point to Shopify's IP address, which is `23.227.38.65`
1. Your `www` CNAME record should point to `shops.myshopify.com`

ie :
```dns
@	  A	    300	  23.227.38.65
www	CNAME	300	  shops.myshopify.com.
```

It takes usually 5 mins to spread.

## Shopify Admin

1. From your Shopify admin, go to Online Store > Domains.
1. Click Connect existing domain.
1. Enter the domain that you want to connect, such as example.com.
1. Click Next.
1. Click on Display instructions.
1. Click on Verify

## Multiple domains

If you have multiple domains and you want to redirect all to one URL  
ie: you have the example.com and example.fr and you want all to go to example.com

1. You have to configure ALL your domains dns with the previouses configuration
1. In Shopify Admin ALL domains must be connected and the primary domain must be example.com

## Spf record for sending emails from your custom domain.

Find your domain's TXT record.
This usually appears beside the CNAME record and MX record.
Add the following SPF record to your TXT record: v=spf1 include:shops.shopify.com ~all
Save your changes.

```dns
@ TXT 300 v=spf1 include:shops.shopify.com ~all
```
# Reorder Payment Gateways

- Allez dans Script Editor
- Créer un nouveau script :
    - Type `Payment gateways`
    - Puis Choisir `Reorder payment gateways`
- Coller le script ci-dessous en changeant l'ordre souhaité dans `DESIRED_GATEWAY_ORDER`

```
# ================================ Customizable Settings ================================
# ================================================================
# Reorder Gateways
#
# The order in which you would like your gateways to display
# ================================================================
DESIRED_GATEWAY_ORDER = [
  "systempay", "paypal"
]

# ================================ Script Code (do not edit) ================================
# ================================================================
# ReorderGatewaysCampaign
#
# Reorders gateways into the entered order
# ================================================================
class ReorderGatewaysCampaign
  def initialize(desired_order)
    @desired_order = desired_order.map { |item| item.downcase.strip }
  end

  def run(cart, payment_gateways)
    payment_gateways.sort_by! { |payment_gateway| @desired_order.index(payment_gateway.name.downcase.strip) || Float::INFINITY }
  end
end

CAMPAIGNS = [
  ReorderGatewaysCampaign.new(DESIRED_GATEWAY_ORDER),
]

CAMPAIGNS.each do |campaign|
  campaign.run(Input.cart, Input.payment_gateways)
end

Output.payment_gateways = Input.payment_gateways
```