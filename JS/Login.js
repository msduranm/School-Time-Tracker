const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach((input) => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

const formulario = document.getElementById('formulario');

const expresiones = {
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/,
}

const campos = {
	email: false,
	password: false
}

const validarFormulario = (e) => {
	switch (e.target.type) {
		case "email":
			if(expresiones.email.test(e.target.value)){
				document.getElementById('email').classList.remove('input-div-incorrecto:before', 'input-div-incorrecto:after');
				document.getElementById('email').classList.add('input-div-correcto:before', 'input-div-correcto:after');
				document.querySelector(".div-user .error-user").classList.remove('error-user-activo');
				campos['email'] = true;
			} else {
				document.getElementById('email').classList.add('input-div-incorrecto:before', 'input-div-incorrecto:after');
				document.querySelector(".div-user .error-user").classList.add('error-user-activo');
				setTimeout(() => {document.querySelector(".div-user .error-user").classList.remove('error-user-activo');
				}, 10000);
				campos['email'] = false;
			}
		break;
		case "password":
			if(expresiones.password.test(e.target.value)){
				document.getElementById('password').classList.remove('input-div-incorrecto:before', 'input-div-incorrecto:after');
				document.getElementById('password').classList.add('input-div-correcto:before', 'input-div-correcto:after');
				document.querySelector(".div-pass .error-pass").classList.remove('error-pass-activo');
				document.querySelector(".div-pass .error-pass-2").classList.remove('error-pass-2-activo');
				campos['password'] = true;
			} else {
				document.getElementById('password').classList.add('input-div-incorrecto:before', 'input-div-incorrecto:after');
				document.querySelector(".div-pass .error-pass").classList.add('error-pass-activo');
				setTimeout(() => {document.querySelector(".div-pass .error-pass").classList.remove('error-pass-activo');
				}, 10000);
				document.querySelector(".div-pass .error-pass-2").classList.add('error-pass-2-activo');
				setTimeout(() => {document.querySelector(".div-pass .error-pass-2").classList.remove('error-pass-2-activo');
				}, 10000);
				campos['password'] = false;
			}
		break;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.email && campos.password){
		document.location.href="../HTML/Menú/Home.html";
	}else {
		document.getElementById('error-btn').classList.add('error-btn-activo');
		setTimeout(() => {document.getElementById('error-btn').classList.remove('error-btn-activo');
		}, 5000);
	}
});