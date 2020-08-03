# Good to know about shopify

- Not suited for brands that wish to have special offers
- Native Shopify supports very basic features (catalog features, product variables, promo features...) 
- Most features have a cost, all the modules have year/month plans.
- Either you buy them, either you dev them (highly expensive) 
- Cannot do custom dev on the BO
- You need to have activated the shopify account in order to use apps like transporter, script editor and other
- No shopify assistance unless the websote is already activated
- Checkout custom : only possible once shopify + is installed
- Rigid checkout : the checkout is not customizable easily, you must apply heavy overrides to it
- Script Editor : App free on Shopify + lets you code special offers. But the client is not able to edit them if he doens not know about coding
- Products : Limited number of variables, if needed to add more yu have to go through apps (like custom fields). 
- Customers cannot edit their own personal info, to do this you have either to dev a custom app or use an existing app do to so. 
- Customer info : no possibility of adding specific fields (like date of birth), only possible via third party apps (like custom fields) 
- Email notifications : Native Emails (notifications) are not translatable 
- No possiblity of addign cc recipents on email notifications
- Back end product interface needs to be improved (pagination, number of products is not displayed, cannot choose the variables of the main product table for filtering... no config available) 
- No native filter system

## Not suited for : 
- Complex websites or brands that might need specific promo offers, special gift card systems
- Multilingual websites : native multilingual shopify system is based on hard coded non evolving catalogs and contents. In order to translate the website you might need an app (Weglot, Languify...) 

# Apps

## Script Editor 
- Script editor is a free Shopify+ app that lets you create special scripts for specific promo codes and discounts. 
- It can be used only once Shopify + is up and running

## Transporter
- Transporter is the Shopify+ app that lets you migrate customers, orders and many more from Magento to Shopify. 
- It can be used only once Shopify + is up and running

## Launchpad
- Launchpad is a free Shopify+ app that lets you program events, prepublish special promo made with scrit editor, even switch themes for special content publication.
- It can be used only once Shopify + is up and running

## Bulk Account Inviter
- Bulk Account Inviter is a free Shopify+ app that lets you run bulk invitations via email for all the existing customers after a website migration. For example if you refurb an old magento website you'll need this app in order to invite old customers to recreate their passwords. 
- It can be used only once Shopify + is up and running

## Custom fields by Bonify
- Purpose : If you want to customize your products, pages, catalog etc with extra fields (ean, erp fields...) that are not available in the back office you'll need this App
- Pricing : Free, LITE (7$/month), PREMIUM (19$/month - not available for Shopify+), PLUS (29$/month). 
- Link : https://customfields.bonify.io/

## Customer account fields
- Purpose : Use specific customer fields other thant Shopify default. Lets users edit their own information. 
- Pricing : Free, LITE (9$/month), PREMIUM (19$/month - not available for Shopify+), PLUS (29$/month).
- Link : https://apps.shopify.com/customer-account-fields

## Customer profile editor
- Purpose : Lets customers edit their password, email, phone, name and last name. 
- Pricing : Free
- Link : https://apps.shopify.com/customer-account-fields

## CustomerMeta, Wishlist compare
- Purpose : Lets user build their own wishlists. Customizable app. 
- Pricing : Free
- Link : https://apps.shopify.com/customer-meta-wishlist-compare-list-js-api-for-customer-metafields

## Excelify
- Purpose : Lets admins import/export products, orders, collections (custom and automated), clients, orders, all via excel files. 
- Pricing : Free plan available, from 20$/month to 200$/month
- Link : https://apps.shopify.com/excel-export-import

## Instafeed 
- Purpose : Instagram wall
- Pricing : Free plan available for 3 posts. 
- Link : https://apps.shopify.com/instafeed

## PDF Invoice, Order printer 
- Purpose : Specific Invoices, Order prints, packs
- Pricing : Free
- Link : https://apps.shopify.com/avada-pdf-invoice

## Social Login by NDAPPS 
- Purpose : Let users sign up/sign in using Facebook, Google, and other social networks. Customizable. Only problem is that it fetches the name+surname in the same field. 
- Pricing : 3$/month (for 3 social networks), 7$/month for illimited networks
- Link : https://apps.shopify.com/social-login-11

## Store Locator by Secomapp
- Purpose : Prebuilt Store locator
- Pros : Quickly create a store locator, you can either create stores manually or in bulk import, higly customizable
- Cons : Not translatable, does not create store subpages automatically. Geolocation is not 100% correct. 
- Pricing : Free plan available (1 store), from 9$/month to 40$/month (depending on the number of stores required)
- Link : https://apps.shopify.com/store-locator-4

## Collection Merchandiser
- Purpose : Lets admin visualize and organize their collections based on stocks, pricing etc... 
- Pricing : Free
- Link : https://apps.shopify.com/stock-app

## Weglot
- Purpose : Useful for translating the website, contents are translated once they have been displayed on one screen. 
- Pros : Easily translate the totality of the website, a user-friendly back-end, avoids admins from contributing the whole contents
- Cons : Does not let you have "www.storename.com/en" urls. Does not translate checkout, mails, and content form third party apps. Word count : Weglot is based on word count, you must put translation exceptions in order to limit it.   
- Pricing : Free trial, from 100$/year to 5000$/year (and more)
- Link : https://apps.shopify.com/weglot

### Weglot good to know : 
- url/domains : weglot does not tranlaste url, you cannot have /en on url
- but it does support subdomains (en.site-name.com) 
- images : weglot lets switch media when language is changed, but it won’t take into account background images 
- Weglot Translation exclusions https://support.weglot.com/article/144-how-to-definitely-remove-a-translation and https://support.weglot.com/article/95-how-to-exclude-urls-blocks-words-from-translation
- Weglot only translates order confirmtion mail, other mails are not supported : https://fr.support.weglot.com/article/89-shopify-translate-shopify-email-notifications#:~:text=Comme%20les%20e%2Dmails%20ne,la%20traduction%20des%20e%2Dmails.
- Checkout : https://support.weglot.com/article/93-shopify---edition---how-to-edit-the-shopify-checkout-page-translations
- Customer emails : For customer notifications, firstly, you have to add the customer_tag: true option to the tag (weglot_switcher.liquid) without forgetting the comma after api_key:

<!--Start Weglot Script-->
<script src="//cdn.weglot.com/weglot.min.js"></script>
<script id="has-script-tags">
  Weglot.initialize({
    api_key: "",
    customer_tag: true
  });
</script>
<!--End Weglot Script-->


You can find it in your weglot_switcher.liquid file in your theme code snippet.

Then you can add the following code for the customer notifications:
{% assign language = customer.tags | join: '' | split: '#wg' %} 
{% case language[1] %} 
{% when 'en' %}
Customer account confirmation
{% else %} 
Confirmation de création de compte
{% endcase %}





