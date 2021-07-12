(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(9),o=(n(0),n(165)),i={},c={id:"dev/graphql",title:"graphql",description:"# Update a variant with a metafield",source:"@site/docs/dev/graphql.md",permalink:"/docs/dev/graphql",sidebar:"docs",previous:{title:"dev",permalink:"/docs/dev/dev"},next:{title:"Import CSV",permalink:"/docs/dev/customer-import"}},p=[],u={rightToc:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"update-a-variant-with-a-metafield"},"Update a variant with a metafield"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://community.shopify.com/c/Shopify-APIs-SDKs/Adding-Metafield-on-a-productVariant-using-GraphQL/td-p/552212"}),"https://community.shopify.com/c/Shopify-APIs-SDKs/Adding-Metafield-on-a-productVariant-using-GraphQL/td-p/552212")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'Input :\n\n{\n"input": {\n"id": "gid://shopify/ProductVariant/1",\n"metafields": [\n   {\n"namespace": "test",\n"key": "b_date",\n"value": "testing",\n"valueType": "STRING"\n   }\n  ]\n }\n}\n\nMutation :\n\nmutation ($input: ProductVariantInput!) {\n  productVariantUpdate(input: $input) {\n    productVariant {\n      id\n      title\n      sku\n      metafields(first: 10) {\n        edges {\n          node {\n            id\n            namespace\n            key\n            value\n          }\n        }\n      }\n    }\n  }\n}\n```\n')))}d.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=d(n),f=r,m=l["".concat(i,".").concat(f)]||l[f]||s[f]||o;return n?a.a.createElement(m,c({ref:t},u,{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);