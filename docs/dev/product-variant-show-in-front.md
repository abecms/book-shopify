---
title: Show Variant In Front
sidebar_label: Show Variant In Front
---

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