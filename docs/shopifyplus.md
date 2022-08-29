# Shopify+
Les apps ci-dessous n'existent que pour shopify+

# Migrer de Magento vers Shopify
https://apps.shopify.com/transporter
How to use Transporter : https://github.com/Shopify/shopify_transporter

# Planifier des changements de contenu du site
https://apps.shopify.com/launchpad

# Créer un workflow
https://apps.shopify.com/flow

# Gift cards
## Appeler un web service depuis le checkout sur le champ discount

1. Créer une app proxy qui pourra exposer une route via shopify :
https://shopify.dev/tutorials/display-data-on-an-online-store-with-an-application-proxy-app-extension

2. Avec shopify+, il est possible d'injecter le js dans le fichier layout checkout.liquid. Sans shopify+, il est possible d'injecter un js en utilisant l'astuce des js supplémentaires associés à Google Analytics depuis les préférences de shopify

```
<script>
  //const discountButton = document.querySelector('[data-trekkie-id="apply_discount_button"]');
  //discountButton.addEventListener('click', function(){
  //  alert('Discount button was clicked.'); // Replace this line with your code
  //});
  document.addEventListener("DOMContentLoaded", function() {
    $('body').on('click', '[data-trekkie-id="apply_discount_button"]', function(event) {
      event.preventDefault()
      var that = $(this)
      $.get('/apps/giftcard/check-code?code='+$('#checkout_reduction_code').val()).then(function(data) {
        console.log('resultat', data)
        that.closest('form').submit()
      });
    });
  });
</script>
```

Avec cette méthode il est possible d'appeler un ws avant de soumettre le champ discount à Shopify.


# Créer des règles de promotion avancées
https://apps.shopify.com/script-editor

## Règles de promotion

### Introduction
Il faut grouper toutes les règles de promotion que l'on veut appliquer dans un tableau ex. :
```
CAMPAIGNS = [
  # $5 off all items with the "sale" tag
  ItemCampaign.new(
    AndSelector.new(
      TagSelector.new("sale"),
      ExcludeGiftCardSelector.new,
    ),
    MoneyDiscount.new(5_00, "5$ off all items on sale",),
  ),

  # 10% off all items with a price lower than $100
  ItemCampaign.new(
    AndSelector.new(
      ExcludeGiftCardSelector.new,
      PriceSelector.new(:lower_than, Money.new(cents: 100_00)),
    ),
    PercentageDiscount.new(10, "10% off all items under 100$"),
  ),

  # Give every 3rd item with the tag "letter" for free
  BogoCampaign.new(
    TagSelector.new("letter"),
    PercentageDiscount.new(100, "Third item is free"),
    LowToHighPartitioner.new(2,1),
  )
]

# Iterate through each of the discount campaigns.
CAMPAIGNS.each do |campaign|
  # Apply the campaign onto the cart.
  campaign.run(Input.cart)
end
```

Par ailleurs, il est impossible de mettre des dates dans les scripts. Il faut donc utiliser launchpad pour planifier des opérations.

> Toujours exclure les cartes cadeaux de vos opérations commerciales : `next if line_item.variant.product.gift_card?` ou `next if product.gift_card?`

> Pour mettre en avant dans le panier ces promos panier, on pourra utiliser les variables liquid `line_item.original_line_price` et `line_item.message`.

### Expédition gratuite pour un type d'expédition spécifique et un montant > xeur
```
# Ce script permet de proposer l'expédition gratuite pour le code du type d'expédition "Standard"
# pour un montant total du panier de Plus de 200eur
# et d'indiquer 'expédition offerte' sur le panier

montant_minimum = 200
min_discount_order_amount = Money.new(cents:100) * montant_minimum
message = "Expédition offerte"

total = Input.cart.subtotal_price
if total > min_discount_order_amount
  Input.shipping_rates.each do |shipping_rate|
    next unless shipping_rate.code == "Standard"
    shipping_rate.apply_discount(
      shipping_rate.price,
      message: message
    )
  end
end

Output.shipping_rates = Input.shipping_rates
```

### Expédition gratuite pour un type d'expédition, un type de produit et un montant > xeur

