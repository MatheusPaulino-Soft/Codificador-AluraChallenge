const inputTextoEntrada = document.querySelector('.input-texto');
const nenhumaMensagem = document.querySelector('.nenhuma-mensagem');
const textoDesejaCriptografar = document.querySelector('.texto-deseja-criptografar');

inputTextoEntrada.addEventListener('input', function() {
  if (this.value !== '') {
    nenhumaMensagem.style.display = 'none';
    textoDesejaCriptografar.style.display = 'none';
  }
});

const inputTexto = document.querySelector('.input-texto');
const mensagem = document.querySelector('.mensagem')

function btnEncriptar() {
  if (inputTexto.value.trim() !== '') {
    const textoCriptografado = encriptar(inputTexto.value);
    mensagem.textContent = textoCriptografado;
  }
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i=0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptada;
}

function btnDesencriptar(){
  if (inputTexto.value.trim() !== '') {
  const textoDesencriptado = desencriptar(inputTexto.value)
  mensagem.value = textoDesencriptado
  }
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i=0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][0])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringDesencriptada;

}

function copiar() {
  const mensagemBox = document.querySelector('.mensagem-box');
  const mensagem = mensagemBox.querySelector('.mensagem');
  mensagem.select();
  document.execCommand('copy');
  alert('Conteúdo copiado para a área de transferência!');
}
