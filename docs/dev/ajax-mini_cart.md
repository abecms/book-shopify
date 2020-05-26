---
title: Ajax - Mini Cart
sidebar_label: Mini Cart
---

# Table of contents
1. [Create the liquid file](#create-the-liquid-file)
2. [Create the JavaScript file](#create-the-javascript-file)
3. [Update the layout file](#update-the-layout-file)
4. [How to use it](#how-to-use-it)

# Create the Liquid file

* Go to [Mini Cart - Create the Liquid file](/docs/cart-mini_cart#create-the-liquid-file)
* At the beginning of the `cart.mini.liquid` add this line ``{% layout none %}`` (For more explanation go to [Layout Tricks](/docs/layout-tricks))

# Create the JavaScript file

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

# Update the layout file

* In your Shopify workspace go to `layout`
* Open the `theme.liquid` file
* At the bottom of the file before the `</body>` add 
  ```html 
    <script src="{{ 'name_of_your_file.js' | asset_url }}" defer="defer"></script>
  ```
* Save your file

# How to use it
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