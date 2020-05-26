## Thème / Liquid
- liquid examples : https://shopify.github.io/liquid-code-examples/
- doc : https://help.shopify.com/en/themes/liquid/basics
- Cheat sheet : https://www.shopify.ca/partners/shopify-cheat-sheet
- Theme kit : https://shopify.github.io/themekit/
- Theme template doc : https://help.shopify.com/en/themes/development/templates
-                      https://help.shopify.com/en/themes
- Tuto theme design : https://www.youtube.com/playlist?list=PLlMkWQ65HlcEJMRRdnqxpbGImqBkIOctd
- starter theme : https://github.com/Shopify/starter-theme

## Training
partner academy : https://partner-training.shopify.com/my_courses


# Theme
## Introduction
From june 2019 , Shopify has generalized the concept of Section (the equivalent of our Sticker Blocks). The section allows you to create a template by assembling sections.
In the Back-office, user could add/move/configure sections.

## Structure of your theme
When you create a page based on stickers, you :
- Create a layout
- Create a template (which uses a layout)
- Add section in this template (you may add sections to layout too)
- Create snippets inside sections

| CAUTION : Your assets directory can't have subdirectories, nor the other folders ! (no /images subdirectory, not /fonts etc...

### diffence between section and snippet
Sections divide your page into blocks of content. Snippets are reusable components across the site which can be rendered inside your sections, your templates, or even under your layout.

Think your sections as big functional components while snippets are more little chunks of code composing your sections, templates or layouts.

## Create a section
use the ```section``` tag :
```
{% section 'header' %}
```

And create the related file in the ```sections```directory of your theme

## Create a snippet
use the ```render```tag :
```
{% render 'cp-header' %}
```
 And create the related file in the ```snippets``` directory of your theme

## insert a js
```<script src="{{ 'vendors.js' | asset_url }}" defer="defer"></script>```

## insert a css
```{{ 'app.css' | asset_url | stylesheet_tag }}```


