function validar() {
	var valor = document.getElementById("numero").value;
	
	if (valor.length != 2) {
		document.getElementById("erro").classList.remove("erro");
		return false;
	}else{
		return true;
	}
}