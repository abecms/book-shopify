/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Setup',
      items: ['introduction', 'setup'],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'theme', 
        'app',
        {
          type: 'category',
          label: 'Ajax',
          items: ['ajax-mini_cart'],
        },
        {
          type: 'category',
          label: 'Template',
          items: ['alternative-template', 'layout-tricks'],
        },
        {
          type: 'category',
          label: 'Cart',
          items: ['cart-mini_cart'],
        },
        {
          type: 'category',
          label: 'Product',
          items: [
            {
              type: 'category',
              label: 'Variant',
              items: ['product-variant-add', 'product-variant-show-in-front', 'product-variant-exploded'],
            }
          ],
        },
        {
          type: 'category',
          label: 'Customer',
          items: [
            {
              type: 'category',
              label: 'Import',
              items: ['customer-import'],
            }
          ],
        }
      ],
    },
  ]
};
