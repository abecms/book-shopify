---
title: Layout Tricks
sidebar_label: Layout Tricks
---

# Layout None
Syntax: `{% layout none %}`

Description: Give you the possibility to render a template without layout

E.g.:
```html
  {% layout none %}
  <div class="product-preview">
    <h1>
      Alternative template
    </h1>
    <p>Template description</p>
  </div>
```