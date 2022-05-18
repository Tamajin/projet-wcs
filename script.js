// Action sur click du logo en responsive pour afficher le dropdown menu
// Je stocke la variable du logo
const responsiveLogo = document.querySelector(".logo-responsive");
console.log(responsiveLogo);
// Je stocke le résultat de l'action au click, l'affichage du sous-menu
const dropDown = document.querySelector(".responsive-nav");
console.log(dropDown);
let showBurger = false;
// Je gère l'évènement
responsiveLogo.addEventListener("click", function(event){
    event.preventDefault();
    if (showBurger == false){
        showBurger = true;
        dropDown.style.display = "block";
    }
    else {
        showBurger = false;
        dropDown.style.display = "none";
    };
});