```
# Ce script permet de proposer l'expédition gratuite pour le code du type d'expédition "Standard"
# pour un montant total du panier de Plus de 200eur
# et si le type de produit Bermudas est dans le panier
# et d'indiquer 'expédition offerte' sur le panier

TYPES_PRODUITS = ["Bermudas"]
MONTANT_MINIMUM = 200

######################
# DON'T MODIFY BELOW #
######################
min_discount_order_amount = Money.new(cents:100) * MONTANT_MINIMUM
message = "Expédition offerte"

applyDiscount = false
cart = Input.cart
cart.line_items.each do |line_item|
  product = line_item.variant.product
  # Check the product type
  if TYPES_PRODUITS.collect{|el| el.downcase }.include?(product.product_type.downcase)
    applyDiscount = true
  end
end

total = Input.cart.subtotal_price
if total > min_discount_order_amount and applyDiscount
  Input.shipping_rates.each do |shipping_rate|
    next unless shipping_rate.code == "Standard"
    shipping_rate.apply_discount(
      shipping_rate.price,
      message: message
    )
  end
end

Output.shipping_rates = Input.shipping_rates
```

### Empêcher les code promos saisis par les clients (lors des soldes par exemple)

```
if Input.cart.discount_code
  Input.cart.discount_code.reject(
    message: "Vous ne pouvez pas utiliser de code promo pendant les soldes"
  )
end

Output.cart = Input.cart
```

### Expédition gratuite pour les clients avec tag "VIP"

```
# Define a list of shipping service names that are eligible for free shipping for VIPs.
ELIGIBLE_SERVICES = ['Standard Ground Shipping']

# Define the tag that identifies VIP customers.
VIP_CUSTOMER_TAG = 'VIP'

# If the customer is a VIP, give them free shipping on the defined services.
if !Input.cart.customer.nil? and Input.cart.customer.tags.include?(VIP_CUSTOMER_TAG)
  Input.shipping_rates.each do |shipping_rate|
    if ELIGIBLE_SERVICES.include?(shipping_rate.name)
      shipping_rate.apply_discount(shipping_rate.price, message: "Free shipping for VIP customers!")
    end
  end
end

# Export the rates.
Output.shipping_rates = Input.shipping_rates
```

### Expédition gratuite sur les clients qui ont dépensé + de xeur sur toutes leurs commandes

```
MINIMUM_SPENT = 50 #dollars purchased in history as a customer
MESSAGE = "Loyal Customer Promotion" #additional message
customer = Input.cart.customer

if customer
  if customer.total_spent > (Money.new(cents:100) * MINIMUM_SPENT)
    Input.shipping_rates.each do |shipping_rate|
      if shipping_rate.name.include?("Insured Shipping and Handling (USPS Priority Express)")
        shipping_rate.change_name("FREE VIP GROUND SHIPPING (USPS Priority Express)", { message: "" })
        shipping_rate.apply_discount(shipping_rate.price, message: MESSAGE)
      end
    end
  end
end

Output.shipping_rates = Input.shipping_rates
```

### Appliquer réduction sur la première commande d'un client
```
DISCOUNT_AMOUNT = 20

if Input.cart.line_items.size > 1 && (Input.cart.customer.nil? || Input.cart.customer.orders_count < 1)
    next if product.gift_card?
    line_item = Input.cart.line_items.sort_by { |line_item| line_item.variant.price }.first
    if line_item.quantity > 1
        line_item = line_item.split(take: 1)
        Input.cart.line_items << line_item
    end
    line_item.change_line_price(line_item.line_price * (1.0 - (DISCOUNT_AMOUNT / 100.0)), message: "#{DISCOUNT_AMOUNT}% off for first-time customers!")
end

Output.cart = Input.cart
```

### Appliquer un prix barré sur les clients loggés uniquement

Il faut créer un metafield spécifique sur les variants d'un produit afin de stocker le prix à appliquer puis, sachant que les metafields ne sont pas exposés au script editor, il faut utiliser les product properties :

Pour créer une propriété de produit, il suffit de mettre un champ caché sur la page détail de produit :
```
<input type=”hidden” name=”properties[special_price]” />
```

Ces propriétés sont soumises au shopping cart et peuvent être récupérées dans le script editore comme ça
```
line_item.properties.
```

```
# metatag containing the price to be applied : special_price

if Input.cart.line_items.size > 1 && (Input.cart.customer.nil?)
  line_item = Input.cart.line_items.sort_by { |line_item| line_item.variant.price }.first
  if line_item.quantity > 1
    line_item = line_item.split(take: 1)
    Input.cart.line_items << line_item
  end
  line_item.change_line_price(line_item.properties['special_price']), message: "Ventes privées")
end

Output.cart = Input.cart
```

