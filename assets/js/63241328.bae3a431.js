(self.webpackChunknewshopify=self.webpackChunknewshopify||[]).push([[325],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=i,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1549:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],l={title:"Configurarion",sidebar_label:"Bulk Account Inviter"},c="Bulk Account Inviter",u={unversionedId:"dev/customer-invitation",id:"dev/customer-invitation",isDocsHomePage:!1,title:"Configurarion",description:"L'application Bulk Account Inviter permet d'inviter les clients \xe0 activer leur compte. Cette proc\xe9dure est notamment utile dans le cas de la migration d'une autre plateforme vers Shopify et pour laquelle un import des comptes clients a \xe9t\xe9 effectu\xe9.",source:"@site/docs/dev/customer-invitation.md",sourceDirName:"dev",slug:"/dev/customer-invitation",permalink:"/docs/dev/customer-invitation",version:"current",frontMatter:{title:"Configurarion",sidebar_label:"Bulk Account Inviter"}},p=[],s={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bulk-account-inviter"},"Bulk Account Inviter"),(0,o.kt)("p",null,"L'application Bulk Account Inviter permet d'inviter les clients \xe0 activer leur compte. Cette proc\xe9dure est notamment utile dans le cas de la migration d'une autre plateforme vers Shopify et pour laquelle un import des comptes clients a \xe9t\xe9 effectu\xe9.\nDocumentation : ",(0,o.kt)("a",{parentName:"p",href:"https://help.shopify.com/fr/manual/apps/apps-by-shopify/bulk-account-inviter"},"https://help.shopify.com/fr/manual/apps/apps-by-shopify/bulk-account-inviter")),(0,o.kt)("p",null,"l'application Bulk Account Inviter est disponible uniquement avec les forfaits Shopify Plus. Elle doit donc \xeatre activ\xe9 par les \xe9quipes support Shopify (non disponible sur l'app store)"),(0,o.kt)("h1",{id:"mise-en-place"},"Mise en place"),(0,o.kt)("p",null,"Lors de l'import des comptes clients, "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pr\xe9voir l'ajout d'un tag Shopify (ex: compte importe), il permettra de les identifier."),(0,o.kt)("li",{parentName:"ul"},"Attention les comptent doivent \xeatre enregsitr\xe9s comme d\xe9sactiv\xe9s")),(0,o.kt)("p",null,"Une fois que l'import a \xe9t\xe9 effectu\xe9 "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"En BO aller dans Clients"),(0,o.kt)("li",{parentName:"ol"},"Filtrer les r\xe9sultats en selectionnant Marqu\xe9 avec = compte importe (le tag cr\xe9\xe9 \xe0 l'import)"),(0,o.kt)("li",{parentName:"ol"},"Enregsitrer la requ\xeate en lui donnant un nom (ex: Invitation clients import\xe9s)"),(0,o.kt)("li",{parentName:"ol"},"Aller dans Applications et choisir Bulk Account Inviter"),(0,o.kt)("li",{parentName:"ol"},"Dans la liste Customer group, s\xe9lectionner Invitation clients import\xe9s puis create email"),(0,o.kt)("li",{parentName:"ol"},"Remplir les champs et envoyer le mail")),(0,o.kt)("h1",{id:"template"},"Template"),(0,o.kt)("p",null,"Le template de la page d'activation de compte peut \xeatre personnalis\xe9. Il se trouve dans customers/activate_account.liquid\nR\xe9f\xe9rence : ",(0,o.kt)("a",{parentName:"p",href:"https://shopify.dev/docs/themes/files/customers-activate-account-liquid"},"https://shopify.dev/docs/themes/files/customers-activate-account-liquid")))}m.isMDXComponent=!0}}]);