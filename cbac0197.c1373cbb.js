(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{156:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return n})),s.d(t,"metadata",(function(){return a})),s.d(t,"rightToc",(function(){return o})),s.d(t,"default",(function(){return l}));var r=s(1),c=s(9),i=(s(0),s(165)),n={},a={id:"modules/fastmag",title:"fastmag",description:"# Fastmag",source:"@site/docs/modules/fastmag.md",permalink:"/docs/modules/fastmag",sidebar:"docs",previous:{title:"cms",permalink:"/docs/modules/cms"},next:{title:"socloz",permalink:"/docs/modules/socloz"}},o=[{value:"Introduction",id:"introduction",children:[]},{value:"Routes (/fastmag)",id:"routes-fastmag",children:[{value:"/ping",id:"ping",children:[]},{value:"/settings",id:"settings",children:[]},{value:"POST /settings",id:"post-settings",children:[]},{value:"/promo",id:"promo",children:[]},{value:"/promo/:tag",id:"promotag",children:[]},{value:"/check-giftcard",id:"check-giftcard",children:[]},{value:"/sync-order-statuses",id:"sync-order-statuses",children:[]},{value:"/update-tracking/:orderId",id:"update-trackingorderid",children:[]},{value:"/sync-order-deliveries",id:"sync-order-deliveries",children:[]},{value:"/fetch_tracking_numbers.json",id:"fetch_tracking_numbersjson",children:[]},{value:"/fetch_stock.json",id:"fetch_stockjson",children:[]},{value:"/sync-stock",id:"sync-stock",children:[]},{value:"/sync-prices",id:"sync-prices",children:[]},{value:"/sync-differential-stock",id:"sync-differential-stock",children:[]},{value:"/products-by-season",id:"products-by-season",children:[]},{value:"/fastmag-to-shopify",id:"fastmag-to-shopify",children:[]},{value:"/sync-products-by-season",id:"sync-products-by-season",children:[]},{value:"/get-inventory-prices",id:"get-inventory-prices",children:[]},{value:"/sync-inventory-fastmagid",id:"sync-inventory-fastmagid",children:[]},{value:"/post-order",id:"post-order",children:[]},{value:"/get-orders",id:"get-orders",children:[]},{value:"/get-all-orders",id:"get-all-orders",children:[]},{value:"/mail-giftcard",id:"mail-giftcard",children:[]},{value:"/post-customer",id:"post-customer",children:[]},{value:"/get-products",id:"get-products",children:[]},{value:"/get-productsBySeason",id:"get-productsbyseason",children:[]},{value:"/get-order",id:"get-order",children:[]},{value:"/get-orderByShopifyIds",id:"get-orderbyshopifyids",children:[]},{value:"/get-customer",id:"get-customer",children:[]},{value:"/get-giftcard",id:"get-giftcard",children:[]},{value:"/get-giftcards",id:"get-giftcards",children:[]},{value:"/get-pme",id:"get-pme",children:[]},{value:"/get-pmes",id:"get-pmes",children:[]},{value:"/get-pmes-mag",id:"get-pmes-mag",children:[]},{value:"/get-pmes-web",id:"get-pmes-web",children:[]},{value:"/get-fullinventory",id:"get-fullinventory",children:[]},{value:"/get-inventory",id:"get-inventory",children:[]},{value:"/get-product",id:"get-product",children:[]},{value:"/get-product-by-gencod/:gencod",id:"get-product-by-gencodgencod",children:[]},{value:"/post-transfer-stock",id:"post-transfer-stock",children:[]},{value:"/post-giftcard",id:"post-giftcard",children:[]},{value:"/get-product-by-tag",id:"get-product-by-tag",children:[]},{value:"/sync-sftp-images",id:"sync-sftp-images",children:[]},{value:"/get-avoirs",id:"get-avoirs",children:[]},{value:"/publish-products-ready-to-sell",id:"publish-products-ready-to-sell",children:[]},{value:"/get-solde-pme/:id",id:"get-solde-pmeid",children:[]},{value:"POST /job-application",id:"post-job-application",children:[]}]},{value:"Services",id:"services",children:[{value:"avoir",id:"avoir",children:[]},{value:"catalog",id:"catalog",children:[]},{value:"customer",id:"customer",children:[]},{value:"giftcard",id:"giftcard",children:[]},{value:"inventory",id:"inventory",children:[]},{value:"order",id:"order",children:[]},{value:"pme",id:"pme",children:[]},{value:"query",id:"query",children:[]}]},{value:"CRON",id:"cron",children:[{value:"services.syncDifferentialStocks()",id:"servicessyncdifferentialstocks",children:[]},{value:"services.syncOrderStatuses()",id:"servicessyncorderstatuses",children:[]},{value:"services.syncOrderDeliveries()",id:"servicessyncorderdeliveries",children:[]},{value:"services.sendGiftcards(SHOP)",id:"servicessendgiftcardsshop",children:[]},{value:"services.syncStocks()",id:"servicessyncstocks",children:[]},{value:"services.syncPrices()",id:"servicessyncprices",children:[]},{value:"services.syncSftpImages()",id:"servicessyncsftpimages",children:[]},{value:"services.publishProductsReadyToSell()",id:"servicespublishproductsreadytosell",children:[]}]}],d={rightToc:o};function l(e){var t=e.components,s=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"fastmag"},"Fastmag"),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"This module is a complete module synchronizing Fastmag with Shopify."),Object(i.b)("h2",{id:"routes-fastmag"},"Routes (/fastmag)"),Object(i.b)("h3",{id:"ping"},"/ping"),Object(i.b)("p",null,"returns a success JSON"),Object(i.b)("h3",{id:"settings"},"/settings"),Object(i.b)("p",null,"returns the fastmag config"),Object(i.b)("h3",{id:"post-settings"},"POST /settings"),Object(i.b)("p",null,"Updates the fastmag config"),Object(i.b)("h3",{id:"promo"},"/promo"),Object(i.b)("p",null,"Will create promo (percentage tag) for a specific list of products or collections"),Object(i.b)("h3",{id:"promotag"},"/promo/:tag"),Object(i.b)("p",null,"Will remove promo tags from specific products or collections"),Object(i.b)("h3",{id:"check-giftcard"},"/check-giftcard"),Object(i.b)("p",null,"Will check if a Fastmag giftcard exists and is activated and will synchronize it with Shopify if ok."),Object(i.b)("h3",{id:"sync-order-statuses"},"/sync-order-statuses"),Object(i.b)("p",null,"Synchronizes the order statuses by getting all unshipped orders from Shopify and looking at the statuses in Fastmag. If the status has changed, the order in Shopify is updated + get the tracking id when status is 300 or 305."),Object(i.b)("p",null,"Async call : I don't wait for an answer to send the browser's response"),Object(i.b)("h3",{id:"update-trackingorderid"},"/update-tracking/:orderId"),Object(i.b)("p",null,"Will check on TNT if a specific order's tracking number has evolved and updates SHopify"),Object(i.b)("h3",{id:"sync-order-deliveries"},"/sync-order-deliveries"),Object(i.b)("p",null,"Synchronizes the order delivery status by getting all shipped orders from Shopify and looking at the statuses in Chronopost. If the status has changed, the order\nin Shopify is updated.\nAsync call : I don't wait for an answer to send the browser's response"),Object(i.b)("h3",{id:"fetch_tracking_numbersjson"},"/fetch_tracking_numbers.json"),Object(i.b)("p",null,"This route is called by Shopify (almost hourly).\nSync specific orders with tracking numbers from Fastmag"),Object(i.b)("h3",{id:"fetch_stockjson"},"/fetch_stock.json"),Object(i.b)("p",null,"Fulfillment service endpoint called by Shopify every hour for a full stock update and called at every variant update for a single variant's stock update"),Object(i.b)("h3",{id:"sync-stock"},"/sync-stock"),Object(i.b)("p",null,"Synchronizes asynchronously the stock from Fastmag to Shopify. The stock is calculated based on 2 different stocks in Fastmag. We use the bulk inventory update to speed things up"),Object(i.b)("h3",{id:"sync-prices"},"/sync-prices"),Object(i.b)("p",null,"Synchronizes asynchronously the prices from Fastmag to Shopify. It requests the tables products and prixremisetc to calculate the final price and the original price (taking into account datedebut and datefin)"),Object(i.b)("h3",{id:"sync-differential-stock"},"/sync-differential-stock"),Object(i.b)("p",null,"Synchronize stocks updated in Fastmag since the last synchronization. We use the last_modified date from fastmag and keep the last call in dynamodb"),Object(i.b)("h3",{id:"products-by-season"},"/products-by-season"),Object(i.b)("p",null,"Returns Fastmag products for a specific season"),Object(i.b)("h3",{id:"fastmag-to-shopify"},"/fastmag-to-shopify"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"DEPRECATED* Asynchronously creates or updates products of a specific season from Fastmag to Shopify")),Object(i.b)("h3",{id:"sync-products-by-season"},"/sync-products-by-season"),Object(i.b)("p",null,"Asynchronously creates or updates products of a specific season from Fastmag to Shopify"),Object(i.b)("h3",{id:"get-inventory-prices"},"/get-inventory-prices"),Object(i.b)("p",null,"Returns the list of stock and prices from Fastmag"),Object(i.b)("h3",{id:"sync-inventory-fastmagid"},"/sync-inventory-fastmagid"),Object(i.b)("p",null,"Checks that the FastmagID exists on Shopify products and updates them if necessary (used during the first import)"),Object(i.b)("h3",{id:"post-order"},"/post-order"),Object(i.b)("p",null,"Creates an order in Fastmag from Shopify."),Object(i.b)("h3",{id:"get-orders"},"/get-orders"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"DEPRECATED")),Object(i.b)("h3",{id:"get-all-orders"},"/get-all-orders"),Object(i.b)("p",null,"Returns all orders from fastmag"),Object(i.b)("h3",{id:"mail-giftcard"},"/mail-giftcard"),Object(i.b)("p",null,"Searches a giftcard in DynamoDB and if found, plans a repost of the mail (in case the customer has not received the first one)"),Object(i.b)("h3",{id:"post-customer"},"/post-customer"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"DEPRECATED")),Object(i.b)("h3",{id:"get-products"},"/get-products"),Object(i.b)("p",null,"Returns all products from Fastmag"),Object(i.b)("h3",{id:"get-productsbyseason"},"/get-productsBySeason"),Object(i.b)("p",null,"Returns all products of a particular season from Fastmag."),Object(i.b)("h3",{id:"get-order"},"/get-order"),Object(i.b)("p",null,"Returns a specific order from fastmag"),Object(i.b)("h3",{id:"get-orderbyshopifyids"},"/get-orderByShopifyIds"),Object(i.b)("p",null,"Returns a specific order from fastmag based on a shopify order's iD"),Object(i.b)("h3",{id:"get-customer"},"/get-customer"),Object(i.b)("p",null,"Searches a customer in Fastmag from its email"),Object(i.b)("h3",{id:"get-giftcard"},"/get-giftcard"),Object(i.b)("p",null,"Searches a Giftcard in Fastmag based on its fastmag ID"),Object(i.b)("h3",{id:"get-giftcards"},"/get-giftcards"),Object(i.b)("p",null,"Returns all giftcards from Fastmag"),Object(i.b)("h3",{id:"get-pme"},"/get-pme"),Object(i.b)("p",null,'Returns a "porte-monnaie-\xe9lectronique" (PME) from Fastmag based on its code'),Object(i.b)("h3",{id:"get-pmes"},"/get-pmes"),Object(i.b)("p",null,"returns a list of PME's from fastmag"),Object(i.b)("h3",{id:"get-pmes-mag"},"/get-pmes-mag"),Object(i.b)("p",null,"returns a list of PME's delivered in physical stores from fastmag"),Object(i.b)("h3",{id:"get-pmes-web"},"/get-pmes-web"),Object(i.b)("p",null,"returns a list of PME's delivered in WEB stores from fastmag"),Object(i.b)("h3",{id:"get-fullinventory"},"/get-fullinventory"),Object(i.b)("p",null,"Returns the full stock of Fastmag"),Object(i.b)("h3",{id:"get-inventory"},"/get-inventory"),Object(i.b)("p",null,"Returns a specific stock for a SKU"),Object(i.b)("h3",{id:"get-product"},"/get-product"),Object(i.b)("p",null,"Returns a product from Fastmag based on its SKU"),Object(i.b)("h3",{id:"get-product-by-gencodgencod"},"/get-product-by-gencod/:gencod"),Object(i.b)("p",null,"Returns a product from Fastmag based on its GENCOD"),Object(i.b)("h3",{id:"post-transfer-stock"},"/post-transfer-stock"),Object(i.b)("p",null,"Transfers stocks of an order beetween web and general stock in Fastmag"),Object(i.b)("h3",{id:"post-giftcard"},"/post-giftcard"),Object(i.b)("p",null,"Post a mail to inform the consignee's of a giftcard"),Object(i.b)("h3",{id:"get-product-by-tag"},"/get-product-by-tag"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"DEPRECATED"),"\nget a list of products from Shopify with a specific tag"),Object(i.b)("h3",{id:"sync-sftp-images"},"/sync-sftp-images"),Object(i.b)("p",null,"Sync Images on a SFTP to a S3 repository then syncs with Shopify products."),Object(i.b)("h3",{id:"get-avoirs"},"/get-avoirs"),Object(i.b)("p",null,"Returns avoirs from Fastmag"),Object(i.b)("h3",{id:"publish-products-ready-to-sell"},"/publish-products-ready-to-sell"),Object(i.b)("p",null,"Publishes products on Shopify fulfilling specific conditions."),Object(i.b)("h3",{id:"get-solde-pmeid"},"/get-solde-pme/:id"),Object(i.b)("p",null,"Returns the remaining amount of a PME from Fastmag"),Object(i.b)("h3",{id:"post-job-application"},"POST /job-application"),Object(i.b)("p",null,"Will send an email with attachments uploaded by an applicant to a job offer"),Object(i.b)("h2",{id:"services"},"Services"),Object(i.b)("h3",{id:"avoir"},"avoir"),Object(i.b)("p",null,"This package contains all calls associated with avoirs"),Object(i.b)("h3",{id:"catalog"},"catalog"),Object(i.b)("p",null,"This package contains all calls associated with catalog"),Object(i.b)("h3",{id:"customer"},"customer"),Object(i.b)("p",null,"This package contains all calls associated with customer"),Object(i.b)("h3",{id:"giftcard"},"giftcard"),Object(i.b)("p",null,"This package contains all calls associated with giftcard"),Object(i.b)("h3",{id:"inventory"},"inventory"),Object(i.b)("p",null,"This package contains all calls associated with inventory"),Object(i.b)("h3",{id:"order"},"order"),Object(i.b)("p",null,"This package contains all calls associated with order"),Object(i.b)("h3",{id:"pme"},"pme"),Object(i.b)("p",null,"This package contains all calls associated with PME"),Object(i.b)("h3",{id:"query"},"query"),Object(i.b)("p",null,"This services formats and encapsulates calls to Fastmag"),Object(i.b)("h2",{id:"cron"},"CRON"),Object(i.b)("h3",{id:"servicessyncdifferentialstocks"},"services.syncDifferentialStocks()"),Object(i.b)("p",null,"Checks the stock movements from Fastmag every 2 minutes"),Object(i.b)("h3",{id:"servicessyncorderstatuses"},"services.syncOrderStatuses()"),Object(i.b)("p",null,"Sync order statuses every hour at xh35 minutes (shipment preparation)"),Object(i.b)("h3",{id:"servicessyncorderdeliveries"},"services.syncOrderDeliveries()"),Object(i.b)("p",null,"Sync order statuses every hour at xh50 minutes (Chronopost)"),Object(i.b)("h3",{id:"servicessendgiftcardsshop"},"services.sendGiftcards(SHOP)"),Object(i.b)("p",null,"Sends the giftcards emails every 45'"),Object(i.b)("h3",{id:"servicessyncstocks"},"services.syncStocks()"),Object(i.b)("p",null,"Sync the stocks every hour at h:10, from 0:10 to 2:10 and 5:10 to 23:10"),Object(i.b)("h3",{id:"servicessyncprices"},"services.syncPrices()"),Object(i.b)("p",null,"Sync the prices every hour at h:40, from 0:40 to 2:40 and 5:40 to 23:40"),Object(i.b)("h3",{id:"servicessyncsftpimages"},"services.syncSftpImages()"),Object(i.b)("p",null,"Check the Izac SFTP, transfer the new images to S3 and sync Shopify with the new images every 2 hours"),Object(i.b)("h3",{id:"servicespublishproductsreadytosell"},"services.publishProductsReadyToSell()"),Object(i.b)("p",null,"Check products in DRAFT mode ready to be published on the store every day @21:45"))}l.isMDXComponent=!0},165:function(e,t,s){"use strict";s.d(t,"a",(function(){return u})),s.d(t,"b",(function(){return h}));var r=s(0),c=s.n(r);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,r,c=function(e,t){if(null==e)return{};var s,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(c[s]=e[s]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(c[s]=e[s])}return c}var d=c.a.createContext({}),l=function(e){var t=c.a.useContext(d),s=t;return e&&(s="function"==typeof e?e(t):a({},t,{},e)),s},u=function(e){var t=l(e.components);return c.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var s=e.components,r=e.mdxType,i=e.originalType,n=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(s),b=r,h=u["".concat(n,".").concat(b)]||u[b]||p[b]||i;return s?c.a.createElement(h,a({ref:t},d,{components:s})):c.a.createElement(h,a({ref:t},d))}));function h(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=s.length,n=new Array(i);n[0]=b;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,n[1]=a;for(var d=2;d<i;d++)n[d]=s[d];return c.a.createElement.apply(null,n)}return c.a.createElement.apply(null,s)}b.displayName="MDXCreateElement"}}]);