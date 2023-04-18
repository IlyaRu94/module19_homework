//Задание 4
function Pribor(name, model, power) {
    this.name = name,
    this.model = model,
    this.power = power,
    this.turn = false
}

Pribor.prototype.on = function() {
    this.turn = true;
    console.log(`${this.name} ${this.model} включен в сеть`);
};

Pribor.prototype.off = function() {
    this.turn = false;
    console.log(`${this.name} ${this.model} отключен от сети`);
};

Pribor.prototype.totalPower = function() {
    if(this.turn){return this.power} else{return 0};
}

const teapot = new Pribor('Чайник', 'Tefal', 1500);
const computer = new Pribor('Компьютер', 'Acer', 350);
const lamp = new Pribor('Настольная лампа', 'FinePower', 100);

teapot.on();
computer.off();
lamp.on();

console.log(`Итоговое потребление = ${teapot.totalPower() + computer.totalPower() + lamp.totalPower()} Ватт`);
