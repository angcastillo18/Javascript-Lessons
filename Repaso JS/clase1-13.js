//Evita escribir mal,errores gramaticales
/*
Elimina algunos errores silenciosos de JavaScript cambi�ndolos a que lancen errores.
Corrige errores que hacen dif�cil para los motores de JavaScript realizar optimizaciones: a veces, el c�digo en modo estricto puede correr m�s r�pido que un c�digo id�ntico pero no estricto.
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
var dos=15;
//uno++;
//Operadores relacionales
//<,>,<=,>=,==,!=, ===
document.write(uno===dos);
//Operadores logicos. Tiempo = 1:03:58