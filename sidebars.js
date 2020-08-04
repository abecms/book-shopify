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
      items: ['introduction', 'setup', 'useful-apps'],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: ['config/config', 'config/product'],
    },
    {
      type: 'category',
      label: 'Dynamisation',
      items: ['dynamisation/theme','dynamisation/product','dynamisation/search','dynamisation/cart'],
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
        'dev/app',
        'dev/dev',
        'dev/graphql',
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
      ],
    }
  ]
};
