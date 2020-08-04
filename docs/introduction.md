# Introduction

Cette méthode de développement repose sur "Stickers", le méthodologie de développement mise au point chez Livingcolor. Cette méthodologie permet de découper le projet en briques (les stickers) qui pourront être assemblées au long du projet, par poste.

Cette transformation d'un projet en composants à assembler permet d'accélérer le développement d'un site Shopify et de gagner en qualité (DRY).

## Principes
1. On développe le front à l'aide du projet https://github.com/abecms/model-stickers-static
 Puis dans Shopify, en utilisant le thème starter livingcolor:

1. Je merge le répertoire components du projet dynamique depuis celui du projet static (usage de la touche ```<option>``` sous Mac OSX)
2. Je crée le dview.html.twig quand je dynamise le template correspondant view.html.twig
3. A chaque merge, je fais un git status pour savoir quels templates ont été modifiés
4. Je peux maj mes dview en fonction

## Architecture
Shopify va être organisé à l'aide du starter livingcolor qui permet de personnaliser fortement les twig des éléments de la page, et les modules certifiés par livingcolor (cf. + loin)

En particulier, on va utiliser le module Paragraphs pour créer puis assembler les composants d'un site. Par ailleurs, nous utilisons très largement le principe des suggestions afin de rendre toute brique entièrement personnalisable en fonction de nombreux critères.

# Good to know about shopify

- Not suited for brands that wish to have special offers
- Native Shopify supports very basic features (catalog features, product variables, promo features...) 
- Most features have a cost, all the modules have year/month plans.
- Either you buy them, either you dev them (highly expensive) 
- Cannot do custom dev on the BO
- You need to have activated the shopify account in order to use apps like transporter, script editor and other
- No shopify assistance unless the websote is already activated
- Checkout custom : only possible once shopify + is installed
- Rigid checkout : the checkout is not customizable easily, you must apply heavy overrides to it
- Script Editor : App free on Shopify + lets you code special offers. But the client is not able to edit them if he doens not know about coding
- Products : Limited number of variables, if needed to add more yu have to go through apps (like custom fields). 
- Customers cannot edit their own personal info, to do this you have either to dev a custom app or use an existing app do to so. 
- Customer info : no possibility of adding specific fields (like date of birth), only possible via third party apps (like custom fields) 
- Email notifications : Native Emails (notifications) are not translatable 
- No possiblity of addign cc recipents on email notifications
- Back end product interface needs to be improved (pagination, number of products is not displayed, cannot choose the variables of the main product table for filtering... no config available) 
- No native filter system

## Not suited for : 
- Complex websites or brands that might need specific promo offers, special gift card systems
- Multilingual websites : native multilingual shopify system is based on hard coded non evolving catalogs and contents. In order to translate the website you might need an app (Weglot, Languify...) 
