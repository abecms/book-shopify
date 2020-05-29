(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{146:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(1),a=t(9),c=(t(0),t(149)),s={},i={id:"dynamisation/search",title:"search",description:"# Search",source:"@site/docs/dynamisation/search.md",permalink:"/docs/dynamisation/search",sidebar:"docs",previous:{title:"product",permalink:"/docs/dynamisation/product"},next:{title:"cart",permalink:"/docs/dynamisation/cart"}},l=[{value:"Autocomplete search",id:"autocomplete-search",children:[]},{value:"Use the regular search as autocomplete or to get JSON results",id:"use-the-regular-search-as-autocomplete-or-to-get-json-results",children:[]}],o={rightToc:l};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"search"},"Search"),Object(c.b)("h2",{id:"autocomplete-search"},"Autocomplete search"),Object(c.b)("p",null,"We will use the Ajax Predictive search / autocomplete form Shopify"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Create the HTML")),Object(c.b)("p",null,"We build the search bar + the template used to display a slider of results (we've created a snippet 'cp-header_search.liquid used in our theme.liquid layout)"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'<div class="cp-search-result">\n    <div class="cards-search js-search-result">\n        <div class="container-fluid">\n            <div class="cards__inner">\n                <div class="cards__head">\n                    <p>\n                        <strong>41</strong> produits trouv\xe9s pour \xab\xa0costu\xa0\xbb\n                    </p>\n                </div>\x3c!-- /.cards__head --\x3e\n\n                <div class="cards__body">\n                    <div class="slider-search-results">\n                        <div class="swiper-container">\n                            <div class="swiper-wrapper">\n                            </div>\x3c!-- /.swiper-wrapper --\x3e\n                        </div>\x3c!-- /.swiper-container --\x3e\n                    </div>\x3c!-- /.slider-search-results --\x3e\n                </div>\x3c!-- /.cards__body --\x3e\n\n                <div class="cards__actions">\n                    <a href="/search?q=" class="btn btn--dark-full">\n                        Afficher tous les resultats\n                    </a>\n                </div>\x3c!-- /.cards__actions --\x3e\n            </div>\x3c!-- /.cards__inner --\x3e\n        </div>\x3c!-- /.container-fluid --\x3e\n    </div>\x3c!-- /.cards-search --\x3e\n</div>\x3c!-- /.cp-search-result --\x3e\n<div class="cp-header_search">\n    <div class="search js-search">\n        <div class="search__overlay js-search-overlay"></div>\x3c!-- /.search__overlay --\x3e\n\n        <div class="search__inner">\n            <button type="button" class="search__close js-search-close">\n                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n                    <path fill="currentColor" d="M10.024 9.265L9.758 9l.266-.265 7.819-7.82a.532.532 0 0 0 0-.757.532.532 0 0 0-.758 0l-7.82 7.818L9 8.242l-.265-.266L.915.158a.532.532 0 0 0-.758 0 .533.533 0 0 0 0 .759l7.82 7.818.265.265-.266.265-7.819 7.82a.536.536 0 0 0 .758.758l7.82-7.82L9 9.758l.265.265 7.82 7.82a.532.532 0 0 0 .758 0c.21-.21.21-.55 0-.759z"/>\n                </svg>\n            </button>\n\n            <form action="?" method="get">\n                <div class="search__inner">\n                    <label for="q" class="hidden">{{ \'general.search.search\' | t }}</label>\n\n                    <input type="search" name="q" id="q" value="" placeholder="{{ \'general.search.search_product\' | t }}" class="search__field js-search-field">\n\n                    <button type="submit" class="search__btn"></button>\n                </div>\x3c!-- /.search__inner --\x3e\n            </form>\n        </div>\x3c!-- /.search__inner --\x3e\n    </div>\x3c!-- /.search --\x3e\n</div>\x3c!-- /.cp-header_search --\x3e\n<script id="tpl-search-result" type="template">\n    <div class="swiper-slide">\n        <div class="card-product">\n            <div class="card__inner">\n                <a href="{-url-}">\n                    <div class="card__image" style="background-image: url({-image-});">\n                        \x3c!--div class="card__new">\n                            <span>nouveau</span>\n                        </div--\x3e\x3c!-- /.card__new --\x3e\n                    </div>\x3c!-- /.card__image --\x3e\n                </a>\n                <div class="card__content">\n                    <div class="card__head">\n                        <h4 class="card__title">\n                            {-title-}\n                        </h4>\x3c!-- /.card__title --\x3e\n\n                        <div class="card__icon">\n                            <a href="#">\n                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">\n                                    <path d="M10.32.87c1.566 0 2.84 1.284 2.84 2.862v10.773a.422.422 0 0 1-.424.425.41.41 0 0 1-.239-.08L7 11.358l-5.509 3.5a.414.414 0 0 1-.428.023.423.423 0 0 1-.223-.372V3.732C.84 2.154 2.114.87 3.68.87zm2.004 2.861a2.023 2.023 0 0 0-2.005-2.019h-6.64c-1.101.004-2 .91-2.003 2.02v9.975l5.094-3.21a.424.424 0 0 1 .23-.069.42.42 0 0 1 .243.08l5.08 3.199z"/>\n                                </svg>\n                            </a>\n                        </div>\x3c!-- /.card__icon --\x3e\n                    </div>\x3c!-- /.card__head --\x3e\n\n                    <div class="card__price">\n                        <p>\n                            {-price-}\u20ac\n                        </p>\n                    </div>\x3c!-- /.card__price --\x3e\n                </div>\x3c!-- /.card__content --\x3e\n            </div>\x3c!-- /.card__inner --\x3e\n        </div>\x3c!-- /.card-product --\x3e\n    </div>\x3c!-- /.swiper-slide --\x3e\n<\/script>\n')),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"We create our js function :")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"\n  function initSearch() {\n    var trigger = document.querySelector('.js-search-trigger');\n    var search = document.querySelector('.js-search');\n    var searchResult = document.querySelector('.js-search-result');\n\n    if (search !== null) {\n      var searchClose = search.querySelector('.js-search-close');\n      var searchField = search.querySelector('.js-search-field');\n      var searchCloseOverlay = search.querySelector('.js-search-overlay');\n\n      trigger.addEventListener('click', function (event) {\n        event.preventDefault();\n\n        search.classList.add('active');\n        setTimeout(function () {\n          searchField.focus();\n        }, 1000);\n      });\n\n      searchClose.addEventListener('click', function () {\n        search.classList.remove('active');\n        searchResult.classList.remove('active');\n      });\n\n      searchCloseOverlay.addEventListener('click', function () {\n        search.classList.remove('active');\n        searchResult.classList.remove('active');\n      });\n\n      searchField.addEventListener('keyup', function () {\n        if (this.value !== '') {\n          jQuery.getJSON(\"/search/suggest.json\", {\n            \"q\": this.value,\n            \"resources\": {\n              \"type\": \"product\",\n              \"limit\": 10,\n              \"options\": {\n                \"unavailable_products\": \"last\",\n                \"fields\": \"title,product_type,variants.title\"\n              }\n            }\n          }).done(function(response) {\n            jQuery('.slider-search-results .swiper-wrapper').empty()\n            var productSuggestions = response.resources.results.products;\n\n            if (productSuggestions.length > 0) {\n              var temp = jQuery.trim(jQuery('#tpl-search-result').html());\n              jQuery.each(productSuggestions, function (index, obj) {\n                var x = temp.replace(/{-title-}/ig, obj.title).replace(/{-image-}/ig, obj.image).replace(/{-price-}/ig, obj.price).replace(/{-url-}/ig, obj.url);\n                jQuery('.slider-search-results .swiper-wrapper').append(x);\n              });\n              sliderSearchCards()\n              searchResult.classList.add('active');\n            }\n          });\n        } else {\n          searchResult.classList.remove('active');\n        }\n      });\n    }\n  }\n\n  initSearch();\n")),Object(c.b)("p",null,"Everytime a customer keys a letter in the search input, we call the predictive API and display the result (# of results is limited to 10)"),Object(c.b)("h2",{id:"use-the-regular-search-as-autocomplete-or-to-get-json-results"},"Use the regular search as autocomplete or to get JSON results"),Object(c.b)("p",null,"Inspired by ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://community.shopify.com/c/Shopify-Design/DIY-Implementing-Autocomplete-with-Search/m-p/59750"}),"https://community.shopify.com/c/Shopify-Design/DIY-Implementing-Autocomplete-with-Search/m-p/59750"),"\nIf you want to use the search URI as a json provider :"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Create a template search.json.liquid with this content:")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'{% layout none %}\n{\n  "results_count": {{ search.results_count }}\n}\n')),Object(c.b)("p",null,"It tells Shopify to bypass the theme layout and renders a json Object (in this example, we just need the # of results)"),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"Create your template for displaying your results (the search input is not displayed here, please refer to the previous chapter (",Object(c.b)("inlineCode",{parentName:"li"},"## Autocomplete search"),") for example):")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'<script id="tpl-search-result-header" type="template">\n    <p>\n        <strong>{-qty-}</strong> produits trouv\xe9s pour \xab\xa0{-term-}\xa0\xbb\n    </p>\n<\/script>\n')),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"Your js to trigger the call and prepare the results")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"\n  function initSearch() {\n    var trigger = document.querySelector('.js-search-trigger');\n    var search = document.querySelector('.js-search');\n    var searchResult = document.querySelector('.js-search-result');\n\n    if (search !== null) {\n      var searchClose = search.querySelector('.js-search-close');\n      var searchField = search.querySelector('.js-search-field');\n      var searchCloseOverlay = search.querySelector('.js-search-overlay');\n\n      trigger.addEventListener('click', function (event) {\n        event.preventDefault();\n\n        search.classList.add('active');\n        setTimeout(function () {\n          searchField.focus();\n        }, 1000);\n      });\n\n      searchClose.addEventListener('click', function () {\n        search.classList.remove('active');\n        searchResult.classList.remove('active');\n      });\n\n      searchCloseOverlay.addEventListener('click', function () {\n        search.classList.remove('active');\n        searchResult.classList.remove('active');\n      });\n\n      searchField.addEventListener('keyup', function () {\n        if (this.value !== '') {\n          var q = this.value\n          jQuery.getJSON('/search?type=product&q=' + this.value + '*&view=json').done(function (response) {\n            var temp = jQuery.trim(jQuery('#tpl-search-result-header').html());\n            jQuery('.cards-search .cards__actions a').attr('href', '/search?q='+q);\n            jQuery('.cards-search .cards__head').empty();\n            var x = temp.replace(/{-qty-}/ig, response.results_count).replace(/{-term-}/ig, q);\n            console.log('header search', x);\n\n            jQuery('.cards-search .cards__head').append(x);\n          })\n        } else {\n          searchResult.classList.remove('active');\n        }\n      });\n    }\n  }\n\n  initSearch();\n")))}u.isMDXComponent=!0},149:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return v}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),u=function(e){var r=a.a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i({},r,{},e)),t},d=function(e){var r=u(e.components);return a.a.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},h=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=u(t),h=n,v=d["".concat(s,".").concat(h)]||d[h]||p[h]||c;return t?a.a.createElement(v,i({ref:r},o,{components:t})):a.a.createElement(v,i({ref:r},o))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,s=new Array(c);s[0]=h;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var o=2;o<c;o++)s[o]=t[o];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);