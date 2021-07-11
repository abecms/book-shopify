(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{127:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),c=r(9),o=(r(0),r(165)),a={},i={id:"modules/alertstock",title:"alertstock",description:"# Alertstock",source:"@site/docs/modules/alertstock.md",permalink:"/docs/modules/alertstock",sidebar:"docs",previous:{title:"introduction",permalink:"/docs/modules/introduction"},next:{title:"chronopost",permalink:"/docs/modules/chronopost"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Routes (/alertstock)",id:"routes-alertstock",children:[{value:"/add-alertStock",id:"add-alertstock",children:[]},{value:"/get-alertStock-variant",id:"get-alertstock-variant",children:[]},{value:"/get-alertStock-customer",id:"get-alertstock-customer",children:[]},{value:"/delete-alertStock",id:"delete-alertstock",children:[]},{value:"/mail-subscribers",id:"mail-subscribers",children:[]}]},{value:"Services",id:"services",children:[{value:"addAlert",id:"addalert",children:[]},{value:"deleteAlert",id:"deletealert",children:[]},{value:"mailSubscribers",id:"mailsubscribers",children:[]},{value:"getSubscribers",id:"getsubscribers",children:[]},{value:"getProducts",id:"getproducts",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"alertstock"},"Alertstock"),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"This module offers the possibility to users to subscribe to an email alert when a product is back in stock.\nThe alertstock information is persisted in dynamoDB."),Object(o.b)("h2",{id:"routes-alertstock"},"Routes (/alertstock)"),Object(o.b)("h3",{id:"add-alertstock"},"/add-alertStock"),Object(o.b)("p",null,"Add an alert for a product variant and a customer ID."),Object(o.b)("h3",{id:"get-alertstock-variant"},"/get-alertStock-variant"),Object(o.b)("p",null,"Returns subscribers to an alert for the product variant"),Object(o.b)("h3",{id:"get-alertstock-customer"},"/get-alertStock-customer"),Object(o.b)("p",null,"Returns the products variants subscribed by the customer"),Object(o.b)("h3",{id:"delete-alertstock"},"/delete-alertStock"),Object(o.b)("p",null,"Deletes a specific alert (product variant and customer)"),Object(o.b)("h3",{id:"mail-subscribers"},"/mail-subscribers"),Object(o.b)("p",null,"Sends a mail to subscribers when a product is back in stock."),Object(o.b)("h2",{id:"services"},"Services"),Object(o.b)("h3",{id:"addalert"},"addAlert"),Object(o.b)("p",null,"Adds an alert for a product variant and customer"),Object(o.b)("h3",{id:"deletealert"},"deleteAlert"),Object(o.b)("p",null,"Deletes an alert (product variant + customer)"),Object(o.b)("h3",{id:"mailsubscribers"},"mailSubscribers"),Object(o.b)("p",null,"Sens a mail to all subscribers of a product alert"),Object(o.b)("h3",{id:"getsubscribers"},"getSubscribers"),Object(o.b)("p",null,"Get the list of all subscribzrs to a product alert"),Object(o.b)("h3",{id:"getproducts"},"getProducts"),Object(o.b)("p",null,"Get the list of product alerts subscribed by a customer"))}u.isMDXComponent=!0},165:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),u=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},d=function(e){var t=u(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,m=d["".concat(a,".").concat(p)]||d[p]||b[p]||o;return r?c.a.createElement(m,i({ref:t},s,{components:r})):c.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);