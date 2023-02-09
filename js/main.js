
let arepa={nombre:"Arepa de huevo", valor:3000};
let empanada={nombre:"Empanada",valor:1000};
let papa ={nombre:"Papa",valor:1500};
let bofe={nombre:"Bofe",valor:2000};
let carimanola={nombre:"Carimañola",valor:1000};
let jugo={nombre:"Jugo",valor:1000};

let ventas = document.querySelector('#Ventas');
let salidas = document.querySelector('#salida');
ventas.style.display = "none";
salidas.style.display = "none";



function total(nombre){
    var ventas = document.querySelector('#Ventas');
    ventas.style.display ="block";
    ventas.innerHTML='<h3>Ingrese la Cantidad</h3><br> <h4>'+nombre.nombre+'</h4><br><input type="number" id="cant"><br><button id="res">agregar</button><button id="close">cerrar</button><br><aside id="salida"></aside>';
    var close = document.querySelector('#close');
    var res = document.querySelector('#res');
    close.addEventListener('click',()=>{
        ventas.style.display ="none";
    })
    res.addEventListener('click',function obtenerTotal(){
        var cant = document.querySelector('#cant');
        var salida = document.querySelector('#salida');
        if(cant.value==""){
            alert('No se ingreso la cantidad');
        }else{
        var ventaUnit = nombre.valor * parseInt(cant.value);
        ventas.innerHTML += '<h2>Total a pagar: $'+ventaUnit+'</h2>';
        };
    });
};
let agregar = document.querySelector('#addItem');
    agregar.addEventListener('click',()=>{
        traerObjeto(total.nombre);
    });

function traerObjeto(nombre){
    var tomarVenta ={
        nombre:nombre.nombre,
        cantidad:cant.value,
        totalProducto:ventaUnit
    }
    console.log({
        tomarVenta
    })
}