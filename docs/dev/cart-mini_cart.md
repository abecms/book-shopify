---
title: Mini Cart
sidebar_label: Mini Cart
---

# Table of contents
1. [Create the liquid file](#create-the-liquid-file)
2. [Add Payment Button](#add-payment-button)

# Create the Liquid file

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
> In this example we separate the inner cart and the pop up container in the case of updating mini cart by ajax see [Ajax Mini Cart](/docs/ajax-mini_cart)

# Add payment button

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