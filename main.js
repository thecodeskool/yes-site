document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landing-page');
    const questionPage = document.getElementById('question-page');
    const responsePage = document.getElementById('response-page');
    const openSiteBtn = document.getElementById('open-site-btn');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    // Transition from Landing to Question
    openSiteBtn.addEventListener('click', () => {
        landingPage.classList.remove('active');
        questionPage.classList.add('active');
    });

    // "No" Button Logic - Move on hover to avoid clicks
    let noBtnX = 0;
    let noBtnY = 0;
    
    noBtn.addEventListener('mouseenter', () => {
        // Move the button far enough to escape the cursor
        const moveAmount = 150; // pixels to move each time
        
        // Random direction
        const angle = Math.random() * Math.PI * 2;
        const deltaX = Math.cos(angle) * moveAmount;
        const deltaY = Math.sin(angle) * moveAmount;
        
        // Update position
        noBtnX += deltaX;
        noBtnY += deltaY;
        
        // Limit the total movement from original position to stay on screen
        const maxDistance = 250;
        const distance = Math.sqrt(noBtnX * noBtnX + noBtnY * noBtnY);
        
        if (distance > maxDistance) {
            // Scale back to max distance
            const scale = maxDistance / distance;
            noBtnX *= scale;
            noBtnY *= scale;
        }
        
        // Apply transform with transition
        noBtn.style.transition = 'transform 0.3s ease';
        noBtn.style.transform = `translate(${noBtnX}px, ${noBtnY}px)`;
    });

    // Prevent clicking the No button
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        return false;
    });

    // "Yes" Button Logic
    yesBtn.addEventListener('click', () => {
        questionPage.classList.remove('active');
        responsePage.classList.add('active');
        createConfetti();
    });

    // Confetti Effect
    function createConfetti() {
        const colors = ['#ff4d6d', '#ff758f', '#ffccd5', '#ffffff'];
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = confetti.style.width;
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }
    }
});
