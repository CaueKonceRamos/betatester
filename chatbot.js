document.getElementById('chat-button').addEventListener('click', function() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const userMessage = e.target.value;
        if (userMessage.trim() !== '') {
            const chatMessages = document.getElementById('chat-messages');
            const userMessageDiv = document.createElement('div');
            userMessageDiv.style.marginBottom = '10px';
            userMessageDiv.style.maxWidth = '80%';
            userMessageDiv.style.backgroundColor = '#fff';
            userMessageDiv.style.padding = '8px';
            userMessageDiv.style.borderRadius = '10px';
            userMessageDiv.style.marginRight = 'auto';
            userMessageDiv.innerHTML = `<strong>Você:</strong><p>${userMessage}</p>`;
            chatMessages.appendChild(userMessageDiv);

            let botResponse = '';
            switch (userMessage) {
                case '1':
                    botResponse = 'Para agendar um atendimento, por favor, entre em contato conosco pelo telefone ou WhatsApp.<br><br>' +
                                  '<a href="https://api.whatsapp.com/send?phone=557132665533" target="_blank">WhatsApp Salvador</a><br>' +
                                  '<a href="https://api.whatsapp.com/send?phone=557536316441" target="_blank">WhatsApp SAJ</a>';
                    break;
                case '2':
                    botResponse = 'Nossos secretários estão disponíveis para ajudá-lo. Entre em contato pelo telefone.<br><br>' +
                                  '<a href="tel:557132665533">Telefone Salvador</a><br>' +
                                  '<a href="tel:557536316441">Telefone SAJ</a>';
                    break;
                case '3':
                    botResponse = '📞 Escritório SSA 📞<br>- (71) 3266-5533<br><br>📞 Escritório SAJ 📞<br>- (75) 3631-6441';
                    break;
                case '4':
                    botResponse = 'Confira nossos endereços no Google Maps:<br><br>' +
                                  '<a href="https://maps.app.goo.gl/brr36nD6MSuGDYQKA" target="_blank">Salvador</a><br>' +
                                  '<a href="https://maps.app.goo.gl/AMW2yZKLXDTexWVP6?g_st=ic" target="_blank">SAJ</a>';
                    break;
                default:
                    botResponse = 'Desculpe, não entendi. Por favor, escolha uma das opções: 1, 2, 3 ou 4.';
            }

            const botResponseDiv = document.createElement('div');
            botResponseDiv.style.marginBottom = '10px';
            botResponseDiv.style.maxWidth = '80%';
            botResponseDiv.style.backgroundColor = '#e0f7fa';
            botResponseDiv.style.padding = '8px';
            botResponseDiv.style.borderRadius = '10px';
            botResponseDiv.style.marginLeft = 'auto';
            botResponseDiv.innerHTML = `<strong>K.E.U:</strong><p>${botResponse}</p>`;
            chatMessages.appendChild(botResponseDiv);

            e.target.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }
}); 
