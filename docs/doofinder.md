# Adding conversion rate tracking to the doofinder's layer

```
(function() {
        var getLayer = function() {
            return dfClassicLayers[0].layer || dfEmbeddedLayers[0].layer
        }

        var addCart = function(event) {
            var element = event.target.closest("form[action='/cart/add']").querySelector("[name='id']");
            var id;
            if (element.nodeName === "INPUT"){
                id = element.value;
            }
            else {
                id = element.options[element.selectedIndex].value;
            }
            getLayer().addToCart(id, 1)
        }

        var addButtons = document.querySelectorAll("form[action='/cart/add'] input[type='submit'], form[action='/cart/add'] button[type='submit']")
        addButtons.forEach(node => node.addEventListener("click", addCart))

        var origOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function() {


            this.addEventListener('load', function() {
                if (this._url === "/cart/add.js" && this.status === 200 && addButtons.length === 0) {
                    var id = JSON.parse(this.responseText).id
                    getLayer().addToCart(id, 1)
                }

                if (this._url === "/cart/clear.js" && this.status === 200) {
                    getLayer().clearCart()
                }
            });
            origOpen.apply(this, arguments);
        };
    })()
```