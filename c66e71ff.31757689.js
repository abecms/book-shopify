(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),r=(n(0),n(152)),s={},c={id:"dev/theme",title:"theme",description:"## Th\xe8me / Liquid",source:"@site/docs/dev/theme.md",permalink:"/docs/dev/theme",sidebar:"docs",previous:{title:"shopifyplus",permalink:"/docs/shopifyplus"},next:{title:"app",permalink:"/docs/dev/app"}},o=[{value:"Th\xe8me / Liquid",id:"th\xe8me--liquid",children:[]},{value:"Training",id:"training",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Structure of your theme",id:"structure-of-your-theme",children:[{value:"diffence between section and snippet",id:"diffence-between-section-and-snippet",children:[]}]},{value:"Create a section",id:"create-a-section",children:[]},{value:"Create a snippet",id:"create-a-snippet",children:[]},{value:"insert a js",id:"insert-a-js",children:[]},{value:"insert a css",id:"insert-a-css",children:[]},{value:"nested sections",id:"nested-sections",children:[]},{value:"Image management",id:"image-management",children:[{value:"Crop an image",id:"crop-an-image",children:[]},{value:"Scale an image",id:"scale-an-image",children:[]},{value:"responsive image",id:"responsive-image",children:[]},{value:"Responsive background image",id:"responsive-background-image",children:[]}]},{value:"Product",id:"product",children:[]},{value:"Newsletter Section",id:"newsletter-section",children:[]},{value:"Translations",id:"translations",children:[]},{value:"Google Tag Manager",id:"google-tag-manager",children:[]},{value:"Ajouter un produit automatiquement au panier",id:"ajouter-un-produit-automatiquement-au-panier",children:[]}],l={rightToc:o};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"th\xe8me--liquid"},"Th\xe8me / Liquid"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"liquid examples : ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://shopify.github.io/liquid-code-examples/"}),"https://shopify.github.io/liquid-code-examples/")),Object(r.b)("li",{parentName:"ul"},"doc : ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://help.shopify.com/en/themes/liquid/basics"}),"https://help.shopify.com/en/themes/liquid/basics")),Object(r.b)("li",{parentName:"ul"},"Cheat sheet : ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.shopify.ca/partners/shopify-cheat-sheet"}),"https://www.shopify.ca/partners/shopify-cheat-sheet")),Object(r.b)("li",{parentName:"ul"},"Theme kit : ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://shopify.github.io/themekit/"}),"https://shopify.github.io/themekit/")),Object(r.b)("li",{parentName:"ul"},"Theme template doc : ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://help.shopify.com/en/themes/development/templates"}),"https://help.shopify.com/en/themes/development/templates")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"                 https://help.shopify.com/en/themes\n"))),Object(r.b)("li",{parentName:"ul"},"Tuto theme design : ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/playlist?list=PLlMkWQ65HlcEJMRRdnqxpbGImqBkIOctd"}),"https://www.youtube.com/playlist?list=PLlMkWQ65HlcEJMRRdnqxpbGImqBkIOctd")),Object(r.b)("li",{parentName:"ul"},"starter theme : ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Shopify/starter-theme"}),"https://github.com/Shopify/starter-theme"))),Object(r.b)("h2",{id:"training"},"Training"),Object(r.b)("p",null,"partner academy : ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://partner-training.shopify.com/my_courses"}),"https://partner-training.shopify.com/my_courses")),Object(r.b)("h1",{id:"theme"},"Theme"),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"From june 2019 , Shopify has generalized the concept of Section (the equivalent of our Sticker Blocks). The section allows you to create a template by assembling sections.\nIn the Back-office, user could add/move/configure sections."),Object(r.b)("h2",{id:"structure-of-your-theme"},"Structure of your theme"),Object(r.b)("p",null,"When you create a page based on stickers, you :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a layout"),Object(r.b)("li",{parentName:"ul"},"Create a template (which uses a layout)"),Object(r.b)("li",{parentName:"ul"},"Add section in this template (you may add sections to layout too)"),Object(r.b)("li",{parentName:"ul"},"Create snippets inside sections")),Object(r.b)("p",null,"| CAUTION : Your assets directory can't have subdirectories, nor the other folders ! (no /images subdirectory, not /fonts etc..."),Object(r.b)("h3",{id:"diffence-between-section-and-snippet"},"diffence between section and snippet"),Object(r.b)("p",null,"Sections divide your page into blocks of content. Snippets are reusable components across the site which can be rendered inside your sections, your templates, or even under your layout."),Object(r.b)("p",null,"Think your sections as big functional components while snippets are more little chunks of code composing your sections, templates or layouts."),Object(r.b)("h2",{id:"create-a-section"},"Create a section"),Object(r.b)("p",null,"use the ",Object(r.b)("inlineCode",{parentName:"p"},"section")," tag :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{% section 'header' %}\n")),Object(r.b)("p",null,"And create the related file in the ",Object(r.b)("inlineCode",{parentName:"p"},"sections"),"directory of your theme"),Object(r.b)("h2",{id:"create-a-snippet"},"Create a snippet"),Object(r.b)("p",null,"use the ",Object(r.b)("inlineCode",{parentName:"p"},"render"),"tag :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{% render 'cp-header' %}\n")),Object(r.b)("p",null," And create the related file in the ",Object(r.b)("inlineCode",{parentName:"p"},"snippets")," directory of your theme"),Object(r.b)("h2",{id:"insert-a-js"},"insert a js"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'<script src="{{ \'vendors.js\' | asset_url }}" defer="defer"><\/script>')),Object(r.b)("h2",{id:"insert-a-css"},"insert a css"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"{{ 'app.css' | asset_url | stylesheet_tag }}")),Object(r.b)("h2",{id:"nested-sections"},"nested sections"),Object(r.b)("p",null,"To incule sections inside sections (taken from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://community.shopify.com/c/Shopify-Design/Nested-Sections/m-p/424873"}),"https://community.shopify.com/c/Shopify-Design/Nested-Sections/m-p/424873"),") :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{% capture sidebar_content_1 %}{% section 'sidebar-1' %}{% endcapture %}\n{% capture sidebar_content_2 %}{% section 'sidebar-2' %}{% endcapture %}\n\n{% assign sidebar_content_1 = sidebar_content1 | replace: 'class=\"shopify-section\"', 'class=\"shopify-section-nested\"' %}\n{% assign sidebar_content_2 = sidebar_content2 | replace: 'class=\"shopify-section\"', 'class=\"shopify-section-nested\"' %}\n\n{% capture collection_template_content %}\n    {% section 'collection' %}\n{% endcapture %}\n\n{% assign collection_template_content = collection_template_content | replace: \"%%SIDEBAR-1%%\", sidebar_content_1 %}\n{% assign collection_template_content = collection_template_content | replace: \"%%SIDEBAR-2%%\", sidebar_content_2 %}\n\n{{collection_template_content}}\n")),Object(r.b)("h2",{id:"image-management"},"Image management"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.shopify.com/partners/blog/img-url-filter"}),"https://www.shopify.com/partners/blog/img-url-filter"),"\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.shopify.com/partners/blog/using-responsive-images"}),"https://www.shopify.com/partners/blog/using-responsive-images")),Object(r.b)("p",null,"All of the following techniques apply to :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"img_url"),Object(r.b)("li",{parentName:"ul"},"product_img_url"),Object(r.b)("li",{parentName:"ul"},"collection_img_url"),Object(r.b)("li",{parentName:"ul"},"article_img_url")),Object(r.b)("p",null,"use the ",Object(r.b)("inlineCode",{parentName:"p"},"img_url")," filter to format an image URL :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{{ product.featured_image | img_url: '100x100' }}\n")),Object(r.b)("p",null,"You notice that you may select a size ",Object(r.b)("inlineCode",{parentName:"p"},"100x100"),". You can also select only a width or only a height :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"width : {{ product.featured_image | img_url: '100x' }}\nheight : {{ product.featured_image | img_url: 'x100' }}\n")),Object(r.b)("p",null,"You can also generate the full ",Object(r.b)("inlineCode",{parentName:"p"},"<img/>")," tag :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{{ product.featured_image | img_url: '100x100' | img_tag }}\n")),Object(r.b)("h3",{id:"crop-an-image"},"Crop an image"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{{ product.featured_image | img_url: '450x450\u2019, crop: \u2018center\u2019 }}\n")),Object(r.b)("h3",{id:"scale-an-image"},"Scale an image"),Object(r.b)("p",null,"we can also request a certain pixel density using the scale parameter."),Object(r.b)("p",null,"The two valid options are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"2"),Object(r.b)("li",{parentName:"ul"},"3")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{ product.featured_image | img_url: '450x450\u2019, crop: \u2018center\u2019, scale: 2 }}\n")),Object(r.b)("h3",{id:"responsive-image"},"responsive image"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'<img id="{{ img_id }}"\n    class="article__grid-image lazyload"\n    src="{{ article.image | img_url: \'300x300\' }}"\n    data-src="{{ img_url }}"\n    data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"\n    data-aspectratio="{{ article.image.aspect_ratio }}"\n    data-sizes="auto">\n')),Object(r.b)("p",null,"The different sizes will be used depending on the browser definition and size."),Object(r.b)("p",null,"Note the class ",Object(r.b)("inlineCode",{parentName:"p"},"lazyload")," which pertains to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aFarkas/lazysizes"}),"https://github.com/aFarkas/lazysizes"),"\nWhat this plugin does is temporarily preload a small image as a placeholder, while the correct image is loads. This reduces any time when a blank space would be shown where the slideshow should appear."),Object(r.b)("h3",{id:"responsive-background-image"},"Responsive background image"),Object(r.b)("p",null,"Dynamically making a background image is not easy. Here is the trick to make it possible :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"<style>\n    /* default screen, non-retina */\n    .intro {\n      background-image: url({{ section.settings.image | img_url: '720x' }});\n    }\n    @media (min-width: 992px) {\n      /* Small screen, non-retina */\n      .intro {\n        background-image: url({{ section.settings.image | img_url: '1350x' }});\n      }\n    }\n</style>\n    <div class=\"intro\">\n   ...\n </div>\n")),Object(r.b)("p",null,"In this example of a liquid section, you see that we define a style depending on the screen size and apply it to the class ",Object(r.b)("inlineCode",{parentName:"p"},"intro"),"."),Object(r.b)("h2",{id:"product"},"Product"),Object(r.b)("p",null,"Display the corresponding media on your product page :\n1. In your product template:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{% for media in product.media %}\n   {% include 'media' %}\n{% endfor %}\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Create a media snippet :")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{% case media.media_type %}\n      {% when \'image\' %}\n      {% when \'external_video\' %}\n        <div class="product-single__media" style="padding-top: {{ 1 | divided_by: media.aspect_ratio | times: 100}}%;" data-media-id="{{ media.id }}">\n          {{ media | external_video_tag }}\n        </div>\n      {% when \'video\' %}\n        <div class="product-single__media" data-media-id="{{ media.id }}">\n          {{ media | video_tag: controls: true }}\n        </div>\n      {% when \'model\' %}\n        <div class="product-single__media" style="padding-top: 100%" data-media-id="{{ media.id }}">\n          {{ media | model_viewer_tag }}\n        </div>\n      {% else %}\n        <div class="product-single__media" style="padding-top: 100%;" data-media-id="{{ media.id }}">\n          {{ media | media_tag }}\n        </div>\n{% endcase %}\n')),Object(r.b)("h2",{id:"newsletter-section"},"Newsletter Section"),Object(r.b)("p",null,"This section is an example of a fully functional newsletter including the possibility for the admin to enter the title and label of the newsletter."),Object(r.b)("p",null,"Don't forget to add translations for the submit button and placeholder in the locales files."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'<div class="cp-newsletter" data-section-id="{{ section.id }}" data-section-type="newsletter-section">\n{%- if section.settings.image != blank -%}\n  <style>\n    /* default screen, non-retina */\n    .newsletter .newsletter__inner {\n      background-image: url({{ section.settings.image | img_url: \'720x\' }});\n    }\n    @media (min-width: 992px) {\n      /* Small screen, non-retina */\n      .newsletter .newsletter__inner {\n        background-image: url({{ section.settings.image | img_url: \'1350x\' }});\n      }\n    }\n  </style>\n    <div class="newsletter">\n        <div class="section">\n            <div class="container-fluid">\n                <div class="newsletter__inner">\n                    <div class="newsletter__content">\n                        <h2 class="newsletter__title">\n                            {{ section.settings.title | escape }}\n                        </h2>\x3c!-- /.newsletter__title --\x3e\n\n                        <div class="newsletter__entry">\n                            <p>\n                                {{ section.settings.label | escape }}\n                            </p>\n                        </div>\x3c!-- /.newsletter__entry --\x3e\n                    </div>\x3c!-- /.newsletter__content --\x3e\n\n                    <div class="newsletter__actions">\n                        <div class="subscribe">\n                            {%- assign formId = \'Contact_\' | append: section.id -%}\n                            {% form \'customer\', id: formId, novalidate: \'novalidate\', class: \'contact-form form-single-field\' %}\n                            {%- if form.posted_successfully? -%}\n                                <p class="form-message form-message--success" style="color:#fff" tabindex="-1" data-form-status>\n                                {{ \'general.newsletter_form.confirmation\' | t }}\n                                </p>\n                            {%- else -%}\n                                <input type="hidden" name="contact[tags]" value="newsletter">\n                                <div class="input-group {% if form.errors %} input-group--error{% endif %}">\n                                    <input type="email"\n                                    name="contact[email]"\n                                    id="{{ formId }}-email"\n                                    class="form-control subscribe__field{% if form.errors %} input--error{% endif %}"\n                                    value="{{ form.email }}"\n                                    placeholder="{{ \'general.newsletter_form.email_placeholder\' | t }}"\n                                    aria-label="{{ \'general.newsletter_form.email_placeholder\' | t }}"\n                                    aria-required="true"\n                                    autocorrect="off"\n                                    autocapitalize="off"\n                                    {% if form.errors %}\n                                        aria-invalid="true"\n                                        aria-describedby="{{ formId }}-email-error"\n                                        data-form-status\n                                    {% endif %}\n                                    >\n                                    <button type="submit" class="subscribe__btn" name="commit" id="Subscribe" style="z-index:5">\n                                        <span>{{ \'general.newsletter_form.submit\' | t }}</span>\n                                    </button>\n                                </div>\n                                {%- if form.errors contains \'email\' -%}\n                                    <span id="{{ formId }}-email-error" class="input-error-message">\n                                    <span class="visually-hidden">{{ \'general.accessibility.error\' | t }} </span>\n                                    {% render \'icon-error\' %}\n                                    <span>{{ form.errors.translated_fields[\'email\'] | capitalize }} {{ form.errors.messages[\'email\'] }}.</span>\n                                    </span>\n                                {%- endif -%}\n                            {%- endif -%}\n                            {% endform %}\n                        </div>\x3c!-- /.subscribe --\x3e\n                    </div>\x3c!-- /.newsletter__actions --\x3e\n                </div>\x3c!-- /.newsletter__inner --\x3e\n            </div>\x3c!-- /.container-fluid --\x3e\n        </div>\x3c!-- /.section --\x3e\n    </div>\x3c!-- /.newsletter --\x3e\n{%- endif -%}\n</div>\x3c!-- /.cp-newsletter --\x3e\n\n{% schema %}\n{\n  "name": {\n    "en": "Newsletter",\n    "fr": "Newsletter"\n  },\n  "class": "index-section index-section--flush",\n  "settings": [\n    {\n      "type": "image_picker",\n      "id": "image",\n      "label": {\n        "en": "Image",\n        "fr": "Image"\n      }\n    },\n    {\n      "type": "text",\n      "id": "title",\n      "label": {\n        "en": "Title",\n        "fr": "Titre"\n      },\n      "default": {\n          "en" : "Subscribe to our newsletter",\n          "fr" : "S\'inscrire \xe0 notre newsletter"\n      }\n    },\n    {\n      "type": "text",\n      "id": "label",\n      "label": {\n        "en": "Label",\n        "fr": "Label"\n      },\n      "default": {\n          "en" : "Stay informed",\n          "fr" : "Restez inform\xe9 de nos bons plans et nouveaut\xe9s"\n      }\n    },\n    {\n      "type": "paragraph",\n      "content": {\n        "da": "Alle kunder, der tilmelder sig, f\xe5r oprettet en konto i Shopify. [Se kunder](/admin/customers?query=&accepts_marketing=1)",\n        "de": "Alle Kunden, die sich eintragen, bekommen ein Konto in Shopify. [Kunden ansehen](/admin/customers?query=&accepts_marketing=1)",\n        "en": "Any customers who sign up will have an account created for them in Shopify. [View customers](/admin/customers?query=&accepts_marketing=1)",\n        "es": "Todos los clientes que se registren tendr\xe1n una cuenta creada para ellos en Shopify. [Ver clientes](/admin/customers?query=&accepts_marketing=1)",\n        "fi": "Tilaaville asiakkaille luodaan tili Shopify-palvelussa. [N\xe4yt\xe4 asiakkaat](/admin/customers?query=&accepts_marketing=1)",\n        "fr": "Tous les clients qui s\'inscrivent auront un compte cr\xe9\xe9 pour eux sur Shopify. [Voir les clients](/admin/customers?query=&accepts_marketing=1)",\n        "hi": "\u0938\u093e\u0907\u0928 \u0905\u092a \u0915\u0930\u0928\u0947 \u0935\u093e\u0932\u0947 \u0915\u093f\u0938\u0940 \u092d\u0940 \u0917\u094d\u0930\u093e\u0939\u0915 \u0915\u0947 \u0932\u093f\u090f Shopify \u092e\u0947\u0902 \u090f\u0915 \u0916\u093e\u0924\u093e \u092c\u0928\u093e\u092f\u093e \u091c\u093e\u090f\u0917\u093e. [\u0917\u094d\u0930\u093e\u0939\u0915 \u0926\u0947\u0916\u0947\u0902](/admin/customers?query=&accepts_marketing=1)",\n        "it": "Qualsiasi cliente che si iscrive avr\xe0 un account creato appositamente su Shopify. [Visualizza clienti](/admin/customers?query=&accepts_marketing=1)",\n        "ja": "\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u305f\u304a\u5ba2\u69d8\u306f\u3001Shopify\u3067\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002[\u304a\u5ba2\u69d8\u3092\u8868\u793a](/admin/customers?query=&accepts_marketing=1)",\n        "ko": "\uac00\uc785\ud55c \uace0\uac1d\uc740 Shopify\uc5d0\uc11c \uc0dd\uc131\ub41c \uacc4\uc815\uc744 \ubcf4\uc720\ud558\uac8c \ub429\ub2c8\ub2e4. [\uace0\uac1d\ubcf4\uae30](/admin/customers? query=& accepts_marketing=1)",\n        "ms": "Mana-mana pelanggan yang mendaftar akan mempunyai akaun yang dicipta untuk mereka di Shopify. [Lihat pelanggan](/admin/pelanggan?Query=&accepts_marketing=1)",\n        "nb": "Alle kunder som melder seg p\xe5, vil f\xe5 opprettet en konto i Shopify. [Se kunder](/admin/customers?query=&accepts_marketing=1)",\n        "nl": "Voor alle klanten die zich aanmelden, wordt een Shopify-account gemaakt. [Klanten weergeven](/admin/customers?query=&accepts_marketing=1)",\n        "pt-BR": "Todos os clientes que se inscreverem ter\xe3o uma conta criada para eles na Shopify. [View customers](/admin/customers?query=&accepts_marketing=1)",\n        "pt-PT": "Ser\xe1 criada uma conta na Shopify para todos os clientes que se registarem. [Ver clientes](/admin/customers?query=&accepts_marketing=1)",\n        "sv": "Alla kunder som registrerar sig kommer att f\xe5 ett konto skapat i Shopify. [Visa kunder](/ admin / kunder? Query = & accepts_marketing = 1)",\n        "th": "\u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e30\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e43\u0e19 Shopify \u0e43\u0e2b\u0e49\u0e41\u0e01\u0e48\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e23\u0e32\u0e22\u0e43\u0e14\u0e01\u0e47\u0e15\u0e32\u0e21\u0e17\u0e35\u0e48\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19 [\u0e14\u0e39\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32](/admin/customers?query=&accepts_marketing=1)",\n        "zh-CN": "\u4efb\u4f55\u6ce8\u518c\u7528\u6237\u90fd\u5c06\u5728 Shopify \u4e2d\u62e5\u6709\u4e00\u4e2a\u4e3a\u4ed6\u4eec\u521b\u5efa\u7684\u5e10\u6237\u3002[\u67e5\u770b\u5ba2\u6237](/admin/customers?query=&accepts_marketing=1)",\n        "zh-TW": "\u9867\u5ba2\u8a3b\u518a\u5f8c\u5c31\u53ef\u4ee5\u64c1\u6709 Shopify \u5e33\u6236\u3002[\u6aa2\u8996\u9867\u5ba2](/admin/customers?query=&accepts_marketing=1)"\n      }\n    }\n  ],\n  "presets": [\n    {\n        "name": {\n            "en": "Newsletter",\n            "fr": "Newsletter"\n        },\n        "category": {\n            "en": "Promotional",\n            "fr": "Promotionnel"\n        }\n    }\n  ]\n}\n{% endschema %}\n')),Object(r.b)("h2",{id:"translations"},"Translations"),Object(r.b)("p",null,"To prepare your theme for translation, use the files in /locales\nexample (en.default.json):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "general": {\n    "newsletter_form": {\n      "email_placeholder": "Email address",\n      "confirmation": "Thanks for subscribing!",\n      "submit": "OK"\n    }\n  }\n}\n')),Object(r.b)("p",null,"fr.json:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "general": {\n    "newsletter_form": {\n      "email_placeholder": "Votre adresse email",\n      "confirmation": "Merci pour votre inscription!",\n      "submit": "OK"\n    }\n  }\n}\n')),Object(r.b)("p",null,"You'll use these labels in your liquid templates:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{{ 'general.newsletter_form.confirmation' | t }}\n")),Object(r.b)("h2",{id:"google-tag-manager"},"Google Tag Manager"),Object(r.b)("p",null,"Below is the code you would enter in the additional content & scripts of then settings>checkout area of Shopify. This will allow you to create variables in google tag manager, that you can then use in the conversion tracking pixels."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"<script>\n window.dataLayer = window.dataLayer || [];\n window.dataLayer.push({\n    'ecomm__orderValue': '{{ checkout.total_price | money_without_currency }}',\n    'ecomm__orderNumber': '{{ checkout.order_number }}',\n    'ecomm__itemCount': '{{ line_items.size }}',\n    'ecomm__customerEmail': '{{ checkout.customer.email }}'\n });\n<\/script>\n")),Object(r.b)("h2",{id:"ajouter-un-produit-automatiquement-au-panier"},"Ajouter un produit automatiquement au panier"),Object(r.b)("p",null,"Dans l'exemple, on v\xe9rifie que le produit n'est pas d\xe9j\xe0 dans le panier et que le montant du panier est > 100 (il est calcul\xe9 en cents)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"><\/script>\n{% assign found_title = false %}\n{% for item in checkout.line_items %}\n  {% if item.variant.id == 7387208286253 %}\n    {% assign found_title = true %}\n  {% endif %}\n{% endfor %}\n\n{% if checkout.subtotal_price > 10000 and found_title == false %}\n<script>\n  $( document ).ready(function() {\n      var variantId = 7387208286253;\n      jQuery.post('/cart/add.js', {\n        quantity: 1,\n        id: variantId\n      });\n      setTimeout(\n        function() {\n          window.location.reload(true);\n        }, 1000);\n  });\n<\/script>\n{% endif %}\n")))}p.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.a.createElement(b,c({ref:t},l,{components:n})):i.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);