## Thème / Liquid
- liquid examples : https://shopify.github.io/liquid-code-examples/
- doc : https://help.shopify.com/en/themes/liquid/basics
- Cheat sheet : https://www.shopify.ca/partners/shopify-cheat-sheet
- Theme kit : https://shopify.github.io/themekit/
- Theme template doc : https://help.shopify.com/en/themes/development/templates
-                      https://help.shopify.com/en/themes
- Tuto theme design : https://www.youtube.com/playlist?list=PLlMkWQ65HlcEJMRRdnqxpbGImqBkIOctd
- starter theme : https://github.com/Shopify/starter-theme

## Create an app
```
npm install --save react react-dom next
npm install --save koa @shopify/koa-shopify-auth dotenv koa-session isomorphic-fetch
npm install --save @zeit/next-css @shopify/polaris
```
Créer une app depuis la home partner et suivre le tuto : https://developers.shopify.com/tutorials/build-a-shopify-app-with-node-and-react/embed-your-app-in-shopify
App explorer graphQL : https://shopify-graphiql-app.shopifycloud.com/login et lui donner tous les droits
Réduire

## Training
partner academy : https://partner-training.shopify.com/my_courses


# Theme

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
