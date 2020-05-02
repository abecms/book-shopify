(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(9),a=(n(0),n(143)),c={},u={id:"dev/dev",title:"dev",description:"# ",source:"@site/docs/dev/dev.md",permalink:"/docs/dev/dev",sidebar:"docs",previous:{title:"app",permalink:"/docs/dev/app"}},i=[],p={rightToc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:""}),Object(a.b)("h1",{id:"find-and-paginate-products-with-a-specific-tag"},"Find and paginate products with a specific tag"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'const query = `query($cursor: String){\n    products(first: 250, after:$cursor, query: "tag:tag_name") {\n        pageInfo {\n            hasNextPage\n          }\n          edges {\n            cursor\n            node {\n              id\n              tags\n            }\n        }\n    }\n  }\n`\n\u200b\n(async () => {\n    let hasNextPage = false;\n    let lastedge;\n    let variable;\n    do {\n      await shopify.graphql(query,variable).then((product) => {\n        counter = counter + 1;\n        const products = Object.values(product.products.edges);\n        for (const product of products) {\n            let id = product.node.id.split(\'/\').slice(-1)[0];\n            counter = counter + 1; // to count the number of prodcuts\n            console.log(counter +"=>" +id+ "=>" +product.node.tags);\n        }\n        var last_key = product.products.edges.length;\n        lastedge = product.products.edges[last_key - 1].cursor;\n        hasNextPage = product.products.pageInfo.hasNextPage;\n        variable = {"cursor": lastedge};\n      });\n    } while (hasNextPage == true);\n  })().catch(console.error);\n')))}s.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u({},t,{},e)),n},d=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,b=d["".concat(c,".").concat(f)]||d[f]||l[f]||a;return n?o.a.createElement(b,u({ref:t},p,{components:n})):o.a.createElement(b,u({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);