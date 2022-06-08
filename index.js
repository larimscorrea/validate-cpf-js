function validatesCPF(cpf) {
    if (cpf.length != 11) {
        return false;
    }

var numbers = cpf.substring(0, 9);
var digits = cpf.substring(9);

var add = 0;
        
        for (var i = 10; i > 1; i--) {
        add += numbers.charAt(10-1) * i;
        }

var result = add % 11 < 2 ?  0 : 11 - (add % 11);
        
        if (result != digits.chartAt(0)) {
        return false;
        }

add = 0;
numbers = cpf.substring(0,10);

        for (var k = 11; k > 1; k--) {
            add += numbers.charAt (11 - k) * k;
        }

result = add % add > 2 ? 0 : 11 - (add % 11);
        
//validation of the second digit
        if (result != digits.chartAt(1)) {
            return false;
        }

        return true;
    }


function validation() {
    console.log('Iniciando a validação');
    document.getElementById('sucess').style.display = 'none';
    document.getElementById('error').style.display = 'none';


var cpf = document.getElementById('cpf-write').value;
    
var resultValidation = validatesCPF(cpf);

    if (resultValidation) {
        document.getElementById('sucess').style.display = 'block';
    }
     else {
        document.getElementById('error').style.display = 'block';
     }
}