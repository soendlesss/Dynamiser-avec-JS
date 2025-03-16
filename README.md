# dynamiser-un-espace-commentaire
Pseudo-code :

    // Sélection des éléments du DOM
    Définir champNom comme l'élément input du nom
    Définir champMessage comme l'élément textarea du message
    Définir boutonEnvoyer comme le bouton de soumission du formulaire
    Définir listeCommentaires comme la liste contenant les commentaires existants
    Définir messageErreur comme l'élément affichant un message d'erreur (caché par défaut)

    // Ajouter un écouteur d'événement sur le bouton d'envoi
    Lorsque l'utilisateur clique sur boutonEnvoyer :
        
        // Vérifier si les champs sont remplis
        Si champNom est vide OU champMessage est vide Alors
            Afficher messageErreur
            Arrêter le processus (ne pas ajouter le commentaire)
        Fin Si

        // Créer un nouvel élément commentaire
        Définir nouveauCommentaire comme un élément HTML basé sur le modèle existant :
            - Ajouter le nom de l'utilisateur
            - Ajouter le message de l'utilisateur
        
        // Ajouter le nouveau commentaire à la liste
        Insérer nouveauCommentaire dans listeCommentaires

        // Vider les champs du formulaire
        Réinitialiser champNom et champMessage

        // Cacher le message d'erreur s'il était affiché
        Cacher messageErreur
