//Задание 2
 
 function specifications(wood, key) {
    return (key in wood);
}
let wood = {
	name: 'Береза',
	type: 'Лиственная',
	year: '120'
 };
console.log(specifications(wood, "weight"));  //false
console.log(specifications(wood, "name"));  //true
  
