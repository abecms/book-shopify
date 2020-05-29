(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{142:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(9),i=(r(0),r(149)),a={},c={id:"introduction",title:"introduction",description:"# Introduction",source:"@site/docs/introduction.md",permalink:"/docs/introduction",sidebar:"docs",next:{title:"setup",permalink:"/docs/setup"}},l=[{value:"Principes",id:"principes",children:[]},{value:"Architecture",id:"architecture",children:[]}],p={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"introduction"},"Introduction"),Object(i.b)("p",null,'Cette m\xe9thode de d\xe9veloppement repose sur "Stickers", le m\xe9thodologie de d\xe9veloppement mise au point chez Livingcolor. Cette m\xe9thodologie permet de d\xe9couper le projet en briques (les stickers) qui pourront \xeatre assembl\xe9es au long du projet, par poste.'),Object(i.b)("p",null,"Cette transformation d'un projet en composants \xe0 assembler permet d'acc\xe9l\xe9rer le d\xe9veloppement d'un site Shopify et de gagner en qualit\xe9 (DRY)."),Object(i.b)("h2",{id:"principes"},"Principes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"On d\xe9veloppe le front \xe0 l'aide du projet ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/abecms/model-stickers-static"}),"https://github.com/abecms/model-stickers-static"),"\nPuis dans Shopify, en utilisant le th\xe8me starter livingcolor:")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Je merge le r\xe9pertoire components du projet dynamique depuis celui du projet static (usage de la touche ",Object(i.b)("inlineCode",{parentName:"p"},"<option>")," sous Mac OSX)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Je cr\xe9e le dview.html.twig quand je dynamise le template correspondant view.html.twig")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"A chaque merge, je fais un git status pour savoir quels templates ont \xe9t\xe9 modifi\xe9s")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Je peux maj mes dview en fonction"))),Object(i.b)("h2",{id:"architecture"},"Architecture"),Object(i.b)("p",null,"Shopify va \xeatre organis\xe9 \xe0 l'aide du starter livingcolor qui permet de personnaliser fortement les twig des \xe9l\xe9ments de la page, et les modules certifi\xe9s par livingcolor (cf. + loin)"),Object(i.b)("p",null,"En particulier, on va utiliser le module Paragraphs pour cr\xe9er puis assembler les composants d'un site. Par ailleurs, nous utilisons tr\xe8s largement le principe des suggestions afin de rendre toute brique enti\xe8rement personnalisable en fonction de nombreux crit\xe8res."))}u.isMDXComponent=!0},149:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,b=s["".concat(a,".").concat(m)]||s[m]||d[m]||i;return r?o.a.createElement(b,c({ref:t},p,{components:r})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);