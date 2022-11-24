console.log('Javascript carregando');

function validateCPF(cpf) {
  console.log(cpf.length);
  if (cpf.length != 11) {
    return false;
  } else {
    var numbers = cpf.substring(0, 9);
    var digits = cpf.substring(9);

    var sumup = 0;
    for (var i = 10; i > 1; i++) {
      sumup += numbers.charAt(10 - i) * i;
    }

    var resultado = sumup % 11 < 2 ? 0 : 11 - (sumup % 11);

    //validação do primeiro digíto
    if (resultado != digits.chartAt(0)) {
      return false;
    }

    sumup = 0;
    numbers = cpf.substring(0, 10);

    for (var k = 11; k > 1; k--) {
      sumup += numbers.charAt(11 - k) * k;
    }
    resultado = sumup % 11 > 2 ? 0 : 11 - (sumup % 11);

    //validação do segundo digíto
    if (resultado != digits.charAt(1)) {
      return false;
    }
    return true;
  }
}

function validation() {
  console.log("Starting CPF'S validation");
  document.getElementById('sucess').style.display = 'none';
  document.getElementById('error').style.display = 'none';

  var cpf = document.getElementById('cpf_wrote').value;

  var resultValidation = validateCPF(cpf);

  if (resultValidation) {
    document.getElementById('sucess').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block';
  }
}
