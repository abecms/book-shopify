(self.webpackChunknewshopify=self.webpackChunknewshopify||[]).push([[784],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||c;return r?o.createElement(m,i(i({ref:t},s),{},{components:r})):o.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var u=2;u<c;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8181:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var o=r(2122),n=r(9756),c=(r(7294),r(3905)),i=["components"],a={},l="SoCloz",u={unversionedId:"modules/socloz",id:"modules/socloz",isDocsHomePage:!1,title:"SoCloz",description:"Introduction",source:"@site/docs/modules/socloz.md",sourceDirName:"modules",slug:"/modules/socloz",permalink:"/docs/modules/socloz",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Fastmag",permalink:"/docs/modules/fastmag"},next:{title:"SystemPay",permalink:"/docs/modules/systempay"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Routes (/socloz)",id:"routes-socloz",children:[{value:"/catalog",id:"catalog",children:[]}]},{value:"Services",id:"services",children:[{value:"exportCatalog",id:"exportcatalog",children:[]}]}],p={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"socloz"},"SoCloz"),(0,c.kt)("h2",{id:"introduction"},"Introduction"),(0,c.kt)("p",null,"This module creates the full Shopify catalog in SoCloz format and sends it"),(0,c.kt)("h2",{id:"routes-socloz"},"Routes (/socloz)"),(0,c.kt)("h3",{id:"catalog"},"/catalog"),(0,c.kt)("p",null,"Creates the SoCloz catalog of products from Shopify and exposes the file on S3"),(0,c.kt)("h2",{id:"services"},"Services"),(0,c.kt)("h3",{id:"exportcatalog"},"exportCatalog"),(0,c.kt)("p",null,"Exports the catalog to S3"))}d.isMDXComponent=!0}}]);