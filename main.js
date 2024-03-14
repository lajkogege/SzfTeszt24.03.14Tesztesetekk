import { tesztesetek } from "./teszt.js";

/* **************************************FELADATSPECIFIKÁCIÓ********************************************
//Két egész szám legnagyobb közösosztoja az a szám, mely mindkettőnek osztoja, azok közül a legnagyobb*/
export function fuggvenyem(a, b) {
  if (a===0 || b===0){
    return "Egyik szám sem lehet nulla!"
  }
  if(a<0 || b<0){
    return "Mindkét számnak pozitívnak kell lennie!"
  }
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

console.log(fuggvenyem(45,30));

tesztesetek();