## nested sections
To incule sections inside sections (taken from https://community.shopify.com/c/Shopify-Design/Nested-Sections/m-p/424873) :
```
{% capture sidebar_content_1 %}{% section 'sidebar-1' %}{% endcapture %}
{% capture sidebar_content_2 %}{% section 'sidebar-2' %}{% endcapture %}

{% assign sidebar_content_1 = sidebar_content1 | replace: 'class="shopify-section"', 'class="shopify-section-nested"' %}
{% assign sidebar_content_2 = sidebar_content2 | replace: 'class="shopify-section"', 'class="shopify-section-nested"' %}

{% capture collection_template_content %}
    {% section 'collection' %}
{% endcapture %}

{% assign collection_template_content = collection_template_content | replace: "%%SIDEBAR-1%%", sidebar_content_1 %}
{% assign collection_template_content = collection_template_content | replace: "%%SIDEBAR-2%%", sidebar_content_2 %}

{{collection_template_content}}
```

## Image management
https://www.shopify.com/partners/blog/img-url-filter
https://www.shopify.com/partners/blog/using-responsive-images

All of the following techniques apply to :
- img_url
- product_img_url
- collection_img_url
- article_img_url

use the ```img_url``` filter to format an image URL :
```
{{ product.featured_image | img_url: '100x100' }}
```

You notice that you may select a size ```100x100```. You can also select only a width or only a height :
```
width : {{ product.featured_image | img_url: '100x' }}
height : {{ product.featured_image | img_url: 'x100' }}
```

You can also generate the full ```<img/>``` tag :
```
{{ product.featured_image | img_url: '100x100' | img_tag }}
```

### Crop an image
```
{{ product.featured_image | img_url: '450x450’, crop: ‘center’ }}
```

### Scale an image
we can also request a certain pixel density using the scale parameter.

The two valid options are:
- 2
- 3

```
{ product.featured_image | img_url: '450x450’, crop: ‘center’, scale: 2 }}
```

### responsive image
```
<img id="{{ img_id }}"
    class="article__grid-image lazyload"
    src="{{ article.image | img_url: '300x300' }}"
    data-src="{{ img_url }}"
    data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
    data-aspectratio="{{ article.image.aspect_ratio }}"
    data-sizes="auto">
```

The different sizes will be used depending on the browser definition and size.

Note the class ```lazyload``` which pertains to https://github.com/aFarkas/lazysizes
What this plugin does is temporarily preload a small image as a placeholder, while the correct image is loads. This reduces any time when a blank space would be shown where the slideshow should appear.

### Responsive background image
Dynamically making a background image is not easy. Here is the trick to make it possible :

```
<style>
    /* default screen, non-retina */
    .intro {
      background-image: url({{ section.settings.image | img_url: '720x' }});
    }
    @media (min-width: 992px) {
      /* Small screen, non-retina */
      .intro {
        background-image: url({{ section.settings.image | img_url: '1350x' }});
      }
    }
</style>
	<div class="intro">
   ...
 </div>
```

In this example of a liquid section, you see that we define a style depending on the screen size and apply it to the class ```intro```.


## Product

Display the corresponding media on your product page :
1. In your product template:
```
{% for media in product.media %}
   {% include 'media' %}
{% endfor %}
```
2. Create a media snippet :
```
{% case media.media_type %}
      {% when 'image' %}
      {% when 'external_video' %}
        <div class="product-single__media" style="padding-top: {{ 1 | divided_by: media.aspect_ratio | times: 100}}%;" data-media-id="{{ media.id }}">
          {{ media | external_video_tag }}
        </div>
      {% when 'video' %}
        <div class="product-single__media" data-media-id="{{ media.id }}">
          {{ media | video_tag: controls: true }}
        </div>
      {% when 'model' %}
        <div class="product-single__media" style="padding-top: 100%" data-media-id="{{ media.id }}">
          {{ media | model_viewer_tag }}
        </div>
      {% else %}
        <div class="product-single__media" style="padding-top: 100%;" data-media-id="{{ media.id }}">
          {{ media | media_tag }}
        </div>
{% endcase %}
```

## Newsletter Section
This section is an example of a fully functional newsletter including the possibility for the admin to enter the title and label of the newsletter.

Don't forget to add translations for the submit button and placeholder in the locales files.

```
<div class="cp-newsletter" data-section-id="{{ section.id }}" data-section-type="newsletter-section">
{%- if section.settings.image != blank -%}
  <style>
    /* default screen, non-retina */
    .newsletter .newsletter__inner {
      background-image: url({{ section.settings.image | img_url: '720x' }});
    }
    @media (min-width: 992px) {
      /* Small screen, non-retina */
      .newsletter .newsletter__inner {
        background-image: url({{ section.settings.image | img_url: '1350x' }});
      }
    }
  </style>
	<div class="newsletter">
		<div class="section">
			<div class="container-fluid">
				<div class="newsletter__inner">
					<div class="newsletter__content">
						<h2 class="newsletter__title">
							{{ section.settings.title | escape }}
						</h2><!-- /.newsletter__title -->

						<div class="newsletter__entry">
							<p>
								{{ section.settings.label | escape }}
							</p>
						</div><!-- /.newsletter__entry -->
					</div><!-- /.newsletter__content -->

					<div class="newsletter__actions">
						<div class="subscribe">
                            {%- assign formId = 'Contact_' | append: section.id -%}
                            {% form 'customer', id: formId, novalidate: 'novalidate', class: 'contact-form form-single-field' %}
                            {%- if form.posted_successfully? -%}
                                <p class="form-message form-message--success" style="color:#fff" tabindex="-1" data-form-status>
                                {{ 'general.newsletter_form.confirmation' | t }}
                                </p>
                            {%- else -%}
                                <input type="hidden" name="contact[tags]" value="newsletter">
                                <div class="input-group {% if form.errors %} input-group--error{% endif %}">
                                    <input type="email"
                                    name="contact[email]"
                                    id="{{ formId }}-email"
                                    class="form-control subscribe__field{% if form.errors %} input--error{% endif %}"
                                    value="{{ form.email }}"
                                    placeholder="{{ 'general.newsletter_form.email_placeholder' | t }}"
                                    aria-label="{{ 'general.newsletter_form.email_placeholder' | t }}"
                                    aria-required="true"
                                    autocorrect="off"
                                    autocapitalize="off"
                                    {% if form.errors %}
                                        aria-invalid="true"
                                        aria-describedby="{{ formId }}-email-error"
                                        data-form-status
                                    {% endif %}
                                    >
                                    <button type="submit" class="subscribe__btn" name="commit" id="Subscribe" style="z-index:5">
                                        <span>{{ 'general.newsletter_form.submit' | t }}</span>
                                    </button>
                                </div>
                                {%- if form.errors contains 'email' -%}
                                    <span id="{{ formId }}-email-error" class="input-error-message">
                                    <span class="visually-hidden">{{ 'general.accessibility.error' | t }} </span>
                                    {% render 'icon-error' %}
                                    <span>{{ form.errors.translated_fields['email'] | capitalize }} {{ form.errors.messages['email'] }}.</span>
                                    </span>
                                {%- endif -%}
                            {%- endif -%}
                            {% endform %}
						</div><!-- /.subscribe -->
					</div><!-- /.newsletter__actions -->
				</div><!-- /.newsletter__inner -->
			</div><!-- /.container-fluid -->
		</div><!-- /.section -->
	</div><!-- /.newsletter -->
{%- endif -%}
</div><!-- /.cp-newsletter -->

{% schema %}
{
  "name": {
    "en": "Newsletter",
    "fr": "Newsletter"
  },
  "class": "index-section index-section--flush",
  "settings": [
    {
      "type": "image_picker",
      "id": "image",
      "label": {
        "en": "Image",
        "fr": "Image"
      }
    },
    {
      "type": "text",
      "id": "title",
      "label": {
        "en": "Title",
        "fr": "Titre"
      },
      "default": {
          "en" : "Subscribe to our newsletter",
          "fr" : "S'inscrire à notre newsletter"
      }
    },
    {
      "type": "text",
      "id": "label",
      "label": {
        "en": "Label",
        "fr": "Label"
      },
      "default": {
          "en" : "Stay informed",
          "fr" : "Restez informé de nos bons plans et nouveautés"
      }
    },
    {
      "type": "paragraph",
      "content": {
        "da": "Alle kunder, der tilmelder sig, får oprettet en konto i Shopify. [Se kunder](/admin/customers?query=&accepts_marketing=1)",
        "de": "Alle Kunden, die sich eintragen, bekommen ein Konto in Shopify. [Kunden ansehen](/admin/customers?query=&accepts_marketing=1)",
        "en": "Any customers who sign up will have an account created for them in Shopify. [View customers](/admin/customers?query=&accepts_marketing=1)",
        "es": "Todos los clientes que se registren tendrán una cuenta creada para ellos en Shopify. [Ver clientes](/admin/customers?query=&accepts_marketing=1)",
        "fi": "Tilaaville asiakkaille luodaan tili Shopify-palvelussa. [Näytä asiakkaat](/admin/customers?query=&accepts_marketing=1)",
        "fr": "Tous les clients qui s'inscrivent auront un compte créé pour eux sur Shopify. [Voir les clients](/admin/customers?query=&accepts_marketing=1)",
        "hi": "साइन अप करने वाले किसी भी ग्राहक के लिए Shopify में एक खाता बनाया जाएगा. [ग्राहक देखें](/admin/customers?query=&accepts_marketing=1)",
        "it": "Qualsiasi cliente che si iscrive avrà un account creato appositamente su Shopify. [Visualizza clienti](/admin/customers?query=&accepts_marketing=1)",
        "ja": "サインアップしたお客様は、Shopifyでアカウントが作成されます。[お客様を表示](/admin/customers?query=&accepts_marketing=1)",
        "ko": "가입한 고객은 Shopify에서 생성된 계정을 보유하게 됩니다. [고객보기](/admin/customers? query=& accepts_marketing=1)",
        "ms": "Mana-mana pelanggan yang mendaftar akan mempunyai akaun yang dicipta untuk mereka di Shopify. [Lihat pelanggan](/admin/pelanggan?Query=&accepts_marketing=1)",
        "nb": "Alle kunder som melder seg på, vil få opprettet en konto i Shopify. [Se kunder](/admin/customers?query=&accepts_marketing=1)",
        "nl": "Voor alle klanten die zich aanmelden, wordt een Shopify-account gemaakt. [Klanten weergeven](/admin/customers?query=&accepts_marketing=1)",
        "pt-BR": "Todos os clientes que se inscreverem terão uma conta criada para eles na Shopify. [View customers](/admin/customers?query=&accepts_marketing=1)",
        "pt-PT": "Será criada uma conta na Shopify para todos os clientes que se registarem. [Ver clientes](/admin/customers?query=&accepts_marketing=1)",
        "sv": "Alla kunder som registrerar sig kommer att få ett konto skapat i Shopify. [Visa kunder](/ admin / kunder? Query = & accepts_marketing = 1)",
        "th": "ระบบจะสร้างบัญชีผู้ใช้ใน Shopify ให้แก่ลูกค้ารายใดก็ตามที่ลงทะเบียน [ดูลูกค้า](/admin/customers?query=&accepts_marketing=1)",
        "zh-CN": "任何注册用户都将在 Shopify 中拥有一个为他们创建的帐户。[查看客户](/admin/customers?query=&accepts_marketing=1)",
        "zh-TW": "顧客註冊後就可以擁有 Shopify 帳戶。[檢視顧客](/admin/customers?query=&accepts_marketing=1)"
      }
    }
  ],
  "presets": [
    {
        "name": {
            "en": "Newsletter",
            "fr": "Newsletter"
        },
        "category": {
            "en": "Promotional",
            "fr": "Promotionnel"
        }
    }
  ]
}
{% endschema %}
```

## Translations
To prepare your theme for translation, use the files in /locales
example (en.default.json):
```
{
  "general": {
    "newsletter_form": {
      "email_placeholder": "Email address",
      "confirmation": "Thanks for subscribing!",
      "submit": "OK"
    }
  }
}
```

fr.json:
```
{
  "general": {
    "newsletter_form": {
      "email_placeholder": "Votre adresse email",
      "confirmation": "Merci pour votre inscription!",
      "submit": "OK"
    }
  }
}
```

You'll use these labels in your liquid templates:
```
{{ 'general.newsletter_form.confirmation' | t }}
```

## Index for a for loop
```
{% for block in section.blocks %}
    {% if forloop.index > 1 %}

    {% endif %}
{% endfor %}
```
## Pour aller à la ligne dans un textarea : newline_to_br
```{{footer_client_description | newline_to_br}}```

## Pour afficher un complément d'information
- dans le settings de la section ajouter une ligne info 
```"info": "Texte que l'on veut afficher"```

## Afficher le titre d'un menu dans un template
```{{ linklists.footer.title }}``` footer correspond à l'id du menu (ancre) dans le BO

## Page
- Afficher la description saisie dans le BO:
```{{ page_description }}```

## Google Tag Manager

Below is the code you would enter in the additional content & scripts of then settings>checkout area of Shopify. This will allow you to create variables in google tag manager, that you can then use in the conversion tracking pixels.

```
<script>
 window.dataLayer = window.dataLayer || [];
 window.dataLayer.push({
    'ecomm__orderValue': '{{ checkout.total_price | money_without_currency }}',
    'ecomm__orderNumber': '{{ checkout.order_number }}',
    'ecomm__itemCount': '{{ line_items.size }}',
    'ecomm__customerEmail': '{{ checkout.customer.email }}'
 });
</script>
```

## Ajouter un produit automatiquement au panier

Dans l'exemple, on vérifie que le produit n'est pas déjà dans le panier et que le montant du panier est > 100 (il est calculé en cents)

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
{% assign found_title = false %}
{% for item in checkout.line_items %}
  {% if item.variant.id == 7387208286253 %}
    {% assign found_title = true %}
  {% endif %}
{% endfor %}

{% if checkout.subtotal_price > 10000 and found_title == false %}
<script>
  $( document ).ready(function() {
      var variantId = 7387208286253;
      jQuery.post('/cart/add.js', {
        quantity: 1,
        id: variantId
      });
      setTimeout(
        function() {
          window.location.reload(true);
        }, 1000);
  });
</script>
{% endif %}
```
