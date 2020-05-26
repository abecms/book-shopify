#
# Find and paginate products with a specific tag

```
const query = `query($cursor: String){
    products(first: 250, after:$cursor, query: "tag:tag_name") {
        pageInfo {
            hasNextPage
          }
          edges {
            cursor
            node {
              id
              tags
            }
        }
    }
  }
`
​
(async () => {
    let hasNextPage = false;
    let lastedge;
    let variable;
    do {
      await shopify.graphql(query,variable).then((product) => {
        counter = counter + 1;
        const products = Object.values(product.products.edges);
        for (const product of products) {
            let id = product.node.id.split('/').slice(-1)[0];
            counter = counter + 1; // to count the number of prodcuts
            console.log(counter +"=>" +id+ "=>" +product.node.tags);
        }
        var last_key = product.products.edges.length;
        lastedge = product.products.edges[last_key - 1].cursor;
        hasNextPage = product.products.pageInfo.hasNextPage;
        variable = {"cursor": lastedge};
      });
    } while (hasNextPage == true);
  })().catch(console.error);
```