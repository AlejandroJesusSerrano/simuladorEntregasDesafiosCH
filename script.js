//problema hacer un bucle que verifique si hay habitaciones dispónibles,  en caso de NO haber cArterl de ELIGE OTRO DÍAreserva
//ocupado se usara para simular que sucede en caso de que una habitaciopn se encuentre ocupada

const dateRereve = ["21/05/2022", "22/05/2022", "23/05/2022", "24/05/2022", "25/05/2022"] 

let dato
let diaReserva = ingresoDato()
let tipo
let habitacionId
let hsuperior = 1
let hestandard = 2
let dias
let precio
let montoTotal
let descuento
let totalDescuento
let cuotas
let cantidadCuotas

disponible()
menuTipo()
habitacionTipo()

class Habitacion 
{
    constructor(tipo, precio) 
    {
        this.tipo = tipo
        this.precio = precio
    }
}

const superior = new Habitacion('SUPERIOR', 4000)
const estandard = new Habitacion('ESTANDARD', 3000)

habitacionClase()

class Reserva 
{
    constructor(nombre, apellido, cuil) 
    {
        this.nombre = nombre
        this.apellido = apellido
        this.cuil = cuil

        this.nombreCompleto = nombre + ' ' + apellido
    }
}
const nombre = prompt(`Ahora ingrese sus Datos,
                       Comenzemos por su/s nombre/s`)
const apellido = prompt(`Ahora su/s apellido/s:`)
const cuil = prompt(`y por último, su numero de CUIL:`) 

const datosReserva = new Reserva(nombre, apellido, cuil)

function saludo()
{
    alert(`${datosReserva.nombreCompleto}, Muchas Gracias`)
}

saludo()
precioTotal()
controlPagoCuotas()

if (cuotas==='si')
{
    pagoCuotas()
    calculoCuotas()
    intereses()
    alertCuotas()
    mostrarDetalleReserva()
    alert(`¡Tu reserva se ha realizado con éxito!`)
}
else
{
    descontar()
    importeCDescuento()
    alert(`No has elegido cuotas disfruta de nuestro 15% de descuento en 1 pago
        El monto es de $ ${montoTotal}
        Descuento: $${descuento}
        Total a pagar: $${totalDescuento}`)
    mostrarDetalleReserva()
    alert(`¡Tu reserva se ha realizado con éxito!`)
}

cancelar()
{
    
}

function ingresoDato()
{
    dato = prompt('elija una fecha para realizar su reserva')
    
    if (dato===null)
    {
        alert('no has ingresado un dato, recarga la pagina para reiniciar')
        cancelar()  
    } 
    
    return dato   
    
} 

function verificarFecha(diaReserva)
{
    if(dateRereve.includes(`${diaReserva}`))
    {
        return false
    }
    dateRereve.push(diaReserva)
    console.log(dateRereve)
}

function disponible()
{
    while (verificarFecha(diaReserva) === false )
    {
        alert ('No tenemos habitaciones disponibles')
        diaReserva = ingresoDato()
    }
    alert ('Habitaciones disponibles, continúa con tu reserva')
}

function menuTipo() 
{
    habitacionId = prompt(`Seleccione que tipo de habitación desea:
                                        1 (SUPERIOR)
                                        2 (ESTANDARD)`)
    if (habitacionId===null)
    {
        alert('no has ingresado un dato, recarga la pagina para reiniciar')
        cancelar()
    }
    return habitacionId
}

function habitacionTipo()
{ 
    if (habitacionId===null)
    {
        alert('no has ingresado un dato, recarga la pagina para reiniciar')
        cancelar() 
    }
    while (habitacionId!='1' && habitacionId!='2')
    {
        alert (`Ingrese una opcion valida: 
                                            1 (habitacion Superior)
                                            2 (habitacion Estandard)`)
        menuTipo()
        
    }
    return habitacionId
}

function habitacionClase()
{
    
    if (habitacionId==='1')
    {
        alert (`Seleccionaste la habitación ${superior.tipo} con un costo de $ ${superior.precio}`) 
        precio=superior.precio
        return precio 
    }
    else
    {
        alert(`Seleccionaste la habitación ${estandard.tipo} con un costo de $ ${estandard.precio}`)
        precio=estandard.precio
        return precio
    }
    
}

function precioTotal()
{
    dias = prompt(`${datosReserva.nombre}, ahora selecciona la cantidad de días que desea alojarse:`)
    if (dias===null)
    {
        alert('Has cancelado el proceso. reintenta recargando la pagina')
        cancelar() 
    }
    montoTotal = precio*Number(dias)
    alert(`El monto total a abonar es de: $ ${montoTotal}`)
    return montoTotal
}


function controlPagoCuotas()
{
    cuotas = prompt(`¿desea abonar en cuotas?, escriba si o no: `)
    cuotas = cuotas.toLowerCase()
    if (cuotas===null)
    {
        alert('no has ingresado un dato, recarga la pagina para reiniciar')
        cancelar() 
    }
    while (cuotas!="si" && cuotas!="no")
    {
        cuotas = prompt(`No selecciono una opcion válida, por favor Seleccione:
                                                                    "SI" o "NO"`) 
        cuotas = cuotas.toLowerCase()
    }
    return cuotas
}

function descontar()
{
    descuento = montoTotal*15/100
    return descuento
}

function importeCDescuento()
{
    totalDescuento = montoTotal-descuento
    return totalDescuento
}

