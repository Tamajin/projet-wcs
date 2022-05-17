// Changement du texte en cliquant sur mon CTA button
// Je recupère mon bouton et le stocke dans une variable
// je créé la fonction associée au futur évènement
// je définis avec un écouteur d'évènements une action au click
// je modifie le texte dans le bouton avec un innerHtml

const ctaBtn = document.getElementsByClassName("cta");
console.log(ctaBtn);
ctaBtn.onclick = function() {
    document.innerHTML = "Vous êtes dans la Matrice";
};

// Je récupère la classe commune de mes deux boutons de submit et je stocke l'information dans une classe.
// const btnSubmit = document.querySelector(".submit-btn");

// Je créé un évènement au click sur le bouton avec une fonction

// btnSubmit.addEventListener("click") => 
//     alert = "Votre message a bien été reçu, mais ne partez pas si vite ! Si vous ne l'avez pas encore trouvé, il y a un bonus caché quelque part."
 

