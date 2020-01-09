//Evita escribir mal,errores gramaticales
/*
Elimina algunos errores silenciosos de JavaScript cambiándolos a que lancen errores.
Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.
Prohibe cierta sintaxis que probablemente sean definidas en futuras versiones de ECMAScript.
*/
"use strict"
//declarar variable
//declaracion| inicializacion| utilizacion
//variables constantes, varoles no modificables
const PI=3.1416;
//TIPOS DE DATOS
//alert(PI)
var Gato="no es un gato"
//Tipos de datos:
/*Numericos
Cadena
booleanos
fechas(objeto)
simbolos
objetos*/
var numero=12345;
var cadena= "cadena";
var estado=true;
var fecha=new Date();
var simbolo=Symbol();
//Operadores aritmeticos
// + - * / ; % modulo o resto
// variable++ o -- postincremento (precedencia en operadores aritmeticos)=*/%+-
// ++variable preincremento
var uno=23;
var dos=23;
//uno++;
//Operadores relacionales
//<,>,<=,>=,==,!=, ===
//Operadores logicos. &&= y  || = o  ! = negación
//Operadores de asignación = uno+=10

//Operador Ternario
//condicion ? true : false;
document.write(uno==dos ? "Es igual" : "No es igual");
//Operadores de concatenación + 
