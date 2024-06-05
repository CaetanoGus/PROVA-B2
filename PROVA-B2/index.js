document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const tabela = document.getElementById('dadosTabela').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        const nome = document.getElementById('nome').value;
        const matricula = document.getElementById('matricula').value;
        const nota1 = parseFloat(document.getElementById('nota1').value);
        const nota2 = parseFloat(document.getElementById('nota2').value);

        // Calcula a média
        const media = (nota1 + nota2) / 2;
        const situacao = media > 5 ? "Aprovado" : "Reprovado";

        // Cria uma nova linha na tabela
        const novaLinha = tabela.insertRow();

        // Cria e insere as células na nova linha
        const celulaNome = novaLinha.insertCell(0);
        const celulaMatricula = novaLinha.insertCell(1);
        const celulaNota1 = novaLinha.insertCell(2);
        const celulaNota2 = novaLinha.insertCell(3);
        const celulaMedia = novaLinha.insertCell(4);
        const celulaSituacao = novaLinha.insertCell(5);

        // Define o conteúdo das células
        celulaNome.textContent = nome;
        celulaMatricula.textContent = matricula;
        celulaNota1.textContent = nota1.toFixed(2);
        celulaNota2.textContent = nota2.toFixed(2);
        celulaMedia.textContent = media.toFixed(2);
        celulaSituacao.textContent = situacao;

        // Aplica a classe de estilo baseado na situação
        if (situacao === "Aprovado") {
            celulaSituacao.classList.add('aprovado');
        } else {
            celulaSituacao.classList.add('reprovado');
        }

        // Limpa os campos do formulário
        form.reset();
    });
});