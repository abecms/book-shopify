(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{149:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),i=r(9),o=(r(0),r(153)),a={title:"Import CSV",sidebar_label:"Import CSV"},c={id:"dev/customer-import",title:"Import CSV",description:"# Import des clients via CSV",source:"@site/docs/dev/customer-import.md",permalink:"/docs/dev/customer-import",sidebar_label:"Import CSV",sidebar:"docs",previous:{title:"Exploded Variant",permalink:"/docs/dev/product-variant-exploded"},next:{title:"Magento",permalink:"/docs/dev/magento"}},l=[{value:"Limitations",id:"limitations",children:[]},{value:"Solution",id:"solution",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"import-des-clients-via-csv"},"Import des clients via CSV"),Object(o.b)("h2",{id:"limitations"},"Limitations"),Object(o.b)("p",null,"Attention Shopify limite \xe0 1MB les fichiers d'import clients via CSV. Pensez \xe0 spliter le fichier si n\xe9cessaire."),Object(o.b)("p",null,"Une limitation en nombre de lignes est aussi appliqu\xe9e : il est recommand\xe9 de ne pas d\xe9pass\xe9 900 lignes par fichier."),Object(o.b)("h2",{id:"solution"},"Solution"),Object(o.b)("p",null,"Pour palier \xe0 cela, un script a \xe9t\xe9 r\xe9alis\xe9 afin d'automatiser l'import des fichiers CSV en utilisant l'API admin (endpoint cach\xe9).\nLe script est disponible ici : ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gitlab.com/abecms/izac/api/-/blob/develop/src/Command/UploadShopifyCsvCustomers.php"}),"https://gitlab.com/abecms/izac/api/-/blob/develop/src/Command/UploadShopifyCsvCustomers.php")),Object(o.b)("p",null,"Ce script prends 3 param\xe8tres :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Le r\xe9pertoire qui contient l'ensemble des fichiers CSV"),Object(o.b)("li",{parentName:"ul"},"Le cookie de l'utilisateur identifi\xe9 sur Shopify"),Object(o.b)("li",{parentName:"ul"},"Le jeton CSRF de l'utilisateur identifi\xe9 sur Shopify")),Object(o.b)("p",null,"Pour r\xe9cup\xe9rer le cookie et le jeton CSRF, il faut \xeatre loggu\xe9 au back-office Shopify, ouvrir\nla console de son navigateur et r\xe9cup\xe9rer ces informations sur une une des requetes faites \xe0 l'API Shopify."))}s.isMDXComponent=!0},153:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||o;return r?i.a.createElement(b,c({ref:t},p,{components:r})):i.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);