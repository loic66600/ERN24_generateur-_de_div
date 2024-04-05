function checkDiv() {
    let container = document.getElementById('container');
    let boxes = document.getElementsByClassName('box');
    if (boxes.length > 0) {
        document.getElementById('removeLastbutton').style.display = 'inline-block';
        document.getElementById('removeAllDiv').style.display = 'inline-block';
    } else {
        document.getElementById('removeLastbutton').style.display = 'none';
        document.getElementById('removeAllDiv').style.display = 'none';

    }
}

// rgba(255,0,0)=>
//on cree une fonction quio cree un chiffre entre 0 et 255
function randomNumber() {
    return Math.floor(Math.random() * 256);
}

//fontion qui retourne une couleur aléatoir
function randomColor() {
    // return "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
    return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}


//on crée un fonction qui va génerer une div
function addDiv() {
    //on récupére la div grace a notre html
    let container = document.getElementById('container');
    // on crée une div <div></div>
    let newDiv = document.createElement('div');
    //on va ajouter une classe a notre div => div classe ="box"></div>
    //   newDiv.classList.add('box'); //1er methode
    newDiv.className = 'box';// 2em methode
    //on va ajouter un style a notr div => <div class='box' style= "background-color : red"></div>
    newDiv.style.backgroundColor = randomColor();
    //ajout d un evenement sur la div
    newDiv.addEventListener('click', () => {
        container.removeChild(newDiv);
        checkDiv;
    })
    // on va  imbriqué la nouvell div dans la div container
    container.appendChild(newDiv);
}


//on ajoute un evenement a notre bouton id "addbutton"
//je recupere le bouton
let addbutton = document.getElementById('addbutton');
// on ajoute un evenement click sur notre bouton
addbutton.addEventListener("click", () => {
    //on appelle notre fonction
    addDiv();
    checkDiv()
});

// fonction qui enlève la derrnier div

function removelastDiv() {
    // on recuper le container
    let container = document.getElementById('container');
    let boxes = document.getElementsByClassName('box');

    console.log(boxes.length)

    if (boxes.length > 0) {
        //enlever la dernier div
        container.removeChild(boxes[boxes.length - 1]);
        checkDiv();
    }
}
// on rajout evenemrn remouvLast div
document.getElementById('removeLastbutton').addEventListener('click', () => {
    removelastDiv();

})

//fonction qui supprime tous
function remouveAllDiv() {
    let container = document.getElementById('container');
    container.innerHTML = "";
    checkDiv();

}
document.getElementById('removeAllDiv').addEventListener('click', () => {
    remouveAllDiv()
})
// appel initiale de la fonction 
checkDiv();