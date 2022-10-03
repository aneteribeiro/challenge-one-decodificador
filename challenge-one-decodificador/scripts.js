
const resultado = document.querySelector('#texto-saida');
const inputTexto = document.querySelector('#texto-entrada');

function btnCodificador() {
    var textoCriptografado = codificar(inputTexto.value);
    document.body.classList.add('ativo');
    resultado.innerHTML = textoCriptografado; 

    if(inputTexto.value == ""){ 
        document.body.classList.remove('ativo');
    }
}

function btnDecodificador() {
    var textoDescriptografado = decodificar(inputTexto.value);
    document.body.classList.add('ativo');
    resultado.innerHTML = textoDescriptografado;

    if(inputTexto.value == ""){
        document.body.classList.remove('ativo');
    }
}

function codificar(stringCodigicada) {

    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringCodigicada = stringCodigicada.toLowerCase(); 

    for(var i = 0; i < matrizCodigo.length; i++) {
        if(stringCodigicada.includes(matrizCodigo[i][0])) { 
            stringCodigicada = stringCodigicada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringCodigicada;
}

function copiarTexto() {
    navigator.clipboard.writeText(resultado.value);
}

function decodificar(stringDecodigicada) {

    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDecodigicada = stringDecodigicada.toLowerCase();

    for(var i = 0; i < matrizCodigo.length; i++) {
        if(stringDecodigicada.includes(matrizCodigo[i][1])) {  
            stringDecodigicada = stringDecodigicada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDecodigicada;
}