---
title: Import CSV
sidebar_label: Import CSV
---

# Import des clients via CSV

## Limitations
Attention Shopify limite à 1MB les fichiers d'import clients via CSV. Pensez à spliter le fichier si nécessaire.

Une limitation en nombre de lignes est aussi appliquée : il est recommandé de ne pas dépassé 900 lignes par fichier.

## Solution
Pour palier à cela, un script a été réalisé afin d'automatiser l'import des fichiers CSV en utilisant l'API admin (endpoint caché).
Le script est disponible ici : https://gitlab.com/abecms/izac/api/-/blob/develop/src/Command/UploadShopifyCsvCustomers.php

Ce script prends 3 paramètres :
 * Le répertoire qui contient l'ensemble des fichiers CSV
 * Le cookie de l'utilisateur identifié sur Shopify
 * Le jeton CSRF de l'utilisateur identifié sur Shopify
 
Pour récupérer le cookie et le jeton CSRF, il faut être loggué au back-office Shopify, ouvrir
la console de son navigateur et récupérer ces informations sur une une des requetes faites à l'API Shopify.
