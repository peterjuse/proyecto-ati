function getElements(page, quantity, data){ // Callback para mostrar los datos!
	var init = page*quantity;

	return data.slice(init, init+quantity);
}

function queryPasties(value, field, data){
	var result;
	var n = data.length;

	for(var i=0, j=0; i<n; ++i){
		if(data[i][field] === value){
			result[j] = data[i];
			++j;
		}
	}
	return result;
}

function queryUsers(value, field, data){
	var result;
	var n = data.length;

	for(var i=0; i<n; ++i){
		if(data[i][field] === value)
			return data[i];
	}
	return null;
}

function new_session(form){
	var users = JSON.parse(sessionStorage["users"]);
	//Estas variables son para simular la existencia de un usuario aqui debería de ser una consulta a la BD
	var username_attemp = form.username.value.replace("@", "");
	var password_attemp = form.password.value;
	var error;
	var user = queryUsers(username_attemp, 'username', users);
 
	if(user && user.password === password_attemp){
		$("#login-username, #login-password").attr({
			"data-toggle": " ",
			"title":" "
		});
		$("#login-username, #login-password").parent().removeClass("error-tooltip");
		$("#login-username, #login-password").removeClass("has-error");
		localStorage["Space-User"]="User";
		return true;
	} 
	error = !user ? $("#login-username") : $("#login-password");
	error.attr({
		"data-toggle": "tooltip",
		"title": (!user ? "Error, usuario incorrecto" : "Error, contraseña incorrecta")
	});
	error.parent().addClass("error-tooltip");
	error.addClass("has-error");
	$('[data-toggle=tooltip]').tooltip({trigger: 'focus'});
	return false;
}

function new_user(form){
	var name_attemp = form.fname.value;
	var last_name_attemp = form.last_name.value;
	var username_attemp = form.username.value;
	var email_attemp = form.email.value;
	var password_attemp = form.password.value;

	var error;
	var users = JSON.parse(sessionStorage["users"]);

	var username = queryUsers(username_attemp, "username", users); 
	var email = queryUsers(email_attemp, "email", users);
	if(!username && !email){
		$("#signup-username, #signup-email").attr("title", "Campo requerido");
		$("#signup-username, #signup-email").parent().removeClass("error-tooltip");
		$("#signup-username, #signup-email").parent().addClass("info-tooltip");
		$("#signup-username, #signup-email").removeClass("has-error");
		sessionStorage["user"] = JSON.stringify({
			"name": name_attemp,
			"last_name": last_name_attemp,
			"username": username_attemp,
			"email" : email_attemp,
			"password" : password_attemp
		});
		localStorage["Space-User"]="User";
		return true;
	}

	error = username ? $("#signup-username") : $("#signup-email");

	error.attr("title", (username ? "Error, usuario ya existe" : "Error, este email ya esta en uso"));
	error.parent().addClass("error-tooltip");
	error.addClass("has-error");
	$('[data-toggle=tooltip]').tooltip({trigger: 'focus'});
	return false;
}

function lost_password(form){
	var email_attemp = form.email.value;
	var error;
	var users = JSON.parse(sessionStorage["users"]);
	var email = queryUsers(email_attemp, "email", users);

	if(email)
		return true;

	error = $("#reset-password-email");

	error.attr("title", "Error, este email no se encuentra registrado");
	error.parent().addClass("error-tooltip");
	error.addClass("has-error");
	$('[data-toggle=tooltip]').tooltip({trigger: 'focus'});
	return false;
}

function new_pastie(form_new_pastie){
	var cod = randomString();
	var pastie_text = form_new_pastie.text_pastie.value;
	var pastie_title = form_new_pastie.title_pastie.value;
	var data = {
		"codigo" : cod,
		"texto" : pastie_text,
		"titulo" : pastie_title
	};
	data =	JSON.stringify(data);
	localStorage["Data-Pastie"] = data;
	return true;
}
function show_space_user(){
	$("#new_pastie").css("display","block");
	$("#logout").css("display","block");
	$("#profile").css("display","block");
	$("#sign-in").css("display","none");
	$("#sign-up").css("display","none");
}

function hide_space_user(){
	$("#new_pastie").css("display","none");
	$("#logout").css("display","none");
	$("#profile").css("display","none");
	$("#sign-in").css("display","block");
	$("#sign-up").css("display","block");
	localStorage["Space-User"]="Guest";

}
function check_space(){
	if(localStorage["Space-User"]== "User") //Espacio de Usuario por lo que se ve en la barra Perfil y Cerrar Sesion
		show_space_user();
	else  //Espacio de Usuario no Registrado por lo que se ve en la barra Registrar y Iniciar Sesion
		hide_space_user();
	if(localStorage["message-success"]){
		show_alert(localStorage["message-success"]);
		localStorage.removeItem("message-success");
	}
}
function log_out(){
	localStorage["Space-User"] = "Guest";
}
function cargarpastie(){
	var data = JSON.parse(localStorage["Data-Pastie"]);
	var identification= data['titulo']+" #"+data['codigo'];
	$("#id-pastie").append(identification);
	$("#text-pastie").append(data['texto']);
	$("#text-pastie").attr('disabled','disabled');
}
function randomString(){
    var letters = "abcdefghijklmnopqrstuvwxyz1234567890"
    var str = ''; //Cadena resultante
    for(i=0; i<7; ++i){
        str += letters[Math.floor((Math.random()*35) + 0)];
    }
    return str;
}

function show_alert(type){
	console.log("algo");
	var title="";
	var content="";
	switch(type){
		case "0":
			title="<h4>Usuario Registrado Exitosamente</h4>";
			content="<p>Bienvenido a MyPastie!</p>";
		break;
		case "1":
			title="<h4>Sesion iniciada Exitosamente</h4>";
			content="<p>Bienvenido de nuevo a MyPastie</p>";
		break;
		case "2":
			title="<h4>Contraseña cambiada Exitosamente</h4>";
			content="<p>La nueva contraseña de su cuenta MyPastie, se envió a su correo registrado</p>";
		break;
	}
	$('#title-success').append(title);
	$('#body-success').append(content);
	$('#modal_information_success').modal({
		show: true,
		keyboard: false,
		backdrop: 'static'
	});
}
