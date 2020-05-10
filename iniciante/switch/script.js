function numeroUsuario(){

	var x = parseInt(document.getElementById("numero").value);


	switch(x){
		case 1:
			alert("Número 1 digitado!");
			break;
		case 2:
			alert("Número 2 digitado!");
			break;
		case 3:
			alert("Número 3 digitado!");
			break;
		default:
			alert("Para prosseguir escolha uma opção valida!")

	}

}


//direto pelo prompt

// x = parseInt(prompt("Qual é o seu número?"));

// switch(x){
// 	case 1:
// 		alert("Número 1 digitado!");
// 		break;
// 	case 2:
// 		alert("Número 2 digitado!");
// 		break;
// 	case 3:
// 		alert("Número 3 digitado!");
// 		break;

// }


// function somar(){
// 	var campo1 = parseInt(document.getElementById("campo1").value);
// 	var campo2 = parseInt(document.getElementById("campo2").value);

// 	var soma = campo1 + campo2;

// 	alert(soma);
// }

