---
title: Alternative Template
sidebar_label: Alternative
---

The alternative templates allow the declination of main templates in order to :
- Be able to lighten the code for an Ajax request
- Inject a new template
- And many more choice

Syntax: `default_template_name.*.liquid`

E.g.

`product.liquid`
```html
  <div class="product-page">
    <h1>
      Pincipal template
    </h1>
    <p>Template description</p>
    <div class="more-product-info">
      More Product Info
    </div>
  </div>
```

`product.list.liquid`
```html
  <div class="product-list-page">
    <h1>
      Alternative template
    </h1>
    <ul>
      <li>Product 1</li>
      <li>Product 2</li>
      <li>Product 3</li>
    </ul>
  </div>
```

`product.preview.liquid`
```html
  <div class="product-preview">
    <h1>
      Alternative template
    </h1>
    <p>Template description</p>
  </div>
```