var chrono12 = 0 //chrono is in seconde*10
var chrono34 = 0
var coeff = 1
var fullC = 0


// CHRONO
function Graphique () {
	console.log("Voiture total : " + ((car.T + car.B + car.L + car.R) / 4) + " | chrono : " + (fullC / 10))
}


// run init function
car.init()
feux.init()

// CALLED BY BUTTONS
function generate (l,r,t,b){
	car.init()
	feux.init()
	car.add_L(l)
	car.add_R(r)
	car.add_T(t)
	car.add_B(b)
	fullC = 0
	Graphique()
}

function coef (){
	coeff = prompt("0.5 : 2x plus vite\n1.0 : vitesse normale\n2 : 2x plus lent")
	document.getElementById("coef-text").innerHTML = "Temps : " + coeff
}

// ADD CAR TO RANDOM FEUX
function add_rand_car () {
	var random = Math.floor(Math.random() * 4);     // returns a number between 0 and 3
	if(random == 0){
		car.add_R(1)
	}
	if(random == 1){
		car.add_L(1)
	}
	if(random == 2){
		car.add_T(1)
	}
	if(random == 3){
		car.add_B(1)
	}
	setTimeout(add_rand_car, Math.floor(Math.random() * 3000) * coeff)
}
add_rand_car()


// REMOVE CAR FROM GREEN FEUX
function rem_rand_car () {
	if(feux.isF1F2 == true){
		car.add_R(-1)
		car.add_L(-1)
	} else {
		car.add_T(-1)
		car.add_B(-1)
	}
	setTimeout(rem_rand_car, 2000 * coeff)
}
rem_rand_car()



// CHRONO
function chronos () {
	if(feux.isF1F2 == true){
		chrono34 += 1
		chrono12 = 0
	} else {
		chrono12 += 1
		chrono34 = 0
	}
	setTimeout(chronos, 100 * coeff)
}
chronos()

// CHRONO
function chronos_2 () {
	fullC = fullC + 1
	setTimeout(chronos_2, 100 * coeff)
}
chronos_2()



// SWITCH FEU TO ON/OFF
function feu_manager () {
	if(chrono12 >= 600){
		chrono12 = 0
		console.log('chrono 12 trop élevé')
		feux.toggle()
		Graphique()
	}else if(chrono34 >= 600) {
		chrono34 = 0
		console.log('chrono 34 trop élevé')
		feux.toggle()
		Graphique()
	}else if((car.T + car.B)-(car.L + car.R) >= 10) {
		if(feux.isF1F2 == true){
			chrono34 = 0
			console.log('trop de voiture en 34')
			feux.toggle()
			Graphique()
		}
	}else if((car.T + car.B)-(car.L + car.R) <= -10) {
		if(feux.isF1F2 == false){
			chrono12 = 0
			console.log('trop de voiture en 12')
			feux.toggle()
			Graphique()
		}
	}
	setTimeout(feu_manager, 10)
}
feu_manager()