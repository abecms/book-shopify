# Search

## Autocomplete search
We will use the Ajax Predictive search / autocomplete form Shopify

1. Create the HTML

We build the search bar + the template used to display a slider of results (we've created a snippet 'cp-header_search.liquid used in our theme.liquid layout)

```
<div class="cp-search-result">
	<div class="cards-search js-search-result">
		<div class="container-fluid">
			<div class="cards__inner">
				<div class="cards__head">
					<p>
						<strong>41</strong> produits trouvés pour « costu »
					</p>
				</div><!-- /.cards__head -->

				<div class="cards__body">
					<div class="slider-search-results">
						<div class="swiper-container">
							<div class="swiper-wrapper">
							</div><!-- /.swiper-wrapper -->
						</div><!-- /.swiper-container -->
					</div><!-- /.slider-search-results -->
				</div><!-- /.cards__body -->

				<div class="cards__actions">
					<a href="/search?q=" class="btn btn--dark-full">
						Afficher tous les resultats
					</a>
				</div><!-- /.cards__actions -->
			</div><!-- /.cards__inner -->
		</div><!-- /.container-fluid -->
	</div><!-- /.cards-search -->
</div><!-- /.cp-search-result -->
<div class="cp-header_search">
	<div class="search js-search">
		<div class="search__overlay js-search-overlay"></div><!-- /.search__overlay -->

		<div class="search__inner">
			<button type="button" class="search__close js-search-close">
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
					<path fill="currentColor" d="M10.024 9.265L9.758 9l.266-.265 7.819-7.82a.532.532 0 0 0 0-.757.532.532 0 0 0-.758 0l-7.82 7.818L9 8.242l-.265-.266L.915.158a.532.532 0 0 0-.758 0 .533.533 0 0 0 0 .759l7.82 7.818.265.265-.266.265-7.819 7.82a.536.536 0 0 0 .758.758l7.82-7.82L9 9.758l.265.265 7.82 7.82a.532.532 0 0 0 .758 0c.21-.21.21-.55 0-.759z"/>
				</svg>
			</button>

			<form action="?" method="get">
				<div class="search__inner">
					<label for="q" class="hidden">{{ 'general.search.search' | t }}</label>

					<input type="search" name="q" id="q" value="" placeholder="{{ 'general.search.search_product' | t }}" class="search__field js-search-field">

					<button type="submit" class="search__btn"></button>
				</div><!-- /.search__inner -->
			</form>
		</div><!-- /.search__inner -->
	</div><!-- /.search -->
</div><!-- /.cp-header_search -->
<script id="tpl-search-result" type="template">
	<div class="swiper-slide">
		<div class="card-product">
			<div class="card__inner">
				<a href="{-url-}">
					<div class="card__image" style="background-image: url({-image-});">
						<!--div class="card__new">
							<span>nouveau</span>
						</div--><!-- /.card__new -->
					</div><!-- /.card__image -->
				</a>
				<div class="card__content">
					<div class="card__head">
						<h4 class="card__title">
							{-title-}
						</h4><!-- /.card__title -->

						<div class="card__icon">
							<a href="#">
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
									<path d="M10.32.87c1.566 0 2.84 1.284 2.84 2.862v10.773a.422.422 0 0 1-.424.425.41.41 0 0 1-.239-.08L7 11.358l-5.509 3.5a.414.414 0 0 1-.428.023.423.423 0 0 1-.223-.372V3.732C.84 2.154 2.114.87 3.68.87zm2.004 2.861a2.023 2.023 0 0 0-2.005-2.019h-6.64c-1.101.004-2 .91-2.003 2.02v9.975l5.094-3.21a.424.424 0 0 1 .23-.069.42.42 0 0 1 .243.08l5.08 3.199z"/>
								</svg>
							</a>
						</div><!-- /.card__icon -->
					</div><!-- /.card__head -->

					<div class="card__price">
						<p>
							{-price-}€
						</p>
					</div><!-- /.card__price -->
				</div><!-- /.card__content -->
			</div><!-- /.card__inner -->
		</div><!-- /.card-product -->
	</div><!-- /.swiper-slide -->
</script>
```

2. We create our js function :

