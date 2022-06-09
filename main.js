const productos=[
    {sku:1, nombre:"fideos", precio:200, peso:"300gr", marca:"nestlé", sabor:"natural" },
    {sku:2, nombre:"arroz", precio:500, peso:"900gr", marca:"soprole", sabor: "natural" },
    {sku:3, nombre:"leche", precio:600, peso:"1000ml", marca:"loncoleche", sabor: "chocolate" },
    {sku:4, nombre:"puré", precio:800, peso:"1000gr", marca:"maggi", sabor: "papa" },
]
function saludo(){
    alert("¡Hola Bienvenido a nuestro minimarket La Araucaria!")
}
function nav(){
    let pregunta
    pregunta=parseInt(prompt("Por favor indicanos tu preferencia \n 1: Comprar \n 2: Vitrinear \n 3: Finalizar"))
    return(pregunta)
}
const elegir = (pregunta)=>{
    let seguro
    switch(pregunta){
        case 1:
            comprar()
            break
        case 2:
            nav_vitrinear(vitrinear())
            break
        case 3:
                seguro=confirm("   Elegiste la Opción Finalizar \n \n  ¿Estás seguro que quieres Finalizar?")
                if(seguro){
                    alert("¡Esperamos verte pronto! ¡Adiós!")
                }
                else{
                    elegir(nav())
                }
            break         
}
}
function comprar(){
    let cantidad=0
    let producto
    let precio=0
    let subtotal=0
    let total=0
    do {
        producto=parseInt (prompt("¿Qué producto deseas comprar \n 1: fideos \n 2: arroz \n 3: leche \n 4: puré"))
        if (producto== 1 || producto == 2 || producto == 3 ||producto == 4){
        cantidad=prompt("cuantos quieres")
        if (cantidad>0 && cantidad<1000){
             switch (producto){
                case 1:
                     precio = 100
                     break;
                case 2:
                     precio = 200
                     break;
                case 3:
                    precio = 300
                    break; 
                case 4:
                    precio = 400
                    break;           
                default:
                    precio=1000
                     break;
            }
             subtotal = precio * cantidad
             total=total+subtotal
             alert ("El subtotal de tu compra es =$" + total)}
        else{
        alert("Disculpa, pero la cantidad debe estar entre 0 y 1000")
        }
      }
      else
      alert("Disculpa, no entendí que producto quieres")
        }
    while
    (continuar=confirm("¿Quieres continuar comprando?"))
    confirm ("El total total de su compra es $"+ total + "\n\n¿Desea Finalizar?")
    alert("¡Muchas gracias por comprar con nosotros!")

}
function vitrinear(){
        for (const sku of productos){
            alert("\n Estos son nuestros productos en stock \n"+"\n Nombre: "+sku.nombre+"\n Precio: "+sku.precio+"\n Peso: "+ sku.peso+"\n Marca: "+sku.marca+ "\n Sku: "+sku.sku)
        }   
        let ver=parseInt(prompt("¿Que te parecieron nuestros producto? \n\n 1: Quiero verlos de nuevo \n 2: Quiero volver al menú"))
        return(ver)
}
const nav_vitrinear = (ver)=>{
    switch (ver){
        case 1:
            nav_vitrinear(vitrinear())
        break
        case 2:
            elegir(nav())
        break
        default:
            alert("No entendimos tu respuesta, por favor intentalo de nuevo")
            elegir(nav())
        break
    }
}
saludo()
elegir(nav())
