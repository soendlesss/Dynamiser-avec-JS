// Quand l’utilisateur clique sur le bouton "Envoyer", cette fonction sera exécutée
document.getElementById("comment-form").addEventListener("submit", function (event) {

    // Empêcher rechargement de la page
    event.preventDefault(); 

    // Récupérer les valeurs des champs du formulaire (Prénom, Nom, Commentaire)
    //.value permet d’accéder au texte entré par l’utilisateur
    //.trim() supprime les espaces au début et à la fin (évite les entrées vides accidentelles)
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const message = document.getElementById("message").value.trim();
    
    // errorMessage sélectionne le message d’erreur (affiché si un champ est vide)
    // commentList sélectionne la liste où les commentaires seront ajoutés dynamiquement
    const errorMessage = document.getElementById("error-message");
    const commentList = document.getElementById("comment-list");

    // Vérifie si l’un des champs du formulaire est vide
    if (firstName === "" || lastName === "" || message === "") {

        // Affiche ce message d’erreur sur la page si un champs est vide
        errorMessage.style.display = "block";

        // Arrêter l’exécution du code pour ne pas envoyer le message vide à la liste des commentaires
        return;
      }