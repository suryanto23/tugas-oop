




function hero(name, att){

    this.name = name
    this.att = att
    this.detail = function () {
                 return `${this.name} memiliki attack damage sebesar ${this.att} point`;
    }
};



let hero1 = new hero("Mirana" , 60)



console.log(hero1.detail())



function Gojek (jarak) {

    const harga = 5000;
    this.jarak = jarak
    this.total = function () { return harga * this.jarak
    }

};

let customer1 = new Gojek (5);
customer1.harga = 1

console.log(customer1.total());



class Animal {
    animalSound () {
        console.log("sound...sound...");
    }
};

class Cat extends Animal {
    animalSound () {
        return "Meong"
    }
};


let kucing = new Cat()

console.log(kucing.animalSound());


class Hero {
    constructor (hp) {
        this.hp = hp
    };
    if 

    bertarung() {
       return  this.hp -= 50
    };

    heal() {
       return  this.hp +=25
    };

};

let mirana = new Hero(100)


mirana.bertarung()
console.log(mirana);

mirana.heal()
console.log(mirana);

mirana.bertarung()
console.log(mirana);

mirana.bertarung()
console.log(mirana);




