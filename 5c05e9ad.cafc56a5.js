(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),r=(n(0),n(156)),c={id:"cart",titre:"Cart",sidebar_label:"Cart"},l={id:"dynamisation/cart",title:"cart",description:"## Table of contents",source:"@site/docs/dynamisation/cart.md",permalink:"/docs/dynamisation/cart",sidebar_label:"Cart",sidebar:"docs",previous:{title:"search",permalink:"/docs/dynamisation/search"},next:{title:"shopifyplus",permalink:"/docs/shopifyplus"}},o=[{value:"Table of contents",id:"table-of-contents",children:[]},{value:"Ajouter un produit automatiquement au panier",id:"ajouter-un-produit-automatiquement-au-panier",children:[]},{value:"Ajax - Mini Cart",id:"ajax---mini-cart",children:[{value:"Create the Liquid file",id:"create-the-liquid-file",children:[]},{value:"Create the JavaScript file",id:"create-the-javascript-file",children:[]},{value:"Update the layout file",id:"update-the-layout-file",children:[]},{value:"How to use it",id:"how-to-use-it",children:[]}]},{value:"Mini Cart",id:"mini-cart",children:[{value:"Create the Liquid file",id:"create-the-liquid-file-1",children:[]},{value:"Add payment button",id:"add-payment-button",children:[]}]},{value:"Display Shipping rates estimates in the Cart",id:"display-shipping-rates-estimates-in-the-cart",children:[]}],u={rightToc:o};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#table-of-contents"}),"Table of contents")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#ajouter-un-produit-automatiquement-au-panier"}),"Ajouter un produit automatiquement au panier")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#ajax---mini-cart"}),"Ajax - Mini Cart"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#create-the-liquid-file"}),"Create the Liquid file")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#create-the-javascript-file"}),"Create the JavaScript file")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#update-the-layout-file"}),"Update the layout file")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#how-to-use-it"}),"How to use it")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#mini-cart"}),"Mini Cart"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#create-the-liquid-file-1"}),"Create the Liquid file")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#add-payment-button"}),"Add payment button")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#display-shipping-rates-estimates-in-the-cart"}),"Display Shipping rates estimates in the Cart"))),Object(r.b)("h2",{id:"ajouter-un-produit-automatiquement-au-panier"},"Ajouter un produit automatiquement au panier"),Object(r.b)("p",null,"Dans l'exemple, on v\xe9rifie que le produit n'est pas d\xe9j\xe0 dans le panier et que le montant du panier est > 100 (il est calcul\xe9 en cents)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"><\/script>\n{% assign found_title = false %}\n{% for item in checkout.line_items %}\n  {% if item.variant.id == 7387208286253 %}\n    {% assign found_title = true %}\n  {% endif %}\n{% endfor %}\n\n{% if checkout.subtotal_price > 10000 and found_title == false %}\n<script>\n  $( document ).ready(function() {\n      var variantId = 7387208286253;\n      jQuery.post('/cart/add.js', {\n        quantity: 1,\n        id: variantId\n      });\n      setTimeout(\n        function() {\n          window.location.reload(true);\n        }, 1000);\n  });\n<\/script>\n{% endif %}\n")),Object(r.b)("h2",{id:"ajax---mini-cart"},"Ajax - Mini Cart"),Object(r.b)("h3",{id:"create-the-liquid-file"},"Create the Liquid file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/cart-mini_cart#create-the-liquid-file"}),"Mini Cart - Create the Liquid file")),Object(r.b)("li",{parentName:"ul"},"At the beginning of the ",Object(r.b)("inlineCode",{parentName:"li"},"cart.mini.liquid")," add this line ",Object(r.b)("inlineCode",{parentName:"li"},"{% layout none %}")," (For more explanation go to ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/layout-tricks"}),"Layout Tricks"),")")),Object(r.b)("h3",{id:"create-the-javascript-file"},"Create the JavaScript file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In your Shopify workspace go to ",Object(r.b)("inlineCode",{parentName:"li"},"assets")),Object(r.b)("li",{parentName:"ul"},"Edit an existing ",Object(r.b)("inlineCode",{parentName:"li"},".js")," file or create it ",Object(r.b)("em",{parentName:"li"},"e.g (",Object(r.b)("inlineCode",{parentName:"em"},"ajax-mini-cart.js"),")")),Object(r.b)("li",{parentName:"ul"},"Put the following code inside and do some modifications"),Object(r.b)("li",{parentName:"ul"},"Save your file")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n   * -------------------------\n   * ShpCustom: Ajax Cart\n   * -------------------------\n   */\n\n// If You don't already have a custom global object created\n// e.g ShpCustom can be what ever you want\nwindow.ShpCustom = window.ShpCustom || {cart: {}};\n\n(function() {\n  ShpCustom.Cart.onItemAdded = function() {\n    ShpCustom.Cart.getCart();\n  };\n\n  ShpCustom.Cart.onError = function(XMLHttpRequest, textStatus) {\n    var data = eval('(' + XMLHttpRequest.responseText.description + ')');\n    alert(data);\n  };\n\n  ShpCustom.Cart.getCart = function() {\n    var params = {\n      type: 'GET',\n      url: '/cart?view=mini',\n      success: function(line_html) {\n        if(line_html) {\n          const $line_html = $(line_html);\n          // Get number of item in cart\n          const cartUpdateCount = $line_html.find('Put your ItemCount element class or Id e.g. .js-cart-update-count').text();\n\n          $('Put your mini cart principal class or principal Id e.g. .cp-quick_cart').find('.product-items').replaceWith($line_html);\n          $('Put your ItemCount element class or Id e.g. .js-cart-update-count').text(cartUpdateCount);\n\n          // Show the mini cart\n          $('#popup-checkout').addClass('active');\n        }\n      },\n      error: function(XMLHttpRequest, textStatus) {\n        ShpCustom.Cart.onError(XMLHttpRequest, textStatus);\n      }\n    };\n    $.ajax(params);\n  };\n\n  ShpCustom.Cart.addItemFromForm = function(data, callback) {\n    var params = {\n      type: 'POST',\n      url: '/cart/add.js',\n      data: data,\n      dataType: 'json',\n      success: function(line_item) {\n        if ((typeof callback) === 'function') {\n          callback();\n        }\n        ShpCustom.Cart.onItemAdded(line_item);\n      },\n      error: function(XMLHttpRequest, textStatus) {\n        if ((typeof callback) === 'function') {\n          callback();\n        }\n        ShpCustom.Cart.onError(XMLHttpRequest, textStatus);\n      }\n    };\n    $.ajax(params);\n  }\n})();\n")),Object(r.b)("h3",{id:"update-the-layout-file"},"Update the layout file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In your Shopify workspace go to ",Object(r.b)("inlineCode",{parentName:"li"},"layout")),Object(r.b)("li",{parentName:"ul"},"Open the ",Object(r.b)("inlineCode",{parentName:"li"},"theme.liquid")," file"),Object(r.b)("li",{parentName:"ul"},"At the bottom of the file before the ",Object(r.b)("inlineCode",{parentName:"li"},"</body>")," add",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'  <script src="{{ \'name_of_your_file.js\' | asset_url }}" defer="defer"><\/script>\n'))),Object(r.b)("li",{parentName:"ul"},"Save your file")),Object(r.b)("h3",{id:"how-to-use-it"},"How to use it"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"E.g. use it on products slider with multiple Add To Cart Button")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In your Shopify workspace go to your liquid file for one slide")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"At the end of the file add"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"  <script>\n    jQuery('uniq id of the product form').submit(function(event) {\n      event.preventDefault();\n\n      const $submitButton = jQuery('uniq id of the product form or just this').find('Your add to cart button class e.g. .js-add-to-cart');\n\n      $submitButton.attr('disabled', 'disabled');\n      ShpCustom.Cart.addItemFromForm(jQuery(this).serialize(), () => {\n        $submitButton.removeAttr('disabled');\n      });\n    });\n  <\/script>\n")))),Object(r.b)("h2",{id:"mini-cart"},"Mini Cart"),Object(r.b)("h3",{id:"create-the-liquid-file-1"},"Create the Liquid file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In your Shopify workspace go to ",Object(r.b)("inlineCode",{parentName:"li"},"templates")),Object(r.b)("li",{parentName:"ul"},"Create a liquid file name ",Object(r.b)("inlineCode",{parentName:"li"},"cart.mini.liquid")," (For more explanation go to ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/alternative-template"}),"Alternative Template"),")"),Object(r.b)("li",{parentName:"ul"},"Put your Mini Cart HTML code (or include it ",Object(r.b)("em",{parentName:"li"},"e.g.",Object(r.b)("inlineCode",{parentName:"em"},"{% include 'cp-quick_cart_inner' %}")),") inside the file"),Object(r.b)("li",{parentName:"ul"},"Save your file")),Object(r.b)("p",null,"(",Object(r.b)("inlineCode",{parentName:"p"},"cart.mini.liquid"),")"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"  {% include 'cp-quick_cart_inner' %}\n")),Object(r.b)("p",null,"(",Object(r.b)("inlineCode",{parentName:"p"},"cp-quick_cart.liquid"),")"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'class:"lineNo"','class:"lineNo"':!0}),'  <div class="cp-quick_cart">\n    <div class="popup popup--checkout" id="popup-checkout">\n      <button class="popup__close js-popup-close">\n        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">\n          <path fill="currentColor" d="M9.467 8.75l-.25-.25.25-.25L16.852.865a.502.502 0 0 0 0-.716.502.502 0 0 0-.717 0L8.751 7.532l-.25.25-.252-.25L.865.15a.502.502 0 0 0-.717 0 .503.503 0 0 0 0 .716L7.533 8.25l.25.25-.25.25-7.385 7.385a.507.507 0 0 0 .717.717l7.384-7.385.251-.25.25.25 7.385 7.384a.502.502 0 0 0 .717 0 .507.507 0 0 0 0-.716z"/>\n        </svg>\n      </button>\x3c!-- popup__close --\x3e\n\n      <div class="popup__background js-popup-close"></div>\x3c!-- /.popup__background --\x3e\n\n      <div class="popup__inner">\n        {% include \'cp-quick_cart_inner\' %}\n      </div>\x3c!-- /.popup__inner --\x3e\n    </div>\x3c!-- /.popup --\x3e\n  </div>\x3c!-- /.cp-quick_cart --\x3e\n')),Object(r.b)("p",null,"(",Object(r.b)("inlineCode",{parentName:"p"},"cp-quick_cart_inner.liquid"),")"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'  <div class="product-items">\n    <div class="product-items__inner">\n      <div class="product-item product-item--alt">\n        <form action="/cart" method="post">\n          {% for item in cart.items %}\n            <div class="product__inner">\n              <div class="product__image">\n                <div class="product__image-inner"></div>\n              </div>\x3c!-- /.product__image --\x3e\n\n              <div class="product__content">\n                <h4 class="product__title">\n                  <span>{{ item.product.title }}</span>\n                </h4>\x3c!-- /.product__title --\x3e\n\n                <div class="product__price">\n                  <span>{{ item.final_line_price | money }}</span>\n                </div>\x3c!-- /.product__price --\x3e\n              </div>\x3c!-- /.product__content --\x3e\n            </div>\x3c!-- /.product__inner --\x3e\n            <input type="hidden" name="updates[]" id="updates_{{ item.key }}" value="{{ item.quantity }}" min="0">\n          {% endfor %}\n\n          <div class="product__actions">\n            <a href="/cart" class="btn btn--dark btn--block">\n              {{ \'general.cart.show_cart\' | t }} (<span class="js-cart-update-count">{{ cart.item_count }}</span>)\n            </a>\n\n            <button type="submit" name="checkout" class="btn btn--dark-full btn--block">{{ \'general.cart.payment\' | t }}</button>\n          </div>\x3c!-- /.product__actions --\x3e\n        </form>\n      </div>\x3c!-- /.product-item --\x3e\n    </div>\x3c!-- /.product-items__inner --\x3e\n  </div>\x3c!-- /.product-items --\x3e\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Why not just include ",Object(r.b)("inlineCode",{parentName:"p"},"cp-quick_cart.liquid")," inside ",Object(r.b)("inlineCode",{parentName:"p"},"cart.mini.liquid")," ?\nIn this example we separate the inner cart and the pop up container in the case of updating mini cart by ajax see ","[Ajax Mini Cart]")),Object(r.b)("h3",{id:"add-payment-button"},"Add payment button"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"As you can see in the ",Object(r.b)("inlineCode",{parentName:"li"},"cp-quick_cart_inner.liquid")," to add a direct payment button you need to:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Encompass all your mini cart items into",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'  <form action="/cart" method="post"></form>\n'))),Object(r.b)("li",{parentName:"ul"},"Put in every item :",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'  <input type="hidden" name="updates[]" id="updates_{{ item.key }}" value="{{ item.quantity }}" min="0">\n'))),Object(r.b)("li",{parentName:"ul"},"And finaly add",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'  <button type="submit" name="checkout">{{ \'general.cart.payment\' | t }}</button>\n')))))),Object(r.b)("h2",{id:"display-shipping-rates-estimates-in-the-cart"},"Display Shipping rates estimates in the Cart"),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://community.shopify.com/c/Shopify-Design/Cart-Add-a-shipping-rates-calculator-to-your-cart/td-p/616554"}),"https://community.shopify.com/c/Shopify-Design/Cart-Add-a-shipping-rates-calculator-to-your-cart/td-p/616554")))}p.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=p(n),s=a,m=b["".concat(c,".").concat(s)]||b[s]||d[s]||r;return n?i.a.createElement(m,l({ref:t},u,{components:n})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<r;u++)c[u]=n[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);