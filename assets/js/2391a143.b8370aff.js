(self.webpackChunknewshopify=self.webpackChunknewshopify||[]).push([[686],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2975:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),l=["components"],i={},c="Target2Sell",u={unversionedId:"modules/target2sell",id:"modules/target2sell",isDocsHomePage:!1,title:"Target2Sell",description:"Introduction",source:"@site/docs/modules/target2sell.md",sourceDirName:"modules",slug:"/modules/target2sell",permalink:"/docs/modules/target2sell",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SystemPay",permalink:"/docs/modules/systempay"},next:{title:"Magento",permalink:"/docs/dev/magento"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Routes (/target2sell)",id:"routes-target2sell",children:[{value:"/catalog",id:"catalog",children:[]}]},{value:"Services",id:"services",children:[{value:"getcategories",id:"getcategories",children:[]},{value:"exportCatalog",id:"exportcatalog",children:[]}]}],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"target2sell"},"Target2Sell"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This module creates the full Shopify catalog in Target2Sell format and sends it"),(0,a.kt)("h2",{id:"routes-target2sell"},"Routes (/target2sell)"),(0,a.kt)("h3",{id:"catalog"},"/catalog"),(0,a.kt)("p",null,"Creates the Target2Sell catalog of products from Shopify and exposes the file on S3"),(0,a.kt)("h2",{id:"services"},"Services"),(0,a.kt)("h3",{id:"getcategories"},"getcategories"),(0,a.kt)("p",null,"Get all categories from Shopify"),(0,a.kt)("h3",{id:"exportcatalog"},"exportCatalog"),(0,a.kt)("p",null,"Exports the catalog to S3"))}d.isMDXComponent=!0}}]);