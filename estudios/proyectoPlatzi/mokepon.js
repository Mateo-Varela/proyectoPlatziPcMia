let ataqueJugador


//Function para cargar todo el html y recien ahi empezar a ejecutar las acciones
function iniciarJuego() {
	let botonMascotaJugador = document.getElementById('boton-mascotas')
	botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

	let botonFuego = document.getElementById('boton-fuego')
	botonFuego.addEventListener('click', ataqueFuego) 
	let botonAgua = document.getElementById('boton-agua')
	botonAgua.addEventListener('click', ataqueAgua) 
	let botonTierra = document.getElementById('boton-tierra')
	botonTierra.addEventListener('click', ataqueTierra) 
}

//Function para saber y mostrarle al jugador que mascota eligio
function seleccionarMascotaJugador(){
	let inputHipodoge = document.getElementById('hipodoge')
	let inputCapipepo = document.getElementById('capipepo')
	let inputRatigueya = document.getElementById('ratigueya')
	let mascotaJugador = document.getElementById('mascota-jugador') //Seleccionar el span de html para poder cambiar el nombre dependiendo de la eleccion del usuario

	if (inputHipodoge.checked) {
		mascotaJugador.innerHTML = 'hipodoge'
	} else if (inputCapipepo.checked){
		mascotaJugador.innerHTML = 'capipepo'
	} else if (inputRatigueya.checked){
		mascotaJugador.innerHTML = 'ratigueya'
	} else{
		alert('no elegiste nada, tienes que seleccionar una mascota')
	}

	seleccionarMascotaEnemigo()
}

//function de numero aleatorio 
function aleatorio(min,max){
	return Math.floor(Math.random() * (max - min + 1) + min)
}

//function de seleccion de mascota enemiga y mostrarla al usuario modificando el DOM
function seleccionarMascotaEnemigo(){
	let numeroAleatorio = aleatorio(1,3)
	let mascotaEnemiga = document.getElementById('mascota-enemigo') 


	if (numeroAleatorio == 1) {
		mascotaEnemiga.innerHTML = 'hipodoge'
	} else if (numeroAleatorio == 2) {
		mascotaEnemiga.innerHTML = 'capipepo'
	} else {
		mascotaEnemiga.innerHTML = 'ratigueya'
	}
}

function ataqueFuego(){
	ataqueJugador = 'FUEGO'
	let ataque = document.getElementById('ataque-jugador')
	ataque.innerHTML = 'FUEGO'
	
	ataqueEnemigo()
}

function ataqueAgua(){
	ataqueJugador = 'AGUA'
	let ataque = document.getElementById('ataque-jugador')
	ataque.innerHTML = 'AGUA'

	ataqueEnemigo()
}

function ataqueTierra(){
	ataqueJugador = 'TIERRA'
	let ataque = document.getElementById('ataque-jugador')
	ataque.innerHTML = 'TIERRA'

	ataqueEnemigo()
}

function ataqueEnemigo() {
	let ataqueAleatorio = aleatorio(1,3)
	let ataqueEnemigo = document.getElementById('ataque-enemigo')

	if (ataqueAleatorio == 1) {
		ataqueEnemigo.innerHTML = 'FUEGO'
	} else if(ataqueAleatorio == 2) {
		ataqueEnemigo.innerHTML = 'AGUA'
	} else {
		ataqueEnemigo.innerHTML = 'TIERRA'
	}

}
//Metodo para cargar todo el html 
window.addEventListener('load', iniciarJuego)