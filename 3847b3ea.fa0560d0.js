(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(9),r=(n(0),n(156)),i={},l={id:"setup",title:"setup",description:"# How to create a store",source:"@site/docs/setup.md",permalink:"/docs/setup",sidebar:"docs",previous:{title:"introduction",permalink:"/docs/introduction"},next:{title:"useful-apps",permalink:"/docs/useful-apps"}},c=[{value:"Add Store",id:"add-store",children:[]},{value:"Add additional language to your store",id:"add-additional-language-to-your-store",children:[]},{value:"Create private apps",id:"create-private-apps",children:[]},{value:"Configure your DNS",id:"configure-your-dns",children:[]},{value:"Shopify Admin",id:"shopify-admin",children:[]},{value:"Multiple domains",id:"multiple-domains",children:[]},{value:"Spd record for sending emails from your custom domain.",id:"spd-record-for-sending-emails-from-your-custom-domain",children:[]}],p={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"how-to-create-a-store"},"How to create a store"),Object(r.b)("p",null," Login to your partner shopify account."),Object(r.b)("h2",{id:"add-store"},"Add Store"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"click on Add store"),Object(r.b)("li",{parentName:"ul"},"pick development Store"),Object(r.b)("li",{parentName:"ul"},"name of the store rule (clientnamestore)"),Object(r.b)("li",{parentName:"ul"},"Store Url - Automaticaly filled by shopify"),Object(r.b)("li",{parentName:"ul"},"define a password for the shop admin login"),Object(r.b)("li",{parentName:"ul"},"client adress"),Object(r.b)("li",{parentName:"ul"},"Store purpose - ",Object(r.b)("inlineCode",{parentName:"li"},"build a new store for a client"))),Object(r.b)("h1",{id:"how-to-add-staff-to-your-store"},"How to add staff to your store"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Login to the store with the previous credentials defined"),Object(r.b)("li",{parentName:"ul"},"Go to ",Object(r.b)("inlineCode",{parentName:"li"},"Settings")),Object(r.b)("li",{parentName:"ul"},"Click on ",Object(r.b)("inlineCode",{parentName:"li"},"Account")),Object(r.b)("li",{parentName:"ul"},"In ",Object(r.b)("inlineCode",{parentName:"li"},"Accounts and permissions")," - click on ",Object(r.b)("inlineCode",{parentName:"li"},"Add staff account")),Object(r.b)("li",{parentName:"ul"},"Fill ",Object(r.b)("inlineCode",{parentName:"li"},"firstname / last name and Email")," and click on ",Object(r.b)("inlineCode",{parentName:"li"},"invite"))),Object(r.b)("h1",{id:"change-the-default-language-of-your-store"},"Change the default language of your store"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For your published theme, tap the Actions drop-down menu and select Edit languages."),Object(r.b)("li",{parentName:"ul"},"Tap Change theme language:"),Object(r.b)("li",{parentName:"ul"},"Tap Language:"),Object(r.b)("li",{parentName:"ul"},"Tap Other languages...."),Object(r.b)("li",{parentName:"ul"},"Choose from the second and third drop-down menus as follows: ..."),Object(r.b)("li",{parentName:"ul"},"Tap Save."),Object(r.b)("li",{parentName:"ul"},"Using the language editor, enter translations for your theme text.")),Object(r.b)("h2",{id:"add-additional-language-to-your-store"},"Add additional language to your store"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to your site setting"),Object(r.b)("li",{parentName:"ul"},"languages"),Object(r.b)("li",{parentName:"ul"},"Translated languages")),Object(r.b)("h1",{id:"theme"},"Theme"),Object(r.b)("p",null,"To build you own theme you should have"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"a private app with api key and a password."),Object(r.b)("li",{parentName:"ul"},"themekit installed on your dev env.")),Object(r.b)("h2",{id:"create-private-apps"},"Create private apps"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Got to your Back office store - ",Object(r.b)("inlineCode",{parentName:"li"},"https://nameofyourstore.myshopify.com/admin")),Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("inlineCode",{parentName:"li"},"Manage private apps")),Object(r.b)("li",{parentName:"ul"},"Click on ",Object(r.b)("inlineCode",{parentName:"li"},"Create a new private app")),Object(r.b)("li",{parentName:"ul"},"Setup Api access"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"theme templates and theme assets")),Object(r.b)("li",{parentName:"ul"},"Pick ",Object(r.b)("inlineCode",{parentName:"li"},"Read and write")),Object(r.b)("li",{parentName:"ul"},"On Save ",Object(r.b)("inlineCode",{parentName:"li"},"Api key")," and ",Object(r.b)("inlineCode",{parentName:"li"},"Password")," will appear. Copy the password")),Object(r.b)("h1",{id:"development-environment"},"Development Environment"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Shopify uses jQuery and scss shopify is able to compile them from his servers.")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install Themekit on MacOs")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"brew tap shopify/shopify\nbrew install themekit\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"clone the project"),Object(r.b)("li",{parentName:"ol"},"run ",Object(r.b)("inlineCode",{parentName:"li"},"theme watch"))),Object(r.b)("h1",{id:"vscode-plugin"},"VSCode plugin"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Vscode Snippets : ",Object(r.b)("inlineCode",{parentName:"li"},"https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets"))),Object(r.b)("h1",{id:"add-custom-domain"},"Add custom domain"),Object(r.b)("h2",{id:"configure-your-dns"},"Configure your DNS"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Log in to the account that you have with your domain provider."),Object(r.b)("li",{parentName:"ol"},"Find your DNS settings. Look for your domain management area, DNS configuration, or similar."),Object(r.b)("li",{parentName:"ol"},"Your ",Object(r.b)("inlineCode",{parentName:"li"},"A")," record should point to Shopify's IP address, which is ",Object(r.b)("inlineCode",{parentName:"li"},"23.227.38.65")),Object(r.b)("li",{parentName:"ol"},"Your ",Object(r.b)("inlineCode",{parentName:"li"},"www")," CNAME record should point to ",Object(r.b)("inlineCode",{parentName:"li"},"shops.myshopify.com"))),Object(r.b)("p",null,"ie :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dns"}),"@     A     300   23.227.38.65\nwww CNAME   300   shops.myshopify.com.\n")),Object(r.b)("p",null,"It takes usually 5 mins to spread."),Object(r.b)("h2",{id:"shopify-admin"},"Shopify Admin"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"From your Shopify admin, go to Online Store > Domains."),Object(r.b)("li",{parentName:"ol"},"Click Connect existing domain."),Object(r.b)("li",{parentName:"ol"},"Enter the domain that you want to connect, such as example.com."),Object(r.b)("li",{parentName:"ol"},"Click Next."),Object(r.b)("li",{parentName:"ol"},"Click on Display instructions."),Object(r.b)("li",{parentName:"ol"},"Click on Verify")),Object(r.b)("h2",{id:"multiple-domains"},"Multiple domains"),Object(r.b)("p",null,"If you have multiple domains and you want to redirect all to one URL",Object(r.b)("br",{parentName:"p"}),"\n","ie: you have the example.com and example.fr and you want all to go to example.com"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"You have to configure ALL your domains dns with the previouses configuration"),Object(r.b)("li",{parentName:"ol"},"In Shopify Admin ALL domains must be connected and the primary domain must be example.com")),Object(r.b)("h2",{id:"spd-record-for-sending-emails-from-your-custom-domain"},"Spd record for sending emails from your custom domain."),Object(r.b)("p",null,"Find your domain's TXT record. This usually appears beside the CNAME record and MX record.\nAdd the following SPF record to your TXT record: v=spf1 include:shops.shopify.com ~all\nSave your changes."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dns"}),"@   TXT 300 v=spf1 include:shops.shopify.com ~all\n")))}b.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),s=a,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||r;return n?o.a.createElement(m,l({ref:t},p,{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);