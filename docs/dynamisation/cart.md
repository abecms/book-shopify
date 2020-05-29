# Cart

## Table of contents
- [Cart](#cart)
  - [Table of contents](#table-of-contents)
  - [Ajouter un produit automatiquement au panier](#ajouter-un-produit-automatiquement-au-panier)
  - [Ajax - Mini Cart](#ajax---mini-cart)
    - [Create the Liquid file](#create-the-liquid-file)
    - [Create the JavaScript file](#create-the-javascript-file)
    - [Update the layout file](#update-the-layout-file)
    - [How to use it](#how-to-use-it)
  - [Mini Cart](#mini-cart)
    - [Create the Liquid file](#create-the-liquid-file-1)
    - [Add payment button](#add-payment-button)

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

## Ajax - Mini Cart

### Create the Liquid file

* Go to [Mini Cart - Create the Liquid file](/docs/cart-mini_cart#create-the-liquid-file)
* At the beginning of the `cart.mini.liquid` add this line ``{% layout none %}`` (For more explanation go to [Layout Tricks](/docs/layout-tricks))

### Create the JavaScript file

* In your Shopify workspace go to `assets`
* Edit an existing `.js` file or create it *e.g (`ajax-mini-cart.js`)*
* Put the following code inside and do some modifications
* Save your file

```javascript
/**
 * -------------------------
 * Ajax Cart
 * -------------------------
 */

// If You don't already have a custom global object created
// e.g ShpCustom can be what ever you want
window.ShpCustom = window.ShpCustom || {cart: {}};

(function() {

  /*
    * This callback is called after an item has been added to the cart.
    * @callback onItemAdded
    */
  ShpCustom.Cart.onItemAdded = function() {
    ShpCustom.Cart.getCart();
  };

  /*
    * This callback is called after an request failure
    * @callback onError
    * @param {object} XMLHttpRequest
    */
  ShpCustom.Cart.onError = function(XMLHttpRequest) {
    var data = eval('(' + XMLHttpRequest.responseText.description + ')');
    alert(data);
  };

  /** @function
    * @name getCart */
  ShpCustom.Cart.getCart = function() {
    var params = {
      type: 'GET',
      url: '/cart?view=mini',
      success: function(line_html) {
        if(line_html) {
          const $line_html = $(line_html);

          // Get number of item in cart
          const cartUpdateCount = $line_html.find('Put your ItemCount element class or Id e.g. .js-cart-update-count').text();

          $('Put your mini cart principal class or principal Id e.g. .cp-quick_cart').find('.product-items').replaceWith($line_html);
          $('Put your ItemCount element class or Id e.g. .js-cart-update-count').text(cartUpdateCount);

          // Show the mini cart
          $('#popup-checkout').addClass('active');
        }
      },
      error: function(XMLHttpRequest, textStatus) {
        ShpCustom.Cart.onError(XMLHttpRequest, textStatus);
      }
    };
    $.ajax(params);
  };

  /** @function
    * @name addItemFromForm
    * @param {object} data
    * @param {Function} callback */
  ShpCustom.Cart.addItemFromForm = function(data, callback) {
    var params = {
      type: 'POST',
      url: '/cart/add.js',
      data: data,
      dataType: 'json',
      success: function(line_item) {
        if ((typeof callback) === 'function') {
          callback();
        }
        ShpCustom.Cart.onItemAdded(line_item);
      },
      error: function(XMLHttpRequest, textStatus) {
        if ((typeof callback) === 'function') {
          callback();
        }
        ShpCustom.Cart.onError(XMLHttpRequest, textStatus);
      }
    };
    $.ajax(params);
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

### How to use it
*E.g. use it on products slider with multiple Add To Cart Button*

* In your Shopify workspace go to your liquid file for one slide
* At the end of the file add
  ```html
    <script>
      jQuery('uniq id of the product form').submit(function(event) {
        event.preventDefault();

        const $submitButton = jQuery('uniq id of the product form or just this').find('Your add to cart button class e.g. .js-add-to-cart');

        $submitButton.attr('disabled', 'disabled');
        ShpCustom.Cart.addItemFromForm(jQuery(this).serialize(), () => {
          $submitButton.removeAttr('disabled');
        });
      });
    </script>
  ```

## Mini Cart

### Create the Liquid file

* In your Shopify workspace go to `templates`
* Create a liquid file name `cart.mini.liquid` (For more explanation go to [Alternative Template](/docs/alternative-template))
* Put your Mini Cart HTML code (or include it *e.g.``{% include 'cp-quick_cart_inner' %}``*) inside the file
* Save your file

(`cart.mini.liquid`)
```html
  {% include 'cp-quick_cart_inner' %}
```

(`cp-quick_cart.liquid`)
```html class:"lineNo"
  <div class="cp-quick_cart">
    <div class="popup popup--checkout" id="popup-checkout">
      <button class="popup__close js-popup-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
          <path fill="currentColor" d="M9.467 8.75l-.25-.25.25-.25L16.852.865a.502.502 0 0 0 0-.716.502.502 0 0 0-.717 0L8.751 7.532l-.25.25-.252-.25L.865.15a.502.502 0 0 0-.717 0 .503.503 0 0 0 0 .716L7.533 8.25l.25.25-.25.25-7.385 7.385a.507.507 0 0 0 .717.717l7.384-7.385.251-.25.25.25 7.385 7.384a.502.502 0 0 0 .717 0 .507.507 0 0 0 0-.716z"/>
        </svg>
      </button><!-- popup__close -->

      <div class="popup__background js-popup-close"></div><!-- /.popup__background -->

      <div class="popup__inner">
        {% include 'cp-quick_cart_inner' %}
      </div><!-- /.popup__inner -->
    </div><!-- /.popup -->
  </div><!-- /.cp-quick_cart -->
```

(`cp-quick_cart_inner.liquid`)
```html
  <div class="product-items">
    <div class="product-items__inner">
      <div class="product-item product-item--alt">
        <form action="/cart" method="post">
          {% for item in cart.items %}
            <div class="product__inner">
              <div class="product__image">
                <div class="product__image-inner"></div>
              </div><!-- /.product__image -->

              <div class="product__content">
                <h4 class="product__title">
                  <span>{{ item.product.title }}</span>
                </h4><!-- /.product__title -->

                <div class="product__price">
                  <span>{{ item.final_line_price | money }}</span>
                </div><!-- /.product__price -->
              </div><!-- /.product__content -->
            </div><!-- /.product__inner -->
            <input type="hidden" name="updates[]" id="updates_{{ item.key }}" value="{{ item.quantity }}" min="0">
          {% endfor %}

          <div class="product__actions">
            <a href="/cart" class="btn btn--dark btn--block">
              {{ 'general.cart.show_cart' | t }} (<span class="js-cart-update-count">{{ cart.item_count }}</span>)
            </a>

            <button type="submit" name="checkout" class="btn btn--dark-full btn--block">{{ 'general.cart.payment' | t }}</button>
          </div><!-- /.product__actions -->
        </form>
      </div><!-- /.product-item -->
    </div><!-- /.product-items__inner -->
  </div><!-- /.product-items -->
```

> Why not just include `cp-quick_cart.liquid` inside `cart.mini.liquid` ?
> In this example we separate the inner cart and the pop up container in the case of updating mini cart by ajax see [Ajax Mini Cart]

### Add payment button

* As you can see in the `cp-quick_cart_inner.liquid` to add a direct payment button you need to:
  - Encompass all your mini cart items into
    ```html
      <form action="/cart" method="post"></form>
    ```
  - Put in every item :
    ```html
      <input type="hidden" name="updates[]" id="updates_{{ item.key }}" value="{{ item.quantity }}" min="0">
    ```
  - And finaly add
    ```html
      <button type="submit" name="checkout">{{ 'general.cart.payment' | t }}</button>
    ```