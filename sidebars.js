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
      label: 'Configuration',
      items: ['config/config'],
    },
    {
      type: 'category',
      label: 'Marketing',
      items: ['marketing'],
    },
    {
      type: 'category',
      label: 'Shopify+',
      items: ['shopifyplus'],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'dev/theme',
        'dev/app',
        'dev/dev',
        {
          type: 'category',
          label: 'Ajax',
          items: ['dev/ajax-mini_cart'],
        },
        {
          type: 'category',
          label: 'Template',
          items: ['dev/alternative-template', 'dev/layout-tricks'],
        },
        {
          type: 'category',
          label: 'Cart',
          items: ['dev/cart-mini_cart'],
        },
        {
          type: 'category',
          label: 'Product',
          items: [
            {
              type: 'category',
              label: 'Variant',
              items: ['dev/product-variant-add', 'dev/product-variant-show-in-front', 'dev/product-variant-exploded'],
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
              items: ['dev/customer-import'],
            }
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'Import',
      items: [
        {
          type: 'category',
          label: 'Excelify',
          items: ['dev/magento'],
        },
      ]
    }
  ]
};
