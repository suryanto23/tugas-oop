

// Exercise OOP

// Deklarasi kelas Enemy
function Enemy (name, speed, HP, AP, status) {

    this.name = name;
    this.speed = speed;
    this.HP = HP;
    this.AP = AP;
    this.isDead = status;



    this.attack = function(){
        return `${this.name} memberikan damage sebesar ${this.AP} point!`;
    };

    this.confused= function(){
        return `Kecepatan ${this.name} berkurang sebesar ${this.speed} point!`;
    };

    this. hit= function(){
        let damage = Math.floor(Math.random()* this.AP)
        return `${this.name} memberikan damage sebesar ${damage} point ke musuh!`
    };

    this.gotHit= function(){
        let damage = Math.floor(Math.random()*50);
        this.HP -= damage;
        return `${this.name} menerima serangan sebesar ${damage} point!, HP yang tersisa adalah ${this.HP} point!`;
    };

    this.slained= function(){
        this.isDead = false;
        return `${this.name} is dead!`;
    };

}


// Daftarkan Pocong sebagai Enemy
class Pocong extends Enemy {

constructor (name, speed, HP, AP, status){

    super(name, speed, HP, AP, status);
    this.name = "Pocong";
    
};

    jump(){
        return "POCONGNYA LONCAT GAN";
    };

    superJump(){
        this.speed += 20;
        return `Kecepatan ${this.name} bertambah menjadi ${this.speed} point!`;
    };

    skillMelotot(){
        let damage = this.AP + Math.floor(Math.random()* (this.AP/2))
        return `Pocong pelototin musuh, memberikan damage sebesar ${damage} point!`
    }

};


// Daftarkan Zombie sebagai Enemy
class Zombie extends Enemy {

constructor (name, speed, HP, AP, status){

    super(name, speed, HP, AP, status);
    this.name = "Zombie";
    
};

    walk(){

        let spd = this.speed/2;
        return `${this.name} berjalan dengan kecepatan ${spd} movement speed`;
    };

    running(){

        return `${this.name} berlari dengan kecepatan ${this.speed} movement speed`;
    };

    skillTransform(){
        let attack = this.AP + this.AP/2;
        return `${this.name} berubah menjadi Titan, attack power bertambah menjadi ${attack} point!`;
    };

    skillHeal(){
        this.HP += 25;
        return `HP bertambah menjadi ${this.HP}  point!`;
    };

};

// Pocong datang
let musuh  = new Pocong("name", 40, 500, 50, true)
// Zombie datang
let musuh2 = new Zombie("name", 30, 700, 80, true)



// Pocong action
console.log(musuh.attack());
console.log(musuh.confused());
console.log(musuh.jump());
console.log(musuh.superJump());
console.log(musuh.slained());
console.log(musuh.hit());
console.log(musuh.gotHit());
console.log(musuh.skillMelotot());

// Zombie action
console.log(musuh2.walk());
console.log(musuh2.attack());
console.log(musuh2.running());
console.log(musuh2.confused());
console.log(musuh2.hit());
console.log(musuh2.gotHit());
console.log(musuh2.slained());
console.log(musuh2.skillTransform());
console.log(musuh2.skillHeal());











