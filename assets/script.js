  // Quand l’utilisateur clique sur le bouton "Envoyer", cette fonction sera exécutée
  document.addEventListener("DOMContentLoaded", function () {
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
  
      // Masque le message d'erreur
      errorMessage.style.display = "none";
  
      // Création du conteneur pour le commentaire
      const newComment = document.createElement("div");

      // Ajout de CSS
      newComment.classList.add("flex", "space-x-4", "text-sm", "text-gray-500", "border-t", "border-gray-200", "py-10");

      // Ajouter le contenu HTML du commentaire
      newComment.innerHTML = `
        <div class="flex-1">
          <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${message}</p>
          </div>
        </div>
      `;
      
      // Ajouter le commentaire à la liste
      commentList.appendChild(newComment);

      // Réinitialiser le formulaire
      document.getElementById("comment-form").reset();
    });
  });  