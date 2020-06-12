# Introduction

Pour que le site puisse proposer plusieurs langues il faut s'assurer que le thème est compatible avec la vente en plusieurs langues et qu'une app permettant de traduire les contenus soit installée (ex : weglot)

Procédure https://help.shopify.com/fr/manual/cross-border/multilingual-online-store#g-rer-les-langues

Tous les éléments du thème sont traductibles. L'interface de traduction est accessinle dans themes / Actions / Modifier les langues

## Traduire les termes
- Dans le dossier `locales`, éditer le fichier de langue qui correspond à celle par défaut déclaré sur le thème du site (ex: en.default.json)

- Ajouter tous les termes à traduire en respectant la structure du json (ex: General > 404 > Title). C'est cette structure qu'on retrouve sur l'interface de traduction.

- Dans le fichier .liquid, ajouter le terme à l'endroit où il doit apparaitre traduit sur la page, en respectant la syntaxe suivante :

   `<h1>{{ 'general.404.title' | t }}</h1>`




