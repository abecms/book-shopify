(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),c=(n(0),n(154)),i={title:"Mini Cart",sidebar_label:"Mini Cart"},o={id:"dev/cart-mini_cart",title:"Mini Cart",description:"# Table of contents",source:"@site/docs/dev/cart-mini_cart.md",permalink:"/docs/dev/cart-mini_cart",sidebar_label:"Mini Cart"},p=[],l={rightToc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"table-of-contents"},"Table of contents"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#create-the-liquid-file"}),"Create the liquid file")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#add-payment-button"}),"Add Payment Button"))),Object(c.b)("h1",{id:"create-the-liquid-file"},"Create the Liquid file"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"In your Shopify workspace go to ",Object(c.b)("inlineCode",{parentName:"li"},"templates")),Object(c.b)("li",{parentName:"ul"},"Create a liquid file name ",Object(c.b)("inlineCode",{parentName:"li"},"cart.mini.liquid")," (For more explanation go to ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/dev/alternative-template"}),"Alternative Template"),")"),Object(c.b)("li",{parentName:"ul"},"Put your Mini Cart HTML code (or include it ",Object(c.b)("em",{parentName:"li"},"e.g.",Object(c.b)("inlineCode",{parentName:"em"},"{% include 'cp-quick_cart_inner' %}")),") inside the file"),Object(c.b)("li",{parentName:"ul"},"Save your file")),Object(c.b)("p",null,"(",Object(c.b)("inlineCode",{parentName:"p"},"cart.mini.liquid"),")"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"  {% include 'cp-quick_cart_inner' %}\n")),Object(c.b)("p",null,"(",Object(c.b)("inlineCode",{parentName:"p"},"cp-quick_cart.liquid"),")"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'class:"lineNo"','class:"lineNo"':!0}),'  <div class="cp-quick_cart">\n    <div class="popup popup--checkout" id="popup-checkout">\n      <button class="popup__close js-popup-close">\n        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">\n          <path fill="currentColor" d="M9.467 8.75l-.25-.25.25-.25L16.852.865a.502.502 0 0 0 0-.716.502.502 0 0 0-.717 0L8.751 7.532l-.25.25-.252-.25L.865.15a.502.502 0 0 0-.717 0 .503.503 0 0 0 0 .716L7.533 8.25l.25.25-.25.25-7.385 7.385a.507.507 0 0 0 .717.717l7.384-7.385.251-.25.25.25 7.385 7.384a.502.502 0 0 0 .717 0 .507.507 0 0 0 0-.716z"/>\n        </svg>\n      </button>\x3c!-- popup__close --\x3e\n\n      <div class="popup__background js-popup-close"></div>\x3c!-- /.popup__background --\x3e\n\n      <div class="popup__inner">\n        {% include \'cp-quick_cart_inner\' %}\n      </div>\x3c!-- /.popup__inner --\x3e\n    </div>\x3c!-- /.popup --\x3e\n  </div>\x3c!-- /.cp-quick_cart --\x3e\n')),Object(c.b)("p",null,"(",Object(c.b)("inlineCode",{parentName:"p"},"cp-quick_cart_inner.liquid"),")"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'  <div class="product-items">\n    <div class="product-items__inner">\n      <div class="product-item product-item--alt">\n        <form action="/cart" method="post">\n          {% for item in cart.items %}\n            <div class="product__inner">\n              <div class="product__image">\n                <div class="product__image-inner"></div>\n              </div>\x3c!-- /.product__image --\x3e\n\n              <div class="product__content">\n                <h4 class="product__title">\n                  <span>{{ item.product.title }}</span>\n                </h4>\x3c!-- /.product__title --\x3e\n\n                <div class="product__price">\n                  <span>{{ item.final_line_price | money }}</span>\n                </div>\x3c!-- /.product__price --\x3e                \n              </div>\x3c!-- /.product__content --\x3e\n            </div>\x3c!-- /.product__inner --\x3e\n            <input type="hidden" name="updates[]" id="updates_{{ item.key }}" value="{{ item.quantity }}" min="0">\n          {% endfor %}\n\n          <div class="product__actions">\n            <a href="/cart" class="btn btn--dark btn--block">\n              {{ \'general.cart.show_cart\' | t }} (<span class="js-cart-update-count">{{ cart.item_count }}</span>)\n            </a>\n\n            <button type="submit" name="checkout" class="btn btn--dark-full btn--block">{{ \'general.cart.payment\' | t }}</button>\n          </div>\x3c!-- /.product__actions --\x3e\n        </form>\n      </div>\x3c!-- /.product-item --\x3e\n    </div>\x3c!-- /.product-items__inner --\x3e\n  </div>\x3c!-- /.product-items --\x3e\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Why not just include ",Object(c.b)("inlineCode",{parentName:"p"},"cp-quick_cart.liquid")," inside ",Object(c.b)("inlineCode",{parentName:"p"},"cart.mini.liquid")," ?\nIn this example we separate the inner cart and the pop up container in the case of updating mini cart by ajax see ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/dev/ajax-mini_cart"}),"Ajax Mini Cart"))),Object(c.b)("h1",{id:"add-payment-button"},"Add payment button"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"As you can see in the ",Object(c.b)("inlineCode",{parentName:"li"},"cp-quick_cart_inner.liquid")," to add a direct payment button you need to:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Encompass all your mini cart items into ",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'  <form action="/cart" method="post"></form>\n'))),Object(c.b)("li",{parentName:"ul"},"Put in every item : ",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'  <input type="hidden" name="updates[]" id="updates_{{ item.key }}" value="{{ item.quantity }}" min="0">\n'))),Object(c.b)("li",{parentName:"ul"},"And finaly add ",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'  <button type="submit" name="checkout">{{ \'general.cart.payment\' | t }}</button>\n')))))))}u.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(n),s=a,m=b["".concat(i,".").concat(s)]||b[s]||d[s]||c;return n?r.a.createElement(m,o({ref:t},l,{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);