```

  function initSearch() {
    var trigger = document.querySelector('.js-search-trigger');
    var search = document.querySelector('.js-search');
    var searchResult = document.querySelector('.js-search-result');

    if (search !== null) {
      var searchClose = search.querySelector('.js-search-close');
      var searchField = search.querySelector('.js-search-field');
      var searchCloseOverlay = search.querySelector('.js-search-overlay');

      trigger.addEventListener('click', function (event) {
        event.preventDefault();

        search.classList.add('active');
        setTimeout(function () {
          searchField.focus();
        }, 1000);
      });

      searchClose.addEventListener('click', function () {
        search.classList.remove('active');
        searchResult.classList.remove('active');
      });

      searchCloseOverlay.addEventListener('click', function () {
        search.classList.remove('active');
        searchResult.classList.remove('active');
      });

      searchField.addEventListener('keyup', function () {
        if (this.value !== '') {
          jQuery.getJSON("/search/suggest.json", {
            "q": this.value,
            "resources": {
              "type": "product",
              "limit": 10,
              "options": {
                "unavailable_products": "last",
                "fields": "title,product_type,variants.title"
              }
            }
          }).done(function(response) {
            jQuery('.slider-search-results .swiper-wrapper').empty()
            var productSuggestions = response.resources.results.products;

            if (productSuggestions.length > 0) {
              var temp = jQuery.trim(jQuery('#tpl-search-result').html());
              jQuery.each(productSuggestions, function (index, obj) {
                var x = temp.replace(/{-title-}/ig, obj.title).replace(/{-image-}/ig, obj.image).replace(/{-price-}/ig, obj.price).replace(/{-url-}/ig, obj.url);
                jQuery('.slider-search-results .swiper-wrapper').append(x);
              });
              sliderSearchCards()
              searchResult.classList.add('active');
            }
          });
        } else {
          searchResult.classList.remove('active');
        }
      });
    }
  }

  initSearch();
```

Everytime a customer keys a letter in the search input, we call the predictive API and display the result (# of results is limited to 10)

## Use the regular search as autocomplete or to get JSON results
Inspired by https://community.shopify.com/c/Shopify-Design/DIY-Implementing-Autocomplete-with-Search/m-p/59750
If you want to use the search URI as a json provider :

1. Create a template search.json.liquid with this content:

```
{% layout none %}
{
  "results_count": {{ search.results_count }}
}
```

It tells Shopify to bypass the theme layout and renders a json Object (in this example, we just need the # of results)

2. Create your template for displaying your results (the search input is not displayed here, please refer to the previous chapter (`## Autocomplete search`) for example):

```
<script id="tpl-search-result-header" type="template">
	<p>
		<strong>{-qty-}</strong> produits trouvés pour « {-term-} »
	</p>
</script>
```

3. Your js to trigger the call and prepare the results

```

  function initSearch() {
    var trigger = document.querySelector('.js-search-trigger');
    var search = document.querySelector('.js-search');
    var searchResult = document.querySelector('.js-search-result');

    if (search !== null) {
      var searchClose = search.querySelector('.js-search-close');
      var searchField = search.querySelector('.js-search-field');
      var searchCloseOverlay = search.querySelector('.js-search-overlay');

      trigger.addEventListener('click', function (event) {
        event.preventDefault();

        search.classList.add('active');
        setTimeout(function () {
          searchField.focus();
        }, 1000);
      });

      searchClose.addEventListener('click', function () {
        search.classList.remove('active');
        searchResult.classList.remove('active');
      });

      searchCloseOverlay.addEventListener('click', function () {
        search.classList.remove('active');
        searchResult.classList.remove('active');
      });

      searchField.addEventListener('keyup', function () {
        if (this.value !== '') {
          var q = this.value
          jQuery.getJSON('/search?type=product&q=' + this.value + '*&view=json').done(function (response) {
            var temp = jQuery.trim(jQuery('#tpl-search-result-header').html());
            jQuery('.cards-search .cards__actions a').attr('href', '/search?q='+q);
            jQuery('.cards-search .cards__head').empty();
            var x = temp.replace(/{-qty-}/ig, response.results_count).replace(/{-term-}/ig, q);
            console.log('header search', x);

            jQuery('.cards-search .cards__head').append(x);
          })
        } else {
          searchResult.classList.remove('active');
        }
      });
    }
  }

  initSearch();
```
