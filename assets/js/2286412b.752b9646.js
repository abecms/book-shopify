(self.webpackChunknewshopify=self.webpackChunknewshopify||[]).push([[955],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,u=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=i,d=f["".concat(a,".").concat(m)]||f[m]||p[m]||u;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=r.length,o=new Array(u);o[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<u;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2454:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var n=r(2122),i=r(9756),u=(r(7294),r(3905)),o=["components"],l={},a="Introduction",s={unversionedId:"config/multilingue",id:"config/multilingue",isDocsHomePage:!1,title:"Introduction",description:"Pour que le site puisse proposer plusieurs langues il faut s'assurer que le th\xe8me est compatible avec la vente en plusieurs langues et qu'une app permettant de traduire les contenus soit install\xe9e (ex : weglot)",source:"@site/docs/config/multilingue.md",sourceDirName:"config",slug:"/config/multilingue",permalink:"/docs/config/multilingue",version:"current",frontMatter:{}},c=[{value:"Traduire les termes",id:"traduire-les-termes",children:[]}],p={toc:c};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,u.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"introduction"},"Introduction"),(0,u.kt)("p",null,"Pour que le site puisse proposer plusieurs langues il faut s'assurer que le th\xe8me est compatible avec la vente en plusieurs langues et qu'une app permettant de traduire les contenus soit install\xe9e (ex : weglot)"),(0,u.kt)("p",null,"Proc\xe9dure ",(0,u.kt)("a",{parentName:"p",href:"https://help.shopify.com/fr/manual/cross-border/multilingual-online-store#g-rer-les-langues"},"https://help.shopify.com/fr/manual/cross-border/multilingual-online-store#g-rer-les-langues")),(0,u.kt)("p",null,"Tous les \xe9l\xe9ments du th\xe8me sont traductibles. L'interface de traduction est accessinle dans themes / Actions / Modifier les langues"),(0,u.kt)("h2",{id:"traduire-les-termes"},"Traduire les termes"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"Dans le dossier ",(0,u.kt)("inlineCode",{parentName:"p"},"locales"),", \xe9diter le fichier de langue qui correspond \xe0 celle par d\xe9faut d\xe9clar\xe9 sur le th\xe8me du site (ex: en.default.json)")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"Ajouter tous les termes \xe0 traduire en respectant la structure du json (ex: General > 404 > Title). C'est cette structure qu'on retrouve sur l'interface de traduction.")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"Dans le fichier .liquid, ajouter le terme \xe0 l'endroit o\xf9 il doit apparaitre traduit sur la page, en respectant la syntaxe suivante :"),(0,u.kt)("p",{parentName:"li"}," ",(0,u.kt)("inlineCode",{parentName:"p"},"<h1>{{ 'general.404.title' | t }}</h1>")))))}f.isMDXComponent=!0}}]);