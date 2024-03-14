import {fuggvenyem} from "./main.js";
//Két egész szám legnagyobb közösosztoja az a szám, mely mindkettőnek osztoja, azok közül a legnagyobb
export function  tesztesetek(){
let a=15;
let b =25;
let elvart=5;

console.log(`Bemenet a: ${a} | Bemenet b: ${b} | Kimenet: ${fuggvenyem(a,b)} | Elvárt kimenet: 5`);

console.assert(
    vart===fuggvenyem(a,b),
    `a=${a}, b=${b}, lnko=${vart}`,
    "A várt eredmény nem stimmel"
)

a=30;
b =73;
elvart=1;
console.assert(
    vart===fuggvenyem(a,b),
    "%o",
    `a=${a}, b=${b}, lnko=${vart}`,
    "A várt eredmény"
)


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
elvart="Egyik szám sem lehet nulla!";

console.log(`Bemenet a: ${a} | Bemenet b: ${b} | Kimenet: ${fuggvenyem(a,b)} | Elvárt kimenet: Egyik szám sem lehet nulla!`);

a=0;
b =0;
elvart=5;

console.log(`Bemenet a: ${a} | Bemenet b: ${b} | Kimenet: ${fuggvenyem(a,b)} | Elvárt kimenet: 5`);

a=15;
b =25;
elvart=5;

console.log(`Bemenet a: ${a} | Bemenet b: ${b} | Kimenet: ${fuggvenyem(a,b)} | Elvárt kimenet: 5`);
}