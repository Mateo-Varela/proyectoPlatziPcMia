//Function para cargar todo el html y recien ahi empezar a ejecutar las acciones
function iniciarJuego() {
	let botonMascotaJugador = document.getElementById('boton-mascotas')
	botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
}

//Function para saber y mostrarle al jugador que mascota eligio
function seleccionarMascotaJugador(){
	let inputHipodoge = document.getElementById('hipodoge')
	let inputCapipepo = document.getElementById('capipepo')
	let inputRatigueya = document.getElementById('ratigueya')

	if (inputHipodoge.checked) {
		alert('elegiste a hipodoge')
	} else if (inputCapipepo.checked){
		alert('elegiste a capipepo')
	} else if (inputRatigueya.checked){
		alert('elegiste a ratigueya')
	} else{
		alert('no elegiste nada')
	}
}

//Metodo para cargar todo el html 
window.addEventListener('load', iniciarJuego)