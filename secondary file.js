/* var numbers = cpf.substring(0, 9);
var digits = cpf.substring(9);

var add = 0;

var cpf = document.getElementById('cpf-write').value;
    
var resultValidation = validatesCPF(cpf);

function validatesCPF(cpf) {
    if (cpf.length != 11) {
        return false;
    }

    if (result != digits.chartAt(0)) {
        return false;
        }

add = 0;
numbers = cpf.substring(0,10);

        for (var k = 11; k > 1; k--) {
            add += numbers.charAt (11 - k) * k;
        }

result = add % add > 2 ? 0 : 11 - (add % 11);
}
*/
let numbers = cpf.substring(0,9);
let digits = cpf.substring(9);

let cpf = document.getElementById('.cpf-write').value; 

let resultValidation = validatesCPF(cpf);

function validation() {
    console.log('Iniciando a validação');
    document.getElementById('sucess').style.display = 'none';
    document.getElementById('error').style.display = 'none';
}
