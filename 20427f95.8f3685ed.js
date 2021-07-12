(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(9),a=(r(0),r(165)),c={},i={id:"modules/introduction",title:"introduction",description:"# Introduction",source:"@site/docs/modules/introduction.md",permalink:"/docs/modules/introduction",sidebar:"docs",previous:{title:"Import CSV",permalink:"/docs/dev/customer-import"},next:{title:"alertstock",permalink:"/docs/modules/alertstock"}},l=[],p={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"The applications used on Izac are based on the official NodeJS repository from Shopify improved with additional features open sourced here :\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/abecms/shopify-app-starter"}),"https://github.com/abecms/shopify-app-starter")),Object(a.b)("p",null,"In particular we've added these features:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CRON"),Object(a.b)("li",{parentName:"ul"},"A cache provider (memory based)"),Object(a.b)("li",{parentName:"ul"},"Mail (AWS SES)"),Object(a.b)("li",{parentName:"ul"},"S3"),Object(a.b)("li",{parentName:"ul"},"Database (AWS dynamoDB)"),Object(a.b)("li",{parentName:"ul"},"Shopify API (REST + GraphQL + Batch mode) managed with throttle to respect the API calls limitation")),Object(a.b)("h1",{id:"architecture"},"Architecture"),Object(a.b)("p",null,"The default features of the server are located in /server\nThe NextJS and React pages exposed on the Shopify Admin are located in /pages\nThe additional modules for the store are located in /app"),Object(a.b)("p",null,"The server is hosted on AWS EC2 and monitored through PM2. The sync is based on Github actions and 2 branches coexist on Github:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"develop for developers and UAT"),Object(a.b)("li",{parentName:"ul"},"master when the code is ready to be deployed")))}u.isMDXComponent=!0},165:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,m=s["".concat(c,".").concat(b)]||s[b]||d[b]||a;return r?o.a.createElement(m,i({ref:t},p,{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);