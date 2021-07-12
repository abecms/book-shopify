(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),i=r(9),c=(r(0),r(165)),o={},a={id:"config/config",title:"config",description:"# Configuration",source:"@site/docs/config/config.md",permalink:"/docs/config/config",sidebar:"docs",previous:{title:"useful-apps",permalink:"/docs/useful-apps"},next:{title:"back-office",permalink:"/docs/config/back-office"}},l=[{value:"Url Redirect",id:"url-redirect",children:[{value:"Create a URL Redirect",id:"create-a-url-redirect",children:[]},{value:"Import your redirections",id:"import-your-redirections",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"configuration"},"Configuration"),Object(c.b)("h2",{id:"url-redirect"},"Url Redirect"),Object(c.b)("p",null,"If you migrate you e-commerce to shopify you need to redirect your old urls to the new ones."),Object(c.b)("p",null,"In the admin panel of shopify got to "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"On-line Store")," / ",Object(c.b)("inlineCode",{parentName:"li"},"Navigation")),Object(c.b)("li",{parentName:"ul"},"Click URL ",Object(c.b)("inlineCode",{parentName:"li"},"Redirects"),"."),Object(c.b)("li",{parentName:"ul"},"Click Add ",Object(c.b)("inlineCode",{parentName:"li"},"URL redirect"),".")),Object(c.b)("p",null,"You have 2 choices here :"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Create a URL Redirect"),Object(c.b)("li",{parentName:"ul"},"Import")),Object(c.b)("h3",{id:"create-a-url-redirect"},"Create a URL Redirect"),Object(c.b)("p",null,"You have to fill ",Object(c.b)("inlineCode",{parentName:"p"},"Redirect from")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Redirect to"),"\nie : "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Redirect From : ",Object(c.b)("inlineCode",{parentName:"li"},"/fr/catalog/product/view/id/14584/s/trench-marine-a-coupe-droite-mte16camille-marine/category/68")," "),Object(c.b)("li",{parentName:"ul"},"Redirect to : ",Object(c.b)("inlineCode",{parentName:"li"},"/collections/trenchs"))),Object(c.b)("h3",{id:"import-your-redirections"},"Import your redirections"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/static/files/redirect_template.csv"}),"Csv Template")),Object(c.b)("p",null,"For mass Urls Redirect you can use the Shopify import function"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Click on ",Object(c.b)("inlineCode",{parentName:"li"},"Import")),Object(c.b)("li",{parentName:"ul"},"Here you can import a csv file - template above.")))}p.isMDXComponent=!0},165:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),f=n,m=b["".concat(o,".").concat(f)]||b[f]||d[f]||c;return r?i.a.createElement(m,a({ref:t},u,{components:r})):i.a.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var u=2;u<c;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);