### Appliquer pourcentage de remise croissant en fonction du montant total du panier
```
# Define spending thresholds, from lowest spend to highest cart value.
SPENDING_THRESHOLDS = [
  {
    spend: 3000,   # spend amount (in cents)
    discount: 10   # percentage discount
  },
  {
    spend: 5000,
    discount: 15
  },
  {
    spend: 10000,
    discount: 20
  }
]

# Find any applicable spending threshold.
eligible_threshold = nil
SPENDING_THRESHOLDS.each do |threshold|
  if Input.cart.subtotal_price_was.cents >= threshold[:spend]
    eligible_threshold = threshold
  end
end

# Apply threshold.
if !eligible_threshold.nil?
  Input.cart.line_items.each do |line_item|
    line_item.change_line_price(line_item.line_price * (1.0 - (eligible_threshold[:discount] / 100.0)), message: "#{eligible_threshold[:discount]}% off for purchases over $#{eligible_threshold[:spend] / 100}!")
  end
end

Output.cart = Input.cart
```

### Appliquer une réduction par palier

Dans l'exemple : 20% de réduction pour + de 10 000 commandés, 15% de réduction pour + de 1000, 10% pour + de 100 et 5% pour + de 10.

```
DISCOUNTS_BY_QUANTITY = {
  10_000 => 20,
  1_000 => 15,
  100 => 10,
  10 => 5,
}

Input.cart.line_items.each do |line_item|
  next if line_item.variant.product.gift_card?

  quantity, discount = DISCOUNTS_BY_QUANTITY.find do |quantity, _|
    line_item.quantity >= quantity
  end
  next unless discount

  message = "#{discount}% off when buying at least #{quantity}."
  line_item.change_line_price(
    line_item.line_price * (Decimal.new(1) - discount.to_d / 100),
    message: message,
  )
end

Output.cart = Input.cart
```

### Réduction par palier pour un type de produit
```
# Define a list of price tiers.
PRICE_TIERS = [
  # Pricing tiers for Shoes
  {
    product_types: ['Shoes'],
    group_by: :product, # :product or :variant
    tiers: [
      {
        quantity: 10,
        discount_percentage: 10,
        discount_message: '10% off for 10+'
      },
      {
        quantity: 50,
        discount_percentage: 15,
        discount_message: '15% off for 50+'
      }
    ]
  }
]

# In most cases, you don't need to edit below this line.

##
# Tiered pricing campaign.
class TieredPricingCampaign

  def initialize(partitioner, tiers)
    @partitioner = partitioner
    @tiers = tiers.sort_by { |tier| tier[:quantity] }
  end

  def run(cart)
    @partitioner.partition(cart).each do |k, items|
      total_quantity = items.map(&:quantity).reduce(0, :+)
      applicable_tier = find_tier_for_quantity(total_quantity)
      unless applicable_tier.nil?
        apply_tier_discount(items, applicable_tier)
      end
    end
  end

  private

    def find_tier_for_quantity(quantity)
      @tiers.select { |tier| tier[:quantity] <= quantity }.last
    end

    def apply_tier_discount(items, tier)
      discount = get_tier_discount(tier)
      items.each do |item|
        discount.apply(item)
      end
    end

    def get_tier_discount(tier)
      PercentageDiscount.new(tier[:discount_percentage], tier[:discount_message])
    end

end

##
# Select line items by product type.
class ProductTypeSelector

  def initialize(product_types)
    @product_types = Array(product_types).map(&:upcase)
  end

  def match?(line_item)
    @product_types.include?(line_item.variant.product.product_type.upcase)
  end

  def group_key
    @product_types.join(',')
  end

end

##
# Apply a percentage discount to a line item.
class PercentageDiscount

  def initialize(percent, message = '')
    @percent = Decimal.new(percent) / 100.0
    @message = message
  end

  def apply(item)
    line_discount = item.original_line_price * @percent
    new_line_price = item.original_line_price - line_discount
    if new_line_price < item.line_price
      item.change_line_price(new_line_price, message: @message)
    end
  end

end

##
# A pricing tier partition.
class TierPartitioner

  def initialize(selector, group_by)
    @selector = selector
    @group_by = group_by
  end

  def partition(cart)
    # Filter items
    items = cart.line_items.select { |item| @selector.match?(item) }

    # Group items using the appropriate key.
    items.group_by { |item| group_key(item) }
  end

  private

    def group_key(line_item)
      case @group_by
        when :product
          line_item.variant.product.id
        when :variant
          line_item.variant.id
        else
          @selector.group_key
      end
    end

end

##
# Instantiate and run Price Tiers.
PRICE_TIERS.each do |pt|
  TieredPricingCampaign.new(
    TierPartitioner.new(
      ProductTypeSelector.new(pt[:product_types]),
      pt[:group_by]
    ),
    pt[:tiers]
  ).run(Input.cart)
end

##
# Export changes.
Output.cart = Input.cart
```

