console.log("Javascript carregado.");

function isNumberKey(evt)
  {
     var charCode = (evt.which) ? evt.which : keyCode
     if (charCode != 45  && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

     return true;
  }

function validaCP(cp) { 
    if(cp.length != 8 || cp.includes("-") == false || cp.charAt(0) == 0) {
        return false;
    }
    else {
        return true;
    }
 }

function validacao() {
    console.log("A iniciar validação do Código Postal.");
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";

    var cp = document.getElementById("cp_inserido").value;
    var resultado = validaCP(cp);

    if (resultado) {
        document.getElementById("success").style.display = "block";
    }
    else {
        document.getElementById("error").style.display = "block";
    }
}