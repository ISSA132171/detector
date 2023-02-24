// Selection des elements
const touche = document.querySelector('.key h2');
const code = document.querySelector('.code h2');
const div_code = document.querySelector('.code');
const overlay = document.querySelector('.overlay');

// console.log(overlay);

// Ajout d'un evenement si une touche est appuyée par un user
window.addEventListener('keydown', (e) => {
    // Ajout de la classe hide
    overlay.classList.add('hide');
    touche.innerHTML = e.key; //Ajout du contenu de la touche saisie !
    code.innerHTML = e.keyCode; //Recuperation du code de la touche!
    // verification de touche espace
    if(e.keyCode === 32) {
    touche.innerHTML  = 'Espace';
    }

});