### Pourcentage de réduction sur le produit le moins cher du panier

```
DISCOUNT_AMOUNT = 15

if (Input.cart.line_items.size > 1)
  line_item = Input.cart.line_items.sort_by { |line_item| line_item.variant.price }.first
  if line_item.quantity > 1
    line_item = line_item.split(take: 1)
    Input.cart.line_items << line_item
  end
  line_item.change_line_price(line_item.line_price * (1.0 - (DISCOUNT_AMOUNT / 100.0)), message: "#{DISCOUNT_AMOUNT}% off!")
end

Output.cart = Input.cart
```

### Réduction si le client a accepté le marketing lors de sa commande précédente

```
# Define the discount for eligible customers.
DISCOUNT_AMOUNT = 10

# Checks to see if this is a customer's second order, and that they opted into marketing when they placed their first order.
if (!Input.cart.customer.nil? && Input.cart.customer.orders_count == 1 && Input.cart.customer.accepts_marketing?)
  Input.cart.line_items.each do |line_item|
    line_item.change_line_price(line_item.line_price * (1.0 - (DISCOUNT_AMOUNT / 100.0)), message: "#{DISCOUNT_AMOUNT}% off for subscribing to our newsletter!")
  end
end

Output.cart = Input.cart
```

### Acheter 2 produits, l'un des 2 est offert

```
PAID_ITEM_COUNT = 2
DISCOUNTED_ITEM_COUNT = 1

# Returns the integer amount of items that must be discounted next
# given the amount of items seen
#
def discounted_items_to_find(total_items_seen, discounted_items_seen)
  Integer(total_items_seen / (PAID_ITEM_COUNT + DISCOUNTED_ITEM_COUNT) * DISCOUNTED_ITEM_COUNT) - discounted_items_seen
end

# Partitions the items and returns the items that are to be discounted.
#
# Arguments
# ---------
#
# * cart
#   The cart to which split items will be added (typically Input.cart).
#
# * line_items
#   The selected items that are applicable for the campaign.
#
def partition(cart, line_items)
  # Sort the items by price from high to low
  sorted_items = line_items.sort_by{|line_item| line_item.variant.price}.reverse
  # Create an array of items to return
  discounted_items = []
  # Keep counters of items seen and discounted, to avoid having to recalculate on each iteration
  total_items_seen = 0
  discounted_items_seen = 0

  # Loop over all the items and find those to be discounted
  sorted_items.each do |line_item|
    total_items_seen += line_item.quantity
    # After incrementing total_items_seen, see if any items must be discounted
    count = discounted_items_to_find(total_items_seen, discounted_items_seen)
    # If there are none, skip to the next item
    next if count <= 0

    if count >= line_item.quantity
      # If the full item quantity must be discounted, add it to the items to return
      # and increment the count of discounted items
      discounted_items.push(line_item)
      discounted_items_seen += line_item.quantity
    else
      # If only part of the item must be discounted, split the item
      discounted_item = line_item.split(take: count)
      # Insert the newly-created item in the cart, right after the original item
      position = cart.line_items.find_index(line_item)
      cart.line_items.insert(position + 1, discounted_item)
      # Add it to the list of items to return
      discounted_items.push(discounted_item)
      discounted_items_seen += discounted_item.quantity
    end
  end

  # Return the items to be discounted
  discounted_items
end

eligible_items = Input.cart.line_items.select do |line_item|
  product = line_item.variant.product
  !product.gift_card? && product.id == 592406273
end

discounted_line_items = partition(Input.cart, eligible_items)
discounted_line_items.each do |line_item|
  line_item.change_line_price(Money.zero, message: "Buy 2 get 1 free")
end

Output.cart = Input.cart
```

### Acheter le produit A et obtenir x% de réduction sur le produit B si un code coupon a été saisi

