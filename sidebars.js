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
        }
      ],
    },
  ]
};
