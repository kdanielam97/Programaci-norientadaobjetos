let numero:number = 25
let nombre1:string ="daniela"
let esAlta:boolean=false
console.log("hola tengo" + " " + numero + " me llamo " + nombre1,esAlta)

let numeros:number []= [2,4,6,8 ]

//console.log(numeros)
for (let i=0; i<=numeros.length; i++) {
    console.log(numeros[i])
}
//FUNCIONES---------
function misDatos(nombre:string, edad:number, estatura?:number){
    console.log(nombre + " " + edad + " " + estatura)
    if (estatura){
        console.log(`mi nombre es ${nombre} tengo ${edad} años, mi estatura es ${estatura}`)
    } else {
        console.log(`mi nombre es ${nombre} tengo ${edad} años`) 
    }
}


misDatos("daniela",25)
misDatos("diegui", 32, 1.70)

function miMultiplicacion(numero:number, numero2:number):number {
    return numero * numero2
}

console.log(miMultiplicacion(5,5))


//FUNCIONES DE FLECHA 

const resta=(numero1:number, numero3:number) => {
    console.log(numero1 - numero3);
    
}
resta(10,5)

