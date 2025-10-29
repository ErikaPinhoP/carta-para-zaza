document.addEventListener("DOMContentLoaded", () => {
  const qrCode = document.getElementById("qrCode");
  const card = document.getElementById("card");
  const sticker = document.getElementById("sticker");
  const letter = document.getElementById("letter");
  const openBtn = document.getElementById("openBtn");
  const envelope = document.getElementById("envelope");
  
  // QR Code para revelar o cartão
  qrCode.addEventListener("click", () => {
    card.classList.add("active");
    qrCode.style.display = "none";
    document.querySelector(".qr-section h2").style.display = "none";
    document.querySelector(".qr-section p").style.display = "none";
    
    // Criar efeito de corações
    createHearts();
  });
  
  // Envelope para revelar o adesivo
  envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    sticker.style.display = "flex";
  });
  
  // Adesivo para revelar a carta
  sticker.addEventListener("click", () => {
    card.classList.add("open");
    sticker.style.display = "none";
    openBtn.style.display = "block";
  });
  
  // Botão para abrir a carta (redundante, mas mantido por segurança)
  openBtn.addEventListener("click", () => {
    card.classList.add("open");
    openBtn.style.display = "none";
  });
  
  // Função para criar efeito de corações
  function createHearts() {
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        document.body.appendChild(heart);
        
        // Posição aleatória
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight + 20;
        
        // Configuração inicial
        heart.style.left = `${startX}px`;
        heart.style.top = `${startY}px`;
        heart.style.opacity = '1';
        heart.style.transform = `rotate(45deg) scale(${Math.random() * 0.5 + 0.5})`;
        
        // Animação
        const animation = heart.animate([
          { 
            transform: `rotate(45deg) translate(0, 0) scale(${Math.random() * 0.5 + 0.5})`,
            opacity: 1
          },
          { 
            transform: `rotate(45deg) translate(${Math.random() * 100 - 50}px, -${window.innerHeight + 100}px) scale(0)`,
            opacity: 0
          }
        ], {
          duration: Math.random() * 3000 + 2000,
          easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });
        
        // Remover após animação
        animation.onfinish = () => {
          heart.remove();
        };
      }, i * 200);
    }
  }
});