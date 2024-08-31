document.addEventListener('DOMContentLoaded', () => {
    // FAQ Toggle
    document.querySelectorAll('.faq-item h3').forEach(item => {
        item.addEventListener('click', () => {
            const faqItem = item.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // Hide Splash Screen after 3 seconds
    setTimeout(() => {
        const splashScreen = document.querySelector('.splash-screen');
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 500);
    }, 3000);

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav .nav-button').forEach(navLink => {
        navLink.addEventListener('click', event => {
            const href = navLink.getAttribute('href');
            const targetElement = document.querySelector(href);

            if (targetElement) {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('#navbar').offsetHeight, // Adjusting for fixed navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example Chatbot Initialization
    const chatbotElement = document.getElementById('chatbot');
    if (chatbotElement) {
        // Initialize or configure your chatbot here
        console.log('Chatbot is ready');
        // Example placeholder for chatbot setup
        chatbotElement.innerHTML = '<p>Chatbot will be integrated here.</p>';
    }
});

