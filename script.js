console.log("Bonjour la console !")

let randomNumber = 0;


function generate() {
    let valeurMin = parseInt(document.getElementById("valeurMin").value);
    let valeurMax = parseInt(document.getElementById("valeurMax").value);
    
    randomNumber = parseInt(Math.floor(Math.random() * (valeurMax - valeurMin) + valeurMin));
    console.log(randomNumber);
}




let number_tentative = document.getElementById("tentative").innerHTML = 10;

function check(){
    let propositeValeur = parseInt(document.getElementById("propositeValeur").value);
    let phrase = document.getElementById("phrase");

    console.log("Je vérifie le nombre !")
    if (number_tentative > 1 ){
        if (randomNumber === propositeValeur){
            phrase.innerHTML = "Tu as gagné ! 🎉";
            phrase.style.color = "#139c01";
            number_tentative--;
            console.log("tu as gagné !")
        } else if (randomNumber > propositeValeur) {
            phrase.innerHTML = "C'est plus ! 🤦‍♀️";
            phrase.style.color = "#d17600";
            number_tentative--;
            console.log("C'est plus !")
        } else if (randomNumber < propositeValeur) {
            phrase.innerHTML = "C'est moins ! 🤦‍♂️";
            phrase.style.color = "#d17600";
            number_tentative--;
            console.log("C'est moins !")
        } else {
            console.log("Ré-éssaye !")
        }
    } else {
        console.log('0 vie ! Perdu !');
        number_tentative.innerHTML = "perdu";
    }

    console.log(number_tentative);
}






