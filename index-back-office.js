/* Fichier script.js pour la logique du formulaire */
document.getElementById('addContentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
  
    // Récupère les valeurs du formulaire
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
  
    // Affiche les valeurs dans la console à des fins de démonstration
    console.log('Titre :', title);
    console.log('Contenu :', content);
  
    // Vous pouvez ajouter ici la logique pour ajouter les données dans la base de données
    // ou effectuer d'autres opérations nécessaires dans votre application
  });