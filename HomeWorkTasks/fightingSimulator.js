class Fighter {
    constructor(config){
        this.config = config;
        this.getHealth = this.getHealth.bind(this);
        this.maxHP = config.hp;
        this.win = 0;
        this.loss = 0;
    }

    getName(){
        //let name = myFighter.getName();
       return this.config.name;
    }

    getDamage(){
        //let damage = myFighter.getDamage();
        return this.config.damage;
    }

    getAgility(){
        //let agility = myFighter.getAgility();
        return this.config.agility;
    }

    getHealth(){
        //let health = myFighter.getHealth();
        return this.config.hp; 
    }

    dealDamage(damage){
        
        this.config.hp = this.getHealth() - damage;
        if (damage > this.getHealth()){
            this.config.hp = 0;
        }
    }

    heal(healingHP){
       let newHP = healingHP + this.getHealth();
        if (newHP > this.maxHP){
            this.config.hp = this.maxHP;
        } else {
            this.config.hp = newHP;
        }
    }

    attack(defender){

       let punch = Math.ceil(Math.random() * 100 <= (100 - defender.getAgility()));     

        if (punch){
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }

    }

    logCombatHistory(){
        console.log(`${this.getName()}, Wins: ${this.win}, Losses: ${this.loss}`)
    }

    addWin(){
       this.win++;
    }

    addLoss(){
        this.loss++;
    }

}

const myFighter = new Fighter({name: "John", damage: 220, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: "Jack", damage: 25, hp: 120, agility: 15});
let name = myFighter.name;
myFighter.getName();



myFighter.attack(myFighter2);
myFighter.attack(myFighter2);
console.log(myFighter2.getHealth());
myFighter2.heal(130);
console.log(myFighter2.getHealth());

myFighter.addWin();
myFighter.addWin();
myFighter.logCombatHistory();