document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        document.getElementById('response').textContent = `Obrigado pelo feedback, ${name}!`;
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    } else {
        document.getElementById('response').textContent = 'Por favor, preencha todos os campos.';
    }
});
