(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),i=(n(0),n(152)),o={title:"Ajax - Mini Cart",sidebar_label:"Mini Cart"},c={id:"dev/ajax-mini_cart",title:"Ajax - Mini Cart",description:"# Table of contents",source:"@site/docs/dev/ajax-mini_cart.md",permalink:"/docs/dev/ajax-mini_cart",sidebar_label:"Mini Cart",sidebar:"docs",previous:{title:"dev",permalink:"/docs/dev/dev"},next:{title:"Alternative Template",permalink:"/docs/dev/alternative-template"}},l=[],u={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"table-of-contents"},"Table of contents"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#create-the-liquid-file"}),"Create the liquid file")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#create-the-javascript-file"}),"Create the JavaScript file")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#update-the-layout-file"}),"Update the layout file")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#how-to-use-it"}),"How to use it"))),Object(i.b)("h1",{id:"create-the-liquid-file"},"Create the Liquid file"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/cart-mini_cart#create-the-liquid-file"}),"Mini Cart - Create the Liquid file")),Object(i.b)("li",{parentName:"ul"},"At the beginning of the ",Object(i.b)("inlineCode",{parentName:"li"},"cart.mini.liquid")," add this line ",Object(i.b)("inlineCode",{parentName:"li"},"{% layout none %}")," (For more explanation go to ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/layout-tricks"}),"Layout Tricks"),")")),Object(i.b)("h1",{id:"create-the-javascript-file"},"Create the JavaScript file"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In your Shopify workspace go to ",Object(i.b)("inlineCode",{parentName:"li"},"assets")),Object(i.b)("li",{parentName:"ul"},"Edit an existing ",Object(i.b)("inlineCode",{parentName:"li"},".js")," file or create it ",Object(i.b)("em",{parentName:"li"},"e.g (",Object(i.b)("inlineCode",{parentName:"em"},"ajax-mini-cart.js"),")")),Object(i.b)("li",{parentName:"ul"},"Put the following code inside and do some modifications"),Object(i.b)("li",{parentName:"ul"},"Save your file")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n * -------------------------\n * Ajax Cart\n * -------------------------\n */\n\n// If You don't already have a custom global object created\n// e.g ShpCustom can be what ever you want\nwindow.ShpCustom = window.ShpCustom || {cart: {}};\n\n(function() {\n\n  /* \n    * This callback is called after an item has been added to the cart.\n    * @callback onItemAdded\n    */\n  ShpCustom.Cart.onItemAdded = function() {\n    ShpCustom.Cart.getCart();\n  };\n\n  /* \n    * This callback is called after an request failure\n    * @callback onError\n    * @param {object} XMLHttpRequest\n    */\n  ShpCustom.Cart.onError = function(XMLHttpRequest) {\n    var data = eval('(' + XMLHttpRequest.responseText.description + ')');\n    alert(data);\n  };\n\n  /** @function\n    * @name getCart */\n  ShpCustom.Cart.getCart = function() { \n    var params = {\n      type: 'GET',\n      url: '/cart?view=mini',\n      success: function(line_html) {\n        if(line_html) {\n          const $line_html = $(line_html);\n\n          // Get number of item in cart \n          const cartUpdateCount = $line_html.find('Put your ItemCount element class or Id e.g. .js-cart-update-count').text();\n\n          $('Put your mini cart principal class or principal Id e.g. .cp-quick_cart').find('.product-items').replaceWith($line_html);\n          $('Put your ItemCount element class or Id e.g. .js-cart-update-count').text(cartUpdateCount);\n          \n          // Show the mini cart\n          $('#popup-checkout').addClass('active');\n        }\n      },\n      error: function(XMLHttpRequest, textStatus) {\n        ShpCustom.Cart.onError(XMLHttpRequest, textStatus);\n      }\n    };\n    $.ajax(params);\n  };\n\n  /** @function\n    * @name addItemFromForm\n    * @param {object} data\n    * @param {Function} callback */\n  ShpCustom.Cart.addItemFromForm = function(data, callback) {\n    var params = {\n      type: 'POST',\n      url: '/cart/add.js',\n      data: data,\n      dataType: 'json',\n      success: function(line_item) { \n        if ((typeof callback) === 'function') {\n          callback();\n        }\n        ShpCustom.Cart.onItemAdded(line_item);\n      },\n      error: function(XMLHttpRequest, textStatus) {\n        if ((typeof callback) === 'function') {\n          callback();\n        }\n        ShpCustom.Cart.onError(XMLHttpRequest, textStatus);\n      }\n    };\n    $.ajax(params);\n  }\n})();\n")),Object(i.b)("h1",{id:"update-the-layout-file"},"Update the layout file"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In your Shopify workspace go to ",Object(i.b)("inlineCode",{parentName:"li"},"layout")),Object(i.b)("li",{parentName:"ul"},"Open the ",Object(i.b)("inlineCode",{parentName:"li"},"theme.liquid")," file"),Object(i.b)("li",{parentName:"ul"},"At the bottom of the file before the ",Object(i.b)("inlineCode",{parentName:"li"},"</body>")," add ",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'  <script src="{{ \'name_of_your_file.js\' | asset_url }}" defer="defer"><\/script>\n'))),Object(i.b)("li",{parentName:"ul"},"Save your file")),Object(i.b)("h1",{id:"how-to-use-it"},"How to use it"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"E.g. use it on products slider with multiple Add To Cart Button")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In your Shopify workspace go to your liquid file for one slide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"At the end of the file add"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"  <script>\n    jQuery('uniq id of the product form').submit(function(event) {\n      event.preventDefault();\n      \n      const $submitButton = jQuery('uniq id of the product form or just this').find('Your add to cart button class e.g. .js-add-to-cart');\n\n      $submitButton.attr('disabled', 'disabled');\n      ShpCustom.Cart.addItemFromForm(jQuery(this).serialize(), () => {\n        $submitButton.removeAttr('disabled');\n      });\n    });\n  <\/script>\n")))))}p.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||i;return n?r.a.createElement(m,c({ref:t},u,{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);