const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log(aldeanos[3]) //imprimo por posicion

aldeanos.push("Cervasio") //añado al final
aldeanos[0]= "Bambina" //cambio por posición
aldeanos.reverse() //Voltea el array
aldeanos[aldeanos.indexOf("Narciso")]="Candela" //Cambio por busqueda

console.log(aldeanos[aldeanos.length - 1]) //ultimo elemento del array con length
