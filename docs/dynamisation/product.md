---
id : product
titre : Product
sidebar_label : Product
---

## Table of contents
- [Product](#product)
  - [Table of contents](#table-of-contents)
  - [Display product media](#display-product-media)
  - [Show Variant In Front](#show-variant-in-front)
  - [Exploded Variant](#exploded-variant)
    - [Create the JavaScript file](#create-the-javascript-file)
    - [Update the layout file](#update-the-layout-file)
    - [Create a custom liquid file](#create-a-custom-liquid-file)
    - [How to use it](#how-to-use-it)

## Display product media

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

## Show Variant In Front
* In your Shopify workspace go to `templates`
* Put this code inside a product form
  ```html
    <!-- Variants Selector -->
    <select name="id">
      {% for variant in product.variants %}
        <option value="{{ variant.id }}">{{ variant.title }}</option>
      {% endfor %}
    </select>
    <!-- /Variants Selector -->
  ```
* This will show a select of all possible variant
  - E.g.
    - red/xs
    - red/s
    - red/m

## Exploded Variant
*In the case you want to separate variants in front*

### Create the JavaScript file

* In your Shopify workspace go to `assets`
* Edit an existing `.js` file or create it *e.g (`swatch.js`)
* Put the following code inside
* Save your file

```javascript
  /**
   * -------------------------
   * ShpCustom: Swatch
   * -------------------------
   */

  // If You don't already have a custom global object created
  // e.g ShpCustom can be what ever you want
  window.ShpCustom = window.ShpCustom || {cart: {}};

  (function() {
    ShpCustom.Swatch = class {

      /**
       * Create a swatch.
       * @param {string} id - The id of the form.
       * @param {string} variantSelectId - The variant select id.
       * @param {object} product - The product object.
       */
      constructor(id, variantSelectId, product) {
        this.product = product;
        this.sizeAlertTimeout;
        this.id = `#${id}`;
        this.variantSelectId = `${variantSelectId}`;

        this.$sizeAlert = $(`${this.id} .size__alert`);
        this.$addToCart = $(`${this.id} .js-add-to-cart`);
        this.init();
      }

      init() {
        new Shopify.OptionSelectors(this.variantSelectId, {
          product: this.product,
          onVariantSelected: (variant, selector) => {
            this.selectCallback(variant, selector);
          }
        });

        $(`${this.id} .selector-wrapper`).hide();

        clearTimeout(this.sizeAlertTimeout);
      
        $(`${this.id} .swatch :radio`).change(this.handleChange);

        // In case you want to link it with add to cart function
        $(this.id).submit(this.handleSubmit)
      }

      handleChange(event) {
        var optionIndex = $(event.target).closest('.swatch').attr('data-option-index');
        var optionValue = $(event.target).val();
        $(event.target)
          .closest('form')
          .find('.single-option-selector')
          .eq(optionIndex)
          .val(optionValue)
          .trigger('change');
      }

      handleSubmit(event) {
        event.preventDefault();
      
        const $submitButton = $(this.id).find('.js-add-to-cart');
      
        $submitButton.attr('disabled', 'disabled');
        ShpCustom.Cart.addItemFromForm($(this.id).serialize(), () => {
          $submitButton.removeAttr('disabled');
        });
      }

      showAlert() {
        if (this.$sizeAlert) {
          this.$sizeAlert.show();
          this.sizeAlertTimeout = setTimeout(() => {
            this.$sizeAlert.hide();
          }, 3000);
        }
      }

      selectCallback(variant) {
        this.$sizeAlert.hide();
        if (variant) {
          if (variant.available) {
            this.$addToCart.removeAttr('disabled');
          } else {
            this.$addToCart.attr('disabled', 'disabled');
            this.showAlert();
          }
        } else {
          this.$addToCart.attr('disabled', 'disabled');
          this.showAlert();
        }
      };
    }
  })();
```

### Update the layout file

* In your Shopify workspace go to `layout`
* Open the `theme.liquid` file
* At the bottom of the file before the `</body>` add
  ```html
    <script src="{{ 'name_of_your_file.js' | asset_url }}" defer="defer"></script>
  ```
* Save your file

# Create a custom liquid file (swatch)
* In your Shopify workspace go to `snippets`
* Create a file named `swatch.liquid`
* Add the following code inside and *do some modifications/customization*

```html
  {% assign selectedOptionToDisplay = option | escape | downcase %}
  {% unless product.has_only_default_variant %}
    {% for option in product.options_with_values %}
    
      {% assign downcased_option = option.name | escape | downcase %}

        {% if selectedOptionToDisplay == downcased_option %}

          {% if downcased_option == 'size' %}
            <div class="size-numbers">
              <h6 class="size__title">
                {{ 'general.product.size' | t | capitalize}}
              </h6><!-- /.size__title -->
              <div class="size__body">
          {% endif %}

          {% if downcased_option == 'color' %}
            <div class="colors">
              {% if template == 'product' %}
                <h6 class="colors__title">
                  {{ 'general.product.color' | t | capitalize}}
                </h6><!-- /.colors__title -->
              {% endif %}
              <div class="colors__inner">
          {% endif %}
          
                <div class="swatch" class="swatch" data-option-index="{{ forloop.index0 }}">
                  {% for value in option.values %}

                    {% assign variant_label_state = true %}

                    {% if product.options.size == 1 %}
                      {% unless product.variants[forloop.index0].available %}
                        {% assign variant_label_state = false %}
                      {% endunless %}
                    {% endif %}

                    <input type="radio"
                      class="hidden"
                      {% if forloop.index0 == 0 %} checked="checked"{% endif %}
                      {% unless variant_label_state %} disabled="disabled"{% endunless %}
                      value="{{ value | escape }}"
                      data-index="option{{ forloop.index }}"
                      name="{{ option.name | handleize }}"
                      data-js-swatch-input>
                    {% if downcased_option == 'color' %}
                      <label 
                        class="color color--{{ value | escape | downcase }}" 
                        data-js-swatch-label>
                        <div class="color__btn"></div>
                      </label>
                    {% endif %}
                    {% if downcased_option == 'size' %}
                      <label 
                        class="size {% unless variant_label_state %}size--unavailable {% endunless %}"
                        data-js-swatch-label>
                        {{ value }}
                      </label>
                    {% endif %}
                  {% endfor %}              </div>

          {% if downcased_option == 'size' or downcased_option == 'color' %}
              </div>
              {% if downcased_option == 'size'and activeSizeAlert %}
                <div class="size__alert hidden">
                  <p>
                    {{ 'general.product.size_alert' | t }}
                  </p>
                </div>
              {% endif %} 
            </div>
          {% endif %}

        {% endif %}
    {% endfor %}
  {% endunless %}
```

# Create a custom liquid file (variant)
* In your Shopify workspace go to `snippets`
* Create a file named `variant-selector.liquid`
* Add the following code inside and *do some modifications/customization*
* Put this code inside
  ```html
  <!-- Variants Selector -->
    <select data-js-variant name="id" class="hidden">
      {% for item in items %}
        <option value="{{ item.id }}">{{ item.title }}</option>
      {% endfor %}
    </select>
  <!-- /Variants Selector -->
  ```


# How to use it
*E.g. use it on a product page*

* In your Shopify workspace go to your *liquid product page*
* Customize your Shopify form tag to match this: 
  ```html
    {% form "product", product, data-js-swatch: true, data-handle: product.handle %}
  ```
* Include your swatch liquid file inside your product *form* where you want
  ```html
    {% include 'swatch' with option: 'Color' %}
    {% include 'swatch' with option: 'Size' %}
  ```
* Don't forget to add class to :
  - **Add To Cart Button** `js-add-to-cart`

## Media

link for supported media
`https://help.shopify.com/en/manual/products/product-media/product-media-types`