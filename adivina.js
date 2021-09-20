/*
    Autor: Sergio Matamoros Delgado
    Fecha: 18-9-2021
*/
'use strict';

//Numero aleatorio 1-10
let rnd = Math.floor(Math.random() * 100)+1;

//Variables
let acertado = false;
let continuar = undefined;
let intentos = 0;

while(!acertado){
    console.log("[DEBUG] rnd number: " +rnd);

    let input = prompt("Elija un número aleatorio entre el 1-100");

    //Si el usuario acierta
    if(input==rnd) { 
        alert("Has acertado el numero! \nHas hecho un total de "+intentos + " intentos");
        acertado=true;
    }
    else {
        if(input >= rnd)
            alert("Has fallado! El número es menor o igual.");
        else
            alert("Has fallado! El número es mayor o igual.");
        acertado = false;
        intentos++;
    }
}
