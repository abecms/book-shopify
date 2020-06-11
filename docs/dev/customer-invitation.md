---
title: Configurarion
sidebar_label: Bulk Account Inviter
---

# Bulk Account Inviter
L'application Bulk Account Inviter permet d'inviter les clients à activer leur compte. Cette procédure est notamment utile dans le cas de la migration d'une autre plateforme vers Shopify et pour laquelle un import des comptes clients a été effectué.
Documentation : https://help.shopify.com/fr/manual/apps/apps-by-shopify/bulk-account-inviter

l'application Bulk Account Inviter est disponible uniquement avec les forfaits Shopify Plus. Elle doit donc être activé par les équipes support Shopify (non disponible sur l'app store)

# Mise en place
Lors de l'import des comptes clients, 
- Prévoir l'ajout d'un tag Shopify (ex: compte importe), il permettra de les identifier.
- Attention les comptent doivent être enregsitrés comme désactivés

Une fois que l'import a été effectué 
1. En BO aller dans Clients
1. Filtrer les résultats en selectionnant Marqué avec = compte importe (le tag créé à l'import)
1. Enregsitrer la requête en lui donnant un nom (ex: Invitation clients importés)
1. Aller dans Applications et choisir Bulk Account Inviter
1. Dans la liste Customer group, sélectionner Invitation clients importés puis create email
1. Remplir les champs et envoyer le mail

# Template
Le template de la page d'activation de compte peut être personnalisé. Il se trouve dans customers/activate_account.liquid
Référence : https://shopify.dev/docs/themes/files/customers-activate-account-liquid 