(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{139:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),i=(r(0),r(165)),o={},l={id:"config/multilingue",title:"multilingue",description:"# Introduction",source:"@site/docs/config/multilingue.md",permalink:"/docs/config/multilingue"},u=[{value:"Traduire les termes",id:"traduire-les-termes",children:[]}],c={rightToc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Pour que le site puisse proposer plusieurs langues il faut s'assurer que le th\xe8me est compatible avec la vente en plusieurs langues et qu'une app permettant de traduire les contenus soit install\xe9e (ex : weglot)"),Object(i.b)("p",null,"Proc\xe9dure ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.shopify.com/fr/manual/cross-border/multilingual-online-store#g-rer-les-langues"}),"https://help.shopify.com/fr/manual/cross-border/multilingual-online-store#g-rer-les-langues")),Object(i.b)("p",null,"Tous les \xe9l\xe9ments du th\xe8me sont traductibles. L'interface de traduction est accessinle dans themes / Actions / Modifier les langues"),Object(i.b)("h2",{id:"traduire-les-termes"},"Traduire les termes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Dans le dossier ",Object(i.b)("inlineCode",{parentName:"p"},"locales"),", \xe9diter le fichier de langue qui correspond \xe0 celle par d\xe9faut d\xe9clar\xe9 sur le th\xe8me du site (ex: en.default.json)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ajouter tous les termes \xe0 traduire en respectant la structure du json (ex: General > 404 > Title). C'est cette structure qu'on retrouve sur l'interface de traduction.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Dans le fichier .liquid, ajouter le terme \xe0 l'endroit o\xf9 il doit apparaitre traduit sur la page, en respectant la syntaxe suivante :"),Object(i.b)("p",{parentName:"li"}," ",Object(i.b)("inlineCode",{parentName:"p"},"<h1>{{ 'general.404.title' | t }}</h1>")))))}s.isMDXComponent=!0},165:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},p=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return r?a.a.createElement(f,l({ref:t},c,{components:r})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);