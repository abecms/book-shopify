# Update a variant with a metafield
https://community.shopify.com/c/Shopify-APIs-SDKs/Adding-Metafield-on-a-productVariant-using-GraphQL/td-p/552212

````
Input : 

{
"input": {
"id": "gid://shopify/ProductVariant/1",
"metafields": [
   {
"namespace": "test",
"key": "b_date",
"value": "testing",
"valueType": "STRING"
   }
  ]
 }
}

Mutation : 

mutation ($input: ProductVariantInput!) {
  productVariantUpdate(input: $input) {
    productVariant {
      id
      title
      sku
      metafields(first: 10) {
        edges {
          node {
            id
            namespace
            key
            value
          }
        }
      }
    }
  }
}
```