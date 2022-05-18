const btnSubmit = document.querySelector(".submit-btn");
const btnSubmit1 = document.querySelector(".submit-btn1");

btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    btnSubmit.value = "Contribution envoyée";
    btnSubmit.style.fontSize = "0.6rem";    
    alert("Ne partez pas trop vite, il y a un bonus caché quelque part");
})
btnSubmit1.addEventListener("click", function(event){
    event.preventDefault();
    alert ("Votre message a bien été reçu, mais ne partez pas si vite ! Si vous ne l'avez pas encore trouvé, il y a un bonus caché quelque part.");
});