(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(1),i=n(9),r=(n(0),n(149)),o={},l={id:"dynamisation/product",title:"product",description:"# Product",source:"@site/docs/dynamisation/product.md",permalink:"/docs/dynamisation/product",sidebar:"docs",previous:{title:"theme",permalink:"/docs/dynamisation/theme"},next:{title:"search",permalink:"/docs/dynamisation/search"}},c=[{value:"Table of contents",id:"table-of-contents",children:[]},{value:"Display product media",id:"display-product-media",children:[]},{value:"Show Variant In Front",id:"show-variant-in-front",children:[]},{value:"Exploded Variant",id:"exploded-variant",children:[{value:"Create the JavaScript file",id:"create-the-javascript-file",children:[]},{value:"Update the layout file",id:"update-the-layout-file",children:[]},{value:"Create a custom liquid file",id:"create-a-custom-liquid-file",children:[]},{value:"How to use it",id:"how-to-use-it",children:[]}]}],d={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"product"},"Product"),Object(r.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#product"}),"Product"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#table-of-contents"}),"Table of contents")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#display-product-media"}),"Display product media")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#show-variant-in-front"}),"Show Variant In Front")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#exploded-variant"}),"Exploded Variant"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#create-the-javascript-file"}),"Create the JavaScript file")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#update-the-layout-file"}),"Update the layout file")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#create-a-custom-liquid-file"}),"Create a custom liquid file")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#how-to-use-it"}),"How to use it"))))))),Object(r.b)("h2",{id:"display-product-media"},"Display product media"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In your product template:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{% for media in product.media %}\n   {% include 'media' %}\n{% endfor %}\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Create a media snippet :")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{% case media.media_type %}\n      {% when \'image\' %}\n      {% when \'external_video\' %}\n        <div class="product-single__media" style="padding-top: {{ 1 | divided_by: media.aspect_ratio | times: 100}}%;" data-media-id="{{ media.id }}">\n          {{ media | external_video_tag }}\n        </div>\n      {% when \'video\' %}\n        <div class="product-single__media" data-media-id="{{ media.id }}">\n          {{ media | video_tag: controls: true }}\n        </div>\n      {% when \'model\' %}\n        <div class="product-single__media" style="padding-top: 100%" data-media-id="{{ media.id }}">\n          {{ media | model_viewer_tag }}\n        </div>\n      {% else %}\n        <div class="product-single__media" style="padding-top: 100%;" data-media-id="{{ media.id }}">\n          {{ media | media_tag }}\n        </div>\n{% endcase %}\n')),Object(r.b)("h2",{id:"show-variant-in-front"},"Show Variant In Front"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In your Shopify workspace go to ",Object(r.b)("inlineCode",{parentName:"li"},"templates")),Object(r.b)("li",{parentName:"ul"},"Put this code inside a product form",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'  \x3c!-- Variants Selector --\x3e\n  <select name="id">\n    {% for variant in product.variants %}\n      <option value="{{ variant.id }}">{{ variant.title }}</option>\n    {% endfor %}\n  </select>\n  \x3c!-- /Variants Selector --\x3e\n'))),Object(r.b)("li",{parentName:"ul"},"This will show a select of all possible variant",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"E.g.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"red/xs"),Object(r.b)("li",{parentName:"ul"},"red/s"),Object(r.b)("li",{parentName:"ul"},"red/m")))))),Object(r.b)("h2",{id:"exploded-variant"},"Exploded Variant"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"In the case you want to separate variants in front")),Object(r.b)("h3",{id:"create-the-javascript-file"},"Create the JavaScript file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In your Shopify workspace go to ",Object(r.b)("inlineCode",{parentName:"li"},"assets")),Object(r.b)("li",{parentName:"ul"},"Edit an existing ",Object(r.b)("inlineCode",{parentName:"li"},".js")," file or create it *e.g (",Object(r.b)("inlineCode",{parentName:"li"},"swatch.js"),")"),Object(r.b)("li",{parentName:"ul"},"Put the following code inside"),Object(r.b)("li",{parentName:"ul"},"Save your file")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"  **\n  * -------------------------\n  * Swatch\n  * -------------------------\n  */\n  // If You don't already have a custom global object created\n  // e.g ShpCustom can be what ever you want\n  window.ShpCustom = window.ShpCustom || {cart: {}};\n\n  /** Class representing a swatch. */\n  ShpCustom.Swatch = class {\n\n    /**\n     * Create a swatch.\n     * @param {string} id - The id of the form.\n     * @param {string} variantSelectId - The variant select id.\n     * @param {object} product - The product object.\n     */\n    constructor(id, variantSelectId, product) {\n      this.product = product;\n      this.sizeAlertTimeout;\n      this.id = `#${id}`;\n      this.variantSelectId = `${variantSelectId}`;\n\n      this.$addToCart = $(`${this.id} .js-add-to-cart`);\n      this.init();\n    }\n\n    /**\n     * Init the class\n     */\n    init() {\n      new Shopify.OptionSelectors(this.variantSelectId, {\n        product: this.product,\n        onVariantSelected: (variant, selector) => {\n          this.selectCallback(variant, selector);\n        }\n      });\n\n      $(`${this.id} .selector-wrapper`).hide();\n\n      clearTimeout(this.sizeAlertTimeout);\n\n      $(`${this.id} .swatch :radio`).change(function() {\n        var optionIndex = $(this).closest('.swatch').attr('data-option-index');\n        var optionValue = $(this).val();\n        $(this)\n          .closest('form')\n          .find('.single-option-selector')\n          .eq(optionIndex)\n          .val(optionValue)\n          .trigger('change');\n      });\n    }\n\n    /**\n     * Callback after a variant change\n     * @param {variant} object The return variant object\n     */\n    selectCallback(variant) {\n      this.$sizeAlert.hide();\n      if (variant) {\n        if (variant.available) {\n          this.$addToCart.removeAttr('disabled');\n        } else {\n          this.$addToCart.attr('disabled', 'disabled');\n        }\n      } else {\n        this.$addToCart.attr('disabled', 'disabled');\n      }\n    };\n  }\n")),Object(r.b)("h3",{id:"update-the-layout-file"},"Update the layout file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In your Shopify workspace go to ",Object(r.b)("inlineCode",{parentName:"li"},"layout")),Object(r.b)("li",{parentName:"ul"},"Open the ",Object(r.b)("inlineCode",{parentName:"li"},"theme.liquid")," file"),Object(r.b)("li",{parentName:"ul"},"At the bottom of the file before the ",Object(r.b)("inlineCode",{parentName:"li"},"</body>")," add",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'  <script src="{{ \'name_of_your_file.js\' | asset_url }}" defer="defer"><\/script>\n'))),Object(r.b)("li",{parentName:"ul"},"Save your file")),Object(r.b)("h3",{id:"create-a-custom-liquid-file"},"Create a custom liquid file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In your Shopify workspace go to ",Object(r.b)("inlineCode",{parentName:"li"},"snippets")),Object(r.b)("li",{parentName:"ul"},"Create a file named ",Object(r.b)("inlineCode",{parentName:"li"},"swatch.liquid")),Object(r.b)("li",{parentName:"ul"},"Add the following code inside and ",Object(r.b)("em",{parentName:"li"},"do some modifications/customization"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'  {% assign selectedOptionToDisplay = option | escape | downcase %}\n  {% unless product.has_only_default_variant %}\n    {% for option in product.options_with_values %}\n      {% assign downcased_option = option.name | escape | downcase %}\n\n        {% if selectedOptionToDisplay == downcased_option %}\n\n          {% if downcased_option == \'size\' %}\n            <div class="size-numbers">\n              <h6 class="size__title">\n                {{ \'general.product.size\' | t | capitalize}}\n              </h6>\x3c!-- /.size__title --\x3e\n              <div class="size__body">\n          {% endif %}\n\n          {% if downcased_option == \'color\' %}\n            <div class="colors">\n              {% if template == \'product\' %}\n                <h6 class="colors__title">\n                  {{ \'general.product.color\' | t | capitalize}}\n                </h6>\x3c!-- /.colors__title --\x3e\n              {% endif %}\n              <div class="colors__inner">\n          {% endif %}\n\n                <div id="{{uniqId}}-option-{{ forloop.index0 }}" class="swatch" data-option-index="{{ forloop.index0 }}">\n                  {% for value in option.values %}\n\n                    {% assign variant_label_state = true %}\n\n                    {% if product.options.size == 1 %}\n                      {% unless product.variants[forloop.index0].available %}\n                        {% assign variant_label_state = false %}\n                      {% endunless %}\n                    {% endif %}\n\n                    <input type="radio"\n                      {% if option.selected_value == value %} checked="checked"{% endif %}\n                      {% unless variant_label_state %} disabled="disabled"{% endunless %}\n                      value="{{ value | escape }}"\n                      data-index="option{{ forloop.index }}"\n                      name="{{ option.name | handleize }}"\n                      id="{{uniqId}}-option-{{ option.name | handleize }}-{{ value | escape }}"\n                      style="display: none">\n\n                    {% if downcased_option == \'color\' %}\n                      <label\n                        class="color color--{{ value | escape | downcase }}"\n                        for="{{uniqId}}-option-{{ option.name | handleize }}-{{ value | escape }}">\n                        <div class="color__btn"></div>\n                      </label>\n                    {% endif %}\n\n                    {% if downcased_option == \'size\' %}\n                      <label\n                        class="size {% unless variant_label_state %}size--unavailable {% endunless %}"\n                        for="{{uniqId}}-option-{{ option.name | handleize }}-{{ value | escape }}">\n                        {{ value }}\n                      </label>\n                    {% endif %}\n                  {% endfor %}\n                </div>\n\n          {% if downcased_option == \'size\' or downcased_option == \'color\' %}\n              </div>\n            </div>\n          {% endif %}\n\n        {% endif %}\n    {% endfor %}\n  {% endunless %}\n')),Object(r.b)("h3",{id:"how-to-use-it"},"How to use it"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"E.g. use it on a product page")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In your Shopify workspace go to your liquid product page"),Object(r.b)("li",{parentName:"ul"},"Put this code inside your product form (As you can see we hide the select and put a custom id)",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'  \x3c!-- Variants Selector --\x3e\n  <select id="put your a custom id here" name="id" style="display:none">\n    {% for variant in product.variants %}\n      <option value="{{ variant.id }}">{{ variant.title }}</option>\n    {% endfor %}\n  </select>\n  \x3c!-- /Variants Selector --\x3e\n'))),Object(r.b)("li",{parentName:"ul"},"Include your swatch liquid file inside your product form where you want",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"  {% include 'swatch' with option: 'Color', uniqId: uniqId %}\n  {% include 'swatch' with option: 'Size', uniqId: uniqId %}\n")),Object(r.b)("em",{parentName:"li"},"As you can see we pass the variant name and a uniqId")),Object(r.b)("li",{parentName:"ul"},"At the end of the file add",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"  <script>\n    jQuery(document).ready(function(){\n      new ShpCustom.Swatch('{{uniqId}}', '{{variantSelectId}}', {{ product | json}});\n    })\n  <\/script>\n"))),Object(r.b)("li",{parentName:"ul"},"Don't forget to add class to :",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Add To Cart Button")," ",Object(r.b)("inlineCode",{parentName:"li"},"js-add-to-cart"))))))}s.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),s=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=s(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||r;return n?i.a.createElement(m,l({ref:t},d,{components:n})):i.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);