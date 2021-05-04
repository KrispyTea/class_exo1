class Personnage {
    constructor(age, nom, ville) {
        this.age = age,
        this.nom = nom,
        this.ville = ville
        this.sePresenter = () => {
            return console.log(`Bonjour, je m'appelle ${this.nom}`);
        }
    }
}
let Alain = new Personnage(24, "Alain", "Bruxelles")
let Bruce = new Personnage(35, "Bruce", "Jette")
Alain.sePresenter()
Bruce.sePresenter()