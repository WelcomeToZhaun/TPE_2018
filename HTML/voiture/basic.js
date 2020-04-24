var f1 = document.getElementById("f-right")
var f2 = document.getElementById("f-left")
var f3 = document.getElementById("f-top")
var f4 = document.getElementById("f-btm")


var car = {
	R : 0,
	L : 0,
	T : 0,
	B : 0,
	set_R : function (nb) {
		f1.innerHTML = nb
	},
	add_R : function (nb) {
		if(car.R + nb >= 0){
			car.R = car.R + nb
			f1.innerHTML = car.R
		}
	},
	set_L : function (nb) {
		f2.innerHTML = nb
	},
	add_L : function (nb) {
		if(car.L + nb >= 0){
			car.L = car.L + nb
			f2.innerHTML = car.L
		}
	},
	set_T : function (nb) {
		f3.innerHTML = nb
	},
	add_T : function (nb) {
		if(car.T + nb >= 0){
			car.T = car.T + nb
			f3.innerHTML = car.T
		}
	},
	set_B : function (nb) {
		f4.innerHTML = nb
	},
	add_B : function (nb) {
		if(car.B + nb >= 0){
			car.B = car.B + nb
			f4.innerHTML = car.B
		}
	},
	init : function () {
		console.log("init car")
		f1.innerHTML = 0
		car.R = 0
		f2.innerHTML = 0
		car.L = 0
		f3.innerHTML = 0
		car.T = 0
		f4.innerHTML = 0
		car.B = 0
	}
}


var feux = {
	isF1F2 : true,
	toggle : function () {
		if(feux.isF1F2 == true){
			feux.isF1F2 = false
			f1.style.backgroundColor = "#f44336"
			f2.style.backgroundColor = "#f44336"
			f3.style.backgroundColor = "#4CAF50"
			f4.style.backgroundColor = "#4CAF50"
		} else {
			feux.isF1F2 = true
			f3.style.backgroundColor = "#f44336"
			f4.style.backgroundColor = "#f44336"
			f1.style.backgroundColor = "#4CAF50"
			f2.style.backgroundColor = "#4CAF50"
		}
	},
	set_R : function (toggle) {
		if(toggle == true){
			f1.style.backgroundColor = "#4CAF50"
		} else {
			f1.style.backgroundColor = "#f44336"
		}
	},
	set_L : function (toggle) {
		if(toggle == true){
			f2.style.backgroundColor = "#4CAF50"
		} else {
			f2.style.backgroundColor = "#f44336"
		}
	},
	set_T : function (toggle) {
		if(toggle == true){
			f3.style.backgroundColor = "#4CAF50"
		} else {
			f3.style.backgroundColor = "#f44336"
		}
	},
	set_B : function (toggle) {
		if(toggle == true){
			f4.style.backgroundColor = "#4CAF50"
		} else {
			f4.style.backgroundColor = "#f44336"
		}
	},
	init : function () {
		console.log("init feux")
		f1.style.backgroundColor = "#4CAF50"
		f2.style.backgroundColor = "#4CAF50"
		f3.style.backgroundColor = "#f44336"
		f4.style.backgroundColor = "#f44336"
	}
}