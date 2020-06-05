(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(9),c=(n(0),n(151)),a={},i={id:"dev/dev",title:"dev",description:"#",source:"@site/docs/dev/dev.md",permalink:"/docs/dev/dev",sidebar:"docs",previous:{title:"app",permalink:"/docs/dev/app"},next:{title:"Import CSV",permalink:"/docs/dev/customer-import"}},u=[],p={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:""}),Object(c.b)("h1",{id:"find-and-paginate-products-with-a-specific-tag"},"Find and paginate products with a specific tag"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'const query = `query($cursor: String){\n    products(first: 250, after:$cursor, query: "tag:tag_name") {\n        pageInfo {\n            hasNextPage\n          }\n          edges {\n            cursor\n            node {\n              id\n              tags\n            }\n        }\n    }\n  }\n`\n\u200b\n(async () => {\n    let hasNextPage = false;\n    let lastedge;\n    let variable;\n    do {\n      await shopify.graphql(query,variable).then((product) => {\n        counter = counter + 1;\n        const products = Object.values(product.products.edges);\n        for (const product of products) {\n            let id = product.node.id.split(\'/\').slice(-1)[0];\n            counter = counter + 1; // to count the number of prodcuts\n            console.log(counter +"=>" +id+ "=>" +product.node.tags);\n        }\n        var last_key = product.products.edges.length;\n        lastedge = product.products.edges[last_key - 1].cursor;\n        hasNextPage = product.products.pageInfo.hasNextPage;\n        variable = {"cursor": lastedge};\n      });\n    } while (hasNextPage == true);\n  })().catch(console.error);\n')))}s.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,b=d["".concat(a,".").concat(f)]||d[f]||l[f]||c;return n?o.a.createElement(b,i({ref:t},p,{components:n})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);