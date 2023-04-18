//Задание 5

class newPribor {
constructor(name, model, power) {
    this.name = name,
    this.model = model,
    this.power = power,
    this.turn = false
}
	on() {
        this.turn = true;	
        console.log(`${this.name} ${this.model} включен в сеть`);
    }
    off() {
		this.turn = false;
        console.log(`${this.name} ${this.model} отключен от сети`);
    }
	totalPower() {
		if(this.turn){return this.power} else{return 0};
}
}
const teapot = new newPribor('Чайник', 'Tefal', 1500);
const computer = new newPribor('Компьютер', 'Acer', 350);
const lamp = new newPribor('Настольная лампа', 'FinePower', 100);

teapot.on();
computer.off();
lamp.on();

console.log(`Итоговое потребление = ${teapot.totalPower() + computer.totalPower() + lamp.totalPower()} Ватт`);
