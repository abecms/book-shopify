(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),l=(n(0),n(153)),i={title:"Alternative Template",sidebar_label:"Alternative"},c={id:"dev/alternative-template",title:"Alternative Template",description:"The alternative templates allow the declination of main templates in order to :",source:"@site/docs/dev/alternative-template.md",permalink:"/docs/dev/alternative-template",sidebar_label:"Alternative",sidebar:"docs",previous:{title:"Ajax - Mini Cart",permalink:"/docs/dev/ajax-mini_cart"},next:{title:"Layout Tricks",permalink:"/docs/dev/layout-tricks"}},o=[],p={rightToc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The alternative templates allow the declination of main templates in order to :"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Be able to lighten the code for an Ajax request"),Object(l.b)("li",{parentName:"ul"},"Inject a new template"),Object(l.b)("li",{parentName:"ul"},"And many more choice")),Object(l.b)("p",null,"Syntax: ",Object(l.b)("inlineCode",{parentName:"p"},"default_template_name.*.liquid")),Object(l.b)("p",null,"E.g."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"product.liquid")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'  <div class="product-page">\n    <h1>\n      Pincipal template\n    </h1>\n    <p>Template description</p>\n    <div class="more-product-info">\n      More Product Info\n    </div>\n  </div>\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"product.list.liquid")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'  <div class="product-list-page">\n    <h1>\n      Alternative template\n    </h1>\n    <ul>\n      <li>Product 1</li>\n      <li>Product 2</li>\n      <li>Product 3</li>\n    </ul>\n  </div>\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"product.preview.liquid")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'  <div class="product-preview">\n    <h1>\n      Alternative template\n    </h1>\n    <p>Template description</p>\n  </div>\n')))}u.isMDXComponent=!0},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,s=b["".concat(i,".").concat(m)]||b[m]||d[m]||l;return n?a.a.createElement(s,c({ref:t},p,{components:n})):a.a.createElement(s,c({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);