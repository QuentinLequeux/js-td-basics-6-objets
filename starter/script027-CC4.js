/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

const mark = {
    nom: "",
    prenom: "Mark",
    poids: "75",
    taille: "1.75",
    calculer: function (){
        return this.poids / (this.taille * this.taille);
    }
}

const john = {
    nom: "",
    prenom: "John",
    poids: "60",
    taille: "1.60",
    calculer: function (){
        return this.poids / (this.taille * this.taille);
    }
}

if (mark.calculer() > john.calculer()){
    console.log("Mark a un BMI plus élevé");
} else if (mark.calculer() === john.calculer()){
    console.log("Egalité !");
} else {
    console.log("John a un BMI plus élevé");
}

//console.log(mark.calculer());
//console.log(john.calculer());