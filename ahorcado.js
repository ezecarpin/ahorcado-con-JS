const palabra = 'pan'
let fakes = 0

const calcular = document.getElementById('calcular')
let vacio = document.getElementById('vacio')

let guiones = palabra.replace(/./g, "_ ")

vacio.innerHTML = guiones

calcular.addEventListener('click', e => {
	
	let letra = document.getElementById('letra').value
	let fake = true
	
	for(const i in palabra) {
		if(letra == palabra[i]) {
			guiones = guiones.replaceAt(i*2, letra)
			fake = false
		}
	}	

	if(fake) {
		fakes++
		document.getElementById('ahorcado_img').style.backgroundPosition = -(200 * fakes) + "px 0"

		if(fakes == 4) {
			document.querySelector('.resultado2').style.display = 'flex'
		}
	}

	if(guiones.indexOf('_') < 0) {
		document.querySelector('.resultado').style.display = 'flex'
				
	}

	vacio.innerHTML = guiones
	e.preventDefault()
})

String.prototype.replaceAt = function(index, character) {
 return this.substr(0, index) + character + this.substr(index+character.length)
}
 
