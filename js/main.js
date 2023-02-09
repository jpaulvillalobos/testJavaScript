
let arepa={nombre:"Arepa de huevo", valor:3000};
let empanada={nombre:"Empanada",valor:1000};
let papa ={nombre:"Papa",valor:1500};
let bofe={nombre:"Bofe",valor:2000};
let carimanola={nombre:"Carimañola",valor:1000};
let jugo={nombre:"Jugo",valor:1000};

let ventas = document.querySelector('#Ventas');
ventas.style.display ="none";



function total(nombre){
    let ventas = document.querySelector('#Ventas');
    ventas.style.display ="block";
    ventas.innerHTML='<h3>Ingrese la Cantidad</h3><br> <h4>'+nombre.nombre+'</h4><br><input type="number" id="cant"><br><button id="res">calcular</button><button id="close">cerrar</button><br><aside id="salida"></aside>';
    let close = document.querySelector('#close');
    let res = document.querySelector('#res');
    close.addEventListener('click',()=>{
        ventas.style.display ="none";
    })
    res.addEventListener('click',()=>{
        let cant = document.querySelector('#cant');
        let salida = document.querySelector('#salida');
        if(cant.value==""){
            alert('No se ingreso la cantidad');
        }else{
        let ventaUnit = nombre.valor * parseInt(cant.value);
        salida.innerHTML = '<h2>Total a pagar: $'+ventaUnit+'</h2>';}
    })
}

