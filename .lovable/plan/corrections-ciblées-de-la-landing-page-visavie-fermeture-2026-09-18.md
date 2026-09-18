# Corrections ciblées de la landing page VISAVIE Fermeture

## Résultat attendu
- Remplacer le logo image du header et du footer par un logo typographique transparent : « VISAVIE » en Archivo Black rouge et « Fermeture » en Parisienne noire, superposé comme une signature.
- Ajouter au header sticky la navigation Services, Engagements, Ouvrages, Guide gratuit, FAQ et Devis, avec défilement fluide, lien actif souligné et menu mobile plein écran. Le bouton « DEVIS GRATUIT » reste visible à droite.
- Remplacer entièrement les témoignages par les quatre engagements fournis.
- Remplacer la photo principale par une photo de pose de menuiserie sans marque ni logo visible.
- Renommer et compléter la section ouvrages avec le texte demandé.
- Retirer tous les liens Calendly et toutes les mentions de visio. Tous les appels à l’action de devis pointeront vers le formulaire `#devis`.
- Ajouter le formulaire de devis complet, son consentement obligatoire, son message de confirmation, ainsi que les accès téléphone et WhatsApp.
- Ajouter les pages `/mentions-legales` et `/confidentialite`, puis enrichir le footer avec les informations légales et les deux liens.

## Données et validation
- Créer une table dédiée aux demandes de devis dans Lovable Cloud, accessible uniquement en insertion publique et non lisible publiquement.
- Valider côté navigateur les champs, formats et longueurs avant envoi ; appliquer les mêmes contraintes dans la base.
- Enregistrer : nom, téléphone, email facultatif, type de projet, message facultatif, consentement et date de création.

## Détails techniques
- Créer de petits composants réutilisables pour le logo, la navigation et le formulaire de devis.
- Charger Parisienne depuis Google Fonts dans l’en-tête du document, sans modifier les autres choix typographiques.
- Utiliser un suivi de section visible pour l’état actif du menu et fermer automatiquement le menu mobile après sélection.
- Donner les identifiants d’ancre demandés aux sections existantes sans modifier leur contenu hors corrections listées.
- Générer une nouvelle photo réaliste sans texte, logo ni marque, adaptée au cadrage actuel.
- Ajouter des métadonnées propres et uniques aux deux nouvelles pages légales.

## Vérification
- Vérifier les vues ordinateur et téléphone : logo lisible, menu utilisable, ancres correctes, aucun chevauchement.
- Tester l’envoi du formulaire et son message de confirmation.
- Vérifier les deux pages légales, les liens du footer et l’absence totale de Calendly/visio.
- Contrôler la compilation et les erreurs d’exécution avant livraison.
