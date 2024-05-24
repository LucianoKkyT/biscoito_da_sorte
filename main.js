   function handleClick(img) {
    // Seleciona a imagem clicada
    const imgElement = img;

    // Adiciona a classe 'shake' para iniciar a animação
    imgElement.classList.add('shake');

    // Adiciona um ouvinte de eventos para detectar o término da animação
    imgElement.addEventListener('animationend', () => {
        // Quando a animação terminar, troca as telas
        document.querySelector('.screen1').classList.add('hide');
        document.querySelector('.screen2').classList.remove('hide');
        
        // Remove a classe 'shake' para que a animação possa ser repetida
        imgElement.classList.remove('shake');

        // Seleciona as imagens da screen2
        const luckMessage = document.querySelector('.luckMessage');
        const brokenBiscuit = document.querySelector('.brokenBiscuit');

        // Adiciona a classe 'emerge' para iniciar a animação
        luckMessage.classList.add('emerge');
    }, { once: true });
    
}

function backInit() {
    // Inverte a troca de tela para voltar à tela inicial
    document.querySelector('.screen2').classList.add('hide');
    document.querySelector('.screen1').classList.remove('hide');

    
    // Reseta a animação
    const luckMessage = document.querySelector('.luckMessage');
    luckMessage.classList.remove('emerge');
}


 /*
function handleClick(img) {
    // Seleciona a imagem clicada
    const imgElement = img;

    // Adiciona a classe 'shake' para iniciar a animação
    imgElement.classList.add('shake');

    // Adiciona o evento de finalização da animação 'shake'
    imgElement.addEventListener('animationend', () => {
        // Seleciona as telas
        const screen1 = document.querySelector('.screen1');
        const screen2 = document.querySelector('.screen2');

        // Esconde a screen1 e mostra a screen2
        screen1.classList.add('hide');
        screen2.classList.remove('hide');

        // Seleciona a imagem 'luckMessage' e adiciona a animação 'emerge'
        const luckMessage = document.querySelector('.luckMessage');
        luckMessage.classList.add('emerge');
    }, { once: true });
}

function backInit() {
    // Volta para a tela inicial
    const screen1 = document.querySelector('.screen1');
    const screen2 = document.querySelector('.screen2');

    screen2.classList.add('hide');
    screen1.classList.remove('hide');

    // Remove a animação 'shake' da imagem
    const imgElement = document.querySelector('.shake-img');
    imgElement.classList.remove('shake');

    // Remove a animação 'emerge' da 'luckMessage' para que possa ser reutilizada
    const luckMessage = document.querySelector('.luckMessage');
    luckMessage.classList.remove('emerge');
}

*/

















































// Código para fazer o biscoito da sorte tremer
document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.screen1 .shake-img');

    if (img) {
        img.addEventListener('click', () => {
            img.classList.add('shake');

            // Remove a classe após a animação para que possa ser reutilizada
            img.addEventListener('animationend', () => {
                img.classList.remove('shake');
            }, { once: true });
        });
    } else {
        console.error('Element with class .shake-img not found.');
    }
});

/*
Explicação Detalhada
1. document.addEventListener('DOMContentLoaded', () => { ... });
Este evento é acionado quando o documento HTML inicial foi completamente carregado e analisado, sem aguardar pelo carregamento completo de folhas de estilo, imagens e subframes. Colocar o código dentro deste listener garante que todo o DOM esteja pronto antes de qualquer manipulação.

2. const img = document.querySelector('.screen1 .shake-img');
Aqui, você seleciona o elemento de imagem que está dentro da div com a classe .screen1 e que possui a classe .shake-img. document.querySelector retorna o primeiro elemento que corresponde ao seletor CSS especificado.

3. if (img) { ... } else { ... }
Esta é uma verificação para garantir que o elemento foi encontrado. Se img não for null, o código dentro do if será executado. Caso contrário, será exibida uma mensagem de erro no console.

4. img.addEventListener('click', () => { ... });
Adiciona um ouvinte de eventos (event listener) ao elemento img que responde ao evento de clique. Quando a imagem é clicada, a função fornecida é executada.

5. img.classList.add('shake');
Esta linha adiciona a classe shake ao elemento img. Isso aplica a animação de tremer definida no CSS.

6. img.addEventListener('animationend', () => { ... }, { once: true });
Adiciona um ouvinte de eventos para o evento animationend, que é acionado quando a animação CSS termina. A opção { once: true } faz com que este listener seja removido após ser chamado uma vez.

7. img.classList.remove('shake');
Quando a animação termina, esta linha remove a classe shake do elemento img. Isso permite que a classe seja adicionada novamente em futuros cliques, reiniciando a animação.

Resumo
O fluxo do código é:

Aguarda o carregamento completo do DOM.
Seleciona a imagem específica dentro da .screen1 com a classe .shake-img.
Verifica se a imagem foi encontrada.
Adiciona um listener para o evento de clique na imagem.
Quando a imagem é clicada, adiciona a classe shake para aplicar a animação.
Adiciona um listener para remover a classe shake quando a animação termina, garantindo que a animação possa ser repetida em cliques futuros.

------------------------------------------------------------------------------------------------------------------------------------------------------------------*/




