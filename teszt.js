import {fuggvenyem} from "./main.js";
//Két egész szám legnagyobb közösosztoja az a szám, mely mindkettőnek osztoja, azok közül a legnagyobb
export function  tesztesetek(){
let a=15;
let b =25;
let elvart=5;

console.log(`Bemenet a: ${a} | Bemenet b: ${b} | Kimenet: ${fuggvenyem(a,b)} | Elvárt kimenet: 5`);

a=30;
b =73;
elvart=1;

console.log(`Bemenet a: ${a} | Bemenet b: ${b} | Kimenet: ${fuggvenyem(a,b)} | Elvárt kimenet: 1`);

a=15;
b =25;
elvart=5;

console.log(`Bemenet a: ${a} | Bemenet b: ${b} | Kimenet: ${fuggvenyem(a,b)} | Elvárt kimenet: 5`);


a=55555;
b =25;
elvart=5;

console.log(`Bemenet a: ${a} | Bemenet b: ${b} | Kimenet: ${fuggvenyem(a,b)} | Elvárt kimenet: 5`);

a=0;
b =25;
elvart=1;

console.log(`Bemenet a: ${a} | Bemenet b: ${b} | Kimenet: ${fuggvenyem(a,b)} | Elvárt kimenet: 5`);

a=15;
b =25;
elvart=5;

console.log(`Bemenet a: ${a} | Bemenet b: ${b} | Kimenet: ${fuggvenyem(a,b)} | Elvárt kimenet: 5`);

a=15;
b =25;
elvart=5;

console.log(`Bemenet a: ${a} | Bemenet b: ${b} | Kimenet: ${fuggvenyem(a,b)} | Elvárt kimenet: 5`);
}