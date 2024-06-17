class hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type
    }

    heroAttack(){
        let attack;

        switch(this.type){
            case "Mago":
            attack = "Magia"
            console.log(`O ${this.type} atacou usando ${attack}!\n`)
            break;

            case "Guerreiro":
            attack = "Espada"
            console.log(`O ${this.type} atacou usando ${attack}!\n`)
            break;

            case "Monge":
            attack = "Artes Marciais"
            console.log(`O ${this.type} atacou usando ${attack}!\n`)
            break;
            
            case "Ninja":
            attack = "Shuriken"
            console.log(`O ${this.type} atacou usando ${attack}!\n`)
            break;
        }
    }
}

let heroMage = new hero("Cedric", 115, "Mago");
let heroWarrior = new hero("Boris", 43, "Guerreiro");
let heroMonk = new hero("Karma", 139, "Monge");
let heroNinha = new hero("Snowhan", 22, "Ninja");

heroMage.heroAttack()
heroWarrior.heroAttack()
heroMonk.heroAttack()
heroNinha.heroAttack()