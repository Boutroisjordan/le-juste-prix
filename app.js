let devine;
let tentatives = 10
let randomPrix = Math.round(Math.random() * 1000);

function getValue() {
    let input = document.getElementById("guess").value;
    devine = parseInt(input);
    play(devine, randomPrix);
};

function play(firstNumber, guessPrice) {
    tentatives--;
    if (tentatives > 0) {
        if (firstNumber == guessPrice) {
            window.alert("Gagner !!!!!")
        } else if (firstNumber < guessPrice) {
            window.alert(`Plus grand ! Plus que ${tentatives} tentatives`)

        } else if (firstNumber > guessPrice) {
            window.alert(`Plus petit ! Plus que ${tentatives} tentatives`)
        } else {
            console.log('Veuillez insérer uniquement des chiffres entier !')
        };
    } else {
        if (firstNumber == guessPrice) {
            window.alert('Gagner !!!!')
        } else {
            window.alert(`perdu ! Le prix à trouver était de ${randomPrix}. Clique sur Replay pour rejouer.`);
        };
    };

    
};

function replay() {
    tentatives = 10;
    randomPrix = Math.round(Math.random() * 1000);
}

