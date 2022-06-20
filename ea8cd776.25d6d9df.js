(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(165)),i={},c={id:"modules/systempay",title:"systempay",description:"# SystemPay",source:"@site/docs/modules/systempay.md",permalink:"/docs/modules/systempay",sidebar:"docs",previous:{title:"socloz",permalink:"/docs/modules/socloz"},next:{title:"target2sell",permalink:"/docs/modules/target2sell"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Routes (/systempay)",id:"routes-systempay",children:[{value:"/payment-mean/:uuid",id:"payment-meanuuid",children:[]}]},{value:"Services",id:"services",children:[{value:"getTransaction",id:"gettransaction",children:[]},{value:"getPaymentMean",id:"getpaymentmean",children:[]}]}],s={rightToc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"systempay"},"SystemPay"),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"This module will call SystemPay after every payment to get The SystemPay ID (not available in the Shopify order)"),Object(o.b)("h2",{id:"routes-systempay"},"Routes (/systempay)"),Object(o.b)("h3",{id:"payment-meanuuid"},"/payment-mean/:uuid"),Object(o.b)("p",null,"get the UID of the order and returns the payment mean used to pay."),Object(o.b)("h2",{id:"services"},"Services"),Object(o.b)("h3",{id:"gettransaction"},"getTransaction"),Object(o.b)("p",null,"Get the systempay transaction linked to the order paid in Shopify."),Object(o.b)("h3",{id:"getpaymentmean"},"getPaymentMean"),Object(o.b)("p",null,"Returns the payment mean used to pay"))}l.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||y[d]||o;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);