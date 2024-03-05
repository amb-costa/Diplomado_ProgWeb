/*
Transformar un fichero JSON a string y viceversa
objeto JSON que contenga al menos otro objeto y un array de objetos como propiedades
Muestre por consola el resultado de transformarlo a string
Y vuelva a transformar ese string a objeto, comprobando que mantiene todas sus propiedades */


// Se crea un objeto de Javascript
const objFichero = {
    "obj1" : {
        "subObj" : "subObjeto"
    },
    "array1" : [
        {"subArr1" : "subArray1", 
        "subArr2" : "subArray2", 
        "subArr3" : "subArray"}
    ]
}

// Se transforma el objeto a string de JSON
const jsonFichero = JSON.stringify(objFichero)
console.log("Transformación de Objeto a JSON")
console.log(jsonFichero)
console.log(typeof jsonFichero)

//Se transforma el string de JSON a objeto de Javascript
const jsonObjeto = JSON.parse(jsonFichero)
console.log("Transformación de JSON a Objeto")
console.log(jsonObjeto)
console.log(typeof jsonObjeto)
