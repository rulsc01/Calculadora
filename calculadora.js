let Pantalla=document.getElementById("pantalla")
let operacion = "";
let lastAns = 0;

let imprimir=(n)=> { 
  operacion += n;
  Pantalla.value = operacion;
}
 let calcular=()=>{
  lastAns= eval(operacion);
  Pantalla.value=lastAns
  operacion = "";
 }
let limpiar=()=>{
  Pantalla.value = "";
  operacion=""
}
let del=()=>{
  operacion = operacion.slice(0, -1);
  Pantalla.value = operacion;
}
let Ans=()=>{
  operacion+= lastAns.toString();
  Pantalla.value = operacion;
}