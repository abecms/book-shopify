(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{125:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(1),p=r(9),a=(r(0),r(154)),o={},i={id:"dev/app",title:"app",description:"# App development",source:"@site/docs/dev/app.md",permalink:"/docs/dev/app",sidebar:"docs",previous:{title:"shopifyplus",permalink:"/docs/shopifyplus"},next:{title:"dev",permalink:"/docs/dev/dev"}},c=[{value:"Install shopify-app-cli (https://shopify.github.io/shopify-app-cli)",id:"install-shopify-app-cli-httpsshopifygithubioshopify-app-cli",children:[]}],l={rightToc:c};function s(e){var t=e.components,r=Object(p.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"app-development"},"App development"),Object(a.b)("h2",{id:"install-shopify-app-cli-httpsshopifygithubioshopify-app-cli"},"Install shopify-app-cli (",Object(a.b)("a",Object(n.a)({parentName:"h2"},{href:"https://shopify.github.io/shopify-app-cli"}),"https://shopify.github.io/shopify-app-cli"),")"),Object(a.b)("p",null,'eval "$(curl -sS ',Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/Shopify/shopify-app-cli/master/install.sh"}),"https://raw.githubusercontent.com/Shopify/shopify-app-cli/master/install.sh"),')"'),Object(a.b)("p",null,"you now have the cli tool ready to be used :"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"shopify help\n")),Object(a.b)("h1",{id:"create-an-app"},"Create an app"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"shopify create node\n")),Object(a.b)("p",null,"Then answer the questions. It will then create a shopify app in your partner dashboard + create a node app."),Object(a.b)("h1",{id:"start-the-app"},"start the app"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"shopify serve\n")),Object(a.b)("p",null,"It will start a nodemon server + ngok and update your shopify app redirection URL with the right ngrok URL."))}s.isMDXComponent=!0},154:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),p=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=p.a.createContext({}),s=function(e){var t=p.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=s(e.components);return p.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,h=u["".concat(o,".").concat(f)]||u[f]||b[f]||a;return r?p.a.createElement(h,i({ref:t},l,{components:r})):p.a.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);