function pagoCuotas()
{
    cantidadCuotas = prompt(`Seleccione si desea 3 (int. 0%), 6 (int. 0%), 9 (int. 35%) o 12 (int. 65%) cuotas:`)
    if (cantidadCuotas===null)
    {
        alert('Has cancelado el proceso. reintenta recargando la pagina')
        cancelar() 
    }
    while(cantidadCuotas!=='3' && cantidadCuotas!=='6' && cantidadCuotas!=='9' && cantidadCuotas!=='12')
    {
        alert("selecciono una opcion invalida")
        cantidadCuotas = prompt(`Seleccione si desea 3, 6, 9 o 12 cuotas:`)
    }
    return Number(cantidadCuotas)
}

function mostrarDetalleReserva()
{
    if (habitacionId==='1' && cuotas==='si')
    {
        const nodo = document.getElementById('miReserva')
        nodo.innerHTML=`<h2><strong>Por favor, verifique si los datos de su reserva son correctos:</strong></h2></br>
                        <h3><b/>Nombre/s: </b></h3> ${datosReserva.nombre}</br>
                        <h3><b>Apellido/s: </b></h3> ${datosReserva.apellido}</br>
                        <h3><b>CUIL: </b></h3>${datosReserva.cuil}</br>
                        <h3><b>Habitacion: </b></h3>${superior.tipo}</br>
                        <h3><b>Cantidad de días: </b></h3>${dias}</br>
                        <h3><b>Total a abonar: </b></h3>$ ${montoTotal}</br>
                        <h3><b>¿Selecciono cuotas?: </b></h3>${cuotas}</br>
                        <h3><b>Cantidad de cuotas: </b></h3>${cantidadCuotas}</br>`

        
    }
    else if (habitacionId==='2' && cuotas==='si')
    {
        const nodo = document.getElementById('miReserva')
        nodo.innerHTML=`<h2><strong>Por favor, verifique si los datos de su reserva son correctos:</strong></h2></br>
                        <h3><b>Nombre/s: </b></h3> ${datosReserva.nombre}</br>
                        <h3><b>Apellido/s: </b></h3> ${datosReserva.apellido}</br>
                        <h3><b>CUIL: </b></h3>${datosReserva.cuil}</br>
                        <h3><b>Habitacion: </b></h3>${estandard.tipo}</br>
                        <h3><b>Cantidad de días: </b></h3>${dias}</br>
                        <h3><b>Total a abonar: </b></h3>$ ${montoTotal}</br>
                        <h3><b>¿Selecciono cuotas?: </b></h3>${cuotas}</br>
                        <h3><b>Cantidad de cuotas: </b></h3>${cantidadCuotas}</br>`
    }
    else if (habitacionId==='1' && cuotas==='no')
    {
        const nodo = document.getElementById('miReserva')
        nodo.innerHTML=`<h2><strong>Por favor, verifique si los datos de su reserva son correctos:</strong></h2></br>
                        <h3><b>Nombre/s: </b></h3> ${datosReserva.nombre}</br>
                        <h3><b>Apellido/s: </b></h3> ${datosReserva.apellido}</br>
                        <h3><b>CUIL: </b></h3>${datosReserva.cuil}</br>
                        <h3><b>Habitacion: </b></h3>${superior.tipo}</br>
                        <h3><b>Cantidad de días: </b></h3>${dias}</br>
                        <h3><b>Total a abonar: </b></h3>$ ${montoTotal}</br>
                        <h3><b>¿Selecciono cuotas?: </b></h3>${cuotas}</br>`
    }
    else
    {
        const nodo = document.getElementById('miReserva')
        nodo.innerHTML=`<h2><strong>Por favor, verifique si los datos de su reserva son correctos:</strong></h2></br>
                        <h3><b>Nombre/s: </b></h3> ${datosReserva.nombre}</br>
                        <h3><b>Apellido/s: </b></h3> ${datosReserva.apellido}</br>
                        <h3><b>CUIL: </b></h3>${datosReserva.cuil}</br>
                        <h3><b>Habitacion: </b></h3>${estandard.tipo}</br>
                        <h3><b>Cantidad de días: </b></h3>${dias}</br>
                        <h3><b>Total a abonar: </b></h3>$ ${montoTotal}</br>
                        <h3><b></b>¿Selecciono cuotas?: </b></h3>${cuotas}</br>`
    }
}

function intereses()
{
    if (cantidadCuotas==9)
    {
        montoTotal = montoTotal*1.35
        return montoTotal
    }
    else if (cantidadCuotas==12)
    {
        montoTotal = montoTotal*1.65
        return montoTotal
    }
}

function calculoCuotas() 
{
    if(cantidadCuotas==9||cantidadCuotas==12)
    {
        intereses()
        detalle = montoTotal/cantidadCuotas
        detalleDec = detalle.toFixed(2)
        return Number(detalleDec)
    }
    detalle = montoTotal/cantidadCuotas
    detalleDec = detalle.toFixed(2)
    return Number(detalleDec)
}

function alertCuotas()
{
    alert(`seleccionaste ${cantidadCuotas} cuotas.`)
    let  mensaje = ''
    for(let i=1; i<=cantidadCuotas; i++)
    {
        mensaje += `Cuota N° ${i} $${detalleDec} \n`
    }
    alert(`El detalle de importe de las cuotas es el siguiente:
     ${mensaje}`)
}