```
# Buy anything from collection A and get anything from collection B with X% discount,
# if discount code XYZ is applied

# Custom Message
CHECKOUT_MESSAGE = "Get a 50% off"

# Discount code which should me appled
DISCOUNT_CODE = "GET50OFF"

COLLECTION_A = ["BACKPACKS"]

COLLECTION_B = ["SHIRTS"]

# DISCOUNT VALUE (WITHOUT "%")
DISCOUNT_VALUE = 50


# === Do not change anything below ===

cart = Input.cart

discounted_items_qty = 0
discount_percent = Decimal.new(DISCOUNT_VALUE) / 100.0


# Calculate eligible discounted items (X <= ITEMS FROM A COLLECTION)
cart.line_items.each do |line_item|
  product = line_item.variant.product
  if COLLECTION_A.collect{|el| el.downcase }.include?(product.product_type.downcase)
    discounted_items_qty += line_item.quantity
  end
end


subtotal = cart.subtotal_price_was

is_free_item_applied = false

if cart.discount_code
  if cart.discount_code.code == DISCOUNT_CODE
      cart.line_items.each do |line_item|
        product = line_item.variant.product
        if COLLECTION_B.collect{|el| el.downcase }.include?(product.product_type.downcase) and
          discounted_items_qty > 0

          if(discounted_items_qty < line_item.quantity)
            free_item = line_item.split(take: discounted_items_qty)
            cart.line_items.push(free_item)
          else
            free_item = line_item
          end

          new_price = line_item.line_price - (line_item.line_price * discount_percent)

          free_item.change_line_price(new_price, message: CHECKOUT_MESSAGE)
          discounted_items_qty -= free_item.quantity
        end
      end
  end
end

Output.cart = Input.cart
```

### Acheter X quantité du produit A, obtenir le produit B pour y (réduction en % ou montant)

