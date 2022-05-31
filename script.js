

//nodos a utilizar;


const btn = document.querySelector(".btn");
btn.addEventListener("click",userCreate);

const content = document.querySelector(".content");
const img = document.querySelector(".img");

//Funcion para crear usuarios (userCreate);

 async function userCreate(){

    //la URL que usé para este proyecto es de una api que "Crea" un array de objetos con distintas propiedads al azar o random

   await fetch('https://randomuser.me/api/')
     
   //El primer then me devuelve el valor de la URL parseado (en formato JSON); 
   .then(res => {

     // Le paso cursores de espera (cursor:wait) al body y a mi btn para que el usuario/cliente sepa que debe esperar a que se consuma la API. Consideré importante este paso
       document.documentElement.style.cursor = "wait";
       btn.style.cursor = "wait";
      return res.json()
    })
   
   //El segundo then va a jugar con las caracteristicas de ese array de objetos (JSON);
   .then((res) => {

            
           //aquí modifico el nodo img (NO la imagen en si, sino el DIV con la clase IMG) y le asigno un elemento IMG con la URL (importante la URL);
            img.innerHTML = `
            
               <img src = "${res.results[0].picture.large}" >
            `;


            //aquí modifico el nodo .content asignandole valores desde la url con la api fetch (res) almacenandolos en li
            content.innerHTML = `
             
            <li>Nombre: ${res.results[0].id.name}</li>
            <li>Tel: ${res.results[0].phone}</li>
            <li>Email: ${res.results[0].email}<li>
            <li>Gender: ${res.results[0].gender}</li>
            
            `;

     })

     //con el metodo finally quito los curosres para que el usuario/cliente sepa que ya ah terminado la demora o espera y puede continuar sin preocupaciones
     .finally(()=>{
         console.log("Promesa Finalizada");
         document.documentElement.style.cursor = "default";
         btn.style.cursor = "pointer";
     })

 }

