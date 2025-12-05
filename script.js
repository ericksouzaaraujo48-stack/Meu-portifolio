/* === 1. EFEITO MATRIX (Chuva de Código) === */
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ef233c"; // Cor Vermelha
    ctx.font = fontSize + "px 'Fira Code'";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

/* === 2. TEXTO DIGITADO (Typed.js) === */
new Typed('.typing-effect', {
    strings: ['Desenvolvedor Back-end.', 'Apaixonado por Java.', 'Focado em Performance.'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

/* === 3. CURSOR SETA & MAGNETISMO === */
const cursor = document.getElementById('custom-cursor');
const magneticElements = document.querySelectorAll('.btn, .card, .logo, nav a, .hack-btn, .profile-pic');

// Move a seta
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Clique
document.addEventListener('mousedown', () => cursor.classList.add('click-anim'));
document.addEventListener('mouseup', () => cursor.classList.remove('click-anim'));

// Efeito Magnético nos botões e foto
magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        el.style.transform = `translate(${deltaX * 0.3}px, ${deltaY * 0.3}px)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
    });
});