const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');
const botaoEnviar = document.getElementById('btn-enviar');



function validarFormulario() {
    if (nome.value.trim() === '' || email.value.trim() === '' || mensagem.value.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    } else {
       alert('Obrigado(a) ' + nome.value + ', sua mensagem foi enviada com sucesso!');
    }
    
}