```
# ================================================================
# Launch campaign if discount code is present
#
# ================================================================
CODE = 'CADEAU15'

# ================================ Customizable Settings ================================
# ================================================================
# Tiered Discounts by Spend Threshold
#
# If the cart total is greater than (or equal to) an entered
# threshold, the associated discount is applied to the cart. The
# discount will be spread, as evenly as possible, across all line
# items.
#
# - 'threshold' is the spend amount needed to qualify
# - 'discount_amount' is the dollar discount to apply to the
# cart
# - 'discount_message' is the message to show when a discount
# is applied
# ================================================================
SPENDING_THRESHOLDS_FILTERED_TAG = [
  {
    product_selector_match_type: :include,
    product_selector_type: :tag,
    product_selectors: ["season_H20"],
    tiers: [
      {
        threshold: 75,
        discount_type: :dollar,
        discount_amount: 15,
        discount_message: 'Remise CADEAU15',
      }
    ]
  }
]


BUY_X_GET_Y_FOR_Z = [
  {
    product_selector_match_type: :include,
    product_selector_type: :tag,
    product_selectors: ["operation_noel"],
    quantity_to_buy: 1,
    quantity_to_discount: 1,
    discount_type: :percent,
    discount_amount: 50,
    discount_message: 'Un artcle acheté, 50% de remise sur le deuxième!',
  },
]

# ================================================================
# ProductSelector
#
# Finds matching products by the entered criteria.
# ================================================================
class ProductSelector2
  def initialize(match_type, selector_type, selectors)
    @match_type = match_type
    @comparator = match_type == :include ? 'any?' : 'none?'
    @selector_type = selector_type
    @selectors = selectors
  end

  def match?(line_item)
    if self.respond_to?(@selector_type)
      self.send(@selector_type, line_item)
    else
      raise RuntimeError.new('Invalid product selector type')
    end
  end

  def tag(line_item)
    product_tags = line_item.variant.product.tags.map { |tag| tag.downcase.strip }
    @selectors = @selectors.map { |selector| selector.downcase.strip }
    (@selectors & product_tags).send(@comparator)
  end

  def type(line_item)
    @selectors = @selectors.map { |selector| selector.downcase.strip }
    (@match_type == :include) == @selectors.include?(line_item.variant.product.product_type.downcase.strip)
  end

  def vendor(line_item)
    @selectors = @selectors.map { |selector| selector.downcase.strip }
    (@match_type == :include) == @selectors.include?(line_item.variant.product.vendor.downcase.strip)
  end

  def product_id(line_item)
    (@match_type == :include) == @selectors.include?(line_item.variant.product.id)
  end

  def variant_id(line_item)
    (@match_type == :include) == @selectors.include?(line_item.variant.id)
  end

  def all(line_item)
    true
  end
end

# ================================================================
# DiscountApplicator
#
# Applies the entered discount to the supplied line item.
# ================================================================
class DiscountApplicator2
  def initialize(discount_type, discount_amount, discount_message)
    @discount_type = discount_type
    @discount_message = discount_message

    @discount_amount = if discount_type == :percent
      1 - (discount_amount * 0.01)
    else
      Money.new(cents: 100) * discount_amount
    end
  end

  def apply(line_item)
    new_line_price = if @discount_type == :percent
      line_item.line_price * @discount_amount
    else
      [line_item.line_price - (@discount_amount * line_item.quantity), Money.zero].max
    end

    line_item.change_line_price(new_line_price, message: @discount_message)
  end
end

# ================================================================
# BuyXGetYForZCampaign
#
# Buy a certain number of "matching" items, get a certain number
# of the same matching items with the entered discount applied.
# ================================================================
class BuyXGetYForZCampaign
  def initialize(campaigns)
    @campaigns = campaigns
  end

  def run(cart)
    @campaigns.each do |campaign|
      product_selector = ProductSelector2.new(
        campaign[:product_selector_match_type],
        campaign[:product_selector_type],
        campaign[:product_selectors],
      )

      eligible_items = cart.line_items.select { |line_item| product_selector.match?(line_item) }

      next if eligible_items.nil?

      eligible_items = eligible_items.sort_by { |line_item| -line_item.variant.price }
      quantity_to_buy = campaign[:quantity_to_buy]
      quantity_to_discount = campaign[:quantity_to_discount]
      bundle_size = quantity_to_buy + quantity_to_discount
      number_of_bundles = (eligible_items.map(&:quantity).reduce(0, :+) / bundle_size).floor
      number_of_discountable_items = number_of_bundles * quantity_to_discount

      next unless number_of_discountable_items > 0

      discount_applicator = DiscountApplicator2.new(
        campaign[:discount_type],
        campaign[:discount_amount],
        campaign[:discount_message]
      )

      self.loop_items(
        discount_applicator, cart, eligible_items, number_of_discountable_items, quantity_to_buy, quantity_to_discount
      )
    end
  end

  def loop_items(discount_applicator, cart, line_items, num_to_discount, quantity_to_buy, quantity_to_discount)
    surplus = 0
    bundle_size = quantity_to_buy + quantity_to_discount

    line_items.each do |line_item|
      line_quantity = line_item.quantity + surplus

      if line_quantity > quantity_to_buy
        bundles_per_line = (line_quantity / bundle_size).floor
        take_quantity = bundles_per_line * quantity_to_discount
        surplus += (line_quantity - (bundle_size * bundles_per_line))

        if line_item.quantity > take_quantity
          discount_item = line_item.split(take: take_quantity)
          discount_applicator.apply(discount_item)
          position = cart.line_items.find_index(line_item)
          cart.line_items.insert(position + 1, discount_item)
          num_to_discount -= take_quantity
        else
          discount_applicator.apply(line_item)
          num_to_discount -= line_item.quantity
        end
      else
        surplus += line_quantity
      end

      break if num_to_discount <= 0
    end
  end
end

# ================================ Script Code (do not edit) ================================
# ================================================================
# DollarDiscountApplicator
#
# Applies the entered discount to the supplied line item.
# ================================================================
class DollarDiscountApplicator
  def initialize(discount_message)
    @discount_message = discount_message
  end

  def apply(line_item, discount_amount)
    new_line_price = line_item.line_price - discount_amount
    line_item.change_line_price(new_line_price, message: @discount_message)
  end
end

# ================================================================
# TieredDiscountBySpendCampaign
#
# If the cart total is greater than (or equal to) an entered
# threshold, the associated discount is applied to the cart. The
# discount will be spread, as evenly as possible, across all line
# items.
# ================================================================
class TieredDiscountBySpendAndTagCampaign
  def initialize(campaigns)
    @campaigns = campaigns
    #@tiers = campaign.tiers.sort_by { |tier| tier[:threshold] }.reverse
  end

  def run(cart)
    @campaigns.each do |campaign|
      product_selector = ProductSelector.new(
        campaign[:product_selector_match_type],
        campaign[:product_selector_type],
        campaign[:product_selectors],
      )
      tiers = campaign[:tiers].sort_by { |tier| tier[:threshold] }.reverse
      applicable_items = cart.line_items.select { |line_item| product_selector.match?(line_item) }
      next if applicable_items.nil?

      total_applicable_cost = applicable_items.map(&:line_price).reduce(Money.zero, :+)
      applicable_tier = tiers.find { |tier|  total_applicable_cost >= (Money.new(cents: 100) * tier[:threshold]) }

      next if applicable_tier.nil?

      #discount_applicator = DiscountApplicator.new(
      # applicable_tier[:discount_type],
      #  applicable_tier[:discount_amount],
      #  applicable_tier[:discount_message]
      #)

      #applicable_items.each do |line_item|
      #  discount_applicator.apply(line_item)
      #end

      return if applicable_tier.nil?

      discount_applicator = DollarDiscountApplicator.new(applicable_tier[:discount_message])
      discount_amount = applicable_tier[:discount_amount]
      items = applicable_items.sort_by { |line_item| line_item.variant.price }
      self.loop_items(cart, items, discount_amount, discount_applicator)
    end
  end

  def loop_items(cart, line_items, discount_amount, discount_applicator)
    avg_discount = (discount_amount.to_f * (1 / line_items.map(&:quantity).reduce(0, :+))).round(2)
    avg_discount = Money.new(cents: 100) * avg_discount
    discount_amount = Money.new(cents: 100) * discount_amount

    line_items.each_with_index do |line_item, index|
      break if discount_amount <= Money.zero

      line_discount = avg_discount * line_item.quantity

      if discount_amount < line_discount || index == (line_items.size - 1)
        discount_update = line_item.line_price > discount_amount ? discount_amount : line_item.line_price
      else
        discount_update = line_item.line_price > line_discount ? line_discount : line_item.line_price
      end

      discount_amount -= discount_update
      discount_applicator.apply(line_item, discount_update)
    end
  end
end

# ================================ Script Code (do not edit) ================================
# ================================================================
# ProductSelector
#
# Finds matching products by the entered criteria.
# ================================================================
class ProductSelector
  def initialize(match_type, selector_type, selectors)
    @match_type = match_type
    @comparator = match_type == :include ? 'any?' : 'none?'
    @selector_type = selector_type
    @selectors = selectors
  end

  def match?(line_item)
    if @selector_type == :tag
      product_tags = line_item.variant.product.tags.map { |tag| tag.downcase.strip }
      @selectors = @selectors.map { |selector| selector.downcase.strip }
      (@selectors & product_tags).send(@comparator)
    elsif @selector_type == :type
      @selectors = @selectors.map { |selector| selector.downcase.strip }
      (@match_type == :include) == @selectors.include?(line_item.variant.product.product_type.downcase.strip)
    elsif @selector_type == :vendor
      @selectors = @selectors.map { |selector| selector.downcase.strip }
      (@match_type == :include) == @selectors.include?(line_item.variant.product.vendor.downcase.strip)
    elsif @selector_type == :product_id
      (@match_type == :include) == @selectors.include?(line_item.variant.product.id)
    elsif @selector_type == :variant_id
      (@match_type == :include) == @selectors.include?(line_item.variant.id)
    else
      raise RuntimeError.new('Invalid product selector type')
    end
  end
end

# ================================================================
# DiscountApplicator
#
# Applies the entered discount to the supplied line item.
# ================================================================
class DiscountApplicator
  def initialize(discount_type, discount_amount, discount_message)
    @discount_type = discount_type
    @discount_message = discount_message

    @discount_amount = if discount_type == :percent
      1 - (discount_amount * 0.01)
    else
      Money.new(cents: 100) * discount_amount
    end
  end

  def apply(line_item)
    new_line_price = if @discount_type == :percent
      line_item.line_price * @discount_amount
    else
      [line_item.line_price - (@discount_amount * line_item.quantity), Money.zero].max
    end

    line_item.change_line_price(new_line_price, message: @discount_message)
  end
end

# ================================================================
# PlayCampaignIfDiscountCodePresent
#
#
# ================================================================

class EnableCampaignIfCodeCampaign
  def initialize(code, campaign)
    @campaign = campaign
    @code = code
  end

  def run(cart)
    return unless !cart.discount_code.nil? && cart.discount_code.code == @code

    @campaign.run(Input.cart)
  end
end

CAMPAIGNS = [
  BuyXGetYForZCampaign.new(BUY_X_GET_Y_FOR_Z),
]

CAMPAIGNS.each do |campaign|
  campaign.run(Input.cart)
end

Output.cart = Input.cart

```

