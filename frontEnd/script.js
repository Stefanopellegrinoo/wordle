let unaPalabra = 'l'

let jota = true

window.addEventListener('load', function () {
  // Tu función que se ejecutará al principio

  empezarJuego();
});




let largoArrayPalabras

const buscar = async () => {
  let lasPalabras
  await axios.get('/api/data')
    .then(response => {
      lasPalabras = response.data.Result



    })
    .catch(error => {
      console.error('Error al hacer la solicitud:', error);
    });
  return lasPalabras
}

async function empezarJuego() {
  const todasLasPalbras = await buscar()
  const arrayDePalabras = todasLasPalbras.map(item => item.word);

  let x = Math.floor(Math.random() * todasLasPalbras.length);
  unaPalabra = todasLasPalbras[x].word

  localStorage.setItem('text', JSON.stringify(arrayDePalabras))
  palabraRandom = JSON.parse(localStorage.getItem('text'))

  empezar(unaPalabra)
}





const noEsta = (nuevaPalabra) => {

  const dato = {
    clave1: nuevaPalabra,
  };

  axios.post('/api/post', dato)
    .then(response => {
      console.log('Respuesta del servidor:', response.data);
    })
    .catch(error => {
      console.error('Error en la solicitud POST:', error);
    });
}


let numero = 1;
let f, h = 0;
let z = 0;
let w = 0
let v = 0
let r = 0
let ñ = 0
let g = 0
let letra;
const boton = document.querySelector('.boton')
let datos;
let palabraL
let q = 0;
let palabraRandom = ['APPLE'];


let valorRenglon1



const ArrayPalabra = [
]


let palabrasJuego = ['SUNNY']

const guessRows = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""]


]

let arranque = 'true'

const start = document.getElementById('start');
const subrenglon = document.querySelectorAll('.s')
const arraysubrenglon = Array.from(subrenglon)

const renglon = document.querySelectorAll('.renglon');
let largo = Array.from(renglon);

let ArrayvalorRenglon1;

const juego = [{



  },
  {

  },
  {

  }, {

  }, {

  }, {

  }, {

  }, {}
]

const letras = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<<']

const teclado = document.querySelector('.teclado')

letras.forEach(key => {
  const buttonElement = document.createElement('button')
  buttonElement.textContent = key
  buttonElement.setAttribute('class', 'key')
  buttonElement.setAttribute('id', key)
  teclado.append(buttonElement)
  buttonElement.addEventListener('click', () => handleClick(key))


})

document.onkeydown = function (e) {
  if (e.keyCode == 8) {
    borrar()
  } else if (e.key === 'Enter') {
    empezar()
  } else {
    if (guessRows[numero].join('').length == 5) {
      guessRows[numero][ñ]
      arraysubrenglon[g].innerHTML
    } else if (arranque == 'true') {
      juego[numero][ñ] = String.fromCharCode(e.keyCode)
      guessRows[numero][ñ] = String.fromCharCode(e.keyCode)
      arraysubrenglon[g].innerHTML = String.fromCharCode(e.keyCode)
      ñ++
      g++
    }

  }

}

const handleClick = (key) => {

  if (key == '<<') {
    borrar()

  } else {
    if (guessRows[numero].join('').length == 5) {
      guessRows[numero][ñ]
      arraysubrenglon[g].innerHTML
    } else if (arranque == 'true') {
      juego[numero][ñ] = key
      guessRows[numero][ñ] = key
      arraysubrenglon[g].innerHTML = key
      ñ++
      g++


    } else {
      alert('termino')
    }
  }





}



const borrar = () => {
  if (guessRows[numero].join('').length > 0) {
    ñ--
    g--
    guessRows[numero][ñ] = ''
    arraysubrenglon[g].innerHTML = ''
  }

}



boton.addEventListener('click', () => {
  jota = false
  empezar(unaPalabra)


})




function empezar(unaPalabra) {
  let palabra = unaPalabra

  for (let j = 0; j < 5; j++) {
    ArrayPalabra[j] = palabra[j]
  }

  if (arranque == 'true') {
    valorRenglon1 = guessRows[numero].join('')

    if (valorRenglon1.length < 5 && !jota) {
      alert('5 letras mostro')

    } else {
      let api = (`https://api.dictionaryapi.dev/api/v2/entries/en/${valorRenglon1}`)
      fetch(api)
        .then(function (response) {
          return response.json()
        })
        .then(function (datos) {

          if (datos.title == 'No Definitions Found') {
            alert('no existe')
          } else {

            palabraL = valorRenglon1




            let palabrasGuardadas = JSON.parse(localStorage.getItem('text'))

            if (!palabrasGuardadas.includes(palabraL)) {
              noEsta(palabraL)

            }

            ArrayvalorRenglon1 = Array.from(valorRenglon1)

            for (r = 0; r < 5; r++) {
              juego[numero][r] = ArrayvalorRenglon1[r]
            }

            ganar(palabra)
            numero++
            f = f + 5;

            for (let j = 0; j < 5; j++) {
              ArrayPalabra[j] = palabra[j]
            }
            ñ = 0

          }
        })
    }
  } else {
    alert('termino')
  }
}


function ganar(palabra) {

  if (valorRenglon1 == palabra) {
    start.innerHTML = 'Ganaste'
    arranque = 'false'

    for (let k = 0; k < 5; k++) {
      arraysubrenglon[k + z].classList.add('flip')

      arraysubrenglon[k + z].style.background = '#538d4e'
      letra = document.getElementById(juego[numero][k])
      letra.classList.add('verde')

    }
  } else if (numero == 6) {
    for (v = 0; v < 5; v++) {
      arraysubrenglon[v + z].style.background = 'gray'
    }
    colores()
    start.innerHTML = 'perdiste'
  } else {
    for (v = 0; v < 5; v++) {
      arraysubrenglon[v + w].style.background = '#3a3a3c'
      letra = document.getElementById(juego[numero][v])
      letra.classList.add('gris')
    }

    z = z + 5;
    colores()

    h++
  }
}

function colores() {
  {

    for (let s = 0; s < 5; s++) {

      for (let p = 0; p < 5; p++) {

        if (juego[numero][p].includes(ArrayPalabra[s])) {


          if (s == p) {
            arraysubrenglon[p + w].style.background = '#538d4e'
            letra = document.getElementById(juego[numero][p])
            juego[numero][p] = ''
            ArrayPalabra[p] = 1


            letra.classList.add('verde')

          }
        }

        arraysubrenglon[s + w].classList.add('flip')

      }

    }


    segundo()
    w = w + 5;

  }

}



function segundo() {

  for (let c = 0; c < 5; c++) {

    for (let u = 0; u < 5; u++) {

      if (juego[numero][u].includes(ArrayPalabra[c])) {

        if (c != u) {

          letra = document.getElementById(juego[numero][u])
          letra.classList.add('amarillo')
          ArrayPalabra[c] = 9


          if (juego[numero][u] == '') {

          } else {
            arraysubrenglon[u + w].style.background = '#b59f3b '
          }
          juego[numero][u] = ''

        }
      }
      arraysubrenglon[c + w].classList.add('flip')
    }
  }
}