const card = document.getElementById('card');
const envelope = document.getElementById('envelope');
const content = document.getElementById('content');

card.addEventListener('click', () => {
    envelope.classList.add('hidden');
    content.classList.remove('hidden');
});

function confettiEffect() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff758c', '#ff7eb3', '#ffffff']
    });
}