### Acheter 2 ou + du produit A et obtenez x% de réduction sur le produit le moins cher du panier

```
DISCOUNT_PERCENT=30
CART_DISCOUNT_MESSAGE="Buy 2 or more items and get 30% off the least expensive item"


eligible_items = Input.cart.line_items.select do |line_item|
  product = line_item.variant.product
  !product.gift_card?
end

# Sort eligible items by price, least exensive first
eligible_items = eligible_items.sort_by{|line_item| line_item.variant.price}

total_items = 0
eligible_items.each do |line_item|
  total_items += line_item.quantity
end

if(total_items >= 2)
  # pull the least exensive item
  line_item = eligible_items.first
  # calculate the discount to be applied
  percent = Decimal.new(DISCOUNT_PERCENT) / 100.0


  # make sure we don't discount multiple items hiding in a single line item
  if line_item.quantity == 1
    line_discount = line_item.line_price * percent
    puts "line_discount = #{line_discount}"
    # Just discount the item directly
    line_item.change_line_price(line_item.line_price - line_discount, message: CART_DISCOUNT_MESSAGE)
  else
    # If only part of the item must be discounted, split the item
    discounted_item = line_item.split(take: 1)
    # Insert the newly-created item in the cart, right after the original item
    position = Input.cart.line_items.find_index(line_item)
    line_discount = discounted_item.line_price * percent
    puts "line_discount = #{line_discount}"
    Input.cart.line_items.insert(position + 1, discounted_item)
    # Discount the new item
    discounted_item.change_line_price(discounted_item.line_price - line_discount, message: CART_DISCOUNT_MESSAGE)
  end
end


Output.cart = Input.cart
```
### BOGO: Buy 3 products get 1 free or a discount

