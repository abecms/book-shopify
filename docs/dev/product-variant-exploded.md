---
title: Exploded Variant
sidebar_label: Exploded Variant
---

*In the case you want to separate variants in front*

# Table of contents
1. [Create the JavaScript file](#create-the-javascript-file)
2. [Update the layout file](#update-the-layout-file)
3. [How to use it](#how-to-use-it)

# Create the JavaScript file

* In your Shopify workspace go to `assets`
* Edit an existing `.js` file or create it *e.g (`swatch.js`)
* Put the following code inside
* Save your file

```javascript
  **
  * -------------------------
  * Swatch
  * -------------------------
  */
  // If You don't already have a custom global object created
  // e.g ShpCustom can be what ever you want
  window.ShpCustom = window.ShpCustom || {cart: {}};

  /** Class representing a swatch. */
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

      this.$addToCart = $(`${this.id} .js-add-to-cart`);
      this.init();
    }

    /**
     * Init the class
     */
    init() {
      new Shopify.OptionSelectors(this.variantSelectId, {
        product: this.product,
        onVariantSelected: (variant, selector) => {
          this.selectCallback(variant, selector);
        }
      });

      $(`${this.id} .selector-wrapper`).hide();

      clearTimeout(this.sizeAlertTimeout);
    
      $(`${this.id} .swatch :radio`).change(function() {
        var optionIndex = $(this).closest('.swatch').attr('data-option-index');
        var optionValue = $(this).val();
        $(this)
          .closest('form')
          .find('.single-option-selector')
          .eq(optionIndex)
          .val(optionValue)
          .trigger('change');
      });
    }

    /**
     * Callback after a variant change
     * @param {variant} object The return variant object
     */
    selectCallback(variant) {
      this.$sizeAlert.hide();
      if (variant) {
        if (variant.available) {
          this.$addToCart.removeAttr('disabled');
        } else {
          this.$addToCart.attr('disabled', 'disabled');
        }
      } else {
        this.$addToCart.attr('disabled', 'disabled');
      }
    };
  }
```

# Update the layout file

* In your Shopify workspace go to `layout`
* Open the `theme.liquid` file
* At the bottom of the file before the `</body>` add 
  ```html 
    <script src="{{ 'name_of_your_file.js' | asset_url }}" defer="defer"></script>
  ```
* Save your file

# Create a custom liquid file
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
          
                <div id="{{uniqId}}-option-{{ forloop.index0 }}" class="swatch" data-option-index="{{ forloop.index0 }}">
                  {% for value in option.values %}

                    {% assign variant_label_state = true %}

                    {% if product.options.size == 1 %}
                      {% unless product.variants[forloop.index0].available %}
                        {% assign variant_label_state = false %}
                      {% endunless %}
                    {% endif %}

                    <input type="radio"
                      {% if option.selected_value == value %} checked="checked"{% endif %}
                      {% unless variant_label_state %} disabled="disabled"{% endunless %}
                      value="{{ value | escape }}"
                      data-index="option{{ forloop.index }}"
                      name="{{ option.name | handleize }}"
                      id="{{uniqId}}-option-{{ option.name | handleize }}-{{ value | escape }}"
                      style="display: none">

                    {% if downcased_option == 'color' %}
                      <label 
                        class="color color--{{ value | escape | downcase }}" 
                        for="{{uniqId}}-option-{{ option.name | handleize }}-{{ value | escape }}">
                        <div class="color__btn"></div>
                      </label>
                    {% endif %}

                    {% if downcased_option == 'size' %}
                      <label 
                        class="size {% unless variant_label_state %}size--unavailable {% endunless %}" 
                        for="{{uniqId}}-option-{{ option.name | handleize }}-{{ value | escape }}">
                        {{ value }}
                      </label>
                    {% endif %}
                  {% endfor %}              
                </div>

          {% if downcased_option == 'size' or downcased_option == 'color' %}
              </div>
            </div>
          {% endif %}

        {% endif %}
    {% endfor %}
  {% endunless %}
```

# How to use it
*E.g. use it on a product page*

* In your Shopify workspace go to your liquid product page
* Put this code inside your product form (As you can see we hide the select and put a custom id)
  ```html
    <!-- Variants Selector -->
    <select id="put your a custom id here" name="id" style="display:none">
      {% for variant in product.variants %}
        <option value="{{ variant.id }}">{{ variant.title }}</option>
      {% endfor %}
    </select>
    <!-- /Variants Selector -->
  ```
* Include your swatch liquid file inside your product form where you want
  ```html
    {% include 'swatch' with option: 'Color', uniqId: uniqId %}
    {% include 'swatch' with option: 'Size', uniqId: uniqId %}
  ```
  *As you can see we pass the variant name and a uniqId*
* At the end of the file add
  ```html
    <script>
      jQuery(document).ready(function(){
        new ShpCustom.Swatch('{{uniqId}}', '{{variantSelectId}}', {{ product | json}});
      })
    </script>
  ```
* Don't forget to add class to :
  - **Add To Cart Button** `js-add-to-cart`