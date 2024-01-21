let numero = 1
let i = 0;
let f = 0;
let h = 0
let w = 0
let z = 0
let v = 0
let r = 0
let ñ= 0
let g = 0
let x = 0
let palabra = 'TROLL';
console.log(palabra)
const ArrayPalabra = ['']

const guessRows = [
  ["","","","",""],
  ["","","","",""],
  ["","","","",""],
  ["","","","",""],
  ["","","","",""],
  ["","","","",""],
  ["","","","",""]


]

let arranque = 'true'
for (let j = 0; j < 5; j++) {
    ArrayPalabra[j] = palabra[j]
  }

const start = document.getElementById('start');
const subrenglon = document.querySelectorAll('.s')
const arraysubrenglon = Array.from(subrenglon)
const boton = document.querySelector('.boton')
const renglon = document.querySelectorAll('.renglon');
let largo = Array.from(renglon);

let ArrayvalorRenglon1;

const juego =[{

  
 
},
{

},
{

},{

},{

},{

},{

},{}]




const letras = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','<<']

const teclado = document.querySelector('.teclado')

let letters = [];
let lettersArray = [];
let d = 0
const letras_contadas = contar_letras(letters);



function contar_letras (letras) {
  let letras_contadas = {};
  for (let j = 0; j < 5; j++) {
    letters[j] = palabra[j]
  }


  letras.forEach(function (letra) {
    if (letra in letras_contadas) {
      letras_contadas[letra]++;
      if (letras_contadas[letra] == 2) {
        
        for (let i = 0; i < 5; i++) {
          if (letters[i] == letra) {
            lettersArray[d] = letters[i];
            letters[i] = ''
            d++
           
            // segundo(letters)
            // console.log( lettersArray) ;
            
          }
          
        }
      }
    }
    else {
      letras_contadas[letra] = 1;
    //   segundo(letters)

    }
  });
  if (lettersArray == "") {
    fr()
  }else{
    console.log(lettersArray)
  }
  return letras_contadas;
}



function fr(){
    console.log(1)
}


letras.forEach(key => {
   const buttonElement = document.createElement('button')
   buttonElement.textContent = key
   buttonElement.setAttribute('class', 'key')
   buttonElement.setAttribute('id', key)
   teclado.append(buttonElement)
   buttonElement.addEventListener('click', () => handleClick(key))
  
   
})


const handleClick = (key) =>{
    
 if (key == '<<'){ 
  borrar()

 } else{
   if (guessRows[numero].join('').length  == 5  ) {
     guessRows[numero][ñ] 
     arraysubrenglon[g].innerHTML 
     }else if (arranque == 'true' ){
      juego[numero][ñ] = key
      guessRows[numero][ñ] = key
      arraysubrenglon[g].innerHTML = key
      ñ++  
      g++

     
} else{
  alert('termino')
} }





}


const borrar = () =>{
  if (guessRows[numero].join('').length > 0 ){
    ñ--
    g--
guessRows[numero][ñ] = ''
arraysubrenglon[g].innerHTML = ''
  }

}



boton.addEventListener('click', () => {
  if(arranque == 'true'){
 valorRenglon1 = guessRows[numero].join('')   
 
  if (valorRenglon1.length == '5' ) {

let api = ( `https://api.dictionaryapi.dev/api/v2/entries/en/${valorRenglon1}`)
fetch(api)
.then(function(response){
	return response.json()
})
.then(function(datos){

if (datos.title == 'No Definitions Found') {
    alert('no existe')
  }else{
   ArrayvalorRenglon1 =  Array.from(valorRenglon1)
 
  for ( r = 0; r < 5; r++) {
     juego[numero][r] = ArrayvalorRenglon1[r]
   }
   
   ganar()
  numero++
 f = f + 5;
  
 for (let j = 0; j < 5; j++) {
  ArrayPalabra[j] = palabra[j]
}
 ñ = 0
 
  }
})
  }else{
       alert('5 letras mostro')
  }
  } else {
  alert('termino')
}

})

let letra;

function ganar(){
  
    if (valorRenglon1 == palabra) {
        start.innerHTML = 'Ganaste'
        arranque = 'false'

        for (let k = 0; k < 5; k++) {
          arraysubrenglon[k+z].classList.add('flip')

          arraysubrenglon[k+z].style.background = '#538d4e'
          letra = document.getElementById(juego[numero][k])
          letra.classList.add('verde')
          
        }
    } else if (numero == 6){
      for (v = 0; v < 5; v++) {
        arraysubrenglon[v+z].style.background = 'gray'
     }  
    //   colores()
      start.innerHTML = 'perdiste'
    }
    else{
      for (v = 0; v < 5; v++) {
                  arraysubrenglon[v+w].style.background = '#3a3a3c'
                  letra = document.getElementById(juego[numero][v])
                  letra.classList.add('gris')
               }
       z = z + 5;
       
    //    colores()
    contar_letrasJ(lettersJ)
        h++
  } 
  console.log(juego[numero])
}

// contar letras ahora del juego
let lettersJ = []
let lettersJArray = []

// const contarJuego = contar_letrasJ(lettersJ);



function contar_letrasJ (letras) {
     lettersJArray = []
  let contarJuego = {};
  for (let j = 0; j < 5; j++) {
    lettersJ[j] = juego[numero][j]
  }
d = 0;

  letras.forEach(function (letra) {
    if (letra in contarJuego) {
      contarJuego[letra]++;
      if (contarJuego[letra] == 2) {
        
        for (let i = 0; i < 5; i++) {
          if (lettersJ[i] == letra) {
            lettersJArray[d] = lettersJ[i];
            lettersJ[i] = ''
            d++
           
            // segundo(letters)
         
            
          }
          
        }
      }
    }
    else {
      contarJuego[letra] = 1;
    //   segundo(letters)

    }
    
  });
  if (lettersJArray == "") {
    fr()
  }else{
    console.log(4)   
    console.log( lettersJArray) ;
  }
  return contarJuego;
}