```
# ================================================================
# Pour n produits achetés, le n+1 le moins cher avec réduction (ou gratuit)
# ex. Pour 2 produits de la collection H2022 achetés, le 3ème offert
# ================================================================
BOGO = [
  {
    product_selector_match_type: :include,
    product_selector_type: :tag,
    product_selectors: ["essentiels_H22"],
    product_quantity: 3,
    discount: {
      discount_type: :percent,
      discount_amount: 100,
      discount_message: 'Le 3ème article offert pour 2 achetés',
    },
  }
]

# ================================================================
# Bogo
#
# ================================================================
class BogoCampaign
  def initialize(campaigns)
    @campaigns = campaigns
    #@tiers = campaign.tiers.sort_by { |tier| tier[:threshold] }.reverse
  end

  def run(cart)
    @campaigns.each do |campaign|
      product_selector = ProductSelector.new(
        campaign[:product_selector_match_type],
        campaign[:product_selector_type],
        campaign[:product_selectors],
      )
      if campaign.include?(:product_selector_match_type2)
        product_selector2 = ProductSelector.new(
          campaign[:product_selector_match_type2],
          campaign[:product_selector_type2],
          campaign[:product_selectors2],
        )
      end
      eligible_items = cart.line_items.select { |line_item| product_selector.match?(line_item) }
      if campaign.include?(:product_selector_match_type2)
        eligible_items = eligible_items.select { |line_item| product_selector2.match?(line_item) }
      end
      next if eligible_items.nil?

      # Sort eligible items by price, least exensive first
      eligible_items = eligible_items.sort_by{|line_item| line_item.variant.price}

      total_items = eligible_items.map(&:quantity).reduce(0, :+)

      if(total_items >= campaign[:product_quantity])
        # pull the least exensive item
        line_item = eligible_items.first
        discount_applicator = DiscountApplicator.new(
          campaign[:discount][:discount_type],
          campaign[:discount][:discount_amount],
          campaign[:discount][:discount_message]
        )

        # make sure we don't discount multiple items hiding in a single line item
        if line_item.quantity == 1
          discount_applicator.apply(line_item)
        else
          # If only part of the item must be discounted, split the item
          discounted_item = line_item.split(take: 1)
          # Insert the newly-created item in the cart, right after the original item
          position = Input.cart.line_items.find_index(line_item)
          Input.cart.line_items.insert(position + 1, discounted_item)
          # Discount the new item
          discount_applicator.apply(discounted_item)
        end
      end

      #applicable_items.each do |line_item|
      #  discount_applicator.apply(line_item)
      #end
    end
  end
end

CAMPAIGNS = [
  #TieredPricingCampaign.new(PRODUCT_DISCOUNT_TIERS),
  EnableCampaignIfCodeCampaign.new('HIVER22', TieredDiscountBySpendAndTagCampaign.new(SPENDING_THRESHOLDS_FILTERED_TAG_REVISITE)),
  EnableCampaignIfCodeCampaign.new('BIENVENUE', TieredDiscountPercentBySpendAndTagCampaign.new(SPENDING_THRESHOLDS_FILTERED_TAG_BIENVENUE)),
  TieredDiscountPercentByQuantityAndTagCampaign.new(SPENDING_THRESHOLDS_FILTERED_TAG_RULE1),
  TieredDiscountPercentByQuantityAndTagCampaign.new(SPENDING_THRESHOLDS_FILTERED_TAG_RULE2),
  BogoCampaign.new(BOGO)
]

CAMPAIGNS.each do |campaign|
  campaign.run(Input.cart)
end

Output.cart = Input.cart
```
