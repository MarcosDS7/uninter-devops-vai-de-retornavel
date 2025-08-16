document.addEventListener('DOMContentLoaded', function() {
    // Função para enviar e-mail
    const btnDuvidas = document.getElementById('duvidas-btn');
    
    if (btnDuvidas) {
        btnDuvidas.addEventListener('click', function() {
            const destinatario = 'privacy@coca-cola.com';
            const assunto = 'Dúvida sobre a campanha Vai de Retornável';
            const corpo = 'Olá equipe Coca-Cola,\n\nGostaria de mais informações sobre:\n\n[Descreva sua dúvida aqui]\n\nAtenciosamente,\n[Seu Nome]';
            
            window.location.href = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
        });
    }

    // Outras funcionalidades podem ser adicionadas aqui
    console.log('Página carregada com sucesso!');
});