const PHONE_NUMBER = "918090090051"; // User's WhatsApp number

function sendToWhatsapp(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const school = document.getElementById('school').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const text = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*School:* ${school}%0A*Phone:* ${phone}%0A*Message:* ${message}`;

    const url = `https://wa.me/${PHONE_NUMBER}?text=${text}`;

    // Redirect to WhatsApp
    window.open(url, '_blank');
}

// Audio Intro & Robot Assistant Handling
document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('play-intro-btn');
    const audio = document.getElementById('site-intro');

    // Function to Toggle Audio
    function toggleAudio() {
        if (audio.paused) {
            audio.play().then(() => {
                if (playBtn) {
                    playBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Intro';
                    playBtn.classList.add('playing');
                }
            }).catch(e => console.log("Autoplay prevented:", e));
        } else {
            audio.pause();
            if (playBtn) {
                playBtn.innerHTML = '<i class="fas fa-volume-up"></i> Listen to Intro';
                playBtn.classList.remove('playing');
            }
        }
    }

    // Function to Toggle Audio
    function toggleAudio() {
        if (audio.paused) {
            audio.play().then(() => {
                if (playBtn) {
                    playBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Intro';
                    playBtn.classList.add('playing');
                }
            }).catch(e => console.log("Autoplay prevented:", e));
        } else {
            audio.pause();
            if (playBtn) {
                playBtn.innerHTML = '<i class="fas fa-volume-up"></i> Listen to Intro';
                playBtn.classList.remove('playing');
            }
        }
    }

    // Attempt Autoplay Function
    function attemptAutoPlay() {
        audio.play().then(() => {
            if (playBtn) {
                playBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Intro';
                playBtn.classList.add('playing');
            }
            // Remove global listeners if play successful
            document.removeEventListener('click', attemptAutoPlay);
            document.removeEventListener('scroll', attemptAutoPlay);
            document.removeEventListener('touchstart', attemptAutoPlay);
        }).catch(() => {
            console.log("Autoplay blocked - Waiting for interaction");
        });
    }

    // Auto-Play after 1.5s
    setTimeout(() => {
        attemptAutoPlay();
    }, 1500); // 1.5 Seconds Delay

    // Fallback: Trigger play on FIRST interaction (Click, Scroll, Touch)
    // This ensures it plays immediately when the user starts using the site
    document.addEventListener('click', attemptAutoPlay, { once: true });
    document.addEventListener('scroll', attemptAutoPlay, { once: true });
    document.addEventListener('touchstart', attemptAutoPlay, { once: true });

    // Sync Play Button
    if (playBtn && audio) {
        playBtn.addEventListener('click', toggleAudio);

        audio.addEventListener('ended', () => {
            if (playBtn) {
                playBtn.innerHTML = '<i class="fas fa-volume-up"></i> Listen to Intro';
                playBtn.classList.remove('playing');
            }
        });
    }

    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon between bars and times (X)
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when clicking a link on mobile
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
});
